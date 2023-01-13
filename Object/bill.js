let bill = [
    {
        name: "Caffe",
        number: 2,
        price: 20000,
        discount: 1,
    },
    {  
        name: "Fruit",
        number: 5,
        price: 30000,
        discount: 3,
    },
    {
        name: "Latte",
        number: 3,
        price: 35000,
        discount: 5,
    },
    {
        name: "Capuchino",
        number: 4,
        price: 39000,
        discount: 4,
    },
    {
        name: "Espresso",
        number: 2,
        price: 37000,
        discount: 3,
    }
]
for (i = 0; i < bill.length; i++) {
    console.log(bill[i].name = bill[i].number * bill[i].price - (bill[i].number * bill[i].price * (bill[i].discount / 100)));
}

