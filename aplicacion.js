async function fetchData () {
    
            //Acá vamos a extraer el ID de cada artista a través de la URL
            let url1 = document.getElementById('banda1').value;
            let artistaId1 = url1.slice(32);

            let url2 = document.getElementById('banda2').value;
            let artistaId2 = url2.slice(32);

            let url3 = document.getElementById('banda3').value;
            let artistaId3 = url3.slice(32);

            let url4 = document.getElementById('banda4').value;
            let artistaId4 = url4.slice(32);
            
            let url5 = document.getElementById('banda5').value;
            let artistaId5 = url5.slice(32);

            //Acá vamos a pegar el ID al parámetro necesario para la API de spotify
            let apiband1 = ('https://api.apilayer.com/spotify/artists?ids=' + artistaId1);
            console.log(apiband1)

            let apiband2 = ('https://api.apilayer.com/spotify/artists?ids=' + artistaId2);
            console.log(apiband2)

            let apiband3 = ('https://api.apilayer.com/spotify/artists?ids=' + artistaId3);
            console.log(apiband3)

            let apiband4 = ('https://api.apilayer.com/spotify/artists?ids=' + artistaId4);
            console.log(apiband4)
            
            let apiband5 = ('https://api.apilayer.com/spotify/artists?ids=' + artistaId5);
            console.log(apiband5)

            


    var myHeaders = new Headers();
        myHeaders.append("apikey", "m4YEgpKOzhQoe0U15ml44KvQHbqw00DI");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
        };

    var followers1 = await fetch(apiband1, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data);return data})
        .catch(error => console.log('error', error));
 
    var followers2 = await fetch(apiband2, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data);return data})
        .catch(error => console.log('error', error));
    
    var followers3 = await fetch(apiband3, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data); return data})
        .catch(error => console.log('error', error));

     var followers4 = await fetch(apiband4, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data);return data})
        .catch(error => console.log('error', error));

    var followers5 = await fetch(apiband5, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data); return data})
        .catch(error => console.log('error', error));
  

        console.log ('Estos son los followers de ',(followers1.artists[0].name),(followers1.artists[0].followers.total));
        console.log ('Estos son los followers de ',(followers2.artists[0].name), (followers2.artists[0].followers.total));
        console.log ('Estos son los followers de ',(followers3.artists[0].name), (followers3.artists[0].followers.total));
        console.log ('Estos son los followers de ',(followers4.artists[0].name), (followers4.artists[0].followers.total));
        console.log ('Estos son los followers de ',(followers5.artists[0].name), (followers5.artists[0].followers.total));

//Acá comienza el chartjs
    // (() =>{

        var barras = [ (followers1.artists[0].followers.total), (followers2.artists[0].followers.total), (followers3.artists[0].followers.total), (followers4.artists[0].followers.total), (followers5.artists[0].followers.total)];
        var nombres = [(followers1.artists[0].name),(followers2.artists[0].name),(followers3.artists[0].name),(followers4.artists[0].name),(followers5.artists[0].name)]

        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [nombres[0],nombres[1],nombres[2],nombres[3],nombres[4]],
                datasets: [{
                    label: '# of Votes',
                    data: [barras[0],barras[1],barras[2],barras[3],barras[4]],
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
    
    // })();



}

















