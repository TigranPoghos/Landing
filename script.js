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


// let value = prompt("Введите число", '')
// for (let index=value; index>=0; index--) {
//     console.log(index)
// }





                    //Массивы

// let array = new Array()

// let ar = [1,2,"Test", true]
// console.log(ar.length) //длина массива 

// let arr = []
// arr[0]=12
// arr[1]=14
// console.log(arr)

// let array = [10,15,12,14,15,16,123,6123,12341]

// let sum = 0

// for (let index = 0; index < array.length; index++) {
//     sum += array[index]
// }

// console.log(sum)



                    //Методы массивов

// 1. indexOf (выдает индекс переменного)
// let array = [10,15,12,14,15,16,123,6123,12341,123]
// let indexof = array.indexOf(123,[7]) //стартовая позиция//
// console.log(indexof)

// 2. lastIndexOf
// let lastindex = array.lastIndexOf(12)
// console.log(lastindex)


                    // Задание 1

// let array = [12,15,12,12,51,5123,5123]
// let sum = 0
// let indexof = array.indexOf(12)

// while(indexof != -1) {
//     sum++
//     indexof = array.indexOf(12,indexof+1)
// }

// console.log(sum)


// 3. .sort (соортировка)
// let array = [12,15,12,12,51,5123,5123]
// array = [5235,4214,-22,-42,10,11,10.5,342,2356,0]
// console.log(array.sort())

// function compareValue(a,b){
//     if(a>b){
//         return 1
//     }
//     else if (a<b){
//         return -1
//     } else return 0
// }

// console.log(array.sort(compareValue))


// 4. split (строка в массив)
// let string = "Яблоко апельсин виноград"
// string = string.split(" ")
// // string.split(separator)
// // console.log(string.split(" "))
// // console.log(string)

// 5. join (массив в строку)
// console.log(string.join())


                    // Задание
let newArray = [23,1234,32,1,23,4,87,324,7856,234,23]
// let sum = 0

// function alertArray(arr){
//     for (let index = 0; index < arr.length; index++) {
//         if (index % 2 == 0)
//             console.log(arr[index])
//             sum += arr[index]
//     }
//     console.log(`Сумма массива равна ${sum}`)
// }

// alertArray(newArray)





function compareValue(a,b){
    if(a>b){
        return 1
    }
    else if (a<b){
        return -1
    } else return 0
}

console.log(newArray.sort(compareValue))

console.log(newArray.length)
console.log(newArray[10])
 