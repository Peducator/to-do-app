const getAll = async (req, res) => {
  const todos = await prisma.user.findUnique({
    where: { username: req.user.username },
    select: {
      id: true,
      username: true,
      tasks: {
        select: {
          name: true,
          description: true,
        },
        orderBy: { id: 'asc' }
      }
    }
  });
  res.json(todos);
};

module.exports = { getAll };