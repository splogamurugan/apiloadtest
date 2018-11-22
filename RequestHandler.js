var url = require('url');


let RequestHandler = function(adr, method='GET') {
    this.https = adr.startsWith('https') ? require('https') : require('http');
    this.method = method;
    this.urlobj = url.parse(adr, true);
    this.headers = [];
}

RequestHandler.prototype.options = function() {
    
    let options =  {
        "method": this.method,
        "hostname": this.urlobj.hostname,
        "port": this.urlobj.port,
        "path": this.urlobj.path,
        "headers": {
          "content-type": "application/json",
          "accept": "application/json, text/javascript, */*; q=0.01",
        }
    };

    this.headers.forEach((header) => {
        options.headers[Object.keys(header)[0]] = header[Object.keys(header)[0]];
    });
    return options;
}

RequestHandler.prototype.setHeaders = function(key, value) {
    let header = {};
    header[key] = value;
    this.headers.push(header)
    return this;
}

module.exports = RequestHandler;