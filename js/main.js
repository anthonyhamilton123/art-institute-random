//Example fetch using pokemonapi.co


function getFetch(){
  const choice = Math.floor(Math.random()*118808)
  console.log(choice)
  const url = `https://api.artic.edu/api/v1/artworks?page=${choice}&limit=1`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let imgID = data.data[0].image_id
        document.querySelector('img').src = `https://www.artic.edu/iiif/2/${imgID}/full/843,/0/default.jpg`
        document.querySelector('h2').innerText = data.data[0].title
        document.querySelector('#artist').innerText = data.data[0].artist_title
        document.querySelector('#materials').innerText = data.data[0].medium_display
        document.querySelector('#year').innerText = data.data[0].date_display

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch()

document.querySelector('button').addEventListener('click', getFetch)