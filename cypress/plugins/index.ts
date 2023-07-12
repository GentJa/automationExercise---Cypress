import mysql from "mysql2";

export default function queryTestDb(query: string, config: { env: { db: any } }) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect from db as a Promise
  return new Promise<any[]>((resolve, reject) => {
    connection.query(query, (error: any, results: any[]) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    });
  });
}
export { queryTestDb };


// module.exports = (on: (arg0: string, arg1: { queryDb: (query: any) => Promise<unknown>; }) => void, config: { env: { db: any; }; }) => {
//     // Usage: cy.task('queryDb', query)
//     on("task", {
//       queryDb: (query: any) => {
//         return queryTestDb(query, config);
//       }
//     });
//   };

  