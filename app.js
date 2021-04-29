var btntranslate = document.querySelector('.btn-primary');
var inputtextarea = document.querySelector('#text-input');
var converttext = document.querySelector('#inputtext'); 

var translatedText = "https://api.funtranslations.com/translate/";

function getUrltranslation(input){
    return serverURL +"?" +"text="+input
}

function errorHandler(error){
    console.log("error occur",error)
    alert("something went wrong please try again later..");
}

function clickHandler(){
    var inputtextarea = txtInput.value;

    fetch(getUrltranslation(inputtextarea))
    .then(response => response.json())
    .then(json => {
        var translatedText =json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}

btntransalte.addEventListener(click , clickHandler);