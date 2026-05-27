/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    reverseList(head: ListNode | null): ListNode | null {

        let prev = null
        let curr = head

        while (curr) {

            let next = curr.next   // 1. nhớ đường đi tiếp

            curr.next = prev       // 2. đảo mũi tên

            prev = curr            // 3. dịch prev
            curr = next            // 4. đi tiếp
        }

        return prev
    }
}
