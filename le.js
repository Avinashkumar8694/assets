/** @param {Object} window */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous module.
        define(function() {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        if (typeof global === 'object') {
            // Browserify. The calling object `this` does not reference window.
            // `global` and `this` are equivalent in Node, preferring global
            // adds support for Browserify.
            root = global;
        }
        module.exports = factory(root);
    } else {
        // Browser globals (root is window)
        root.NRenderer = factory(root);
    }
}(this, function(window) {
    "use strict";
    function getMessage(){
        return "this is js message."
    }
}));
