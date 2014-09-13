/**
 * @fileOverview
 * @author kaidi.ykd
 */

define(function() {
    var remove_duplication1 = function(array) {
        var diffs = [];
        diffs.push(array[0]);
        for (var i = 1; i < array.length; i++) {
            for (var j = 0; j < diffs.length; j++) {
                if (array[i] == diffs[j]) {
                    break;
                }
                if (j == diffs.length - 1) {
                    diffs.push(array[i]);
                    break;
                }
            }
        }
        return diffs;
    };

    var remove_duplication2 = function(array) {
        var diffs = [];
        diffs.push(array[0]);
        for (var i = 1; i < array.length;) {
            for (var j = 0; j < diffs.length; j++) {
                if (array[i] == diffs[j]) {
                    array.splice(i, 1);
                    break;
                }
                if (j == diffs.length - 1) {
                    diffs.push(array[i]);
                    i++;
                    break;
                }
            }
        }
    };

    var remove_duplication = function(array, isNew) {
        if (isNew) {
            return remove_duplication1(array);
        } else {
            return remove_duplication2(array);
        }
    }

    var rand_permutation = function(array) {
        var index = [];
        for (var i = 0; i < array.length; i++) {
            index[i] = i;
        }

        for (var k = 1; k < index.length; k++) {
            var rid = Math.floor(Math.random() * (index.length - k)) + k;
            var temp = index[k - 1];
            index[k - 1] = index[rid];
            index[rid] = temp;
        }

        var result = [];
        for (var j = 0; j < array.length; j++) {
            result[j] = array[index[j]];
        }
        return result;
    };

    return {
        rmDuplicate: remove_duplication,
        randPermutaion: rand_permutation
    }
});

