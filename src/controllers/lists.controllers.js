const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async (req, res) => {
  const todos = await prisma.task.findMany({
    where: {
      user: { username: req.user.username }
    },
    select: {
      id: true,
      name: true,
      description: true,
      user: {
        select: {
          id: true,
          username: true,
        }
      }
    },
    orderBy: { id: 'asc' }
  });
  res.json(todos);
};

const createnew = async (req, res) => {
  const { name, description } = req.body;
  const newtodo = await prisma.task.create({
    data: {
      name,
      description,
      user: { connect: { username: req.user.username }}
    }
  });
  res.json(newtodo);
};

module.exports = { getAll, createnew };