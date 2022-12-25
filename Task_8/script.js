/* ------------------------------ TASK 8 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let clicks = 0;


function clickAdd() {
  console.log('hello');
  clicks += 1;
  document.getElementById("btn__state").innerHTML = clicks;
  console.log('hello');
};


function clickMin() {
    console.log('hello');
    clicks -= 1;
    document.getElementById("btn__state").innerHTML = clicks;
    console.log('hello');
  };