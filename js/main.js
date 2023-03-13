let iconList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const containerFlexDom = document.querySelector(".containerFlex");

const categoriaCambiata = document.getElementById("categories");
const valoreCategoria = categoriaCambiata.value;

for (let i = 0; i < iconList.length; i++) {


    containerFlexDom.innerHTML +=
    `
        <div class="iconBox flexBox ${iconList[i].type}">
            <i style = "color: ${iconList[i].color};"  class="pB fa-solid ${iconList[i].prefix}${iconList[i].name}"></i>
            <h3>${iconList[i].name.toUpperCase()}</h3>
        </div>
    `;
    
    let iconBoxDom = document.querySelector(".iconBox");

    categories.addEventListener("change", sceltaCategoria(iconList[i].type), containerFlexDom, valoreCategoria);

   // let pBDom = document.querySelectorAll(".pB");
   // pBDom[i].style.color = iconList[i].color;
}









function sceltaCategoria(type, currentElement, value) {
    
    console.log(value);

    if (value == type) {
        //currentElement.classList.add("")
        console.log(value);
        containerFlexDom.innerHTML = "";
        //containerFlexDom.innerHTML
    }
    
}