/**
 * @fileOverview
 * @author kaidi.ykd
 */


require.config({
    paths: {
        "sort": "../Utils/sort"
    }
});

require(["sort"], function(sort) {
    var array = [1, 5, 2, 8, 9, 3, 11, 7];
    sort.sort(array, 0, array.length - 1);
    console.log(array);

});