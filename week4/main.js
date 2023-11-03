var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){

  
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/Karim-Abdo/F28WP-lab1/blob/main/week4/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();

});
function renderHTML(data){
var htmlString = "this is a test";
cityContainer.insertAdjacentHTML('beforeend' , htmlString);
}
