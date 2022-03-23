document.write("Mate");
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://192.168.178.58/", false);
xmlHttp.send(null);
document.write("Try:" + xmlHttp.responseText);
