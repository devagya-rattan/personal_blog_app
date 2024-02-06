const myblogs = require("../Models/Postmodel");
const express = require("express");
const router = express.Router();
router.post("/", async (req, res) => {
  const { title, content, featuredImage } = req.body;

  const data = {
    title: title,
    content: content,
    featuredImage: featuredImage,
  };

  try {
    const check = await myblogs.findOne({ title:title });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await myblogs.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});
router.get("/getblog", (req, res) => {
  myblogs
    .find()
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ nobooksfound: "No Posts found" }));
});
router.get("/:id", (req, res) => {
  myblogs
    .findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ nopostsfound: "No Post found" }));
});
router.put("/update/:id", (req, res) => {
  myblogs
    .findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});
router.delete("/:id", (req, res) => {
  myblogs
    .findByIdAndDelete(req.params.id)
    .then((book) => res.json({ mgs: "Post entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No suchPost" }));
});
module.exports = router;
