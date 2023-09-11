// console.log($(".allParent"))

// $(".child11").click(function(){
//     // $(this).parent().toggleClass("isActive")
//     // $(this).parent().next.toggleClass("isActive")
//     // $(this).parent().prev.toggleClass("isActive")
//     // $(this).closest(".allParent").toggleClass("isActive")
//     // $(this).closest(".allParent").find(".child44").toggleClass("isActive")
//     // $(this).closest(".allParent").siblings().toggleClass("isActive")
// })

                // Задание 1
// let value = prompt("Введите число", '')

// if (value>0) {
//     alert('положительное')
// } else if(value<0) {
//     alert('отрицательное')
// } else {
//     alert('ноль')
// }


                // Задание 2
// let old = prompt("Введите ваш возраст", '')

// if ((old>0) && (old<120)) {
//     alert ("correct")
// } else {
//     alert (NaN)
// }




                // Задание 3
// let value = prompt("Введите число", '')

// if (value>=0) {
//     alert(value)
// } else {
//     alert (-value)
// }




                 // Задание 4                   
// let x = prompt("Введите x", '')
// let y = prompt("Введите y", '')

// if ((x==0) && (y==0)) {
//     alert ("Начало координат")
// } else if ((x>0) && (y>0)) {
//     alert("1")
// } else if ((x<0) && (y>0)) {
//     alert ("2")
// } else if ((x<0) && (y<0)) {
//     alert ("3")
// } else if ((x>0) && (y<0)) {
//     alert ("4")
// } else if ((x==0) && (y>0)) {
//     alert ("ось y")
// } else if ((x==0) && (y<0)) {
//     alert ("ось -y")
// } else if ((x>0) && (y==0)) {
//     alert ("ось x")
// } else if ((x<0) && (y==0)) {
//     alert ("ось -x")
// }





                // Задание 5
// let value = prompt("Введите название месяца", '')

// switch (value) {
//     case 'январь':
//         value = 1
//         break

//     case 'февраль':
//         value = 2
//         break

//     case 'март':
//         value = 3
//         break

//     case 'апрель':
//         value = 4
//         break

//     case 'май':
//         value = 5
//         break

//     case 'июнь':
//         value = 6
//         break

//     case 'июль':
//         value = 7
//         break

//     case 'август':
//         value = 8
//         break
    
//     case 'сентябрь':
//         value = 9
//         break

//     case 'октябрь':
//         value = 10
//         break

//     case 'ноябрь':
//         value = 11
//         break

//     case 'декабрь':
//         value = 12
//         break

//     default:
//         alert("такого месяца нет")
//         break
// }

// alert (value)





                    // Задание 6
// let x = +prompt("Введите x", '')
// let y = +prompt("Введите y", '')
// let result = prompt ("введите действие", '')

// switch (result) {
//     case '+':
//         result = x+y
//         break

//     case '-':
//         result = x-y
//         break

//     case '*':
//         result = x*y
//         break

//     case '/':
//         result = x/y
//         break

//     default:
//         alert ("Такого мы не учили")
// }

// alert (result)



                    // Задание 7
// let value = prompt("Введите число", '')
// for (let index=0; index<value; index++) {
//     alert(value)
// }


let value = prompt("Введите число", '')
for (let index=value; index>=0; index--) {
    console.log(index)
}