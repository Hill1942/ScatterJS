/**
 * @fileOverview
 * @author kaidi.ykd
 */


define(function() {

    var Pubsub = {
        handlers: {}
    };

    Pubsub.on = function(eventType, handler) {
        if (!(eventType in this.handlers)) {
            this.handlers[eventType] = [];
        }
        this.handlers[eventType].push(handler);
    };

    Pubsub.off = function(eventType, handler) {
        if (this.handlers[eventType] == undefined) {
            throw new Error("event: '" + eventType.toString() + "' has not been registered")
        }
        if (handler == undefined) {
            this.handlers[eventType] = [];
            delete this.handlers[eventType];
        } else {
            for (var i = 0; i < this.handlers[eventType].length; i++) {
                if (handler == this.handlers[eventType][i]) {
                    this.handlers[eventType][i] = null;
                    this.handlers[eventType].splice(i, 1);
                    break;
                }
            }
        }
    };

    Pubsub.emit = function(eventType) {
        var handlerArgs = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < this.handlers[eventType].length; i++) {
            this.handlers[eventType][i].apply(this, handlerArgs);
        }
        return this;
    };

    return Pubsub;
});


