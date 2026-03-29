const adminAuth = (req, res, next) => {
    console.log("admin auth is getting checked");
    // req.body?.token
    const token = "1234"; // assuming is it will be coming from request body
    const isAdminAuthorized = token === "1234";
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized access");
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log("user auth is getting checked");
    // req.body?.token
    const token = "1234"; // assuming is it will be coming from request body
    const isAdminAuthorized = token === "1234";
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized access");
    } else {
        next();
    }
}

module.exports = { adminAuth, userAuth }