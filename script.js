const APIURL = `http://api.weatherapi.com/v1/current.json?key=a882aabad9544e6098885334223011&q=`

const Body = document.querySelector("body")
const Input = document.getElementById("Input")
const Form = document.querySelector("form")


async function FetchWeatherByLocation(location) {

    const Resp = await fetch(APIURL + location)
    const RespData = await Resp.json()

    console.log(RespData)

    AddInfo(RespData)

}

function AddInfo (Variable) {

    Html = `

    <main>
    <header>
    <h2>${Variable.location.name} , ${Variable.location.country}</h2>

        <div>
            <h1>${Variable.current.temp_c}°C</h1>
            <h2>${Variable.current.condition.text}</h2>
            <img src="${Variable.current.condition.icon}" alt="">
        </div>
    </header>

    <section>

        <div>Humidity: ${Variable.current.humidity}</div>
        <div>Wind Kph: ${Variable.current.wind_kph}</div>
        <div>UV : ${Variable.current.uv}</div>
        <div>Cloud : ${Variable.current.cloud}</div>

    </section>


    <footer>

        

    </footer>

</main>`

        Body.innerHTML += Html
        const Footer =  Body.querySelector("footer")
        Footer.appendChild(Change)
}

Form.addEventListener("submit", (e) => {

    e.preventDefault()

    const SearchedCity = Input.value

    if (SearchedCity) {

        FetchWeatherByLocation(SearchedCity)

    }
})