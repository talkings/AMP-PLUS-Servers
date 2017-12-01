const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const { mongodb } = require('../../../config/config-db.js');
mongoose.Promise = global.Promise;
mongoose.connection
    .on('error', ( error ) => {
       console.log(`mongodb Connection has been established error msg:${error}`);
    })
    .on('close', () => {
        console.log('mongodb Database connection closed.');
    })
    .once('open', () => {
        let info = mongoose.connections[0];
        console.log(`mongodb Connection has been established successfully host ${info.host} port ${info.port}`);
    });
    
mongoose.connect(`${mongodb.basepath}${mongodb.database }`, { 'useMongoClient' : true});

//读取文件目录
fs.readdirSync(path.join(__dirname, './schema')).filter(function (file) {
    return (file.indexOf('.') !== 0);
}).forEach(function (file) {
    let dataTableSchema = require(`./schema/${file}`);
    mongoose.model(file.replace('.js', ''), dataTableSchema(mongoose.Schema));
    // let model = sequelize['import'](path.join(__dirname, './schema/'+ file));
    // db[model.name] = model;
});
exports.getModel = function(type){
	return	mongoose.model(type);
};
