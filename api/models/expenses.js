module.exports = (db, DataTypes) => {
    const Expense = db.define('Expense', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        valor:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        data:{
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        tableName: 'expenses',
        schema: 'public',
    });
    return Expense;
}