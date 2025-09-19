import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect:"sqlite",
    storage:"./data/data.sqlite"
});

export { sequelize };
