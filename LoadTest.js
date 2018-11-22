
let LoadTest = function(requestHandler, resp) {
    this.requestH = requestHandler;
    this.respH  = resp;
    this.requestCount = 1;
    this.responses = [];
}

LoadTest.prototype.requestP = function(id) {
    
    return new Promise((resolve, reject) => {
        let start = new Date().getTime();
        var req = this.requestH.https.request(this.requestH.options(),  (res) => {
            if (res.statusCode < 200 || res.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + res.statusCode));
            }
            var chunks = [];
            res.on("error", () => {reject(err)});
            res.on("data",  (chunk) => {chunks.push(chunk);});
        
            res.on("end",  () => {
                let end = new Date().getTime();
                this.respH.add(end - start, start,  end, Buffer.concat(chunks), id);
                resolve(true);
            });
        });

        // handle connection errors of the request
        req.on('error', (err) => reject(err))

        req.end();

    });
}

LoadTest.prototype.concurrency = function(req) {
    this.requestCount = req;
    return this;
}

LoadTest.prototype.run = function() {
    this.p = [];
    for (let i=0; i<this.requestCount; i++) {
        this.p.push(this.requestP(i));
    }
    return this;
}

LoadTest.prototype.result = function() {
    Promise.all(this.p).then((values) => {
        this.respH.result();
    }).catch(error => {
        console.log(error.message)
    });
}

module.exports = LoadTest;
