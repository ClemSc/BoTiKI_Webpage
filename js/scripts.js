/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//localStorage.setItem('selectedLanguage', language);



function toggleLang() {

  /* optimized version of previous functions created by https://syntha.ai/optimizers/javascript
   *
   * */
	
  const use_lang = document.getElementById("selectpicker").value;
  const containers = {
    EN: document.getElementsByClassName("contentEN"),
    DE: document.getElementsByClassName("contentDE"),
    FR: document.getElementsByClassName("contentFR"),
    HI: document.getElementsByClassName("contentHI")
  };

  Object.keys(containers).forEach((lang) => {
    containers[lang].forEach((container) => {
      container.style.display = lang === use_lang ? "block" : "none";
    });
  });
}


function toggleLang2() {

	let use_lang = document.getElementById("selectpicker").value;
	
	let headtext_de = document.getElementById("headtext_de")
	let headtext_en = document.getElementById("headtext_en")
	let headtext_fr = document.getElementById("headtext_fr")

	if (use_lang === "EN") {
	   headtext_de.style.display = "none";
	   headtext_en.style.display = "block";
	   headtext_fr.style.display = "none";
	   console.log("switch to " + use_lang);
	}
	else if (use_lang === "DE") {
	   headtext_de.style.display = "block";
	   headtext_en.style.display = "none";
	   headtext_fr.style.display = "none";
	   console.log("switch to " + use_lang);
	}
	else if (use_lang === "FR") {
	   headtext_de.style.display = "none";
	   headtext_en.style.display = "none";
	   headtext_fr.style.display = "block";
	}
	else {
	   headtext_de.style.display = "none";
	   headtext_en.style.display = "block";
	   headtext_fr.style.display = "none";
	}
}

function toggleLang3() {

	let use_lang = document.getElementById("selectpicker").value;

	let containerEN = document.getElementsByClassName("contentEN");
	let containerDE = document.getElementsByClassName("contentDE");
	let containerFR = document.getElementsByClassName("contentFR");
	let containerHI = document.getElementsByClassName("contentHI");

	// console.log("set to " + use_lang);

	/* yes, the following loop hell needs to be improved, it hurts looking at it 
	 *
	// Source - https://stackoverflow.com/a
	// Posted by c.P.u1, modified by community. See post 'Timeline' for change history
	// Retrieved 2025-11-27, License - CC BY-SA 3.0

	[].forEach.call(document.querySelectorAll('.appBanner'), function (el) {
		el.style.visibility = 'hidden';
	});

	 *
	 * */

	if (use_lang === "EN") {
		for(var i = 0; i < containerEN.length; ++i){
			containerEN[i].style.display = "block";
		}
		for(var i = 0; i < containerDE.length; ++i){
			containerDE[i].style.display = "none";
		}
		for(var i = 0; i < containerFR.length; ++i){
			containerFR[i].style.display = "none";
		}
		for(var i = 0; i < containerHI.length; ++i){
			containerHI[i].style.display = "none";
		}

	}
	else if (use_lang === "DE") {
		for(var i = 0; i < containerEN.length; ++i){
			containerEN[i].style.display = "none";
		}
		for(var i = 0; i < containerDE.length; ++i){
			containerDE[i].style.display = "block";
		}
		for(var i = 0; i < containerFR.length; ++i){
			containerFR[i].style.display = "none";
		}
		for(var i = 0; i < containerHI.length; ++i){
			containerHI[i].style.display = "none";
		}
	}
	else if (use_lang === "FR") {
		for(var i = 0; i < containerEN.length; ++i){
			containerEN[i].style.display = "none";
		}
		for(var i = 0; i < containerDE.length; ++i){
			containerDE[i].style.display = "none";
		}
		for(var i = 0; i < containerFR.length; ++i){
			containerFR[i].style.display = "block";
		}
		for(var i = 0; i < containerHI.length; ++i){
			containerHI[i].style.display = "none";
		}
	}
	else if (use_lang === "HI") {
		for(var i = 0; i < containerEN.length; ++i){
			containerEN[i].style.display = "none";
		}
		for(var i = 0; i < containerDE.length; ++i){
			containerDE[i].style.display = "none";
		}
		for(var i = 0; i < containerFR.length; ++i){
			containerFR[i].style.display = "none";
		}
		for(var i = 0; i < containerHI.length; ++i){
			containerHI[i].style.display = "block";
		}
	}
	else {
		for(var i = 0; i < containerEN.length; ++i){
			containerEN[i].style.display = "block";
		}
		for(var i = 0; i < containerDE.length; ++i){
			containerDE[i].style.display = "none";
		}
		for(var i = 0; i < containerFR.length; ++i){
			containerFR[i].style.display = "none";
		}
		for(var i = 0; i < containerHI.length; ++i){
			containerHI[i].style.display = "none";
		}
	}
}
