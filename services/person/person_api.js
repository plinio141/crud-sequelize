const { Person }  = require('../../models');

module.exports = function (app, prefix) {
    /**
     * @description extraer todas las personas registradas
     * 
     */
    app.get(prefix + '/', async function (req, res) {
        Person.findAll().then(persons => {
            res.send(persons);
        }).catch(error => {
            res.send(error);
        });
    });

    /**
     * @description guardar persona
     * 
     */
    app.post(prefix + '/new', async function (req, res) {
        const person = req.body;
        Person.create(person).then(person => {
            res.send(person);
        }).catch(error => {
            res.send(error);
        });
    });

    /**
     * @description actualizar persona
     * 
     */
    app.post(prefix + '/update', async function (req, res) {
        const person = req.body;
        Person.update(person, { where: { id: person.id } }).then(person => {
            res.send(person);
        }).catch(error => {
            res.send(error);
        });
    });

    /**
     * @description eliminar persona
     * 
     */
    app.post(prefix + '/delete', async function (req, res) {
        const person = req.body;
        Person.destroy({ where: { id: person.id } }).then(person => {
            res.send({ success: person });
        }).catch(error => {
            res.send(error);
        });
    });
}