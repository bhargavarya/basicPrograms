const Node = function(data){
    this.data = data;
    this.next = undefined;
}

const LinkedList = function(){
    this.head = undefined;

    this.add = function(data){
        const node = new Node(data);
        if(this.head === undefined){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next !== undefined){
                current = current.next;
            }
            current.next = node;
        }
    }
    this.addAfterIndex = function(data, index){
        let count = 0;
        let current = this.head;

        while(count < (index) && current.next !== undefined){
            current = current.next;
            count++;
        }
        let tempNode = current.next;
        current.next = new Node (data);
        current.next.next = tempNode;
    }
}

const linkedlist = new LinkedList();

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.add(4);
linkedlist.addAfterIndex(7,2);
console.log(JSON.stringify(linkedlist,null,2));
