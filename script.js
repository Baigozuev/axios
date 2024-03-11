


const root = document.querySelector(".root");
const input = document.querySelector(".search-input")
const btn = document.querySelector(".search-btn")
const region = document.querySelector(".region")
const selectSort = document.querySelector(".sort")


//https://restcountries.com/v3.1/name/{name}//
let all= null
 function getApi (API) {
  axios(`https://restcountries.com/v3.1/${API}`).then((res) => {
    all = res. data
 main(res.data)   
 
});
}
getApi("all")

btn.addEventListener("click", () => {
  getApi(`name/${input.value}`)
  
})
input.addEventListener("input", (e) => {
  getApi(`name${e.target.value}`)
})
function main (country){
  root.innerHTML = ""
  country.map((el) => {
  root.innerHTML += `<div class= "toop">
  <img src="${el.flags.png}" alt="img" >
      <h2>${el.name.common}</h2>
      <h3>${el.continents}</h3>
      <h5>${el.area}кв<sup>2</sup>|| ${el.population}</h5> 
<a href="${el.maps.googleMaps}" target= "blank"> MAP</a>
</div`;    
});
}



region.addEventListener("change",(e) => {
  let target = e.target.value
if (target ==="asia"){
  let res = all.filter((el) => {
    return el.region === "Asia"
  })
  main (res)
} if (target === "europe") {
  let res = all.filter((el) => {
    return el.region === "Europe"
  })
  main(res)
} if (target === "oceania") {
  let res = all.filter((el) => {
    return el.region ==="Oceania"
  })
  main (res)
}
if (target === "africa") {
  let res = all.filter ((el) => {
    return el.region === "Africa"
  })
  main (res)
}

})

selectSort.addEventListener("change", (e) => {
  let target = e.target.value
  if (target === "population") {
    let res = all.sort ((a,b) =>b.population - a.population)
    main (res)
  }
  if (target === "area") {
    let res =all.sort((a,b) => {
      return a.area - b.area
    })
   main(res) 
  }
  if (target === "A-Z"){
    let res = all.sort((a,b) => a.name.common.localeCompare(b.name.common))
    main(res)
  }
  if (target === "Z-A") {
    let res = all.sort((a,b) => b.name.common.localeCompare(a.name.common))
    main(res)
  }
})




