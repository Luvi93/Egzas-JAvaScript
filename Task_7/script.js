/* ------------------------------ TASK 7 --------------------------------------------
Kreipiantis i zemiau pateikta resursa gauti siuos duomenis is serverio ir atvaizduoti juos htmle.
T.y. turi buti atvaizduota zinute ir nuotrauka <img>.
Taip pat tinklapyje turi buti atvaizduotas mygtukas, kuri paspaudus butu gaunami nauji duomenys
ir pakeiciami seni.
Taip pat isijungus si tinklapi is naujo turiu matyti ta pati irasa, kuri pries tai buvome gave ir tik paspaudus mygtuka "Refresh"
Turime gauti naujus duomenis.

Hint: naudojamas localstorage, saugoti informacijai;
------------------------------------------------------------------------------------ */

const URL = "https://random.dog/woof.json";

const button = document.querySelector("#btn");
const output = document.querySelector("#output");


    async function getDog() {
        const response = await fetch (URL);
        const data =  await response.json();
        const { fileSizeBytes, url } = data;

        const savedSize = localStorage.getItem('storedSize');
        const savedUrl = localStorage.getItem('storedUrl')
      
        document.getElementById("output").innerHTML =
        `<p class="file-size"> File size in bytes:<span> 
        ${savedSize} </span> </p>
        <img style="width:250px" "align-items:left"; src="${savedUrl}"/>`;

    button.addEventListener('click', function() {
        location.reload();
        localStorage.setItem('storedSize', data.fileSizeBytes);
        localStorage.setItem('storedUrl', data.url);

        })
    }
getDog()