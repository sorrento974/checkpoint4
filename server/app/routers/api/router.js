const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const cartoonsRouter = require("./cartoons/router");

router.use("/cartoons", cartoonsRouter);

/* ************************************************************************* */

module.exports = router;
