const Todo = require("../models/todo");

exports.getAllTodo = (req, res) => {
    Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) =>
    res

        .status(404)
        .json({ message: "todo not happin", error: err.message })
    );
};

exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
    .then((data) => res.json({ message: "todo bumpin", data}))
    .catch((err) =>

        res

            .status(400)
            .json({ message: "not updated error", error: err.message })
    );
};

exports.putUpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated", data}))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "no do the needful", error: err.message })

        );
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        then((data) =>
            res.json({ message: "gonzo", data })
        )
        .catch((err) => 
           res
            
           .status(404)
           .json({ message: "nope", error: err.message })
        );
};