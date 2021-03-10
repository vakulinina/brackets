module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const map = {};

  bracketsConfig.forEach(([open, close]) => {
    map[open] = close;
  })

  for (let bracket of str) {
    if (!map[bracket]) {
      if (bracket !== map[stack.pop()]) return false;
    } else {
      if (map[bracket] === bracket) {
        if (stack.includes(bracket)) {
          if (bracket !== map[stack.pop()]) return false;
        } else {
          stack.push(bracket);
        }
      } else {
        stack.push(bracket);
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
}
