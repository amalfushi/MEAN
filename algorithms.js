// // 10.30
    function SLL(){
        this.head = null;
    }
    function Node(val){
        this.val = val;
        this.next = null;
    }

    SLL.prototype.add = function(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        return this;
    }

//     SLL.prototype.reverse = function(){
//         if(!this.head){
//             return;
//         }
//         let prev = null;
//         let at = this.head;
//         let upcoming = this.head.next;

//         while (upcoming) {
//             at.next = prev;
//             prev = at;
//             at = upcoming;
//             upcoming = upcoming.next;
//         }
//         at.next = prev;
//         this.head = at;
//     }

    x = new SLL()
    x.add(1).add(2).add(3).add(4).add(5)
//     x.reverse()
//     console.log(x)

10.31
SLL.prototype.hasLoop = function(){
    var run = this.head;
    if (!this.head.next || !this.head.next.next) {
        return false;
    }
    var jumper = this.head.next.next;
    while (jumper){
        if (jumper == run){
            return true;
        }
        if (!jumper.next || !jumper.next.next) {
            return false;
        }
        jumper = jumper.next.next;
        run = run.next;
    }
}

// x.head.next.next.next.next = x.head.next.next;
// console.log(x.hasLoop());

// SLL.prototype.severloop = function(){
//     if (hasLoop){

//     }
// }

SLL.prototype.isPalindrome = function(){
    var length = 0;
    var runner = this.head;
    var result = true;
    var count = 0;
    function helper(cur){
        console.log(cur)
        if (cur.next){
            length ++;
            helper(cur.next);
        }
        if(count > length/2){
            return result;
        }
        if(runner.val !=cur.val){
            result = false;
        }
        runner = runner.next;
        count++;
    }
    helper(this.head);
    return result;
}

var x = new SLL();
x.add("t").add("a").add("c").add("o").add("c").add("a").add("t")

console.log(x.isPalindrome());