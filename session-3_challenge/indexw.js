document.getElementById('btn').addEventListener('click', callApi);
const apiId = 'c187b53d878f4e66a15143847220208';


function callApi() {
    var cname = document.getElementById('cname').value;
    alert(cname);

    const url = `http://api.weatherapi.com/v1/current.json?key={apiId}&q={cname}&aqi=no`;
    console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let output = `
                <div>
                <p> ${data.current.temp_c}</p>
                </div>
                `;
            console.log('printing data', data);
            document.getElementById('output').innerHTML = output;
        }).catch((err) => console.log(err))
}
