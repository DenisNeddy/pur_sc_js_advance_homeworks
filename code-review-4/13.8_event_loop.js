function getLocation() {
  return new Promise((res, rej) => {
    res(navigator.geolocation.getCurrentPosition((position) => {
      console.log(`${position.coords.latitude} ${position.coords.longitude}`);
    }));

  })
}

getLocation();