document.getElementById('btn').addEventListener('click', callApi);
const apiId = 'c187b53d878f4e66a15143847220208';


function callApi() {
    var cname = document.getElementById('cname').value;
    alert(cname);

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiId}&q=${cname}&aqi=no`;
    console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let output = `
            <div>
            <div style="color:black; width:12rem; background-color:white; border-radius: 10px;" class="p-3">        
                <p class="m-0" style="font-width:bold; font-size:2rem;">${data.location.name}</p>
                <p class="m-0" style="font-width:bold; font-size:4rem;"> ${data.current.temp_c}<sup>°C</sup></p>
            </div>
        </div>
                `;
            console.log('printing data', data);
            document.getElementById('output').innerHTML = output;
        }).catch((err) => console.log(err))
}
