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

const updatetodo = async (req, res) => {
  const { name, description } = req.body;
  const update = await prisma.task.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: {
      name,
      description
    }
  });
  res.json(update);
};

const deletetodo = async (req, res) => {
const { name, description } = req.body;
  const update = await prisma.task.delete({
    where:{
      id: parseInt(req.params.id)
    }
  });
  res.json({"message": "deleted successfully"});
};


module.exports = { getAll, createnew ,updatetodo, deletetodo};
