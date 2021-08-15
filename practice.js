const text = '+88-01934567456';
const regEx = /(\+88)?-?[1-9]\d{8}/g;
const matches = text.match(RegExp);
const index = text.search(RegExp);
const replaced = text.replace(RegExp, 'pgn');
const testing = RegExp.test(text);
console.log(matches, index, replaced, testing);