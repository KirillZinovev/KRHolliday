function krData() { // Функция для получения данных о праздниках
const god = document.getElementById('god').value //объявляет переменную "god" и присваивает ей значение, которое было введено в элемент с идентификатором "god"
const strana_cod = document.getElementById('strana_cod').value //объявляет переменную "strana_cod" и присваивает ей значение, которое было введено в элемент с идентификатором "strana_cod"
try { 
  fetch(`https://date.nager.at/api/v3/PublicHolidays/${god}/${strana_cod}`)// Отправляем запрос на сервер с указанными параметрами
    .then((response) => response.json()) // Преобразуем ответ в формат JSON
    .then((data) => getValue(data)) // Вызываем функцию getValue и передаем ей полученные данные
  } catch (error) { // Обрабатываем ошибки c помощью try и cath если они возникнут
      alert(error.message)
    }
}
function getValue(array) { // Функция для обработки полученных данных
  array.sort((a, b) => {  // Сортируем массив объектов по полю localName в алфавитном порядке
    if (a.localName > b.localName) { //если имя элемента a больше, чем имя элемента b в алфавитном порядке
      return 1; //то возвращается 1 (элемент a будет располагаться после элемента b в отсортированном массиве).
    } else if (a.localName < b.localName){ //если имя элемента a меньше, чем имя элемента b в алфавитном порядке
      return -1; //то возвращается -1 (элемент a будет располагаться перед элементом b в отсортированном массиве)
    }else{
      return 0 //возвращает 0, если имена элементов равны.
    }
  });
  console.log(array); // Выводим отсортированный массив в консоль
}


// function getValue(array) { // Функция для обработки полученных данных
//   array.sort((a, b) => (a.localName > b.localName ? 1 : -1));// Условный (тернарный) оператор - единственный оператор в JavaScript, принимающий три операнда: условие, за которым следует знак вопроса (?)
//   console.log(array);  // Выводим отсортированный массив в консоль
// }



// async function krData() {
// const god = document.getElementById('god').value
// const strana_cod = document.getElementById('strana_cod').value 
// try { 
// const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${god}/${strana_cod}`);
// const prazdniki = await response.json();
// console.log(prazdniki);
// } catch (error) {
//   alert(error.message)
// }
// }
