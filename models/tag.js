module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    });

    Tag.associate = models => {
        Tag.belongsToMany(models.Product, { through: 'ProductTags'});
    };
    return Tag;
  };