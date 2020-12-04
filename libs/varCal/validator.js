const isNumber = (val) => {
  if (val === "") {
    return false;
  }

  if (isNaN(Number(val))) {
    return false;
  }

  return true;
};

module.exports = {
  isNumber
};
