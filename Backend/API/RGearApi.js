module.exports = {
  checkDuplicateStudent: (connection, studentId, callback) => {
    connection.query(`SELECT EXISTS(SELECT * FROM studentId where id=${studentId})`,
      (err, results) => {
        if (err) return callback({
          "err": err
        });
        return callback({
          "success": results[0]
        });
      }
    );
  },

  validateStudent: (connection, studentId, callback) => {
    connection.query(`SELECT EXISTS(SELECT * FROM student WHERE StudentId=${studentId})`,
      (err, results) => {
        if (err) return callback({
          "err": err
        });
        return callback({
          "success": results[0]
        });
      }
    );
  },

  insertStudentId: (connection, studentId, callback) => {
    connection.query(`insert into studentId (id) values (${studentId})`,
      (err, results) => {
        if (err) return callback({
          "err": err
        });
        return callback({
          "success": results
        });
      }
    );
  },

  getNumberOfSweaters: (connection, callback) => {
    connection.query(`SELECT COUNT(*) from studentId`,
      (err, results) => {
        if (err) return callback({
          "err": err
        });
        return callback({
          "success": results[0]
        });
      }
    );
  }
};