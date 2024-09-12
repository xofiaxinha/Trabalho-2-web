module.exports = (db, DataTypes) => {
    const Expense = db.define('Expense', {
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
        pago:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        tableName: 'expenses',
        schema: 'public',
    });
    return Expense;
}