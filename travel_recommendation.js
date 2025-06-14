const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnClear");

function searchDestination(){
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    
}
function clearDestination(){

}
btnSearch.addEventListener('click',searchDestination);
btnSearch.addEventListener('click',clearDestination);


