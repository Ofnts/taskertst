//---------------------------Get the required elements from the DOM-----------

const input = document.querySelector(".in")
const data = document.querySelector("#out")
const add = document.querySelector(".add")
const del = document.querySelector(".del")

//------------------------------Create Elements and logic functions--------------

function createElements(e){
	e = input.value
	const list = document.createElement('li')
	const bin = document.createElement('img')
	const box = document.createElement('input')
	const time = document.createElement('p')
	const done = document.createElement('img')
	const container = document.createElement('div')
	done.setAttribute("src", "./ok.svg")
	let date = new Date()
	let Hours = date.getHours()
	let Minutes = date.getMinutes()
	let Seconds = date.getSeconds()
	let Year = date.getFullYear()
	let Month = date.getDate()
	let Day = date.getDay()
	time.textContent = "created "+
	"("+Year+"-"+Month+"-"+Day+") "+"@ "+
	+Hours+ ":" +Minutes+ ":" +Seconds 
	time.append(done)
	list.textContent = e
	list.append(time)
	bin.setAttribute("src", "./trash.svg")
	box.setAttribute("type", "checkbox")
	
	

	container.appendChild(list)
	container.prepend(bin)
	container.append(box)
	data.append(container)
	container.querySelectorAll(".save")
	input.value = ""

//--------------------Check to highlight when tasks are completed----------------------

function completedtask(){
	container.onchange = function(d){
		if(d.target.checked){
			list.style.textDecoration = "line-through"
			list.style.color = "red"
		}else{
			list.style.textDecoration = "none"
			list.style.color = "white"
		}
	}
}
function manageInputField(){
	if(e == ""){
		data.removeChild(container)
		alert("Input Empty")
		}
	}

(function(){
	let store = []
	let saved = localStorage.setItem("saved", JSON.stringify(list.textContent))
	store += saved
})();
//--------------------Load Function------Delete using Bin

	bin.onclick = () => {data.removeChild(container)}
	completedtask()
	manageInputField()
}

//---------------------------------------Add Events to the window----------------------------
function addToScreen(){
	add.addEventListener('click', createElements)
	input.addEventListener('keypress', function(){
		if(event.key === "Enter"){createElements()}})
}
addToScreen()


