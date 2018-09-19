const binarySearch = (arr, low, high, searchElement) => {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high)/2)
    if (arr[mid] === searchElement) {
        return mid;
    } else if (arr[mid] < searchElement) {
        low = mid + 1;
        return binarySearch(arr, low, high, searchElement);
    } else if (arr[mid] > searchElement) {
        high = mid - 1;
        return binarySearch(arr, low, high, searchElement)
    }
}

console.log(binarySearch([1,2,3,5,6],1,6,4));