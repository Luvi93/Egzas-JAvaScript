/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
import myJson from "./cars.json" assert {type: 'json'};

const brands = myJson;

// const ENDPOINT = 'cars.json';

const output = document.querySelector("#output");

let brandCardsList = '';
console.log('brands lenght', brands.length)
for(let i = 0; i < brands.length; i++) {
        
    console.log('i=', i)
    console.log('brands[i]', brands[i])
    let obj = brands[i];
    let cardTemplate = `<div class="card2"><hr>
    <h1 class="title">${obj.brand}</h1><br><hr>`;

    let cardModels = "";
    console.log('obj.models.length=', obj.models.length)
    
    for(let y = 0; y < obj.models.length; y++) {
        console.log('y=', y)
        console.log('models[y]', obj.models[y])
        const cardModel = `<h5>${obj.models[y]}</h5>`;
        cardModels = cardModels + cardModel;
    }

    cardTemplate = cardTemplate + cardModels + '</div><br>';
    brandCardsList = brandCardsList + cardTemplate;
}

output.innerHTML = brandCardsList ;

    // const htmlData = [];
    // arr.forEach(el => {
    //     htmlData.push(
    //     <div>
    //         <img style="width:100%" src="${el.url}"/>
    //         <br />
    //         <p style="text-align:center">
    //             ${el.login}
    //         </p>
    //     </div>)
    // });
    // output.innerHTML = htmlData.join("")