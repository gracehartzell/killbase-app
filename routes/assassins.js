const express = require('express');
const router = express.Router();
// const path = require('path');
const knex = require('../db/knex');

router.get('/assassins', (req, res) => {
    knex('assassins')
    .then((assassins) => {
        res.render('assassins/assassins', {assassins})
    });
});

router.get('/assassins/:assassins_id', (req, res, next) => {
    knex('assassins')
      .where('assassins_id', req.params.assassins_id)
      .then((assassins) => {
        if (!assassins) {
          return next();
        }
        res.render('assassins/assassins', {assassins});
      })
      .catch((err) => {
        next(err);
      });
  });

// SORTING
router.get('/rating', (req, res, next) => {
  knex('assassins')
    .orderBy('rating', 'desc')
    .then((assassins) => {
      res.render('assassins/assassins', {assassins});
    });
});

router.get('/price', (req, res, next) => {
  knex('assassins')
    .orderBy('price', 'desc')
    .then((assassins) => {
      res.render('assassins/assassins', {assassins});
    });
});

router.get('/kills', (req, res, next) => {
  knex('assassins')
    .orderBy('kills', 'desc')
    .then((assassins) => {
      res.render('assassins/assassins', {assassins});
    });
});

router.get('/age', (req, res, next) => {
  knex('assassins')
    .orderBy('age', 'asc')
    .then((assassins) => {
      res.render('assassins/assassins', {assassins});
    });
});


// INDIVIDUAL'S PROFILE
router.get('/assassinProfile/:assassins_id', (req, res, next) => {
  knex('assassins')
    .where('assassins_id', req.params.assassins_id)
    .then((assassins) => {
      if (!assassins) {
        return next();
      }
      res.render('assassins/assassinProfile', {assassins});
    })
    .catch((err) => {
      next(err);
    });
});

// NEW ASSASSIN
router.get('/newAssassin', (req, res) => {
    res.render('assassins/newAssassin', { });
});

router.post('/assassins', (req, res, next) => {
    knex('assassins')
      .insert({   photo: req.body.photo || 'https://media1.tenor.com/images/511247037018cc91bd3a446bf54ce93c/tenor.gif?itemid=9486432',
        full_name: req.body.full_name || 'Unknown', 
        code_name: req.body.code_name || 'Unknown', 
        weapon: req.body.weapon || 'Unknown', 
        contact_info: req.body.contact_info, 
        age: req.body.age || 0, 
        price: req.body.price, 
        rating: req.body.rating, 
        kills: req.body.kills, 
        open_contracts: req.body.open_contracts})
      .then(() => {
        knex('assassins')
          .orderBy('assassins_id')
          .then(() => {
            res.redirect(302, '/assassins');
        });
      })
      .catch((err) => {
      next(err);
      });
});


router.get('/editAssassin/:assassins_id', function(req, res, next) {  
  knex('assassins').where('assassins_id',req.params.assassins_id).then((assassins)=>{
    if(!assassins) {
      return next();
    }
  res.render('assassins/editAssassin',{assassins}); 
})
  .catch((err)=>{
    next(err);
  })
});  

router.patch('/editAssassin/:assassins_id',(req,res, next)=>{
  knex('assassins').where('assassins_id',req.params.assassins_id).then((assassins)=>{
    
  knex('assassins')
    .update({ photo: req.body.photo, 
      full_name : req.body.full_name, 
      code_names : req.body.code_names, 
      weapon : req.body.weapon, 
      contact_info: req.body.contact_info, 
      age : req.body.age, 
      price: req.body.price, 
      rating: req.body.rating, 
      kills: req.body.kills}, '*')
    .where('assassins_id',req.params.assassins_id)
    .then(() => {
      res.redirect(302, '/assassins');
    });
  })
    .catch((err)=>{
      next(err);
    })
});  

router.delete('/deleteAssassins/:assassins_id', (req, res, next) => {
  let row;
  knex('assassins')
    .where('assassins_id', req.params.assassins_id)
    .then((assassins) => {
      row = assassins;
      return knex('assassins')
        .del()
        .where('assassins_id', req.params.assassins_id);
    })
    .then(() => {
      delete row.assassins_id;
      knex('assassins')
        .orderBy('assassins_id')
        .then(() => {
          res.redirect(302, '/assassins');
        });
    })
    .catch((err)=>{
      next(err);
    });
  });


module.exports = router;