const recruiterModel = require("../model/recruiter.model");
const { success, failed, successWithToken } = require("../helper/response");

const bcrypt = require("bcrypt");
const jwtToken = require("../helper/generateJWT");

const recruiterController = {
  RecId: (req, res) => {
    const id = req.params.id;
    recruiterModel
      .RecById(id)
      .then((result) => {
        success(res, result.rows, "success");
      })
      .catch((err) => {
        failed(res, err.message, "failed");
      });
  },

  All: (req, res) => {
    const limit = parseInt(req.query.limit) || 3;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    recruiterModel
      .All(limit, offset)
      .then((result) => {
        success(res, result.rows, "success");
      })
      .catch((err) => {
        failed(res, err, "failed");
      });
  },

  RecByName: (req, res) => {
    const company = req.params.company;
    recruiterModel
      .RecByName(company)
      .then((result) => {
        success(res, result.rows, "success");
      })
      .catch((err) => {
        failed(res, err, "failed");
      });
  },

 
  register: (req, res) => {
    try {
      const { name, email, company, department, phone, password } =
        req.body;
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          failed(res, err.message, "failed");
        }

        const data = {
          name,
          email,
          company,
          department,
          phone,
          password: hash,
          level: 0,
          photo: req.file ? req.file.filename : "default.png",
        };

        recruiterModel
          .register(data)
          .then((result) => {
            success(res, result, "success");
          })
          .catch((err) => {
            failed(res, err.message, "failed");
          });
      });
    } catch (err) {
      failed(res, err.message, "failed");
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    recruiterModel
      .check(email)
      .then((result) => {
        const recruiter = result.rows[0];
        if (result.rowCount > 0) {
          bcrypt
            .compare(password, result.rows[0].password)
            .then(async (result) => {
              if (result) {
                const token = await jwtToken({
                  email: recruiter.email,
                  level: recruiter.level,
                });
                successWithToken(
                  res,
                  {
                    token,
                    data: {
                      id: recruiter.id,
                      email: recruiter.email,
                      name: recruiter.name,
                      company: recruiter.company,
                      department: recruiter.department,
                      phone: recruiter.phone,
                      business: recruiter.business,
                      city: recruiter.city,
                      linkedin: recruiter.linkedin,
                      instagram: recruiter.instagram,
                      photo: recruiter.photo,
                      description: recruiter.description,
                      level: recruiter.level,
                    },
                  },
                  token,
                  "success"
                );
              } else {
                failed(res, null, "failed");
              }
            });
        } else {
          failed(res, null, "failed");
        }
      })
      .catch((err) => {
        failed(res, err.message, "failed");
      });
  },
  update: (req, res) => {
    const id = req.params.id;
    const {
      name,
      email,
      company,
      department,
      phone,
      business,
      city,
      linkedin,
      instagram,
      description,
    } = req.body;
    const photo = req.file ? req.file.filename : "default.png";
    recruiterModel
      .update(
        id,
        name,
        email,
        company,
        department,
        phone,
        business,
        city,
        linkedin,
        instagram,
        photo,
        description
      )
      .then((result) => {
        success(res, result.rowCount, "success");
      })
      .catch((err) => {
        failed(res, err.message, "failed");
      });
  },

  deleted: (req, res) => {
    const id = req.params.id;

    recruiterModel
      .delete(id)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  },
};

module.exports = recruiterController;
