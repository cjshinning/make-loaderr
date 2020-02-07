const loaderUtils = require('loader-utils');

module.exports = function(source){
    const options = loaderUtils.getOptions(this);
    const callback = this.async();

    setTimeout(function(){
        const result = source.replace('jenny', options.name);
        callback(null, result);
    }, 1000);
}
