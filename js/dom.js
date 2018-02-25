//llamadas a la funciones
paises();
tarjetaCredito();
//paises
function paises(){  
    var paises = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
    "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
    "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");
    
    for(var i=0; i<paises.length; i++){
        
        var option = document.createElement("option"); //creacion elemento option
        option.text = paises[i]; //asignamos que el texto de option sean los paises
        
        if(option.text === 'Spain'){ //si el texto es españa
            option.setAttribute('selected',true); //por defecto se muestre
        }
        
        option.value = paises[i];  //el valor sea el nombre del pais
        var select = document.getElementById("pais"); //cogemos el id pais
        select.appendChild(option); //mostramos los elementos select
    }    
}

//generar campo tarjeta de credito
function tarjetaCredito(){
    
    var inputTarjeta = document.createElement("input");
    inputTarjeta.setAttribute("type","text");
    inputTarjeta.setAttribute("placeholder","XXXX-XXXX-XXXX-XXXX");
    inputTarjeta.setAttribute("pattern","[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}");
    inputTarjeta.setAttribute("required",true);
    
    var label = document.getElementById("numTarjeta");
    label.appendChild(inputTarjeta);
    
}
//mostrar elementos ocultos -> tarjeta de credito
function mostrar(){    
    direccion = document.registro.direccion.value;
    
    if(direccion !== ''){
        document.getElementById('oculto').style.display='block';  
    }else if(direccion === ''){
        document.getElementById('oculto').style.display='none';
    }
}


