let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let apikey = '60345965c812593fd5a46fe1c3cf1f0b'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${apikey} `)
        .then(data => data.json())
        .then(data => monstrarDatosClima(data))
}

function monstrarDatosClima(data) {

    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity
    const continente = data.sys.country
    const img = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const continenteInfo = document.createElement('h4')
    continenteInfo.textContent = continente

    const temperaturaInfo = document.createElement('h4')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C `

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `Humedad: ${humedad}%`

    const imgInfo = document.createElement('img')
    imgInfo.src = `https://openweathermap.org/img/wn/${img}@2x.png `

    divDatosClima.appendChild(imgInfo)
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(continenteInfo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descripcionInfo)

}