const express = require("express");
const router = express.Router();


const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */

router.get("/", getAllTodo);

/**
 * @route GET api/todo
 * @description add
 * @access public
 */

router.post("/", postCreateTodo);

/**
 * @route GET api/todo
 * @description update
 * @access public
 */

router.put("/:id", putUpdateTodo);

/**
 * @route GET api/todo
 * @description delete
 * @access public
 */

router.delete("/:id", deleteTodo);

module.exports = router;