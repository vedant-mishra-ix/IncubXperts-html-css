function firstnamefield()
{
    var firstname = document.getElementById('firstName').value;
    if(firstname =='')
    {
        document.getElementById('first_name').innerHTML="this field is required";
        return false;
    }
    else if(firstname.length <3)
    {
        document.getElementById('first_name').innerHTML="atleast two character required";
        return false;
    }
    else
    {
        document.getElementById('first_name').textContent="";
        return true;
    }
}
function lastnamefield()
{
    var lastname = document.getElementById('lastName').value;
    if(lastname =='')
    {
        document.getElementById('last_name').innerHTML="this field is required";
        return false;
    }
    else if(lastname.length <3)
    {
        document.getElementById('last_name').innerHTML="atleast two character required";
        return false;
    }
    else
    {
        document.getElementById('last_name').textContent="";
        return true;
    }
}
function agefield()
{
    var age = document.getElementById("age").value;
    var agePattern = /\D/g;
    if(age == '')
    {
        document.getElementById('Age').innerHTML="This field is required";
        return false;
    }
    else if(age.match(agePattern))
    {
        document.getElementById('Age').innerHTML="Only digits allowed";
        return false;
    }
    else
    {
        document.getElementById('Age').textContent="";
        return true;
    }
}
function emailfield()
{
    var email = document.getElementById('email').value;
    var emailPattern = /\b[^0-9]([a-z]{1,}|[A-Z0-9]{1,})@[a-zA-z]{1,}\./;
    if(email == '')
    {
        document.getElementById('Email').innerHTML="This field is required";
        return false;
    }
    else if(!email.match(emailPattern))
    {
        document.getElementById('Email').innerHTML="Please fill proper email";
        return false;
    }
    else
    {
        document.getElementById('Email').textContent="";
        return true;
    }
}



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
	var country12 = document.getElementById("country"),
	state = document.getElementById("state"),
	city = document.getElementById("city");	
	for (var state1 in stateObject){
		state.options[state.options.length] = new Option(state1,state1);
	}
	state.onchange = function(){
		for(var country1 in stateObject[this.value]){
			country12.options[country12.options.length] = new Option(country1,country1);
		}
	}
	country12.onchange = function(){		
		var cities = stateObject[state.value][this.value];
		for(var i = 0; i < cities.length; i++){
			city.options[city.options.length] = new Option(cities[i],cities[i]);
		}
	}
}
var row_count=1;
function submit13()
{
    var firstname = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('state').value;
    var state1 = document.getElementById('country').value;
    var city1 = document.getElementById('city').value;

    if(firstname =="" || lastname =="" || age =="" || email =="" || country =="" || state1 =="" || city1 =="")
    {
        document.getElementById('first_name').innerHTML = "This field is required *";
        document.getElementById('last_name').innerHTML = "This field is required *";
        document.getElementById('Age').innerHTML = "This field is required *";
        document.getElementById('Email').innerHTML = "This field is required *";
        document.getElementById('Country_').innerHTML = "This field is required *";
        document.getElementById('State_').innerHTML = "This field is required *";
        document.getElementById('City_').innerHTML = "This field is required *";
        return false;
    }
    else
    {
        var tableId = document.getElementById('table');
        var row = tableId.insertRow(row_count);
        var first_cell = row.insertCell(0);
        var second_cell = row.insertCell(1);
        var third_cell = row.insertCell(2);
        var fourth_cell = row.insertCell(3);
        var fifth_cell = row.insertCell(4);
        var six_cell = row.insertCell(5);
        var seven_cell = row.insertCell(6);
        var eight_cell = row.insertCell(7);
        first_cell.innerHTML = row_count;
        second_cell.innerHTML = firstname;
        third_cell.innerHTML = lastname;
        fourth_cell.innerHTML = age;
        fifth_cell.innerHTML = email;
        six_cell.innerHTML = country;
        seven_cell.innerHTML = state1;
        eight_cell.innerHTML = city1;
        row_count++;
        return true;
    }
} 
window.onload = function dumy_data_load()
{
    var table = document.getElementById("table");
    var row = table.insertRow(table.length);
    var first_cell = row.insertCell(0);
    var second_cell = row.insertCell(1);
    var third_cell = row.insertCell(2);
    var fourth_cell = row.insertCell(3);
    var fifth_cell = row.insertCell(4);
    var six_cell = row.insertCell(5);
    var seven_cell = row.insertCell(6);
    var eight_cell =  row.insertCell(7);
    second_cell.innerHTML = 'raviraj';
    third_cell.innerHTML = 'suryavanshi';
    fourth_cell.innerHTML = '27';
    fifth_cell.innerHTML = 'ravi@gmail.com';
    six_cell.innerHTML = 'india';
    seven_cell.innerHTML = 'maharashtra';
    eight_cell.innerHTML = 'pune'; 
    var table1 = document.getElementById("table");
    var row1 = table1.insertRow(table1.length);
    var first_cell = row1.insertCell(0);
    var second_cell = row1.insertCell(1);
    var third_cell = row1.insertCell(2);
    var fourth_cell = row1.insertCell(3);
    var fifth_cell = row1.insertCell(4);
    var six_cell = row1.insertCell(5);
    var seven_cell = row1.insertCell(6);
    var eight_cell =  row1.insertCell(7);
    second_cell.innerHTML = 'pankaj';
    third_cell.innerHTML = 'khajone';
    fourth_cell.innerHTML = '28';
    fifth_cell.innerHTML = 'pankaj@gmail.com';
    six_cell.innerHTML = 'india';
    seven_cell.innerHTML = 'maharashtra';
    eight_cell.innerHTML = 'pune';
}
function countryfield()
{
    var country = document.getElementById('state').value;
    if(country == '')
    {
        document.getElementById('Country_').innerHTML="This field is required";
        return false;
    }
    else
    {
        document.getElementById('Country_').textContent="";
        return true;
    }
}
function statefield()
{
    var state = document.getElementById('state').value;
    if(state == '')
    {
        document.getElementById('State_').innerHTML="This field is required";
        return false;
    }
    else
    {
        document.getElementById('State_').textContent="";
        return true;
    }
}
function cityfield()
{
    var city = document.getElementById('city').value;
    if(city == '')
    {
        document.getElementById('City_').innerHTML="This field is required";
        return false;
    }
    else
    {
        document.getElementById('City_').textContent="";
        return true;
    }
}