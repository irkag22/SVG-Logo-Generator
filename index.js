const {prompt} = require ('inquirer');
const {questions, Circle, Triangle, Square} = require ('./lib');

prompt (questions)
.then (({text, textColor, shape, shapeColor})) => {

    let shape = shape == 'Circle' ? 
        new Circle : 
        shape == 'Triangle' ? 
        new Triangle() : 
        shape == 'Square' ?
        new Square() 
};
