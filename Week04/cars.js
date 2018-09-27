const fs = require("fs")
const util = require('util')

const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)
//For Asynchronous behavior, we use promisify

class Car { //we have created Car class to make it easier to  insert the cars in postman Or inserting only cars, nothing else
    constructor(obj) {
        this.color = obj.color
        this.model = obj.model
        this.brand = obj.brand
    }
}

// const carObj={
//     color: "green",
//     model: "3 Sereies",
//     brand: "BMW"
// }
// const new_car = Car(carObj)

class Cars {
    constructor(fileName) { //to put the name of this file cars.json
        this.cars = [] //array will be filled with car objects and before they are converted into string by using stringify
        this.fileName = fileName //we can create more files as instances
        this.load()//1. When we call load(), so we are executing the load function
    }
    //to load the file and then push it to list of cars by using Json.parse
    load() {

        this.cars = []
        //readFile(this.fileName).then(function(data){console.log(data)}) //2.We are reading the file because we are using promisify
        readFile(this.fileName, 'utf8')
            //.then(data => console.log(typeof data))
            .then(data => JSON.parse(data)) //3.JSON.parse is  converting text into jSON data and push/add the content to the list of cars
            .then(carsList => { //4. then we are looping the array of objects and add each object into the list of cars.
                //console.log('before', this.cars)
                carsList.forEach(car => {
                    // this.cars.push(car)
                    this.add(new Car(car))
                })
                //console.log('after', this.cars)
            })

    }

    save() { //5.bringing the list of cars (array of objects )which JSON content  and convert it into  (array of string) and we write this content to the file.
        writeFile(this.fileName, JSON.stringify(this.cars))
    }

    getAll() {
        return this.cars;
    }

    getById(id) {
        if (!this.cars[id - 1]) throw Error(`Cannot find a car with ${id}`)

        return this.cars[id - 1];
    }

    add(car) {
        if (!car instanceof (Car))
            throw new Error('car is not instance of Car class')
        this.cars.push(car);
        return this.cars;
    }

    edit(id, car_partial) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        this.cars[id] = {
            ...this.cars[id],
            ...car_partial
        }
        return this.cars;
    }

    delete(id) {
        if (!this.cars[id]) throw Error(`Cannot find a car with ${id}`)
        this.cars.splice(id, 1);
        return this.cars;
    }

}

module.exports = Cars;