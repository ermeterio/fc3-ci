const index = require ('./index')

function TestSum1()
{
   return index.Sum(3,4)
}

function TestSum2()
{
   return index.Sum(5,4)
}

console.log(TestSum1())

console.log(TestSum2())