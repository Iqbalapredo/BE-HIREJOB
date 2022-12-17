const userModel = require('../model/user.model');
const { success, failed, successWithToken } = require('../helper/response');

const bcrypt = require('bcrypt');
const jwtToken = require('../helper/generateJWT');

const userController = {
  AllId: (req, res) => {
    const id = req.params.id;
    userModel
      .UserById(id)
      .then((result) => {
        success(res, result.rows, 'success', 'get user success');
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'get user failed');
      });
  },

  All: (req, res) => {
    const sort = req.query.sort;
    const asc = req.query.asc;
    const limit = parseInt(req.query.limit) || 3;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;

    userModel
      .list(sort, asc, limit, offset)
      .then((result) => {
        success(res, result.rows, 'success', 'success get data');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed get data');
      });
  },

  UserByName: (req, res) => {
    const name = req.params.name;
    userModel
      .UserByName(name)
      .then((result) => {
        success(res, result.rows, 'success');
      })
      .catch((err) => {
        failed(res, err, 'failed');
      });
  },

  register: (req, res) => {
    try {
      const { name, email, phone, password } = req.body;
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          failed(res, err.message, 'failed');
        }

        const data = {
          name,
          email,
          phone,
          password: hash,
          photo: req.file ? req.file.filename : 'default.png',
        };

        userModel
          .register(data)
          .then((result) => {
            success(res, result, 'success');
          })
          .catch((err) => {
            failed(res, err.message, 'failed');
          });
      });
    } catch (err) {
      failed(res, err.message, 'failed');
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    userModel
      .check(email)
      .then((result) => {
        const user = result.rows[0];
        if (result.rowCount > 0) {
          bcrypt.compare(password, result.rows[0].password).then(async (result) => {
            if (result) {
              const token = await jwtToken({
                email: user.email,
              });
              successWithToken(
                res,
                {
                  token,
                  data: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    phone: user.phone,
                    photo: user.photo,
                    job: user.job,
                    title: user.title,
                    city: user.city,
                    skil: user.skil,
                    instagram: user.instagram,
                    github: user.github,
                    gitlab: user.gitlab,
                    porto: user.porto,
                    description: user.description,
                    titleporto: user.titleporto,
                    link: user.link,
                    type: user.type,
                 
                    titlejob: user.titlejob,
                    company: user.company,
                    datein: user.datein,
                    dateout: user.dateout,
          
                  },
                },
                token,
                'success'
              );
            } else {
              failed(res, null, 'failed');
            }
          });
        } else {
          failed(res, null, 'failed');
        }
      })
      .catch((err) => {
        failed(res, err.message, 'failed');
      });
  },
  update: (req, res) => {
    const id = req.params.id;
    const { name, phone, job, city, skil, instagram, github, gitlab, porto, description, titleporto, link, type,  titlejob, company, datein, dateout, descriptionjob} = req.body;
    const photo = req.file ? req.file.filename : 'default.png';
   
    userModel
      .updateUser(id, name, phone, job, city, skil, instagram, github, gitlab, porto, photo, description, titleporto, link, type, titlejob, company, datein, dateout, descriptionjob)
      .then((result) => {
        success(res, result.rowCount, 'success');
      })
      .catch((err) => {
        failed(res, err.message, 'failed');
      });
  },

  deleted: (req, res) => {
    const id = req.params.id;

    userModel
      .delete(id)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  },
};

module.exports = userController;
