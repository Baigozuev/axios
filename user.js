const hero = document.querySelector(".hero")


fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => res.json()).then((data)=>{
console.log(data);
data.map((el) => hero.innerHTML += `<div class = "block">
<img src = "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png" alt = "img" class = "imgscript">
<h1> Name ${el.name}</h1>
<h2> userName${el.userName}</h2>
<h3> adress${el.address.city}</h3>
<a href="tel${el.phone}">${el.phone}</a>


</div>`)
})