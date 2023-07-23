let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})
let productsData = {
    category1: [{
        name: "Робот-пилосос Rowenta X-PLORER S130AI Standard White RR9067WH",
        description: "Робот-пилосос оснащений штучним інтелектом і знаходиться в постійному процесі самонавчання, пропонуючи вам розумні функції, наприклад: рекомендації щодо прибирання чи планування майбутніх прибирань на основі звичок, встановлення автоматичних заборонених зон з попередніх сеансів прибирання тощо.  "
    }, {
        name: "Кавомашина KRUPS Essential EA816570",
        description: "Набір для автоматичного спінювання молока XS6000 дозволяє швидко та без зайвих зусиль приготувати капучино або лате. Наберіть молоко у металеву ємність, оберіть потрібний режим та натисніть кнопку подачі пари – пінка для чудового напою готова!"
    }, {
        name: "Блендер TEFAL QUICKCHEF HB653838",
        description: "20-ступеневе плавне регулювання швидкості допоможе вам обрати потрібну швидкість відповідно до ваших уподобань і типу страв, які ви хочете приготувати. Також блендер обладнаний функцією Turbo, завдяки якій ви зможете готувати ваші улюблені страви та соки набагато швидше."
    }], category2: [{
        name: "Орбітрек EnergyFIT GB-506E",
        description: "Орбітрек EnergyFIT GB-506E призначений для людей, які перебувають у ваговій категорії, що не перевищує 115 кг. Агрегат належить до магнітного типу, задньопривідний, живлення не потрібне. В наявності є вісім динамічних рівнів навантаження, які підійдуть абсолютно всім. Зміни відбуваються механічно"
    }, {
        name: "Лава для жиму RN-Sport + набір силовий на 50 кг (trex_050)",
        description: "Вищевказані елементи сприяють швидкому розвитку м'язів грудної клітки, литок і стегон Кожен елемент лави для вправ був створений із думкою про безпечні й комфортні тренування: міцна конструкція, міцна й ергономічна рама, можливість обважнення дисками, складана конструкція. надійні клеми для дисків, млинців будь-якої ваги для того, щоб вони не зісковзували. Оббивка зроблена з високоякісного ПВХ і заповнена пінополіуретаном — ці матеріали ідеально підходять для тривалих та інтенсивних фізичних вправ."
    }, {
        name: "Турнік розсувний PowerPlay 4128 PULL UP BAR 60-90 см Steel/Black (PP_4128)",
        description: "Тягова штанга виготовлена ​​з потовщеної сталі, а порошкове покриття запобігає утворенню іржі та корозії. Ми використовуємо високоякісні стопорні гайки, які гарантують, що штанга ніколи не ослабне. Це набагато краще, ніж звичайний, лише для додаткової безпеки. Він може витримувати до 440 фунтів.  Ручки покриті піною, зручні в руці, багатофункціональні, протиковзкі та зносостійкі. "
    }], category3: [{
        name: "Сукня ISSA PLUS 13860 XL Зелена (issa2007682367375)",
        description: "Зелена сукня ретро з розрізом. Зелена ретро сукня приталеного крою з розкльошеним низом і розрізом на нозі, виготовлена з бавовняного штапелю. Сукня на блискавці з міді довжиною та короткими рукавами-ліхтариками на резинках. Модель з відкритими плечима та гумкою вздовж пройми. "
    }, {
        name: "Футболка Koton 3WAM10068HK-001 L Off White (8683352427187)",
        description: "Чоловіча футболка з текстовим принтом, виконана з якісного та приємного до тіла матеріалу, крій вільний, круглий виріз."
    }, {
        name: "Чоловічі кросівки New Balance 530 MR530ZEL 47.5 (13US) 31 см Сірий/Сріблястий (196432147687)",
        description: "Чоловічі кросівки від New Balance це повернення до однієї з класичних моделей бігових кросівок. Це повсякденне взуття поєднує у собі повсякденний стиль та сучасні технології. Кращий вибір для повсякденного носіння. "
    }]
};
function showProducts(category) {
    let products = productsData[category];
    let productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(function (product) {
        let listItem = document.createElement("li");
        listItem.textContent = product.name;
        listItem.onclick = function () {
            showProductInfo(product);
        };
        productList.appendChild(listItem);
    });
}
function showProductInfo(product) {
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productDescription").textContent = product.description;
    document.querySelector(".product-info button").style.display = "block";
}
function buyProduct() {
    document.querySelector(".product-info button").style.display = "none";
    document.querySelector(".order-form").style.display = "block";
}
function submitOrder(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let city = document.getElementById("city").value;
    let shipping = document.getElementById("shipping").value;
    let payment = document.getElementById("payment").value;
    let quantity = document.getElementById("quantity").value;
    let comment = document.getElementById("comment").value;

    if (!fullName || !city || !shipping || !payment || !quantity) {
        document.getElementById("error").textContent = "Будь ласка, заповніть обов'язкові поля.";
        return;
    }
    document.getElementById("error").textContent = "";

    document.getElementById("orderProductName").textContent = "Назва товару: " + document.getElementById("productName").textContent;
    document.getElementById("orderProductDescription").textContent = "Опис товару: " + document.getElementById("productDescription").textContent;
    document.getElementById("orderFullName").textContent = "ПІБ покупця: " + fullName;
    document.getElementById("orderCity").textContent = "Місто: " + city;
    document.getElementById("orderShipping").textContent = "Склад Нової пошти для надсилання: " + shipping;
    document.getElementById("orderPayment").textContent = "Післяплата або оплата банківською карткою: " + payment;
    document.getElementById("orderQuantity").textContent = "Кількість: " + quantity;
    document.getElementById("orderComment").textContent = "Коментар: " + comment;

    document.querySelector(".order-form").style.display = "none";
    document.querySelector(".order-info").style.display = "block";
}
function submitOrder(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let city = document.getElementById("city").value;
    let shipping = document.getElementById("shipping").value;
    let payment = document.getElementById("payment").value;
    let quantity = document.getElementById("quantity").value;
    let comment = document.getElementById("comment").value;

    if (!fullName || !city || !shipping || !payment || !quantity) {
        document.getElementById("error").textContent = "Будь ласка, заповніть обов'язкові поля.";
        return;
    }
    document.getElementById("error").textContent = "";
    const order = {
        productName: document.getElementById("productName").textContent,
        productDescription: document.getElementById("productDescription").textContent,
        fullName,
        city,
        shipping,
        payment,
        quantity,
        comment,
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Очистити поля форми після збереження замовлення
    document.getElementById("fullName").value = "";
    document.getElementById("city").value = "";
    document.getElementById("shipping").value = "";
    document.getElementById("payment").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("comment").value = "";

    document.querySelector(".order-form").style.display = "none";
    document.querySelector(".order-info").style.display = "block";
    updateSavedOrdersList();
}

function updateSavedOrdersList() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let orderList = document.getElementById("savedOrdersList");
    orderList.innerHTML = "";
    orders.forEach(function (order, index) {
        let listItem = document.createElement("li");
        listItem.textContent = `Замовлення №${index + 1}: ${order.productName} (${order.quantity} шт.)`;
        listItem.onclick = function () {
            showSavedOrderInfo(order);
        };
        orderList.appendChild(listItem);
    });
}

