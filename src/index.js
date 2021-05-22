console.log('console log to chrome ----',);
let xhr = new XMLHttpRequest();
xhr.open('GET', '/api/user', true);
console.log('pppppp');
xhr.onload = function() {
  console.log(xhr.response);
}

xhr.send();