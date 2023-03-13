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

let listaInserire = [];
let posizioneVedere =[];

for (let i = 0; i < iconList.length; i++) {

    
    containerFlexDom.innerHTML +=
    `
        <div class="iconBox flexBox ${iconList[i].type}">
            <i style = "color: ${iconList[i].color};"  class="pB fa-solid ${iconList[i].prefix}${iconList[i].name}"></i>
            <h3>${iconList[i].name.toUpperCase()}</h3>
        </div>
    `;
    let iconBoxDom = document.querySelector(".iconBox");


   // let pBDom = document.querySelectorAll(".pB");
   // pBDom[i].style.color = iconList[i].color;

    categoriaCambiata.addEventListener("change", function cambioCategoria(){
    let valoreCategoria = categoriaCambiata.value;
    
    
    if (iconList[i].type  == categoriaCambiata.value) {
        listaInserire.push(iconList[i]);
        console.log(listaInserire);
        containerFlexDom.innerHTML = ""; 
        for (let c = 0; i < listaInserire.length; c++) {

    
            containerFlexDom.innerHTML =
            `
                <div class="iconBox flexBox ${listaInserire[c].type}">
                    <i style = "color: ${listaInserire[c].color};"  class="pB fa-solid ${listaInserire[c].prefix}${listaInserire[i].name}"></i>
                    <h3>${listaInserire[c].name.toUpperCase()}</h3>
                </div>
            `;
        }
   

    }




    return valoreCategoria
   } );

    

        
        
}





       



/*function sceltaCategoria(type, currentElement, value) {
    
    

    if (value == "all") {
        //currentElement.classList.add("")
        console.log("if");
        currentElement.innerHTML = "";
        //containerFlexDom.innerHTML
    } else {
        console.log("casa");

    }
    return currentElement;
}

*/