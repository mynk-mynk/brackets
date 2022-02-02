module.exports = function check(str, bracketsConfig) {
  let stack = [];

  console.log(str);

  for (let i = 0; i < str.length; i++) {

    for (let el of bracketsConfig) {
      
      if (str[i] === el[1]) {
        
        if (el[0] === el[1]) {
          stack[stack.length - 1] === el[1] ? stack.pop(str[i]) : stack.push(str[i]);

        } else if (stack.length === 0) {
            return false;

        } else if (stack[stack.length - 1] === el[0]) {
          stack.pop(stack[stack.length - 1]);
        }
      } 
      
      if (str[i] === el[0] && el[0] !== el[1]) {
        stack.push(str[i]);
      }
    }
  }

  return stack.length === 0 ? true : false;
}



