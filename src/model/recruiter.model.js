const db = require("../config/db");

const recruiterModel = {
  All: (limit, offset) =>
    new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM recruiters LIMIT ${limit} OFFSET ${offset}`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    }),
  register: ({
    name,
    email,
    company,
    department,
    phone,
    password,
    level,
    photo,
  }) =>
    new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO recruiters (name, email, company, department, phone, password, level, photo) VALUES ('${name}', '${email}', '${company}', '${department}', '${phone}', '${password}', ${level}, '${photo}')`,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    }),
  check: (email) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        SELECT * FROM recruiters WHERE email = '${email}'
        `
      )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

    RecById: (id) => new Promise((resolve, reject) => {
      db.query(`SELECT * FROM recruiters WHERE id = ${id}`, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    }),
    RecByName: (company) => new Promise((resolve, reject) => {
      db.query(`SELECT * FROM recruiters WHERE lower(company) LIKE lower ('${company}')`, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    }),
    delete: (id) => new Promise((resolve, reject) => {
      db.query(`DELETE FROM recruiters WHERE id = ${id}`, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    }),
    update: (
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
      ) =>{
        return new Promise((resolve, reject) => {
          db.query(
            `
            UPDATE recruiters SET name = '${name}', email = '${email}', company = '${company}', department = '${department}', phone = '${phone}', business = '${business}', city = '${city}', linkedin = '${linkedin}', instagram = '${instagram}', photo = '${photo}', description = '${description}' WHERE id = ${id}
            `
          )
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
        });
      },
  
};
module.exports = recruiterModel;
