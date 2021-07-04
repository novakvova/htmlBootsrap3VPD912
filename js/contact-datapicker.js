//Отоимуємо поточну дату 
var dateObj = new Date();
var month = dateObj.getUTCMonth(); //отримали місяць
var day = dateObj.getUTCDate(); //торимали день
var year = dateObj.getUTCFullYear() - 18; //від поточного року відняли 18 

//ініціалізуємо календар для інпута txtDateBirth по id
$('#txtDateBirth').datepicker({
    format: "dd.mm.yyyy",      //формат дати
    language: 'uk',             //локалізація
    startDate: "01.01.1900",    //початкова дата
    endDate: `${day}.${month}.${year}` //вказую кінцеву дату для дата пікара
});