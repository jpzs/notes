module.exports = {
    clone: function fn(initObj, finalObj = {}) {
        Object.keys(initObj).map(k => {
            var value = initObj[k];
            switch (Object.getPrototypeOf(value)) {
                case Array.prototype:
                    fn(value, finalObj[k] = []);
                    break;
                case Object.prototype:
                    finalObj[k] = Object.create(value);
                    break;
                default:
                    finalObj[k] = value;
                    break;
            }
        });
        return finalObj;
    }
}