// Q1=============
// let arr = [];
// Q2=============
// let obj = {};
// Q3=============
// let arr = [""]
// Q4=============
// let arr = [12]
// Q5=============
// let arr = [true]
// Q6=============
// let mixA = ["apple",12, "true"]
// Q7=============
// let arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]

// document.write("QUALIFICATIONS:" +"<br>")
// document.write("1)"+ arr[0] +"<br>")
// document.write("2)"+ arr[1] +"<br>")
// document.write("3)"+ arr[2] +"<br>")
// document.write("4)"+ arr[3] +"<br>")
// document.write("5)"+ arr[4] +"<br>")
// document.write("6)"+ arr[5] +"<br>")
// document.write("7)"+ arr[6] +"<br>")
// document.write("8)"+ arr[7] +"<br>")
// Q8=================
// let  studentNames = ["Michale","Jhon","Tony"]
// let  studentSco = [320,230,480]
// let TotalMarks = 500;
// for(let i = 0 ; i < studentNames.length; i++){
//     let name = studentNames[i]
//     let score = studentSco[i]
//     let percent = score / TotalMarks * 100

//     console.log(`Score of ${name} is ${score} TotalMarks ${TotalMarks}, percentage ${percent.toFixed(2)}%`);
// }


// Q9=======================
// let colors = ["Red","Orange","Blue"," Green","Purple"]
// let user = prompt('What colours do you want add in start')
// colors.unshift(user)
// document.write(colors);
// ==========
// let colors = ["Red","Orange","Blue"," Green","Purple"]
// let user = prompt('What colours do you want add in end')
// colors.push(user)
// document.write(colors);
// ============
// let colors = ["Red","Orange","Blue"," Green","Purple"]
// let user = prompt('What colours do you want add 2 name in start')
// let user2 = prompt('What colours do you want add 2 name in start')
// colors.unshift(user)
// colors.unshift(user2)
// document.write(colors);
// d==================
// let colors = ["Red","Orange","Blue"," Green","Purple"]
// colors.pop()
// document.write(colors);
// e===============
// let colors = ["Red","Orange","Blue"," Green","Purple"]
 
// colors.splice(1 , 0 ,"black")
// console.log(colors);

// f=================
// let colors = ["Red","Orange","Blue"," Green","Purple"]
//   colors.splice(1 , 1)
//  console.log(colors);

// g====================
// let scoreOfStudents = [280, 920, 450, 670]
// scoreOfStudents.sort()
// console.log(scoreOfStudents);

// Q11 ==================
// let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawer"]
// let p = prompt("Enter 2 cities name")
// document.write("Cities list :"+"<br>")
// document.write(cities +"<br>")
// document.write("Selected Cities :"+"<br>")
// document.write(p)

// Q12==================
// let arr = ["This" , "is"  , "my" , "cat" ]
// let joinSt = arr.join(" ")
// console.log(joinSt);

// // Q13=======fifo=======

// let arr = []
// arr.unshift("keyboard")
// arr.unshift("mouse")
// arr.unshift("printer")
// arr.unshift("monitor")
// console.log(arr);
// let v1 = arr.shift()
// let v2 = arr.shift()
// let v3 = arr.shift()
// let v4 = arr.shift()
// console.log(v1,v2,v3,v4);

// Q14==============
// let arr = []
// arr.push("keyboard")
// arr.push("mouse")
// arr.push("printer")
// arr.push("monitor")
// console.log(arr);
// let v1 = arr.pop()
// let v2 = arr.pop()
// let v3 = arr.pop()
// let v4 = arr.pop()
// console.log(v1,v2,v3,v4);

// Q15================

//  let items =  ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

//  let  selectHtml = "<select>"
//  items.forEach((item)=>{
//     selectHtml += `<option> ${item}</option>` 
//  })
//  selectHtml +="</select>"
//  document.write(selectHtml);
// task completed==================================