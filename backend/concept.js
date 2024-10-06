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


MVC
seperation of concern
model
view
controller




database
container
harddrive partision

database management system(DBMS)
1. relational dbms
2. distributed dbms


relational dbms:
=> table based design
=> tuple/row => each record inside a table is tuple/row
=> schema based design
=> non scalable
=> sql(structure query language) database
=> my-sql, postgres, sqllite

distributed dbms:
=> collection based design
=> document => each record inside a collection
=> document is valid json(javascript object notation)
=> no schema based
=> highly scalable
=>no-sql(not only sql)
=> mongodb, redis, cosmos


entity

LMS => user, book
user_id:
user_name:
user_section:

ER diagram



mongodb:
commands:
1. show dbs
2. use dbname
3. show collections

mongodb 
mongoshell

CRUD:
c => create(post)
r => read(get)
u => update(put)
d => delete(delete)



INSERT(POST)
db.dbname.insert({key:"value"})
db.dbname.insertOne({key:"value"})

GET/VIEW
db.dbname.find()
db.dbname.find(quiryBuilder)
db.dbname.find().count()
db.dbname.find().limit(limitCount)
db.dbname.find().skip(skipCount)
db.dbname.find().sort(condition)

UPDATE(PUT)
db.dbname.updateOne({queryBuilder}, {$set:{updateLogic}})

DELETE(DELETE)
db.dbname.remove({queryBuilder})


client:
request params
request query
request body











*/