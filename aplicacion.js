async function fetchData () {
    var myHeaders = new Headers();
myHeaders.append("apikey", "m4YEgpKOzhQoe0U15ml44KvQHbqw00DI");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/spotify/artists?ids=1Yox196W7bzVNZI7RBaPnf", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

fetchData();



