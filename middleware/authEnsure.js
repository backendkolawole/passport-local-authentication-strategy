function ensureAuthenticated(req, res, next) {
    console.log('hit auth middleware')
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource' });
    }
};

module.exports = ensureAuthenticated