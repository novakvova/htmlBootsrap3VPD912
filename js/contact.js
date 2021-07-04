window.onload = function () {

    //регекс для телефону
    const regex_phone = /^(?=\+?([0-9]{2})\(?([0-9]{3})\)?([0-9]{3})-?([0-9]{2})-?([0-9]{2})).{17}$/;
    //let ivan = "Іван";
    //Конопка для збережння даних
    var btn = document.getElementById("btnClick");
    //Назва модалки
    var modalName = document.getElementById("modalName");
    //поле для вводу імені
    var txtName = document.getElementById("txtName");
    //поля для вводу прізвище
    var txtLastName = document.getElementById("txtLastName");
    //вибір дати народження
    var txtDateBirth = document.getElementById("txtDateBirth");
    //вибір телефону
    var txtPhone = document.getElementById("txtPhone");

    //для поля телефон робимо маску
    IMask(
        txtPhone, {
        mask: '+00(000)000-00-00' //формат маски
    });

    //вішаємо обробники для валідації полів коли ми туди пишемо
    txtName.oninput = isValidTextInput;
    txtLastName.oninput = isValidTextInput;
    txtPhone.oninput = isValidPhoneInput;
    txtDateBirth.onchange = isValidTextInput;

    //валідація дзваичайного інтупа чи він не пустий
    function isValidTextInput(e) {
        if (e.target.value == "") //якщо пустий
            showError(e.target); //показуємо для нього помилку
        else
            showSuccess(e.target); //усе добре, показуємо саксес
    }

    //перевікка номеру телефону
    function isValidPhoneInput(e) {
        if (!regex_phone.test(e.target.value)) //видаємо регекс
            showError(e.target);//показуємо для нього помилку
        else
            showSuccess(e.target);//усе добре, показуємо саксес
    }

    btn.onclick = function () {
        var isValid = true;
        if (txtName.value == "") {
            showError(txtName);
            isValid = false;
        }
        else {
            showSuccess(txtName);
        }

        if (txtDateBirth.value == "") {
            showError(txtDateBirth);
            isValid = false;
        }
        else {
            showSuccess(txtDateBirth);
        }

        if (txtLastName.value == "") {
            showError(txtLastName);
            isValid = false;
        }
        else {
            showSuccess(txtLastName);
        }

        if (isValid) {
            $("#modalInfo").modal("show");
            modalName.innerHTML = lastName + " " + name;
        }

        //alert(txtName.value);
    }

    //відобразити помилку для інтута
    function showError(input) {
        input.classList.add("is-invalid"); //додати клас до інпута, що є помилка
        input.classList.remove("is-valid"); //забрати клас з інтупа, що усе добре
    }
    //сховати помилку відобразити галочку, що усе добре
    function showSuccess(input) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
}