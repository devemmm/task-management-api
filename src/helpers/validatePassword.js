const bcrypt = require("bcrypt");

const comparePassword = async(encryptedPassword, oldPassword) =>{
   return await bcrypt.compare(encryptedPassword, oldPassword)
}

module.exports = { comparePassword };