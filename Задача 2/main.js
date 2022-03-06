
function getDayInfo(date) {
   let splits = date.split('.', 3);
   date = new Date(`"${splits[2]}-${splits[1]}-${splits[0]}"`);
   return `${getWeekDay(date)}, ${getWeek(date)} неделя ${getMonth(date)} ${date.getFullYear()} года`
}

function getWeek(date) {
   let week = Math.ceil(date.getDate() / 7)
   return week;
}

function getWeekDay(date) {
   let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
   return days[date.getDay()];
}

function getMonth(date) {
   let days = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
   return days[date.getMonth()];
}

console.log(getDayInfo("01.01.2022"));
