import { sequelize } from './src/sequelize/Sequelize.js';
import { SetupRelation } from './src/relations/SetupRelation.js';
import Role from './src/models/Role.js';

export async function createdb(){
    try{await sequelize.authenticate();console.log('Соединение с БД успешно установлено')}
    catch(err){console.error('Ошибка при соеднинении с БД: ', err);}
    SetupRelation();
    await sequelize.sync({ force: true });

    const Role1 = await Role.create({roleName: "программист"});
    const Role2 = await Role.create({roleName: "студент"});
    const Role3 = await Role.create({roleName: "профессор"});
}
