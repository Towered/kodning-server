/**
 * 框架 & 语言 关系表
 */

const Sequelize = require('sequelize');
const db = require("../../../db");

module.exports = db.define('framework_lang', {
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
    fid: {
        type: Sequelize.STRING,
        comment: "框架id",
        allowNull: false
    }
}, {
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    // 这样 updatedAt 的字段名会是 updated_at
    underscored: true
});