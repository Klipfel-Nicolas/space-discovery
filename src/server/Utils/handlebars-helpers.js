module.exports = {
    inc: function(value){
        return parseInt(value) + 1;
    },

    removeSpace: function(string){
        return string.replace(/\s/g, '');
    }
}