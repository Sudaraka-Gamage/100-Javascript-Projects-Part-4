const button = document.querySelector("button");

let apikey;

button.addEventListener("click", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        button.innerText = "Your browser not support";
    }
});

function onSuccess(position){
    button.innerText = "Detecting your location...";
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apikey}`).then(response => response.json()).then(result => {
        let allDetails = result.results[0].components;
        let {country, postcode, country} = allDetails;
        button.innerText = `${country} ${postcode}, ${country}`;
    }).catch(() => {
        button.innerText = "Something went wrong";
    });
}

function onError(error){
    if(error.code == 1){
        button.innerText = "You denied the request";
    }
    else if(error.code == 2){
        button.innerText = "Location not available";
    }
    else{
        button.innerText = "Something went wrong!";
    }
    button.setAttribute("disable", "true");
}