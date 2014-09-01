/**
 * @fileOverview
 * @author kaidi.ykd
 */


define()

var Pubsub = {
    handlers: {}
};

Pubsub.on = function(eventType, handler) {
    if (!(eventType in this.handlers)) {
        this.handlers[eventType] = [];
    }

    this.handlers[eventType].push(handler);
};

Pubsub.emit = function(eventType) {
    var handlerArgs = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < this.handlers.length; i++) {
        this.handlers[eventType][i].apply(this, handlerArgs);
    }
    return this;
};
