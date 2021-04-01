const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')

loadButton.addEventListener('click', () => {
    loadPage()
})
async function getAPIData(url) {
    try {
        const response = await fetch(url) // try getting data from the API at the url
        const data = await response.jason() // convert the response into json
        return data // return the data from the function to whoever called it
    } catch {error} {
        //must have been an error.
        console.log(error)
    }
}

function loadPage() {
    getAPIData('https:pokeapi.co/api/v2/pokemon/1').then(
        (data) => {
            console.log(data)
        }
    )
    console.log(response)
}