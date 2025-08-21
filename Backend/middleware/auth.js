const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports = async function auth(req, res, next) {
  try {
    // Get token from Authorization header
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.slice(7) // remove "Bearer "
      : null;

    if (!token) {
      return res.status(401).json({
        error: { message: 'Missing Authorization token', code: 'UNAUTHORIZED' },
      });
    }

    // Verify token
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET || 'default_secret'
    );

    // Attach user object to request
    const user = await User.findById(payload.id).select('-password');
    if (!user) {
      return res.status(401).json({
        error: { message: 'User not found', code: 'UNAUTHORIZED' },
      });
    }

    req.user = { id: user._id, email: user.email, name: user.name };

    next();
  } catch (err) {
    console.error('AUTH ERROR:', err.message);
    return res.status(401).json({
      error: { message: 'Invalid or expired token', code: 'UNAUTHORIZED' },
    });
  }
};
