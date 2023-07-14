let submitButton = document.querySelector("#submit_student");

let symbol = 3000;

setInterval(() => {
    document.querySelector("#card_no").value = symbol;
    submitButton.click();
    try {
        console.log(document.querySelector("#print_result > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2)").textContent);
    } catch (error) {

    }
    symbol++;
    console.log(symbol);
}, 1000)


