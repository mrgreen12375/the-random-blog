const router = require("express").Router();
const { Blog, User } = require("../../models");
const withAuth = require("../../utils/auth");
//The lines below get all the blogs from the database
//This routes url is localhost:3001/api/blogs/
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [User],
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Geting (or responding to the front end with) a single blog by its id
//This url is /api/blogs/:id
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id)
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
})

//This route creates a blog
//This url is /api/blogs/ with a post method
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({ ...req.body, user_id: req.session.user_id });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
})
//Route that deletes blog
//This url is /api/blogs/:id
//This method is delete
router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router