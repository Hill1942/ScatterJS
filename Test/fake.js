/**
 * @fileOverview
 * @author kaidi.ykd
 */


define(function() {
    return {
        readFile: function(filepath, callback) {
            console.log("read " + filepath);
            setTimeout(function() {
                console.log("read " + filepath + "done!");
                callback();
            }, 1000);
        },

        writeFile: function(filepath, callback) {
            console.log("write " + filepath);
            setTimeout(function() {
                console.log("write " + filepath + "done!");
                callback();
            }, 1000);
        },

        ajax: function(options) {

        },

        fs_readFile: function(file, encoding, callback) {
            var promise = new Promise();
            fs.readFile(function(err, data) {})
            if (err) {
                promise.reject();
            } else {
                promise.resolve(data);
            }
            return promise;
        },

        function fs_readFile (file, encoding, callback) {
        var deferred = Q.defer()
        fs.readFile(function (err, data) {
            if (err) deferred.reject(err) // rejects the promise with `er` as the reason
            else deferred.resolve(data) // fulfills the promise with `data` as the value
        })
        return deferred.promise.nodeify(callback) // the promise is returned
    }



    };
});
 