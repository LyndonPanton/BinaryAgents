"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function convert(string) {
		let regex = /^[01\s]/g;
		
		if (string === "") {
			display("???");
		} else if (!regex.test(string)) {
			display("Binary string must only contain: 0, 1 or whitespace");
		} else {
			let newString = "";

			for (let i = 0; i < string.split(" ").length; i++) {
		      	switch (string.split(" ")[i]) {
					case "00110000":
		        		newString = newString + "0";
		        		break;
					case "00110001":
		        		newString = newString + "1";
		        		break;
					case "00110010":
				        newString = newString + "2";
				        break;
					case "00110011":
				        newString = newString + "3";
				        break;
					case "00110100":
				        newString = newString + "4";
				        break;
					case "00110101":
				        newString = newString + "5";
				        break;
					case "00110110":
				        newString = newString + "6";
				        break;
					case "00110111":
				        newString = newString + "7";
				        break;
					case "00111000":
				        newString = newString + "8";
				        break;
					case "00111001":
				        newString = newString + "9";
				        break;
					case "01100001":
				        newString = newString + "a";
				        break;
					case "01100010":
				        newString = newString + "b";
				        break;
					case "01100011":
				        newString = newString + "c";
				        break;
		      		case "01100100":
				        newString = newString + "d";
				        break;
		      		case "01100101":
				        newString = newString + "e";
				        break;
		      		case "01100110":
				        newString = newString + "f";
				        break;
		      		case "01100111":
				        newString = newString + "g";
				        break;
		      		case "01101000":
				        newString = newString + "h";
				        break;
		      		case "01101001":
				        newString = newString + "i";
				        break;
		      		case "01101010":
				        newString = newString + "j";
				        break;
		      		case "01101011":
				        newString = newString + "k";
				        break;
		      		case "01101100":
				        newString = newString + "l";
				        break;
		      		case "01101101":
				        newString = newString + "m";
				        break;
		      		case "01101110":
				        newString = newString + "n";
				        break;
		      		case "01101111":
				        newString = newString + "o";
				        break;
		      		case "01110000":
				        newString = newString + "p";
				        break;
		      		case "01110001":
				        newString = newString + "q";
				        break;
		      		case "01110010":
				        newString = newString + "r";
				        break;
		      		case "01110011":
				        newString = newString + "s";
				        break;
		      		case "01110100":
				        newString = newString + "t";
				        break;
		      		case "01110101":
				        newString = newString + "u";
				        break;
		      		case "01110110":
				        newString = newString + "v";
				        break;
		      		case "01110111":
				        newString = newString + "w";
				        break;
		      		case "01111000":
				        newString = newString + "x";
				        break;
		      		case "01111001":
				        newString = newString + "y";
				        break;
		      		case "01111010":
				        newString = newString + "z";
				        break;
		      		case "01000001":
				        newString = newString + "A";
				        break;
		      		case "01000010":
				        newString = newString + "B";
				        break;
		      		case "01000011":
				        newString = newString + "C";
				        break;
		      		case "01000100":
				        newString = newString + "D";
				        break;
		      		case "01000101":
				        newString = newString + "E";
				        break;
		      		case "01000110":
				        newString = newString + "F";
				        break;
		      		case "01000111":
				        newString = newString + "G";
				        break;
		      		case "01001000":
				        newString = newString + "H";
				        break;
		      		case "01001001":
				        newString = newString + "I";
				        break;
		      		case "01001010":
				        newString = newString + "J";
				        break;
		      		case "01001011":
				        newString = newString + "K";
				        break;
		      		case "01001100":
				        newString = newString + "L";
				        break;
		      		case "01001101":
				        newString = newString + "M";
				        break;
		      		case "01001110":
				        newString = newString + "N";
				        break;
		      		case "01001111":
				        newString = newString + "O";
				        break;
		      		case "01010000":
				        newString = newString + "P";
				        break;
		      		case "01010001":
				        newString = newString + "Q";
				        break;
		      		case "01010010":
				        newString = newString + "R";
				        break;
		      		case "01010011":
				        newString = newString + "S";
				        break;
		      		case "01010100":
				        newString = newString + "T";
				        break;
		      		case "01010101":
				        newString = newString + "U";
				        break;
		      		case "01010110":
				        newString = newString + "V";
				        break;
		      		case "01010111":
				        newString = newString + "W";
				        break;
		      		case "01011000":
				        newString = newString + "X";
				        break;
		      		case "01011001":
				        newString = newString + "Y";
				        break;
		      		case "01011010":
				        newString = newString + "Z";
				        break;
		      		case "00100000":
				        newString = newString + " ";
				        break;
		      		case "00100001":
				        newString = newString + "!";
				        break;
		      		case "00100010":
				        newString = newString + "\"";
				        break;
		      		case "00100011":
				        newString = newString + "#";
				        break;
		      		case "00100100":
				        newString = newString + "$";
				        break;
		      		case "00100101":
				        newString = newString + "%";
				        break;
		      		case "00100110":
				        newString = newString + "&";
				        break;
		      		case "00100111":
				        newString = newString + "'";
				        break;
		      		case "00101000":
				        newString = newString + "(";
				        break;
		      		case "00101001":
				        newString = newString + ")";
				        break;
		      		case "00101010":
				        newString = newString + "*";
				        break;
		      		case "00101011":
				        newString = newString + "+";
				        break;
		      		case "00101100":
				        newString = newString + ",";
				        break;
		      		case "00101101":
				        newString = newString + "-";
				        break;
		      		case "00101110":
				        newString = newString + ".";
				        break;
		      		case "101111":
				        newString = newString + "/";
				        break;
		      		case "00111010":
				        newString = newString + ":";
				        break;
		      		case "00111011":
				        newString = newString + ";";
				        break;
		      		case "00111100":
				        newString = newString + "<";
				        break;
		      		case "00111101":
				        newString = newString + "=";
				        break;
		      		case "00111110":
				        newString = newString + ">";
				        break;
		      		case "00111111":
				        newString = newString + "?";
				        break;
		      		case "01000000":
				        newString = newString + "@";
				        break;
		      		case "01011011":
				        newString = newString + "[";
				        break;
		      		case "01011100":
				        newString = newString + "\\";
				        break;
		      		case "01011101":
				        newString = newString + "]";
				        break;
		      		case "01011110":
				        newString = newString + "^";
				        break;
		      		case "01011111":
				        newString = newString + "_";
				        break;
		      		case "01100000":
				        newString = newString + "`";
				        break;
		      		case "01111011":
				        newString = newString + "{";
				        break;
		      		case "01111100":
				        newString = newString + "|";
				        break;
		      		case "01111101":
				        newString = newString + "}";
				        break;
		      		case "01111110":
				        newString = newString + "~";
				        break;
		      		default:
				        newString = newString + "?";
				        break;
				}
	   		}

	   		display(newString);
		}

  		
	}

	function display(string) {
		document.getElementById("converted").textContent = string;
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementById("chevron");
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		convert(this.children[0].value);
	});
};