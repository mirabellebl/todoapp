module.exports = (sequelize, DataTypes) => {
    
    const Tasks = sequelize.define("Tasks", {
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Tasks;
}