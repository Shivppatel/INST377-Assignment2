

    const endPoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

    const restaurants = [];

    fetch(endPoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data));


  function findMatches(wordToMatch, restaurants) {
    if (wordToMatch.length != 0){
      return restaurants.filter(place => {

          const regex = new RegExp(wordToMatch, 'gi');
          return place.name.match(regex) || place.category.match(regex) ||
          place.state.match(regex);

      })
    } else {
      clear();
    }
  }

  function clear() {
    document.querySelector(".flex-outer").innerHTML = "";
  }

  function displayMatches() {
    
    const matchArray = findMatches(this.value, restaurants);
    matchArray.sort((a, b) => (a.name > b.name) ? 1 : -1);
    if (matchArray){
      const html = matchArray.map(place => {
          return `
          <li>
            <h2 class="name">${place.name.toLowerCase()}</h2>
            <p class="category">${place.category}</p>
            <p class="address">${place.address_line_1.toLowerCase()}</p>
            <p class="address">${place.city.toLowerCase()}</p>
            <p class="address">${place.zip}</p>
          </li>
          `;
        }).join('');
        suggestions.innerHTML = html;
      }
  }

      const searchInput = document.querySelector('.textinput');
      const suggestions = document.querySelector('.flex-outer');
      searchInput.addEventListener('change', displayMatches);
      searchInput.addEventListener('keyup', displayMatches);





  /*
function typeAheadArray() {

    const endPoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

    const restaurants = [];

    fetch(endPoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data));

    return restaurants;

  }

  function findMatches(wordToMatch, restaurants) {

    return restaurants.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.state.match(regex);

    })

  }

  function displayMatches() {

    console.log(this.value);

  }

  function searchEvent() {
      const searchInput = document.querySelector('.textinput');
      const suggestions = document.querySelector('.flex-outer');

      searchInput.addEventListener('change', displayMatches);

  }
  */