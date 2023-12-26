"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2) {
    // Combine two collections in to an unsorted collection
    var combinedCollection = __spreadArray(__spreadArray([], collection_1, true), collection_2, true);
    // Perform bubble sort
    for (var i = 0; i < combinedCollection.length; i++) {
        for (var j = i + 1; j < combinedCollection.length; j++) {
            // swap place of two numbers in the collection to ascending order
            if (combinedCollection[i] > combinedCollection[j]) {
                var temp = combinedCollection[i];
                combinedCollection[i] = combinedCollection[j];
                combinedCollection[j] = temp;
            }
        }
    }
    // return the sorted collection
    return combinedCollection;
}
exports.merge = merge;
