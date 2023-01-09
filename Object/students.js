// let ip14plus = {
//     name: ["iP14 Plus"],
//     colours: ["White", "Red", "Black"],
//     chip: ["A13"],
//     battery: ["4323mh"],
//     camera: ["32MP"],
// }
// let ip14 = {
//     name: ["iP 14"],
//     colours: ["White", "Red", "Black"],
//     chip: ["A13"],
//     battery: ["3200mh"],
//     camera: ["32MP"],
// }
// // let philong = [ip14plus, ip14]

// let philong = [
//     {
//         name: ["iP14 Plus"],
//         colours: ["White", "Red", "Black"],
//         chip: ["A13"],
//         battery: ["4323mh"],
//         camera: ["32MP"],
//     },
//     {
//         name: ["iP 14"],
//         colours: ["White", "Red", "Black"],
//         chip: ["A13"],
//         battery: ["3200mh"],
//         camera: ["32MP"],
//     }
//     console.log
// ]

// let philong = [
//     [let ip14 = {
//         name: ["iP 14"],
//         colours: ["White", "Red", "Black"],
//         chip: ["A13"],
//         battery: ["3200mh"],
//         camera: ["32MP"],
//     }]
//     ,
//     [let ip14plus = {
//         name: ["iP14 Plus"],
//         colours: ["White", "Red", "Black"],
//         chip: ["A13"],
//         battery: ["4323mh"],
//         camera: ["32MP"],
//     }]

// ]

let students = [
    {
        name: "Nguyen Van A",
        birth: "02/04/1999",
        gender: "Nam",
        grades:
        {
            math: 5.6,
            physics: 7.9,
            chemistry: 9.4,
        }

    },
    {
        name: "Nguyen Van B",
        birth: "08/03/1999",
        gender: "Nam",
        grades:
        {
            math: 7.6,
            physics: 4.9,
            chemistry: 6.4,
        }

    },
    {
        name: "Nguyen Van C",
        birth: "05/12/1999",
        gender: "Khác",
        grades:
        {
            math: 9.6,
            physics: 7.9,
            chemistry: 8.4,
        }
    }
]
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name + " " + "Math: " + students[i].grades.math + ", Physics: " + students[i].grades.physics + ", Chemistry: " + students[i].grades.chemistry);
// }

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name} Math: ${students[i].grades.math}, Physics: ${students[i].grades.physics}, Chemistry: ${students[i].grades.chemistry}`);
}