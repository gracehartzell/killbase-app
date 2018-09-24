const express = require('express');
const router = express.Router();
// const path = require('path');
const knex = require('../db/knex');

router.get('/contracts', (req, res) => {
    knex('contracts')
    .then((contracts) => {
        res.render('contracts/contracts', {contracts})
    });
});

router.get('/contracts/:contract_id', (req, res, next) => {
    knex('contracts')
      .where('contract_id', req.params.contract_id)
      .then((contracts) => {
        if (!contracts) {
          return next();
        }
        res.render('contracts/contracts', {contracts});
      })
      .catch((err) => {
        next(err);
      });
  });

// INDIVIDUAL PROFILE
router.get('/contractProfile/:contract_id', (req, res, next) => {
  knex('contracts')
    .where('contract_id', req.params.contract_id)
    .then((contracts) => {
      if (!contracts) {
        return next();
      }
      res.render('contracts/contractProfile', {contracts})
    })
    .catch((err) => {
      next(err);
    });
});

// NEW CONTRACT
router.get('/newContract', (req, res) => {
    res.render('contracts/newContract', { });
});

router.post('/contracts', (req, res, next) => {
    knex('contracts')
      .insert({ 
          target_name: req.body.target_name,
          target_location: req.body.target_location,
          target_photo: req.body.target_photo,
          target_security: req.body.target_security || null,
          client_name: req.body.client_name,
          budget: req.body.budget
        })
      .then(() => {
        knex('contracts')
          .orderBy('contract_id')
          .then(() => {
            res.redirect(302, '/contracts');
        });
      })
      .catch((err) => {
      next(err);
      });
});

// EDIT CONTRACTS
router.get('/editContract/:contract_id', function(req, res, next) {  
  knex('contracts').where('contract_id',req.params.contract_id).then((contracts)=>{
    if(!contracts) {
      return next();
    }
        res.render('contracts/editContract',{contracts}); 
  })
    .catch((err)=>{
    next(err);
    })
});  

router.patch('/editContract/:contract_id',(req,res, next)=>{
  knex('contracts')
    .where('contract_id',req.params.contract_id)
    .then((contracts) => {

  knex('contracts')
    .update({ target_name: req.body.target_name,
        target_location: req.body.target_location,
        target_photo: req.body.target_photo,
        target_security: req.body.target_security,
        client_name: req.body.client_name || 'Anonymous',
        budget: req.body.budget,
        completed: req.body.completed}, '*')
    .where('contract_id',req.params.contract_id)
    .then(() => {
      res.redirect(302, '/contracts');
    });
  })
    .catch((err)=>{
      next(err);
    })
});  

router.post('/deleteContract/:contract_id', (req, res, next) => {
  let row;
  knex('contracts')
    .where('contract_id', req.params.contract_id)
    .then((contracts) => {
      row = contracts;
      return knex('contracts')
        .del()
        .where('contract_id', req.params.contract_id);
    })
    .then(() => {
      delete row.contract_id;
      knex('contracts')
        .orderBy('contract_id')
        .then(() => {
          res.redirect(302, '/contracts');
        });
    })
    .catch((err)=>{
      next(err);
    });
  });

router.get('/completedContracts', (req, res, next) => {
  knex('contracts')
    .orderBy('contract_id')
    .then((contracts) => {
      res.render('contracts/completedContracts', {contracts});
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/activeContracts', (req, res, next) => {
  knex('contracts')
    .orderBy('contract_id')
    .then((contracts) => {
      res.render('contracts/activeContracts', {contracts});
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});


module.exports = router;