//*for error handling
const asyncHandler = require("express-async-handler")
const Item = require('../model/item');







//*@desc Get all items
//*@route GET /items
//*@access public
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  return res.status(200).json({ message: items });
});



//*@desc Get item
//*@route GET /items/:id
//*@access public
const getItem = asyncHandler(async (req, res) => {
  // console.log("req.body", req.body);
  const item = await Item.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error("Contact not found");
  }
  return res.status(200).json({ message: item });
});




//*@desc create new items
//*@route POST /items
//*@access public
const createItem = asyncHandler(async (req, res) => {
  // console.log("req.body", req.body);
  const { item, email } = req.body;
  if (!item || !email) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }  
  const items = await Item.create({
    item,
    email,
  });
  return res.status(201).json({ message: items });
});



//*@desc update new items
//*@route PUT /items/:id
//*@access public
const updateItem = asyncHandler(async (req, res) => {
  // console.log("req.body", req.body);
  const item = await Item.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(201).json({ message: updatedItem });
});



//*@desc delete new items
//*@route DELETE /items/:id
//*@access public
const deleteItem = asyncHandler(async (req, res) => {
  // console.log("req.body", req.body);
  const item = await Item.findById(req.params.id);  
  if (!item) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Item.deleteOne()
  return res.status(200).json({ message: item });
});







module.exports = { getItems,getItem,createItem,updateItem,deleteItem }



