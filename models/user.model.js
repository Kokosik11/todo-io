module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      nickname: {
        type: Sequelize.STRING,
        unique: true,
        required: true
      },
      password: {
        type: Sequelize.STRING,
        required: true
      }
    });
  
    return User;
  };