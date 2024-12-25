/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let temp = l1;
    
    let list1 = [];
    let list2 = [];

    while(temp != null){
        list1.push(temp.val)
        temp = temp.next
    }

    temp = l2;

    while(temp != null){
        list2.push(temp.val)
        temp = temp.next
    }

    list1.reverse();
    list2.reverse();

    let number1 = list1.join("");
    let number2 = list2.join("");

    number1 = BigInt(number1);
    number2 = BigInt(number2);

    let result = number1 + number2;

    const digitsArray = result.toString().split('').map(Number);

    digitsArray.reverse();

    let resultLinkedList = new ListNode();
    let head = resultLinkedList;

    digitsArray.forEach((digit, index) => {
        resultLinkedList.val = digit;
        if (index < digitsArray.length - 1) {
            resultLinkedList.next = new ListNode();
            resultLinkedList = resultLinkedList.next;
        }
    });

    return head;
};