const consoleT = require('console.table');

let ResponseHandler = function () {
    this.responses = [];
}

ResponseHandler.prototype.add = function(timeTaken, start, end, body, id) {
    this.responses[id] 
        = {
            "Request Id": id+1,
            "stime": start,
            'etime': end,
            "Start Time": new Date(start).toTimeString(),
            "End Time": new Date(end).toTimeString(),
            "Body": body.toString().slice(0, 20)+'...', 
            "Time Taken": timeTaken
        };
}

ResponseHandler.prototype.aggregate = function() {
    var sum = 0;
    var end = 0;
    var start = this.responses[0]['stime'];
    for (var i = 0; i < this.responses.length; i++ ) {
        end = end < this.responses[i]['etime'] ? this.responses[i]['etime']: end;
        sum += parseInt( this.responses[i]['Time Taken']); 
    }
    return {"avg time taken per request (sec)": sum/this.responses.length/1000, "total time taken for all request (sec)": parseInt(end-start)/1000};
}

ResponseHandler.prototype.result = function() {
    console.table(this.responses);
    console.table([this.aggregate()]);
}

module.exports = ResponseHandler;