// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
    for(let letter of str) {
        reversed = letter + reversed;
    }
    return reversed;
}

// reverse('apple')
module.exports = reverse;

// function reverse(str) {
//     // return [...str].reverse().join("");
//     return str.split("").reverse().join("");
// }