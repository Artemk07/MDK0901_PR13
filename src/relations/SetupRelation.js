import User from '../models/User.js';
import Role from '../models/Role.js';

export function SetupRelation() {
    Role.hasMany(User, {foreignkey:'roleId', as:'role'} )
}
