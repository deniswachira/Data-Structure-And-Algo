// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class singlyLikedList {
//     constructor() {
//         this.tail = null;
//         this.head = null;
//         this.length = 0;
//     }
//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     }

// }

// let list = new singlyLikedList();
// list.push(1, 1, 2, 3);
// console.log(list);

function removeDuplicate(list) {
    let temp = head;
    while (temp.val && temp.next.val) {
        if (temp.val == temp.next.val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }
    return head;
}