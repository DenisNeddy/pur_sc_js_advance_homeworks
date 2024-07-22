
 const page = {
  'month': {
    value: document.querySelector('.timer__month > .timer__count'),
    text: document.querySelector('.timer__month > .timer__description')
  },
  'days': {
    value: document.querySelector('.timer__days > .timer__count'),
    text: document.querySelector('.timer__days > .timer__description')
  },
  'hours': {
    value: document.querySelector('.timer__hours > .timer__count'),
    text: document.querySelector('.timer__hours > .timer__description')
  },
  'min': {
    value: document.querySelector('.timer__minutes > .timer__count'),
    text: document.querySelector('.timer__minutes > .timer__description')
  },
  'sec': {
    value: document.querySelector('.timer__seconds > .timer__count'),
    text: document.querySelector('.timer__seconds > .timer__description')
  },
}


function getTimeForDate(endtime) {
  let end = Date.parse(endtime) - Date.parse(new Date());
  const second = Math.floor(end / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);
  const month = Math.floor(day / 30.425);

  return {
    'month': month % 12,
    'days': Math.floor(day % 30.425),
    'hours': hour % 24,
    'min': minute % 60,
    'sec': second % 60,
  }
}

function plurSec(num, time) {
  const diff = {
    sec: ['секунд', 'секунды', 'секунда'],
    min: ['минут', 'минуты', 'минута'],
    hours: ['часов', 'часа','час'],
    days: ['дней', 'дня','день'],
    month: ['месяцев', 'месяца','месяц'],
  }
  const remainder = num % 100;

  if((remainder >= 5 && remainder <= 20) || remainder % 10 === 0) {
    return diff[time][0];
  }
  if(remainder > 20 && remainder % 10 >= 5) {
    return diff[time][0];
  }
  if(remainder % 10 === 1) {
    return diff[time][2];
  } else {
    return diff[time][1];
  }
}

function renderTimer(time) {

  const data = getTimeForDate(time);

  Object.entries(data).map(([key, value]) => {
      const text = plurSec(value, key);
      const count = data[key].toString().padStart(2, '0');
      page[key].text.innerHTML = text;
      page[key].value.innerHTML = count;
  })
}

function isNY(time) {
  let date =`${time}:00:00:00`;

  if(new Date() < new Date(date)) {
    setInterval(() => {renderTimer(date)},1000);
  } else {
    clearInterval(setInterval(() => {renderTimer(date)},1000));
    document.querySelector('.timer__header').textContent = ` ${new Date(time).getFullYear()} год уже наступил`
  }
}

isNY('2024-01-01');
