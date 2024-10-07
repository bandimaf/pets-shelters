const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Shelter = sequelize.define('shelter', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // login: {type: DataTypes.STRING, unique: true},
    // password: {type: DataTypes.STRING},
    // role: {type: DataTypes.STRING, defaultValue: "ADMIN"},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    main_image: {type: DataTypes.STRING},
    images: {type: DataTypes.ARRAY(DataTypes.STRING)}
});

const Adress = sequelize.define('adress', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    city: {type: DataTypes.STRING, allowNull: false},
    street: {type: DataTypes.STRING, allowNull: false},
    building: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
});

const Contacts = sequelize.define('contacts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, allowNull: false},
    contact: {type: DataTypes.STRING, allowNull: false}
})

const Requisites = sequelize.define('requisites', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
});

const Pet = sequelize.define('pet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.STRING, allowNull: false},
    at_the_shelters: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
    age: {type: DataTypes.INTEGER, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false},
    arrival_date: {type: DataTypes.DATE, allowNull: false},
    departure_date: {type: DataTypes.DATE},
    reason_departure: {type: DataTypes.STRING},
    about: {type: DataTypes.STRING, allowNull: false},
    health_feature: {type: DataTypes.STRING},
    need_treatment: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    treatment_provided: {type: DataTypes.JSON},
    main_image: {type: DataTypes.STRING},
    images: {type: DataTypes.ARRAY(DataTypes.STRING)}
})

const Pet_colors = sequelize.define('pet_colors', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    hex: {type: DataTypes.STRING, allowNull: false}
})

const Pet_type = sequelize.define('pet_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, allowNull: false},
})

const Pet_character = sequelize.define('pet_character', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    character: {type: DataTypes.STRING, allowNull: false},
})

const Owners = sequelize.define('owners', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    tel: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING},
    adress: {type: DataTypes.STRING},
    networks: {type: DataTypes.ARRAY(DataTypes.STRING)},
})

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    main_image: {type: DataTypes.STRING},
    images: {type: DataTypes.ARRAY(DataTypes.STRING)}
})

const Fundraising = sequelize.define('fundraising', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    main_image: {type: DataTypes.STRING},
    goal: {type: DataTypes.STRING},
    images: {type: DataTypes.ARRAY(DataTypes.STRING)},
    required_amount: {type: DataTypes.INTEGER},
    collected_amount: {type: DataTypes.INTEGER, defaultValue: 0},
    reports: {type: DataTypes.STRING},
})

const Payment_reports = sequelize.define('payment_reports', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, allowNull: false},
    time: {type: DataTypes.TIME, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    sum: {type: DataTypes.INTEGER}
})

const Admins = sequelize.define('admins', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "ADMIN"},
})

const SheltersAdmins = sequelize.define('sheltersAdmins', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "EMPLOYEE"},
    name: {type: DataTypes.STRING, allowNull: false},
})

Shelter.hasMany(SheltersAdmins, {foreignKey: 'idShelter'});
SheltersAdmins.belongsTo(Shelter, {foreignKey: 'idShelter'});

Shelter.hasOne(Adress, {foreignKey: 'idShelter'});
Adress.belongsTo(Shelter, {foreignKey: 'idShelter'});

Shelter.hasMany(Contacts, {foreignKey: 'idShelter'});
Contacts.belongsTo(Shelter, {foreignKey: 'idShelter'});

Shelter.hasMany(Requisites, {foreignKey: 'idShelter'});
Requisites.belongsTo(Shelter, {foreignKey: 'idShelter'});

Shelter.hasMany(Pet, {foreignKey: 'idShelter'});
Pet.belongsTo(Shelter, {foreignKey: 'idShelter'});

Pet.hasMany(Pet_colors, {foreignKey: 'idPet'});
Pet_colors.belongsTo(Pet, {foreignKey: 'idPet'});

Pet.hasOne(Pet_type, {foreignKey: 'idPet'});
Pet_type.belongsTo(Pet, {foreignKey: 'idPet'});

Pet.hasMany(Pet_character, {foreignKey: 'idPet'});
Pet_character.belongsTo(Pet, {foreignKey: 'idPet'});

Owners.hasMany(Pet);
Pet.belongsTo(Owners);
Shelter.hasMany(Owners, {foreignKey: 'idShelter'});
Owners.belongsTo(Shelter, {foreignKey: 'idShelter'});

Shelter.hasMany(News, {foreignKey: 'idShelter'});
News.belongsTo(Shelter, {foreignKey: 'idShelter'});

Shelter.hasMany(Fundraising, {foreignKey: 'idShelter'});
Fundraising.belongsTo(Shelter, {foreignKey: 'idShelter'});

Fundraising.hasMany(Payment_reports);
Payment_reports.belongsTo(Fundraising);

module.exports = {
    Shelter,
    Adress,
    Contacts,
    Requisites,
    Pet,
    Pet_colors,
    Pet_type,
    Pet_character,
    Owners,
    News,
    Fundraising,
    Payment_reports,
    Admins,
    SheltersAdmins
}