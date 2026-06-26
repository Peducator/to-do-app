const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()

const register = async (req, res) => {
  const {username, password} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: {
      username,
      password: hashedPassword
    }
  })
  res.json(user);
}

const login = async (req, res) => {
  const {username, password} = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })
  if (!user){
    res.status(401).json({message : 'invalid username or password'});
    return;
  }
  else{
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      res.status(401).json({message : 'invalid username or password'});
      return;
    }
    else{
      res.json({message : 'login successful'});
    }
  }
}

module.exports = { login, register }