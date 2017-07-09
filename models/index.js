const modelsName = ['user', 'editor']
const config = require('../config/index');

module.exports = function(sequelize) {
	const models = {}
    return new Promise((resolve, reject) => {
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully. ');
            Promise.all(
                modelsName.map((m) => {
                    const name = m.toLowerCase()
                    const model = sequelize.define(config.db.table_pre + name, require('./' + name))
                    return model.sync({
                        force: true,
                    }).then(() => {
                    	return models[name] = model
                    })
                })
            ).then(() => {
            	// console.log(models)
            	resolve(models)
            })
        }).catch((err) => {
            reject(err)
        })
    })

    
}
