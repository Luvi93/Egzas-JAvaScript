/* ------------------------------ TASK 6 --------------------------------------------
Sukurkite duomenu masyva, kuriame butu talpinami duomenys apie studentus:
1. Vardas
2. Pavarde
3. Amzius
4. Studijavimo datos pradzia

Turint siuos duomenis atlikti filtravima pagal studijavimo datos pradzia. Pavyzdziui,
norime matyti studentus kurie pradejo studijuoti nuo 2022-03-10. Si pasirinkima vartotojas atlieka
paprastu inputu. Filtravimas ivyksta tik tada kai vartotojas paspaudzia mygtuka Submit

P.S Reikalingus HTML elementus prisideti, kaip input, output ir tt
------------------------------------------------------------------------------------ */
class Student{
    constructor(firstName, lastName, age, startDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.startDate = startDate;
    }
}

const button = document.getElementById('button');

renderData(generateData());

btn.addEventListener("click", function(){
    renderSortedData()
});

function renderData(dataArray){
    renderAllData = '';
    for (const element of dataArray) {
        cardTemplate = `<div class="card">
        <h1>Vardas: ${element.firstName}</h1>
        <h2>Pavarde: ${element.lastName}</h2>
        <h2>Amzius: ${element.age}</h2>
        <h2>Data: ${element.startDate}</h2>
        </div>`;
        renderAllData = renderAllData + cardTemplate
      }
    document.getElementById("demo").innerHTML = renderAllData;
}

function renderSortedData() {
    document.getElementById("demo").innerHTML = "";
    sortedArray = sortData(generateData());

    renderData(sortedArray);
}

function generateData() {
    let dataArray = [];

    for (let i = 0; i < 5; i++){
        var startDate = new Date();
        startDate.setDate(startDate.getDate() - i);

        dataArray.push(
            new Student('vardas' + i, 'pavarde' + i, i, startDate.toLocaleDateString())
        );
    }

    return dataArray;
}

function sortData(dataArray) {
    dataArray.sort(function(a,b){
        return a.startDate.localeCompare(b.startDate)
    })

    return dataArray;
}
