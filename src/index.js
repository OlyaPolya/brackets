module.exports = function check(str, matrix) {
  if (str == '') {
    return true;
  }

  if (str.length % 2 != 0) {
    return false;
  }

  let new_str;
  for (let i = 0; i < str.length-1; i++) {
    if (str[i+1] == get_opposite(str[i], matrix)) {
      new_str = str.substring(0,i) + str.substring(i+2);
      return true && check(new_str, matrix);
    }
  }
  return false;
}

function get_opposite(sym, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let pair = matrix[i];
    if (sym == pair [0]){
      return pair[1];
    }
  }
  return false;
}
