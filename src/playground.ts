import { SimplyLinkedList } from "./dsa/data_structures/simply_linked_list";

const list = new SimplyLinkedList<number>();

list.append(10);
console.log(list.get(0)); // 10

list.append(20);
console.log(list.get(1)); // 20

list.append(30);
console.log(list.get(2)); // 30

list.prepend(9);
console.log(list.get(0)); // 9

list.prepend(8);
console.log(list.get(0)); // 8

console.log(list.get(2)); // 10
