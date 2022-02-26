const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: DataTypes.INTEGER,
    },
    {
      underscored: true,
      tableName: 'Books',
      updatedAt: false,
    },
  );

  return Book;
};

module.exports = Book;
