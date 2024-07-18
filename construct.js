// function student(name, rollno, dept, age){
//     this.name=name
//     this.rollno=rollno
//     this.dept=dept
//     this.age=age
    
// }
//   const el=new student("vasa",34,"b.com",20)
//   student.prototype.section="II"


//  console.log(el);
//  console.log(el.section);

// function findeligiblity(){
//     const age=document.getElementById("age").value
//     if(age>=18) {
//         alert("eligible for voting")
//     }
//     else{
//         alert("not eligible for voting")
//     }

// }
let state = true
function toggle(event) 
{
    console.log(event.target)
    if(state){
    event.target.value="off"
    event.target.style="background-color:red"
    state =!state
    }else{
        event.target.value="on"
        event.target.style="background-color:green"
        state =!state
    }
}
console.log(state);