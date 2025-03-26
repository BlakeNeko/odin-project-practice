import LinkedList from './linkedList.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());
console.log(list.at(3).value);
console.log(list.contains('cat'));
console.log(list.find('cat'));
console.log(list.pop().value);
