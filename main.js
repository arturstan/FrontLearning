// alert("hej!");
console.log("hej konsola");


const fillJS = document.querySelector('.paragraph--js');
// console.log(fillJS);
fillJS.innerHTML = "Testuję wypełnianie przez JS";

console.log(imieNazwisko('Artur', 'Stanaszek'));

function imieNazwisko(imie, nazwisko){
	return imie + ' ' + nazwisko;
}