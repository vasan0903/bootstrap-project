// var obj1={
//     name:"vasa",
//     age: "20"
//  }
// console.log("data type:",typeof(obj1));
// console.log("before adding the place & area:",obj1);
// obj1.place="madurai";
// obj1.area="aalvarpuram"; 
// console.log("after adding the place &area",obj1);
// console.log("obj1 place value:", obj1["area"]);

// var obj = new Object();
// obj.name="rajesh";
// obj.gender="female";
// obj.age="100"

// console.log("before delete",obj);
// delete obj["name"];
// console.log("after delete",obj);

// // var obj2 = new cons1();
// function cons1(){
//          this.name="vasa",
//          this.age="30",
//          this.gender="male"
// }
// cons1();
// console.log();

//  const exam = {
//      name:"vasan",
//      rno:34,
//     mark:80,
//      display: function(){
//         alert("user name is" + this.name)
//     }
//  }
// exam={...exam,qualification:"degree"}
// console.log(exam);

// const user={}
// const user = new Object()
// user.firstname="vasa"
// user.lastname="sanj"

// console.log(user);
// // console.log(user["firstname"]+"  "+ user["lastname"]);
// console.log(user.firstname+".n."+user.lastname);

const user={
    firstname:"vasa",
    lastname:"sanj",
    mark:{
        sslc:80,
        hsc:90,
        degree:{
            bba:10,
            mba:9
        }
    },
    fullname: function(){
        return this.firstname+" "+this.lastname
    }
    
}
console.log(user.mark.degree.mba);
console.log(user.fullname());
