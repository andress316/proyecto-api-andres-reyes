

async function fetchData1 () {
    
    const urlMegadeth = "https://api.apilayer.com/spotify/artists?ids=1Yox196W7bzVNZI7RBaPnf";
    const urlMetallica = "https://api.apilayer.com/spotify/artists?ids=2ye2Wgw4gimLv2eAKyk1NB";
    const urlTestament = "https://api.apilayer.com/spotify/artists?ids=28hJdGN1Awf7u3ifk2lVkg";





    var myHeaders = new Headers();
        myHeaders.append("apikey", "m4YEgpKOzhQoe0U15ml44KvQHbqw00DI");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
        };

    var followersMegadeth = await fetch(urlMegadeth, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data); return data})
        .catch(error => console.log('error', error));
 
    var followersMetallica = await fetch(urlMetallica, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data); return data})
        .catch(error => console.log('error', error));
    
    var followersTestament = await fetch(urlTestament, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data); return data})
        .catch(error => console.log('error', error));
  

console.log ('Estos son los followers de mega ', (followersMegadeth.artists[0].followers.total))
console.log ('Estos son los followers de metallica ', (followersMetallica.artists[0].followers.total))
console.log ('Estos son los followers de testament ', (followersTestament.artists[0].followers.total))





}

fetchData1();





(() =>{


function get(url){
    return Promise.resolve(
        fetch(url)
        .then((response) => response.json())
    )
}










    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

})()


