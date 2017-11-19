

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    burger_name:{
      type: DataTypes.STRING,
      allowNull: false,
      len:[1,30]
    },
    devoured:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    }
  });
  return burger;
};