function showSavedOrderInfo(order) {
    document.getElementById("orderProductName").textContent = "Назва товару: " + order.productName;
    document.getElementById("orderProductDescription").textContent = "Опис товару: " + order.productDescription;
    document.getElementById("orderFullName").textContent = "ПІБ покупця: " + order.fullName;
    document.getElementById("orderCity").textContent = "Місто: " + order.city;
    document.getElementById("orderShipping").textContent = "Склад Нової пошти для надсилання: " + order.shipping;
    document.getElementById("orderPayment").textContent = "Післяплата або оплата банківською карткою: " + order.payment;
    document.getElementById("orderQuantity").textContent = "Кількість: " + order.quantity;
    document.getElementById("orderComment").textContent = "Коментар: " + order.comment;

    document.querySelector(".order-form").style.display = "none";
    document.querySelector(".order-info").style.display = "block";
}

window.addEventListener("DOMContentLoaded", function () {
    updateSavedOrdersList();
});
function showMyOrders() {
    document.querySelector(".categories").style.display = "none";
    document.querySelector(".products").style.display = "none";
    document.querySelector(".product-info").style.display = "none";
    document.querySelector(".order-form").style.display = "none";
    document.querySelector(".order-info").style.display = "none";
    document.querySelector(".saved-orders").style.display = "block";
}

window.addEventListener("DOMContentLoaded", function () {
    updateSavedOrdersList();
});
function showMyOrders() {
    document.querySelector(".categories").style.display = "none";
    document.querySelector(".products").style.display = "none";
    document.querySelector(".product-info").style.display = "none";
    document.querySelector(".order-form").style.display = "none";
    document.querySelector(".order-info").style.display = "none";
    document.querySelector(".saved-orders").style.display = "block";

    updateSavedOrdersList();
}

window.addEventListener("DOMContentLoaded", function () {
    updateSavedOrdersList();
});
function submitOrder(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let city = document.getElementById("city").value;
    let shipping = document.getElementById("shipping").value;
    let payment = document.getElementById("payment").value;
    let quantity = document.getElementById("quantity").value;
    let comment = document.getElementById("comment").value;

    if (!fullName || !city || !shipping || !payment || !quantity) {
        document.getElementById("error").textContent = "Будь ласка, заповніть обов'язкові поля.";
        return;
    }
    document.getElementById("error").textContent = "";
    const order = {
        productName: document.getElementById("productName").textContent,
        productDescription: document.getElementById("productDescription").textContent,
        fullName,
        city,
        shipping,
        payment,
        quantity,
        comment,
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    document.getElementById("fullName").value = "";
    document.getElementById("city").value = "";
    document.getElementById("shipping").value = "";
    document.getElementById("payment").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("comment").value = "";

    showMyOrders();
}

function returnToList() {
    document.querySelector(".order-form").style.display = "none";
    document.querySelector(".order-info").style.display = "none";
    document.querySelector(".saved-orders").style.display = "block";
}