/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let mid;

    // Handle case where both arrays have one element
    if (m === 1 && n === 1) {
        return (nums1[0] + nums2[0]) / 2;
    }

    // Insert nums2 into nums1
    insert(nums1, nums2, 0, 0);

    // Calculate the median
    if (nums1.length % 2 === 0) {
        mid = Math.floor(nums1.length / 2);
        return (nums1[mid] + nums1[mid - 1]) / 2;
    } else {
        mid = Math.floor(nums1.length / 2);
        return nums1[mid];
    }
};

// Helper function to merge nums2 into nums1
var insert = function(nums1, nums2, startIndexNum1, startIndexNum2) {
    // Base case: stop if nums2 is exhausted
    if (startIndexNum2 >= nums2.length) {
        return;
    }

    // Handle case where nums1 is exhausted
    if (startIndexNum1 >= nums1.length) {
        nums1.push(...nums2.slice(startIndexNum2));
        return;
    }

    // Insert element from nums2 into nums1
    if (nums1[startIndexNum1] < nums2[startIndexNum2]) {
        insert(nums1, nums2, startIndexNum1 + 1, startIndexNum2);
    } else {
        nums1.splice(startIndexNum1, 0, nums2[startIndexNum2]);
        insert(nums1, nums2, startIndexNum1 + 1, startIndexNum2 + 1);
    }
};
