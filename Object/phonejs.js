class Item {
    constructor(name, price, quantity, discount) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
    }
    getAmount() {
        return (1 - this.discount) * this.price * this.quantity;
    }
    getDiscount() {
        return `${this.discount * 100}%`;
    }
}


let bill = [
    new Item("Sony Xperia", 3200000, 2, 0.1),
    new Item("SamSung Galaxy", 4500000, 3, 0),
    new Item("Nokia 6", 2500000, 3, 0.2),
    new Item("Xiaomi Redmi Note 4", 3500000, 3, 0.1),
    new Item("Apple iPhone 6S", 4900000, 6, 0),
    new Item("Xiaomi Mi 5s Plus", 3200000, 4, 0.15),
    new Item("Apple iPhone 8 Plus", 6900000, 2, 0),
    new Item("Fujitsu F-04E", 3900000, 3, 0.1),
    new Item("Oppo A71", 5900000, 6, 0.1),
]

function renderBill() {
    let tbBill = document.getElementById('phone');
    let totalAmount = 0;
    for (let i = 0; i < bill.length; i++) {
        phone.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${bill[i].name}</td>
                <td style='text-align:right;'>${bill[i].quantity}</td>
                <td style='text-align:right;'>${bill[i].price}</td>
                <td style='text-align:right;'>${bill[i].getDiscount()}</td>
                <td style='text-align:right;'>${bill[i].getAmount()}</td>
            </tr>
        `
        totalAmount += bill[i].getAmount();
    }
    document.getElementById('totalAmount').innerHTML = totalAmount;
}

renderBill();