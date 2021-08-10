const manipulateString = (() => {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function reverse(string) {
        return string.split('').reverse().join('');
    }

    return {
        capitalize,
        reverse,
    };
})();

module.exports = manipulateString;
