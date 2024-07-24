const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
  const {abilities} = JSON.parse(this.responseText);
  const {ability}= abilities[0];
  const request = new XMLHttpRequest();
  
  request.open('GET', ability.url);
  request.send();
  request.addEventListener('load', function() {
    const {effect_entries: effects} = JSON.parse(this.responseText);
    const {language} = effects[1]
    console.log(language['name']);
  })
})

