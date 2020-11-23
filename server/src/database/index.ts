import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'mysql://root:DockerMySql127!@127.0.0.1:3306/pitu',
);

export default sequelize;
