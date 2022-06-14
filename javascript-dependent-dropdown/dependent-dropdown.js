// function state1()
// {
//     var firstname = document.getElementById('firstname');
//     var lastname = document.getElementById('lastName');
//     var country = document.getElementById('country');
// }
var stateObject = {
    "India": {
        "Mumbai": ["Bandra", "Goregaon", "Marin Lines"],
        "Pune": ["Lal Mahal", "Hinjawadi"],
		"Delhi":["Gurugram", "Karol Bagh"]
    },
    "United States": {
        "California": ["San Diego", "Sears Point"],
        "Nevada": ["Las Vegas", "Lamoille Canyon"]
    },
	"United Kingdom": {
        "England": ["Cambridge.", "London", "Bristol"],
        "Scotland": ["Glasgow", "Edinburgh"]
    }
}
window.onload = function(){
	var country = document.getElementById("country"),
	state = document.getElementById("state"),
	city = document.getElementById("city");	
	for (var state1 in stateObject){
		state.options[state.options.length] = new Option(state1, state1);
	}
	state.onchange = function(){
		for(var country1 in stateObject[this.value]){
			country.options[country.options.length] = new Option(country1, country1);
		}
	}
	country.onchange = function(){		
		var cities = stateObject[state.value][this.value];
		for(var i = 0; i < cities.length; i++){
			city.options[city.options.length] = new Option(cities[i], cities[i]);
		}
	}
}
function submit1()
{
    var firstname = document.getElementById('firstName');
    var lastname = document.getElementById('lastName');
    var country = document.getElementById('state');
    var state1 = document.getElementById('country');
    var city1 = document.getElementById('city');
    document.getElementById('firstname').innerHTML=firstname.value;
    document.getElementById('lastname').innerHTML=lastname.value;
    document.getElementById('country').innerHTML=state1.value;
    document.getElementById('state').innerHTML=country.value;
    document.getElementById('city').innerHTML=city1.value;
}