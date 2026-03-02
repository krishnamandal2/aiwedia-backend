const express = require("express");
const router = express.Router();


const { getCategories } = require("../controllers/categoryController");

const getMenuCategories=require("../controllers/menucategories")

const getToolsData=require("../controllers/toolsController")

//for categories

router.get("/", getCategories);


 //for munu in which rank,title,slug etc
 
router.get("/menu", getMenuCategories);


//for slug Data

router.get("/:slug",getToolsData)

module.exports = router;
