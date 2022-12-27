

//a==b && b==c
//a==b or b==c or c==a
//a^2 = b^2 + c^2
let a = 4; //a là cạnh lớn nhất//
let b = 3;
let c = 2;
if (a < b + c) {
    console.log('Đây ko phải là tam giác');    
}else if (a*a == b*b + c*c){
    console.log('Tam giác vuông');
}else if (a==b && b==c) {
    console.log('Tam giác đều');
}else if (a==b || b==c || c==a) {
    console.log('Tam giác cân');
}else {
    console.log('Tam giác thường');
}
