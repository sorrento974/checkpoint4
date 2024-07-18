const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  add,
  edit,
  destroy,
} = require("../../../controllers/cartoonActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

// Route to update a specific item by ID
// router.put("/:id", update);
router.put("/:id", edit);

// Route to delete a specific item by ID
// router.delete("/:id", deleteCartoon);
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
