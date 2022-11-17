import jwt from 'jsonwebtoken'

export const protect = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({
            message: "Token has invalid format"
        })
    }


    const tokenWithoutBearer = token.split(" ")[1];

    jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, Payload) => {
        if (err) {
            return res.status(401).json({
                message: "Token has invalid",
            });
        }
        req.user = Payload;
        next();
    });

}