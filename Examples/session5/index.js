let a = 1
let b = 'ahihidongoc'
let c = true
let d
let okoto ={
    name: 'Vo Van Truong',
    age: 20,
    gender: true
    

}
let arr = [1,2,3,4,5]

console.log(a);
console.log(b);
console.log('TrangStupid',c);
console.log(okoto);
console.log(okoto.age);
console.log(arr);
console.log(arr[1]);

let n1 = 0
function rs() {
    n1 += 1
    console.log(n1)
    
}



window.onload = function (e) {
    getListUsers();
  };

function getListUsers() {
    fetch(
      "https://634e9e69f34e1ed8269171ce.mockapi.io/products?page=1&limit=10",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }