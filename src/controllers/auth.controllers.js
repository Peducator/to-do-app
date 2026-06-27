const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword
      }
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Username already exists' });
  }
};

const login = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await prisma.user.findUnique({
      where: { username }
    });
    if (!user) {
      return res.status(401).json({ message: 'invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'invalid username or password', token: null });
    }
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    res.json({ message: 'login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { login, register }