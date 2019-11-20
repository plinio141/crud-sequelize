var models  = require('../../models');

module.exports = function (app, prefix) {
    /**
     * @description extraer todas las personas registradas
     * 
     */
    app.get(prefix + '/', async function (req, res) {
    });

    /**
     * @description guardar persona
     * 
     */
    app.post(prefix + '/new', async function (req, res) {
        
    });

    /**
     * @description actualizar persona
     * 
     */
    app.post(prefix + '/update', async function (req, res) {
        
    });

    /**
     * @description eliminar persona
     * 
     */
    app.post(prefix + '/delete', async function (req, res) {
        
    });
}