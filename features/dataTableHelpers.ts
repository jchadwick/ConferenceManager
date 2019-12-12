/**
 * Formats a key/value table to a single object
 * e.g.
 * | name   | Jess                   |
 * | email  | jesschadwick@gmail.com |
 * ->
 * {
 *  name: "Jess",
 *  email: "jesschadwick@gmail.com"
 * }
 **/
export const dataTableToObject = ({ rawTable: rows }) =>
  rows.reduce((val, row) => {
    val[row[0]] = row[1];
    return val;
  }, {});

/**
 * Formats a table with headers to an array of objects
 * e.g.
 * | name   | email                  |
 * | Jess   | jesschadwick@gmail.com |
 * ->
 * [
 *  {
 *    name: "Jess",
 *    email: "jesschadwick@gmail.com"
 *  }
 * ]
 **/
export const dataTableToArray = ({ rawTable: [headers, ...rows] }) =>
  rows.map(row =>
    headers.reduce((val, header, i) => {
      val[header] = row[i];
      return val;
    }, {})
  );
