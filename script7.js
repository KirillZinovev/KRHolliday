function krData() { // Функция для получения данных о праздниках
const god = document.getElementById('god').value
const strana_cod = document.getElementById('strana_cod').value 
try { 
  fetch(`https://date.nager.at/api/v3/PublicHolidays/${god}/${strana_cod}`)// Отправляем запрос на сервер с указанными параметрами
    .then((response) => response.json()) // Преобразуем ответ в формат JSON
    .then((data) => getValue(data)) // Вызываем функцию getValue и передаем ей полученные данные
  } catch (error) { // Обрабатываем ошибки c помощью try и cath если они возникнут
      alert(error.message)
    }
}
function getValue(array) { // Функция для обработки полученных данных
  array.sort((a, b) => (a.localName > b.localName ? 1 : -1));  // Сортируем массив объектов по полю localName в алфавитном порядке
  console.log(array);  // Выводим отсортированный массив в консоль
}



// async function krData() {
//  const god = document.getElementById('god').value
// const strana_cod = document.getElementById('strana_cod').value 
// try { 
// const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${god}/${strana_cod}`);
// const prazdniki = await response.json();
// console.log(prazdniki);
// } catch (error) {
//   alert(error.message)
// }
// }
