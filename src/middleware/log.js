const logReq = ((req, res, next) => {
    console.log('terjadi request ke Path: ', req.path);
    next();
})

export default logReq;