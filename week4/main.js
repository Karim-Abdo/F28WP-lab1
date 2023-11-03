var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/Karim-Abdo/F28WP-lab1/blob/main/week4/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();
