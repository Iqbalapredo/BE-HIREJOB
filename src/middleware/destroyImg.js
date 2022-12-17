const fs = require('fs');
const userModel = require('../model/user.model');
const recruiterModel = require('../model/recruiter.model');
// const airlineModel = require("../model/portfolio.model");

module.exports = {
  destroyProfile: async (req, res, next) => {
    const id = req.params.id;

    const data = await userModel.UserById(id);
    if (data) {
      console.log(data.rows[0].photo);
      if (data.rows[0].photo) {
        const img = data.rows[0].photo;
        if (img !== 'default.png') {
          fs.unlink(`./public/${img}`, (err) => {
            if (err) {
              res.json({
                message: 'delete',
                error: err,
              });
            }
          });
        }
        next();
      } else {
        res.json('no profile picture');
      }
    } else {
      res.json('not found');
    }
  },

 
  destroyRecruiter: async (req, res, next) => {
    const id = req.params.id;

    const data = await recruiterModel.RecById(id);
    if (data) {
      if (data.rows[0].photo) {
        const img = data.rows[0].photo;
        if (img !== 'default.png') {
          fs.unlink(`./public/${img}`, (err) => {
            if (err) {
              res.json({
                message: 'delete failed',
                error: err,
              });
            }
          });
        }
        next();
      } else {
        res.json('There is no profile picture');
      }
    } else {
      res.json('portofoid_portofolio ID is not found');
    }
  },
};
