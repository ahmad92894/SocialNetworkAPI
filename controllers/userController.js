const { User, Thought} = require('../models');


module.exports = {
    getUsers(req, res) {
      User.find()
        .then((user) => res.json(user))
        
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    }};