const express = require("express")
const router = express.Router();
const {getItems,getItem,createItem,updateItem,deleteItem} = require("../controllers/itemsController")


router.route("/").get(getItems);

router.route("/:id").get(getItem);

router.route("/").post(createItem);

router.route("/:id").put(updateItem);

router.route("/:id").delete(deleteItem);

module.exports = router;