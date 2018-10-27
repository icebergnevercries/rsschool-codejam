module.exports = function make(...s) {
    let str = s.length > 1 ? s.join(',') + ',' : `${s}` + ',';

    const f = (...b) => {
        if(typeof(b[0]) === 'function')
        {
            str = str.substring(0, str.length - 1);
            return str.split(',').reduce(function(cV, pV){return b[0](+cV, +pV);});
        }
        else{            
            str += b.length > 1 ? b.join(',') + ',' : b + ',';
            return f;
        }        
    }

    f.toString = function() {
        return str;
    };

    return f;
}