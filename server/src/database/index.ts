import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION_STRING as string);

export default sequelize;
