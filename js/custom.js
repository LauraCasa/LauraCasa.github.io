function RequeteApi(url, elementID){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById(elementID).innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function homePageLoading() {
    url = 'http://bitcoin.mubiz.com/info';
    elementID = 'WSInfo';
    function RequeteApi(url, elementID);
	
	url = 'http://bitcoin.mubiz.com/blockchaininfo';
    elementID = 'BlockchainInfo';
    function RequeteApi(url, elementID);
	
	url = 'http://bitcoin.mubiz.com/peerinfo';
    elementID = 'peerInfo';
    function RequeteApi(url, elementID);
	
	url = 'http://bitcoin.mubiz.com/mininginfo';
    elementID = 'miningInfo';
    function RequeteApi(url, elementID);
}