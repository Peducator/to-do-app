const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async (req, res) => {
  try {
    const todos = await prisma.task.findMany({
      where: { user: { username: req.user.username } },
      select: {
        id: true,
        name: true,
        description: true,
        user: { select: { id: true, username: true } }
      },
      orderBy: { id: 'asc' }
    });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createnew = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newtodo = await prisma.task.create({
      data: { name, description, user: { connect: { username: req.user.username } } }
    });
    res.json(newtodo);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updatetodo = async (req, res) => {
  try {
    const { name, description } = req.body;
    const update = await prisma.task.update({
      where: { id: parseInt(req.params.id) },
      data: { name, description }
    });
    res.json(update);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deletetodo = async (req, res) => {
  try {
    await prisma.task.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ message: 'deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAll, createnew, updatetodo, deletetodo };