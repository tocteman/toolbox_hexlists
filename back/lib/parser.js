const checkRow = arr => {
  if (arr.length !== 4) {
    return false
  }
  const hexRegExp = new RegExp('^[a-zA-Z0-9]{32}$');
  if ((typeof parseInt(arr[2])) !== "number") {
    return false
  }
  if (!hexRegExp.test(arr[3])) {
    return false
  }
  return true
}

const rowToLine = row => {
  return {
    text: row[1],
    number: parseInt(row[2]),
    hex: row[3]
  }
}

const parseCsv = text => {
  const rows = text
        .split("\n") // divide by lines
        .slice(1) // remove header row
        .map(x => x.split(",")) // string -> array
        .filter(x => checkRow(x)) // row integrity

  if (rows.length < 1) { return null }

  return {
    file: rows[0][0],
    lines: rows.map(x => rowToLine(x))
  }
}

module.exports = { parseCsv }
