const Sequelize = require('sequelize');
const db = require("../../db");

module.exports = db.define('framework', {
    id: {
        type: Sequelize.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique: true
    },
    fid: {
        type: Sequelize.STRING,
        comment: "框架id",
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        comment: "框架名称",
        allowNull: false
    }
}, {
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    // 这样 updatedAt 的字段名会是 updated_at
    underscored: true
});