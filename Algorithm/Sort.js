/**
 * Created by Jack on 4/3/2014.
 */


var select_sort = function(array)
{
    for (var i = 0; i < array.length - 1; i++)
    {
        var min = array[i];
        for (var j = i + 1; j < array.length; j++)
        {
            if (min > array[j])
            {
                var temp = min;
                min = array[j];
                array[j] = temp;
            }
        }
        array[i] = min;
    }
};

var bubble_sort = function(array)
{
    for (var i = 0; i < array.length - 1; i++)
    {
        for (var j = 0; j < array.length - i -1; j++)
        {
            if (array[j] > array[j + 1])
            {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
};

var insert_sort = function(array)
{
    for (var i = 1; i < array.length; i++)
    {
        var j = i - 1;
        while (j > 0 && array[j + 1] < array[j])
        {
            var temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
            j--;
        }
    }
};

var quick_sort = function(array, start, end)
{
    if (start < end)
    {
        var guard = array[start];
        var guard_pos = start;
        for (var i = start + 1; i <= end; i++)
        {
            if (array[i] < guard)
            {
                guard_pos++;
                var temp = array[guard_pos];
                array[guard_pos] = array[i];
                array[i] = temp;
            }
        }
        array[start] = array[guard_pos];
        array[guard_pos] = guard;
        quick_sort(array, start, guard_pos - 1);
        quick_sort(array, guard_pos + 1, end);
    }
};

var merge_sort = function(array, newarray, left, right)
{
    if (left >= right)
    {
        return;
    }
    var mid = Math.floor((left + right) / 2);
    merge_sort(array, newarray, left, mid);
    merge_sort(array, newarray, mid + 1, right);

    for (var i = left; i <= right; i++)
    {
        newarray[i] = array[i];
    }

    var s1 = left;
    var s2 = mid + 1;
    var t = left;
    while (s1 <= mid && s2 <= right)
    {
        if (newarray[s1] <= newarray[s2])
        {
            array[t++] = newarray[s1++];
        }
        else
        {
            array[t++] = newarray[s2++];
        }
    }
    while (s1 <= mid) array[t++] = newarray[s1++];
    while (s2 <= right) array[t++] = newarray[s2++];
};



var array = [21, 25, 40, 25, 16, 08, 31, 41, 48];
/*
var swap = function(a, b)
{
    var temp = a;
    a = b;
    b = temp;
}

var a = 10;
var b = 6;

swap(a, b);*/

var newarray = new Array();
merge_sort(array, newarray, 0, 8);



for (var i = 0; i < array.length; i++)
{
    console.log(array[i]);
}

