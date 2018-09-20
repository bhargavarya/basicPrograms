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
    this.removeAtIndex = function(index){
        if(index === 0){
            this.head = this.head.next;
        }else{
            let current = this.head;
            let counter = 0;
            while(counter < (index-1)){
                current = current.next;
                counter++;
            }
            current.next = current.next.next;
        }
    }

    this.insertBefore = function(index,value){
        let current = this.head;
        let counter = 0;
        if(index === 0){
            current = new Node(value);
            current.next = this.head;
            this.head = current;
        }
        while(counter < (index-1)){
            current = current.next;
        
        let tempNode = current.next;
        current.next = new Node(value);
        current.next.next = tempNode;
        }
    }
}

const linkedlist = new LinkedList();

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.add(4);
linkedlist.removeAtIndex(3);
linkedlist.insertBefore(0,2);
console.log(JSON.stringify(linkedlist,null,2));