const { generateJwtToken, comparePassword } = require("../../helper/misc");
const Users = require("../../models/users");
const bcrypt = require("bcryptjs");

const userSingUpService = async (payload) => {
  try {
    const password_salt = await bcrypt.genSaltSync(
      Number(process.env.SALT_ROUNDS)
    );
    payload.password = await bcrypt.hashSync(
      payload.password,
      password_salt
    );
    const userSave = await Users.create(payload)
    const token = generateJwtToken(userSave._id)
    return { token, role: payload.role }
  }
  catch (err) {
    throw err
  }
}

const userLoginService = async (payload, user) => {
  try {
    const isPassMatch = await comparePassword(payload.password, user.password)
    if (isPassMatch) {
      const token = generateJwtToken(user._id)
      return { token, role: user.role }
    }
    else {
      return false
    }
  }
  catch (err) {
    throw err
  }

}

const userProfileService = async (payload) => {
  try {
    const data = await Users.findById(payload).select("-password")
    return data
  } catch (err) {
    throw err

  }
}

module.exports = { userSingUpService, userLoginService, userProfileService }