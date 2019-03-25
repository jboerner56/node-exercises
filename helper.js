// function sendHelp(){
//     return 'Help is on the way';
// }
// const sendHelp = function() {
//     return 'Help is on the way';
// }

// const sendHelp = () => { return 'Help is on the way'; };

// arrow functions are always anonymous
// const sendHelp = (whom) => { 
//     return `Don't worry ${whom} Help is on the way`; 
// };
// if you only have a single in the body and that line is a 'return',
// you can omit the return keyword and the semi-colon
// 

// if there is only one argument, you can omit the parens
const sendHelpTo = whom => `Don't worry ${whom} Help is on the way`; 



module.exports = sendHelpTo;