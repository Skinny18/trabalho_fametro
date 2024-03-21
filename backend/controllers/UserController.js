const User = require('../models/User')

const jwt = require('jsonwebtoken');

function generateToken(user) {
  const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });
  return token;
}

module.exports = class UserController 
{

  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email: email } });

      if (user) {

        if (password == user.password) {
          const token = generateToken(user)
          res.status(200).json({ message: 'Login bem-sucedido', token});
        } else {
          res.status(401).json({ message: 'Credenciais inválidas' });
        }
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}