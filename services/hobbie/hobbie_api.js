
const { Hobbie }  = require('../../models');

module.exports = function (app, prefix) {
    /**
     * @description extraer todos los hobbies registrados
     * 
     */
    app.get(prefix + '/', async function (req, res) {
        Hobbie.findAll().then(hobbies => {
            res.send(hobbies);
        }).catch(error => {
            res.send(error);
        });
    });

    /**
     * @description guardar un hobbie de una persona
     * 
     */
    app.post(prefix + '/new', async function (req, res) {
        const hobbie = req.body;
        Hobbie.create(hobbie).then(hobbie => {
            res.send(hobbie);
        }).catch(error => {
            res.send(error);
        });
    });

    /**
     * @description actualizar hobbie de una persona
     * 
     */
    app.post(prefix + '/update', async function (req, res) {
        const hobbie = req.body;
        Hobbie.update(hobbie, { where: { id: hobbie.id } }).then(hobbie => {
            res.send(hobbie);
        }).catch(error => {
            res.send(error);
        });
    });

    /**
     * @description eliminar hobbie de una persona
     * 
     */
    app.post(prefix + '/delete', async function (req, res) {
        const hobbie = req.body;
        Hobbie.destroy({ where: { id: hobbie.id } }).then(hobbie => {
            res.send({ success: hobbie });
        }).catch(error => {
            res.send(error);
        });
    });
}