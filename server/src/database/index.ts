import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE_CONNECTION_STRING as string,
  {
    logging: false,
  },
);

export default sequelize;
