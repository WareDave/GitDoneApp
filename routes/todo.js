const express = require("express");
const router = express.Router();

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */

router.get("/");

/**
 * @route GET api/todo
 * @description add
 * @access public
 */

router.post("/");

/**
 * @route GET api/todo
 * @description update
 * @access public
 */

router.put("/:id");

/**
 * @route GET api/todo
 * @description delete
 * @access public
 */

router.delete("/:id");

module.exports = router;