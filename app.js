// var main = document.getElementById("main");
// var input = document.getElementById("inp");

// function add() {
//     if(input.value == ""){
//         alert("Enter text todo");
//     }else{
//         var li = document.createElement("li");
//         var liText = document.createTextNode(input.value);
//         li.appendChild(liText);
//         var editbtn = document.createElement("button");
//         var edittext = document.createTextNode("EDIT");
//         editbtn.setAttribute("onclick" , "editbtn(this)")
//         editbtn.appendChild(edittext);
//         var deletebtn = document.createElement("button");
//         var deletetext = document.createTextNode("DELETE");
//         deletebtn.setAttribute("onclick" , "deletebtn(this)")
//         deletebtn.appendChild(deletetext);
//         li.appendChild(editbtn);
//         li.appendChild(deletebtn);
//         main.appendChild(li);
//         input.value = "";
//     }
// }

// function delete1() {
//     main.innerHTML = "";
// }

// function editbtn(element) {
//     var newvalue = prompt("enter value")
//     element.parentNode.firstChild.nodeValue = newvalue
// }

// function deletebtn(e) { 
//     console.log(e.parentNode.nodeValue.remove());
// }


var arr = [
   {
       rollNumber: "sm001",
       name: "syed Ayaan hussain zaidi",
       course: "web and mobile",
       age: 17,
   },
   {  
       rollNumber: "413754",
       name: "wasi",
       course: "web and mobile",
       age: 13,
   },
   {
       rollNumber: "00827",
       name: "yaseen",
       course: "web and mobile",
       age: 23,
   },
   {
       rollNumber: "7782t",
       name: "faisal",
       course: "web and mobile",
       age: 21,
   },
   {
       rollNumber: "32221",
       name: "abu sufyan",
       course: "web and mobile",
       age: 19,
    },
    {
       rollNumber: "3331",
       name: "hamza",
       course: "web and mobile",
       age: 16,
   },
   {
       rollNumber: "1201",
       name: "noor",
       course: "web and mobile",
       age: 38,
   },
   {
       rollNumber: "9701",
       name: "owais",
       course: "web and mobile",
       age: 12,
   },
   {
       rollNumber: "923r82",
       name: "zain",
       course: "web and mobile",
       age: 25,
   },
   {
       rollNumber: "45001",
       name: "hammad",
       course: "web and mobile",
       age: 22,
   },
]

var input = document.getElementById("input")
var para1 = document.getElementById("1para")
var para2 = document.getElementById("2para")
var para3 = document.getElementById("3para")
var para4 = document.getElementById("4para")


function press(){
    for(i = 0 ; i < arr.length; i++){
        if(input.value == arr[i].name || input.value == arr[i].rollNumber || input.value == arr[i].course || input.value == arr[i].age){
            para1.innerHTML = arr[i].name
            para2.innerHTML = arr[i].rollNumber
            para3.innerHTML = arr[i].course
            para4.innerHTML = arr[i].age
        }

}
}




// var student1 = {
// }
// var student2 = {
// }
// var student3 = {
// }
// var student4 = {
// }
// var student5 = {
// }
// var student6 = {
// }
// var student7 = {
// }
// var student8 = {
// }
// var student9 = {
// }
// var student10 = {
// }





