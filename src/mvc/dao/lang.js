const Sequelize = require('sequelize');
const db = require("../../db");

module.exports = db.define('lang', {
    id: {
        type: Sequelize.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique: true
    },
    lid: {
        type: Sequelize.STRING,
        comment: "语言id",
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        comment: "语言名称",
        allowNull: false
    }
}, {
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    // 这样 updatedAt 的字段名会是 updated_at
    underscored: true
});