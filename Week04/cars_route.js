const {
    Router
} = require('express')

const Cars = require('./cars')
const my_cars = new Cars("cars.json");

const cars_route = Router();

cars_route.get('/', (req, res) => {
    res.send(my_cars.getAll())
})

cars_route.get('/:id', (req, res) => {
    try {
        res.send(my_cars.getById(req.params.id))
    } catch (error) {
        res.status(404).send(`Error ${error}`)
    }
})
// get:
// req.parmas.xxx     website.com/xxx
// req.query.xxx      website.com?name=Bmw&yyy=value&zzz=value
cars_route.patch('/:id', (req, res) => {
    try {
        //res.send(my_cars.edit(req.params.id, req.body))
        my_cars.edit(req.params.id, req.body)
        my_cars.save()
        res.send(my_cars.getAll())
    } catch (error) {
        res.status(404).end();
    }
})

// post:
// req.body
cars_route.post('/', (req, res) => {
    my_cars.add(req.body)
    my_cars.save()
    res.send(my_cars.getAll())
}) 

cars_route.delete('/:id', (req, res) => {
    try {
        //res.send(my_cars.delete(req.params.id))
        my_cars.delete(req.params.id)
        my_cars.save()//
        res.send(my_cars.getAll())//
    } catch (error) {
        res.status(404).end();
    }
})


module.exports = cars_route