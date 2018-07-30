let flowers = [
{
	name:"Rose",
	title:"A rose is a type of wine that incorporates some of the color from the grape skins, but not enough to qualify it as a red wine",
	imgURL:"rose.jpg",
	readmoreURL:"https://en.wikipedia.org/wiki/Rose"
},
{
	name:"Lily",
	title:"The lily is a genus of flowering plant",
	imgURL:"lily.jpg",
	readmoreURL:"https://en.wikipedia.org/wiki/Lilium"
},
{
	name:"Tulip",
	title:"Tulips form a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly coloured, generally red, yellow, or white",
	imgURL:"tulip.jpg",
	readmoreURL:"https://en.wikipedia.org/wiki/Tulip"
},
{
	name:"SunFlower",
	title:"Helianthus annuus, the common sunflower, is a large annual forb of the genus Helianthus grown as a crop for its edible oil and edible fruits",
	imgURL:"sun.jpg",
	readmoreURL:"https://en.wikipedia.org/wiki/Helianthus"
},
{
	name:"WindFlower",
	title:"wind flower",
	imgURL:"windflower.JPG",
	readmoreURL:"https://en.wikipedia.org/wiki/Windflower"
},
{
	name:"Yellowbell",
	title:"Allamanda is a genus of flowering plants in the dogbane family, Apocynaceae. They are native to the Americas, where they are distributed from Mexico to Argentina",
	imgURL:"yellowbell.jpg",
	readmoreURL:"https://en.wikipedia.org/wiki/Allamanda"
},
{
	name:"Dafodill",
	title:"Narcissus is a genus of predominantly spring perennial plants of the Amaryllidaceae family. Various common names including daffodil, daffadowndilly, narcissus, and jonquil are used to describe all or some members of the genus",
	imgURL:"defodill.jpg",
	readmoreURL:"https://en.wikipedia.org/wiki/Narcissus_(plant)"
},
{
	name:"Hollyhocks",
	title:"Alcea is a genus of about 60 species of flowering plants in the mallow family Malvaceae, commonly known as the hollyhocks. They are native to Asia and Europe",
	imgURL:"hollyhock.jpg",
	readmoreURL:"https://en.wikipedia.org/wiki/Alcea"
}
]

function initialize(){
	let listEl = document.querySelector(".flowers-list");
	for (let i = 0; i < flowers.length; i++) {
		listEl.innerHTML +=	
		`
		<div class="flowers-img-div" 
		style="background-image: url('images/${flowers[i].imgURL}')"
		onclick="changeflow(${i})">
		<p id="para" onclick="changeDetails(${i})">${flowers[i].name}</p>
		</div>


		`
	}
}

function changeDetails(indexNumb) {
	document.querySelector("#flower-name").innerHTML = flowers[indexNumb].name;
	document.querySelector("#flower-title").innerHTML = flowers[indexNumb].title;
	document.querySelector("#flower-img").style =`background-image:url(images/${flowers[indexNumb].imgURL})`;
	document.querySelector("#flowers-link").href = flowers[indexNumb].readmoreURL;
}





