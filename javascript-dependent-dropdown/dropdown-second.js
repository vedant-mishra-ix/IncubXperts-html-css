function droplist(first,second)
{
    var country = document.getElementById('country');
    var state = document.getElementById('state');
    state.innerHTML="";

    if(country.value == 'india')
    {
        var state_option = ['maharashtra|Maharashtra','up|Up'];
    }
    else if(country.value =='pakistan')
    {
        var state_option = ['krachi|Krachi','lahore|Lahore'];
    }
    for(var options in state_option)
    {
        var new_pair = state_option[options].split("|");
        var new_option = document.createElement("option");
        new_option.value = new_pair[0];
        new_option.innerHTML = new_pair[1];
        state.options.add(new_option);
    }
}
function droplist1(third,fourth)
{
    var state = document.getElementById('state');
    var city = document.getElementById('city');
    state.innerHTML="";
    if(state.value == 'maharashtra'||'Maharashtra')
    {
        var city_option = ['pune|Pune','mumbai|Mumbai'];
    }
    else if(state.value =='up'||'Up')
    {
        var city_option = ['kanpur|Kanpur','agra|Agra'];
    }

    for(var options in city_option)
    {
        var new_pair = city_option[options].split("|");
        var new_option = document.createElement("option");
        new_option.value = new_pair[0];
        new_option.innerHTML = new_pair[1];
        city.options.add(new_option);
    }
}
function submit1()
{
document.getElementById("firstname").innerHTML = document.getElementById("firstName").value;
document.getElementById("lastname").innerHTML = document.getElementById("lastName").value;
document.getElementById("country").innerHTML = document.getElementById("country").value;
document.getElementById("state").innerHTML = document.getElementById("state").value;
document.getElementById("city").innerHTML = document.getElementById("city").value;
console.log( document.getElementById("country").value);
}