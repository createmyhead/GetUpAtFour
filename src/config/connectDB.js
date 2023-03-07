const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('test', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const testConnect = async () =>{ 
  try {
  await sequelize.authenticate();
  console.log('Connection MySQL');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

}
export default testConnect;