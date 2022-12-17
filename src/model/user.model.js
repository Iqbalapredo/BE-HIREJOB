const db = require('../config/db');

const userModel = {
  register: ({ name, email, password, phone, photo }) =>
    new Promise((resolve, reject) => {
      db.query(`INSERT INTO users (name, email, password, phone, photo) VALUES ('${name}', '${email}', '${password}', '${phone}', '${photo}')`, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    }),
  list: (sort, asc, limit, offset) =>
    new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users order by ${sort} ${asc} LIMIT ${limit} OFFSET ${offset}`, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    }),
  UserById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
			SELECT * FROM users WHERE id = ${id}`
      )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  UserByName: (name) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
		SELECT * FROM users WHERE lower(name) LIKE lower ('%${name}%')`
      )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateUser: (id, name, phone, job,  city, skil, instagram, github, gitlab, porto, photo, description, titleporto, link, type,  titlejob, company, datein, dateout, descriptionjob) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
			UPDATE users SET name = '${name}',  phone = '${phone}', job = '${job}', city = '${city}', skil = '${skil}', instagram = '${instagram}', github = '${github}', gitlab = '${gitlab}', porto = '${porto}', photo = '${photo}', description = '${description}', titleporto = '${titleporto}', link = '${link}', type = '${type}', titlejob = '${titlejob}', company ='${company}', datein = '${datein}', dateout = '${dateout}', descriptionjob = '${descriptionjob}' WHERE id = ${id}`
      )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  check: (email) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        SELECT * FROM users WHERE email = '${email}'
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
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
  			DELETE FROM users WHERE id = ${id}`
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

module.exports = userModel;
