/**
 * Created by Ed on 02/01/2017.
 */

(function () {

    function install (Vue, options) {

        var _this       = this;
        _this.routes    = options.routes;

        Vue.prototype.parseRoute = function(route, params) {
            var href    = _this.routes[route];

            for (var prop in params) {
                href    = href.replace("{" + prop + "}", params[prop]);
            }

            return href;
        }
    }

    if (typeof exports == "object") {
        module.exports = install
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return install })
    } else if (window.Vue) {
        Vue.use(install)
    }

})();