const Sequelize = require('sequelize');
const db = require("../../db");

module.exports = db.define('book', {
    id: {
        type: Sequelize.BIGINT(11), 
        autoIncrement:true, 
        primaryKey : true, 
        unique : true
    },
    nickname: {
        type: Sequelize.STRING,
        comment: "昵称",
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        comment: "手机号",
        allowNull: false
    },
    fromGithub: {
        type: Sequelize.BOOLEAN,
        comment: "是否来自Github",
        allowNull: false
    },
    fromGoogle: {
        type: Sequelize.BOOLEAN,
        comment: "是否来自google",
        allowNull: false  
    },
    avatar: {
        type: Sequelize.STRING,
        comment: "头像",
        allowNull: false
    },
    integral: {
        type: Sequelize.INT(6),
        comment: "积分",
        allowNull: false
    },
    isVip: {
        type: Sequelize.BOOLEAN,
        comment: "是否为会员",
        allowNull: false
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