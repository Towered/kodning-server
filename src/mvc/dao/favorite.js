const Sequelize = require('sequelize');
const db = require("../../db");

module.exports = db.define('favorite', {
    id: {
        type: Sequelize.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true
    },
    user: {
        type: Sequelize.STRING,
        comment: "用户ID",
        allowNull: false
    },
    bookFavorite: {
        type: Sequelize.STRING,
        comment: "用户收藏的书籍",
        allowNull: true
    },
    videoFavorite: {
        type: Sequelize.STRING,
        comment: "用户收藏的视频",
        allowNull: true
    },
    lessonFavorite: {
        type: Sequelize.STRING,
        comment: "用户收藏的课程",
        allowNull: true
    }
}, {
    //时间戳，启用该配置后会自动添加createdAt、updatedAt两个字段，分别表示创建和更新时间
    timestamps: true,   
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    // 这样 updatedAt 的字段名会是 updated_at
    underscored: true
});