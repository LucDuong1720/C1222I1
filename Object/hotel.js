class Item {
    constructor(name, price, day, discount, surcharge) {
        this.name = name;
        this.price = price;
        this.day = day;
        this.discount = discount;
        this.surcharge = surcharge;
    }
    getAmount() {
        return (1 - this.discount) * (this.price * this.day + this.surcharge);
    }
    getDiscount() {
        return `${this.discount * 100}%`;
    }
}

let hotel = [
    new Item("101", 500000, 3, 0, 100000),
    new Item("201", 1000000, 5, 0.1, 300000),
    new Item("301", 1500000, 4, 0.1, 200000)
]

// for (let i = 0; i < hotel.length; i++) {
//     console.log(`${hotel[i].name}\t\t${hotel[i].price}\t\t${hotel[i].day}\t\t${hotel[i].getDiscount()}\t\t${hotel[i].surcharge}\t\t${hotel[i].getAmount()}`)
// }

function renderHotel() {
    let tbHotel = document.getElementById('tbHotel');
    for (let i = 0; i < hotel.length; i++) {
        let totalAmount = 0;
        tbHotel.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${hotel[i].name}</td>
            <td>${hotel[i].price}</td>
            <td>${hotel[i].day}</td>
            <td>${hotel[i].getDiscount()}</td>
            <td>${hotel[i].surcharge}</td>
            <td>${hotel[i].getAmount()}</td>
        </tr>
    `
        totalAmount += hotel[i].getAmount();
    }
    document.getElementById('totalAmount').innerHTML = totalAmount;
}

renderHotel();