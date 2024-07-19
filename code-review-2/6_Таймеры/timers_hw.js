
function getTimeForDate(endtime) {
  let end = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((end / 1000) % 60);
  let minutes = Math.floor((end / 1000 / 60) % 60);
  let hours = Math.floor((end / (1000 * 60 * 60)) % 24);
  let days = Math.floor((end / (1000 * 60 * 60 * 24)) % 30);
  let month = Math.floor((end / (1000 * 60 * 60 * 24 * 30)));

  return {
    'total': end,
    'month': month,
    'days': days,
    'hours': hours,
    'min': minutes,
    'sec': seconds
  }
}

function plurSec(num, time) {

  let diff = {
    sec: ['секунд', 'секунды', 'секунда'],
    min: ['минут', 'минуты', 'минута'],
    hours: ['часов', 'часа','час'],
    days: ['дней', 'дня','день'],
    month: ['месяцев', 'месяца','месяц'],
  }

  let arrNum = [...String(num)];

  if(arrNum.join('') == 1) {
    return diff[time][2];
  }

  if(arrNum[arrNum.length - 1] === '1' && arrNum[0] != '1' ) {
    return diff[time][2];
  }

  if(arrNum[0] != '1' && arrNum[arrNum.length - 1] === '2' ||  arrNum[arrNum.length - 1] === '3' || arrNum[arrNum.length - 1] === '4') {
    return diff[time][1];
  }

  return diff[time][0];
}

function renderTimer(data) {

  let obj = getTimeForDate(data);
  const timerWrapper = document.querySelector('.timer__wrapper');

  let timer =
  ` <div class="timer">
      <h2 class="timer__title">До <span>нового года</span> осталось:</h2>
      <div class="timer__container">
        <div class="timer__column timer__month">
          <div class="timer__count">${obj.month < 10 ? '0' + obj.month : obj.month}</div>
          <div class="timer__description">${plurSec(obj.month, 'month')}</div>
        </div>
        <div class="timer__column timer__days">
          <div class="timer__count">${obj.days < 10 ? '0' + obj.days : obj.days}</div>
          <div class="timer__description">${plurSec(obj.days, 'days')}</div>
        </div>
        <div class="timer__column timer__hours">
          <div class="timer__count">${obj.hours < 10 ? '0' + obj.hours : obj.hours}</div>
          <div class="timer__description">${plurSec(obj.hours, 'hours')}</div>
        </div>
        <div class="timer__column timer__minutes">
          <div class="timer__count">${obj.min < 10 ? '0' + obj.min : obj.min}</div>
          <div class="timer__description">${plurSec(obj.min, 'min')}</div>
        </div>
        <div class="timer__column timer__seconds">
          <div class="timer__count">${obj.sec < 10 ? '0' + obj.sec : obj.sec}</div>
          <div class="timer__description">${plurSec(obj.sec, 'sec')}</div>
        </div>
      </div>
    </div>
  `
  timerWrapper.innerHTML = timer;
}

setInterval(() => {renderTimer('2025-01-01')}, 1000);