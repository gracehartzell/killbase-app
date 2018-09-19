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
  console.log(req.body, 'LABEL');

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

router.get('/newAssassin', (req, res) => {
    res.render('assassins/newAssassin', { });
});

router.post('/assassins', (req, res, next) => {
  // if (!POST) {
  //   res.redirect('assassins/assassins');
  // }
  // else {
    knex('assassins')
      .insert({   photo: req.body.photo,
        full_name: req.body.full_name, 
        code_name: req.body.code_name, 
        weapon: req.body.weapon, 
        contact_info: req.body.contact_info, 
        age: req.body.age, 
        price: req.body.price, 
        rating: req.body.rating, 
        kills: req.body.kills, 
        open_contracts: req.body.open_contracts})
      .then(() => {
        knex('assassins')
          .orderBy('assassins_id')
          .then((assassins) => {
            // res.redirect('assassins/assassins');
            res.render('assassins/assassins', {assassins});
        });
      })
      .catch((err) => {
      next(err);
      });
    // }
    
});


// router.patch('/assassins/:assassins_id', (req, res, next) => {
//     knex('assassins')
//     .where('assassins_id', req.params.assassins_id)
//     .first()
//     .then((assassins) => {
//       if (!assassins) {
//         return next();
//       }
//       return knex('assassins')
//         .update({ name: req.body.name, city: req.body.city }, '*')
//         .where('assassins_id', req.params.assassins_id);
//     })
//     .then((assassins) => {
//       res.send(assassins);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

router.delete('/assassins/:assassins_id', (req, res, next) => {
  let assassins;

  knex('assassins')
    .where('assassins_id', req.params.assassins_id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }

      assassins = row;

      return knex('assassins')
        .del()
        .where('assassins_id', req.params.assassins_id);
    })
    .then(() => {
      delete assassins.assassins_id;
      res.send(assassins.assassins_id);
    });
  });


module.exports = router;