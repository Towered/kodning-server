const Sequelize = require('sequelize');
const db = require("../../db");

module.exports = db.define('book', {
    id: {
        type: Sequelize.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true
    },
    name: {
        type: Sequelize.STRING,
        comment: "书籍名",
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "作者"
    },
    translator: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "译者"
    },
    lang: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "语言"   
    },
    framework: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "框架"
    },
    ISBN: {
        type: Sequelize.STRING,
        allowNull: false
    },
    press: {
        type: Sequelize.STRING,
        allowNull: false,   
        comment: "出版社"
    },
    publishDate: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: "出版时间"
    },
    allowSpread: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment: "允许传播"
    }
}, {
    //时间戳，启用该配置后会自动添加createdAt、updatedAt两个字段，分别表示创建和更新时间
    timestamps: true,   
    // 虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deletedAt属性
    paranoid: true,  
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    // 这样 updatedAt 的字段名会是 updated_at
    underscored: true
});