
var models  = require('../../models');

module.exports = function (app, prefix) {
    /**
     * @description extraer todos los hobbies registrados
     * 
     */
    app.get(prefix + '/', async function (req, res) {
    });

    /**
     * @description guardar un hobbie de una persona
     * 
     */
    app.post(prefix + '/new', async function (req, res) {
        
    });

    /**
     * @description actualizar hobbie de una persona
     * 
     */
    app.post(prefix + '/update', async function (req, res) {
        
    });

    /**
     * @description eliminar hobbie de una persona
     * 
     */
    app.post(prefix + '/delete', async function (req, res) {
        
    });
}