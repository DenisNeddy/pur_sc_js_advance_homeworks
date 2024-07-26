
function getData(url, errorMessage) {
  return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${errorMessage} ${response.status}`);
      }
      return response.json();
    })
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'We have a problem with')
  .then(data => {
    const {abilities} = data;
    const {ability}= abilities[0];
    return getData(ability.url, 'We have a problem with #2');
  })
  .then(data => {
    const {effect_entries: effects} = data;
    const {language} = effects[1];
    console.log(language['name']);

  })
  .catch(error => console.log(error));