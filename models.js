const Sequelize = require('sequelize');
let sequelize;
if (process.env.DATABASE_URL) {
  console.log('called');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    logging:  true,
    operatorsAliases: false,
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
  database: 'subrats_db',
  dialect: 'postgresql',
  operatorAliases: false,
  define: {
    underscored: true,
  },
});
}
const User = sequelize.define( 'user', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true, // checks if email is already being used
    allowNull: false,
    validate: {
      isEmail: { // checks if input is in email form
        msg: 'please enter a valid email address'
      },
      notNull: { // message given if null
        msg: 'please enter an email address'
      }
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true, // checks if username is already being used
    allowNull: false,
    validate: {
      notNull: { // message given if null
        msg: 'please enter a username'
      }
    }
  },
  password_digest: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { // message given if null
        msg: 'please enter a password'
      }
    }
  },
  is_local: Sequelize.BOOLEAN,
  avatar: Sequelize.STRING
});

const Station = sequelize.define( 'Station', {
  name: Sequelize.STRING,
  geolocation: Sequelize.STRING,
  lines: Sequelize.STRING,
  details: Sequelize.STRING,

}, {
  timestamps: false
});


const Comment = sequelize.define( 'comments', {
  activity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cleanliness: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  wait_time: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  opt_comment: Sequelize.STRING,
  at_station: Sequelize.DATE,
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
