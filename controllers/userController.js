const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');


module.exports = {
    getUser(req, res) {
      User.find()
        .then(async (users) => {
          const studentObj = {
            users,
            headCount: await headCount(),
          };
          return res.json(userObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    }};