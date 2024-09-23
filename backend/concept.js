// middleware
/*
function(req, res, next){

}

app.use(middleware)

app.use(function(req,res, next){
})

=> middleware is a function which has access to request object, response object and next middleware function reference
=> middleware always came into action in between req-res cycle
=> middleware can modify request object 

types of middleware:
1. application level middleware
=> middleware having scope of req, res, and next middleware function reference

2. routing level middleware
3. third party middleware
4. inbuilt middleware
5. error handling middleware

*/