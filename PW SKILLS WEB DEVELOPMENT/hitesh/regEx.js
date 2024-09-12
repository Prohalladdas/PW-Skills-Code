let pattern ='pw';
let regExOne =new RegExp(pattern)

let flag = 'gi'
let regExTwo = new RegExp(pattern,flag)

let regExThree = /pw/gi

const strToCheck ="This is pw and another Pw and final PWskills"

const result = regExThree.test(strToCheck)
console.log(result);

const anotheResult = strToCheck.match(regExThree)
console.log(anotheResult);

const anotheMoreResult = strToCheck.replace(regExThree,'p=w')
console.log(anotheMoreResult);

const webLink ="https://pwskills.com/naruto%90uzumaki"
const usableLink = webLink.replace(/%\d\d/,'_')

console.log(usableLink);