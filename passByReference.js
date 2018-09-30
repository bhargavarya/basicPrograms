const Node = function (a) {
    this.a = a
}

function swap(nodeA, nodeB) {
    let temp = nodeA.a
    nodeA.a = nodeB.a
    nodeB.a = temp
}

const nodeA = new Node(2)
const nodeB = new Node(3)

console.log(nodeA.a + ' ' + nodeB.a)
swap(nodeA, nodeB)
console.log(nodeA.a + ' ' + nodeB.a)

function swap2(a, b) {
    let temp = a
    a = b
    b = temp
}

let a = 2
let b = 3

console.log(a + ' ' + b)
swap(a, b)
console.log(a + ' ' + b)

a = {
    number: 2,
    num: 5,
    abc: 3
}
b = {
    number: 3
}

function swap3(json1, json2) {
    

    let temp = json1.number
    json1.number = json2.number
    json2.number = temp

}


console.log(a)
console.log(b)
swap3(a, b)

console.log(a)
console.log(b)
