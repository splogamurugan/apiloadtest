
let RequestHandler = require('./RequestHandler');
let ResponseHandler = require('./ResposeHandler')
let LoadTest = require('./LoadTest')


var req = new RequestHandler(
    "http://localhost:8081/uat01/rest/v11_3/metadata/public",
    "GET"
);

new LoadTest(
    req, 
    new ResponseHandler()
)
.concurrency(10)
.run()
.result();