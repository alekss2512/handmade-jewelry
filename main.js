function storeInput() {
    let inputs = document.querySelectorAll(".form_input");

    let storage = {};

    for (input of inputs) {
        storage[input.firstElementChild.placeholder] = input.firstElementChild.value;
    }

    console.log(storage);

    localStorage.setItem("data", JSON.stringify(storage));

}