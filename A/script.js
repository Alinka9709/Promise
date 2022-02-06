const getDataOne = async(items) => {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    data = await data.json()
    console.log(data)
}
getDataOne()



const getDataTwo = async() =>{
let data = await fetch('https://jsonplaceholder.typicode.com/comments')
data = await data.json()
console.log(data)
}
getDataTwo()



const getDataThree = async() => {
let data = await fetch('https://jsonplaceholder.typicode.com/albums')
data = await data.json()
console.log(data)
}
getDataThree()



async function getDataFour() {
let data = await fetch('https://jsonplaceholder.typicode.com/photos')
data = await data.json()
console.log(data)
}
getDataFour()



async function getDataFive() {
let data = await fetch('https://jsonplaceholder.typicode.com/todos')
data = await data.json()
console.log(data)
}
getDataFive()



async function getDataSix() {
let data = await fetch('https://jsonplaceholder.typicode.com/users')
data = await data.json()
console.log(data)
}
getDataSix()