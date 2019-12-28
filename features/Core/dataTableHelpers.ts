/**
 * Formats a table with a single column to an array of strings
 * e.g.
 * | Ok      |
 * | Cancel  |
 * ->
 * [ "Ok", "Cancel" ]
 **/
export const dataTableToStrings = ({ rawTable: rows }): string[] => {
  if (rows[0].length !== 1) {
    throw new Error(
      `Object data table can only have 1 column; found ${rows[0].length}`
    );
  }

  return rows.map(x => x[0]);
};

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
export const dataTableToObject = ({
  rawTable: rows
}): { [key: string]: string } => {
  if (rows[0].length !== 2) {
    throw new Error(
      `Object data table can only have 2 columns; found ${rows[0].length}`
    );
  }

  return Object.fromEntries(rows);
};

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
