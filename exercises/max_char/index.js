// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arrStr = str.split('');
    let itemsObj = {};

    for(let character of arrStr) {
        if(!(character in itemsObj)) {
            itemsObj[character] = 1
        } else {
            itemsObj[character] += 1;
        }
    }
    const maxNumObj = Math.max(...Object.values(itemsObj));
    return Object.keys(itemsObj).find(key => itemsObj[key] === maxNumObj);
}

module.exports = maxChar;