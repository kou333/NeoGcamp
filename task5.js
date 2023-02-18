var readlineSync=require('readline-sync');

var age=readlineSync.question('enter the age');

if (age>25) {
  console.log('YES')
} else {
  console.log('NO')
}