define([],function () {

    sumT = function (a, b) {
        return a + b;
    };


    var diff = function (a, b) {
        return a - b;
    };

    return {
        sum : sumT,
        diff: diff
    };

});