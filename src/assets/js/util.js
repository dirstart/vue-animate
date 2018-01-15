const is_empty = (name, psd) => {
  if (name.length === 0 || psd.length === 0
    || name.match(/^\s+$/) || psd.match(/^\s+$/)) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  isEmpty: is_empty
};
