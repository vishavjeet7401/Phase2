//function to add new task to the list
function newThingtoDo() {
    let li = document.createElement("li"); // this will create new item
    let textarea = document.getElementById("inputtext").value; // this captures the value from input field
    let createli = document.createTextNode(textarea);// this adds the new value entered to the list.
    li.appendChild(createli); // ths display typed task in the list
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");// add  checkbox when new item is added.
    checkbox.setAttribute('onclick', 'playSound()');// newEventListener to add sound.
    li.appendChild(checkbox);// checkbox in the list
    document.getElementById("inputtext").value = ""; // this clear the space when user click add button
    if (textarea === '') { // this says the message when the value in the field is not entered.
        alert("Enter something Human!");
    } else {
        document.getElementById("schedule").appendChild(li);
    }
    let demolish = document.createElement("delete");
    let deleteButton = document.createElement("button"); // this add a delete button.
    deleteButton.innerHTML = "Delete";// this helps to delete the item
    demolish.className = "Remove";// remove item
    demolish.appendChild(deleteButton);
    li.appendChild(demolish);
    //delete item from the list 
    let deleteIT = document.getElementsByClassName("Remove");
    let iterator;
    for (iterator = 0; iterator < deleteIT.length; iterator++) {
        deleteIT[iterator].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        };
    }
}
// function to play beep sound when checkbox is checked
function playSound(){
  let myAudio = new Audio('asmr.wav');
  myAudio.play();
}

addButton.onclick = newThingtoDo;

let locationBtn = document.getElementById("locationButton");
	let para = document.getElementById("maps");
	let button = document.querySelector("button");
	let mapLink = document.getElementById("map-link");

	mapLink.href = "";
	mapLink.textContent = "";

	function getLocation() {
	
		if (!navigator.geolocation) {
			para.textContent = "Geolocation is not supported by your browser";
		} else {
			para.textContent = "Locating…";
			navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
		}
	}

	function showPosition(position) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		para.textContent = "";
		mapLink.textContent = "Check out the map!";
		mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
		mapLink.textContent = "View The Map!";
	}

	function errorMsg() {
		para.textContent = "Sorry, something went wrong!";
	}

	locationBtn.onclick = getLocation;