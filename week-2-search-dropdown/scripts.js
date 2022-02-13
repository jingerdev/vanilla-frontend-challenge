let allCountries

(async () => {
  const getData = async () => {
    try {
      const countries = "https://countriesnow.space/api/v0.1/countries/"
      const res = await fetch(countries);
      return res.json();
    } catch (error) {}
  }
  const select = document.querySelector('#countries #country')
  let options = select.innerHTML
  allCountries = await getData().then(res => res.data)
  allCountries.map(item => {
    options += `<option value="${item.country}">${item.country}</option>`
  })
  select.innerHTML = options
})()

const onSelectCountry = (e) => {
  // After selecting, query country list to get cities list  
  const cities = document.querySelector('#countries #city')
  let options = `<option value="">Select City</option>`
  const idx = allCountries.findIndex(item => item.country == e.value)
  if (idx !== -1) {
    // Change city options
    allCountries[idx].cities.map(item => {
      options +=  `<option value="${item}">${item}</option>`
    })
  }
  const selected = document.getElementById('selected-location')
  selected.innerHTML = "Location"
  cities.innerHTML = options
}

const onSelectCity = (e) => {
  const selected = document.getElementById('selected-location')
  selected.innerHTML = e.value
}

// Event listener for changing dropdown selected text
document.querySelectorAll(".dropdown li").forEach(list => {
  list.addEventListener("click", (e) => {
    const parent =  e.target.parentElement.id
    const selected = document.getElementById(`selected-${parent}`)
    selected.innerHTML = e.target.innerHTML
  })
})
