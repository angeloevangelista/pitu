import Sequelize, { Model, Optional } from 'sequelize';

import database from '../';
import Link from '../../models/link';

interface ILinkCreationAttributes extends Optional<Link, 'id'> {}

export interface ILinkEntity extends Model, Link {}

const LinkEntity = database.define<ILinkEntity, ILinkCreationAttributes>(
  'links',
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    url: {
      type: Sequelize.STRING(2000),
      allowNull: false,
    },
    url_code: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    hits: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  },
  { freezeTableName: true, underscored: true },
);

export default LinkEntity;
