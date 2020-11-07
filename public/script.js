

    const endPoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

    const restaurants = [];

    fetch(endPoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data));


  function findMatches(wordToMatch, restaurants) {

    return restaurants.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.category.match(regex) ||
         place.state.match(regex);

    })

  }

  function displayMatches() {

    const matchArray = findMatches(this.value, restaurants);
    const html = matchArray.map(place => {

        return `
        <li>
            <span class="name">${place.name},\r\n ${place.category}, 
            ${place.state} </span>
            <span class="address">${place.city}, ${place.address_line_1}, ${place.zip}</span>
        <\li>
        `;
        

    }).join('');
    suggestions.innerHTML = html;

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