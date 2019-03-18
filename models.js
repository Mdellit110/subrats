const Sequelize = require('Sequelize');

const sequelize = new Sequelize({
  database: 'subrats_db',
  dialect: 'postgres',
  operatorAliases: false,
  define: {
    underscored: true,
  },
});

const User = sequelize.define( 'user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notNull: {
        msg: 'please enter an email adress'
      }
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notNull: {
        msg: 'please enter a username'
      }
    }
  },
  password_digest: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [8,30],
      notNull: {
        msg: 'please enter a password'
      }
    }
  },
  is_local: Sequelize.BOOLEAN,
});

const Station = sequelize.define( 'Station', {
  name: Sequelize.STRING,
  latitude: Sequelize.INTEGER,
  longitude: Sequelize.INTEGER,
});

const Comment = sequelize.define( 'comments', {
  activity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      len: [1,5],
    }
  },
  cleanliness: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      len: [1,5],
    }
  },
  wait_time: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      len: [1,5],
    }
  },
  opt_comment: Sequelize.STRING,
  is_there: Sequelize.BOOLEAN,
})

// one to many
Comment.belongsTo(User);
Comment.belongsTo(Station);
User.hasMany(Comment);
Station.hasMany(Comment);

// many to many
User.belongsToMany(Station, { through: 'favorite_station' });
Station.belongsToMany(User, { through: 'favorite_station' });

module.exports = {
  User,
  Station,
  Comment,
  sequelize
}
