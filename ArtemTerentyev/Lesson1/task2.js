// Create a JS implementation of quick sort algorithm

function quicksort(array) {
    if (array.length < 2) return array;
    let pivot = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) left.push(array[i]);
        else right.push(array[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
}