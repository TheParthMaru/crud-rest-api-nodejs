const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "apidb",
  password: "postgres",
  port: 5432,
});

const queries = {
  allUsers: "SELECT * FROM users ORDER BY userid",
};

const getUsers = (request, response) => {
  pool.query(queries.allUsers, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
