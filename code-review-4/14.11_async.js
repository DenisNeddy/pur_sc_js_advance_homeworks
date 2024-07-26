const firstPromise = new Promise((resolve) => {
  setTimeout(() => resolve(5000), 5000);
});

const secondPromise = new Promise((resolve) => {
  setTimeout(() => resolve(4000), 4000);
})

const thirdPromise = new Promise((resolve) => {
  setTimeout(() => resolve(2000), 2000);
})

function promiseOriginRace(promises) {
  return Promise.race(promises);
}

promiseOriginRace([firstPromise, secondPromise, thirdPromise]).then(r => console.log('ответ оригинального race', r));

function promiseRace(promises) {
  return new Promise((resolve, reject) => promises.forEach(p => p.then(resolve,reject)));
}

promiseRace([firstPromise, secondPromise, thirdPromise]).then(r => console.log('ответ не оригинального race', r));