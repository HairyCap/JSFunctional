const sortBy = key => {
  return (a, b) => {
    let result = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    return result;
  };
};

module.exports = sortBy;
