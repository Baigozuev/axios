
const breeds = document.querySelector(".dogs")
const seldog = document.querySelector(".seldog")
const breedsImg = document.querySelector(".breedsImg")





function getAll (){

axios(`https://dog.ceo/api/breeds/list/all`).then ((res) => {
    console.log(Object.keys(res.data.message));
    Object.keys(res.data.message).filter((el) => el.length > 7).map((el) => {
    breeds.innerHTML += ` <button class="btn">${el}</button>`
       seldog.innerHTML += `<option>${el}</option>`
    })
}).then(() =>btn())
}
 getAll()

 function btn (){
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((btn,idx) => {
        btn.addEventListener("click",() => getImg(btn.innerHTML))
    })
 }

 seldog.addEventListener("change",(e) => {
getImg(e.target.value)
 })

 function getImg(name){
    axios(`https://dog.ceo/api/breed/${name}/images/random`).then ((res) =>{
        console.log(res.data.message);
        breedsImg.innerHTML = `<img src ="${res.data.message}" alt="img"/>`
    })

 }
