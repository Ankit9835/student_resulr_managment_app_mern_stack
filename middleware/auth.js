const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('No token provided')
    }
  
    const token = authHeader.split(' ')[1]
    console.log('token',token)
    if(!token) return res.status(402).json({message:'Access denied no token provided', success:false})
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
        req.body.employeeId = decoded._id
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Access denied invalid token'})
    }
}

module.exports = {authMiddleware}