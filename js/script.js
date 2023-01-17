$(document).ready(function () {
    drawPic(data);
})

let floName;

for (let i = 0; i < document.querySelectorAll(".forBtn").length; i++) {
    document.querySelectorAll(".forBtn")[i].addEventListener("click", function () {
        floName = this.innerHTML;
        forFilter(floName);
    })
}

function forFilter() {
    let floNamePro = data.filter((elem) => {
        if (floName === elem.for){
            return true;
        }
    })
    drawPic(floNamePro)
}


let devName;

for (let i = 0; i < document.querySelectorAll(".devBtn").length; i++) {
    document.querySelectorAll(".devBtn")[i].addEventListener("click", function () {
        devName = this.innerHTML;
        devFilter(devName);
    })
}




function devFilter() {
    let devPro = data.filter((elem) => {
        if (devName === elem.developments){
            return true;
        }
    })
    drawPic(devPro)
}


let brendName;

for(let i = 0; i < document.querySelectorAll(".brendBtn").length; i++){
    document.querySelectorAll(".brendBtn")[i].addEventListener('click', function(){
        brendName = this.innerHTML;
        brendFilter(brendName)
    })
}

function brendFilter(){
    let brendPro = data.filter((elem) => {
        if(brendName === elem.brend){
            return true
        }
    })
    drawPic(brendPro)
}



let rarName; 
for (let i = 0; i < document.querySelectorAll('.rarBtn').length; i++) { 
  document.querySelectorAll(".rarBtn")[i].addEventListener('click', function () { 
    rarName = this.innerHTML; 
    rarfilter(rarName) 
  }) 
}; 



function rarfilter() { 
    let praicePro = data.filter((elem) => { 
       if (rarName === "1-5") { 
        if (elem.rarity >= 1 && elem.rarity <= 5) { 
          return true 
        } else { 
          return false 
        } 
      } else if (rarName === "5-10") { 
        if (elem.rarity >= 5 && elem.rarity <= 10) { 
          return true 
        } else { 
          return false 
        } 
      } 
    }) 

    drawPic(praicePro) 
}




let priceName; 
for (let i = 0; i < document.querySelectorAll('.price').length; i++) { 
  document.querySelectorAll(".price")[i].addEventListener('click', function () { 
    priceName = this.innerHTML; 
    pricefilter(priceName) 
  }) 
}; 


function pricefilter() { 
    let praicePro = data.filter((elem) => { 
       if (priceName === "0$-50$") { 
        if (elem.price >= 0 && elem.price <= 50) { 
          return true 
        } else { 
          return false 
        } 
      } else if (priceName === "50$-100$") { 
        if (elem.price >= 50 && elem.price <= 100) { 
          return true 
        } else { 
          return false 
        } 
      } else if(priceName === "100$-200$"){
        if(elem.price >= 100 && elem.price <= 200) {
            return true
        }else{
            return false
        }
      }
    }) 

    drawPic(praicePro) 
}






let collectionName;

for(let i = 0; i < document.querySelectorAll(".collection").length; i++){
    document.querySelectorAll(".collection")[i].addEventListener('click', function(){
        collectionName = this.innerHTML;
        collectFilter(collectionName)
    })
}

function collectFilter(){
    let collectionPro = data.filter((elem) => {
        if(collectionName === elem.collection){
            return true
        }
    })
    drawPic(collectionPro)
}



let seasonName;

for(let i = 0; i < document.querySelectorAll(".seasonCol").length; i++){
    document.querySelectorAll(".seasonCol")[i].addEventListener('click', function(){
        seasonName = this.innerHTML;
        seasonFilter(seasonName)
    })
}

function seasonFilter(){
    let seasonPro = data.filter((elem) => {
        if(seasonName === elem.season){
            return true
        }
    })
    drawPic(seasonPro)
}






function drawPic(arr) {
    let formatted = '';


    arr.forEach(function (item, index) {
        formatted += `
        <div class="card" style="width: 18rem;">
  <img src="${item.img}" style="height: 250px; width: 100%;" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.collection}</h5>
    <h5 class="card-title">${item.brend}</h5>
    <p class="card-text">цена : ${item.price}$</p>
    <p class="card-text">${item.for}</p>
    <p class="card-text">${item.developments}</p>
    <p class="card-text">${item.season}</p>
    <p class="card-text">this is rarity : ${item.rarity}</p>
  </div>
</div>
        
        `
        $('#flowers').empty();
        $('#flowers').append(formatted);
    })
}

