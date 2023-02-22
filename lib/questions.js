const questions = [
    {
        type: "input",
        name: "text", 
        message: "Please enter logo text (no more than 3 characters)",
        validate: text => text.length <=3 || "Must not contain more than 3 characters"
    },

    {
        type: "input",
        name: "textColor",
        message: "Please enter a color",

    },

    {
        type: "list",
        name: "shapes",
        message: "Please choose one shape",
        choices: ['Circle', 'Trianlge', 'Square'],
    }, 

    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color",

    },
];

module.exports = questions; 