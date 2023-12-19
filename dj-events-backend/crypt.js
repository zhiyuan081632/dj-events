const bcrypt = require('bcryptjs');
const password = '123456Yang';
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);
console.log(hash);
