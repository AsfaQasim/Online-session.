// //                        // Object 
let studentInfo = {
    
     // key :  // value
    name: "Asfa",
    age: 20, 
    class :"Thursday 9 to 12",
    Teacher :  "Sir Hamza Alvi",
    id: 20
}



                // For Access(Dot notation)

         console.log(studentInfo.class);


    //      // For Access (Dynamic)
                
       console.log(studentInfo["name"]);


    //    // For Access(Back tag)

       console.log(`My name is ${studentInfo.name} and my slot is ${studentInfo.class}`);

               // Operation 

               
           console.log(Object.keys(studentInfo));
           console.log(Object.values(studentInfo));
           console.log(Object.entries(studentInfo));
           
        //     Object.keys

        //    let obj1 = {
        //     a: 1,
        //     b: 2,
        //     c: 3,
        //    }
        //  console.log(Object.keys(obj1));

        //  let obj2 = {
        //     0:"A",
        //     4: "B",
        //     1: "C",
        //  }
        //  console.log(Object.keys(obj2));
         
    // //      //  Object.values
    //      let obj3 = {
    //         0:"A",
    //         1: "B",
    //         2: "C",
    //      }
    //       console.log(Object.values(obj3));
           
          let obj4 = {
            100: "A",
            0: "B",
            7: "C",
          }
          console.log(Object.values(obj4));

    //    // Object.entries
        
    // let obj5 = {
    //     100: "A",
    //     8: "B",
    //     7: "C"
    // }
    // console.log(Object.entries(obj5));
    
          
           
               

       //    Nested Object

       let studentInfo1 = {
        name: "Bisma",
        class: "Thursday 9 to 12",
        address: {
            country: {
                city: "Karachi"

            }
        }

       }

//        //      for Access

       console.log(studentInfo1.address.country.city);
       
       
//        //   Function in object 

       let studentData1 = {
        name: "Asfa",
        age: 20,
        slot: "Thursday",
        func:(x: number, y: number) => {
            return x + y;
        }
       }

    console.log(studentData1.func(2,3));
    
//                 //   Type define 

let studentInfo2 : {
    name: string;
    age: number;
    isStudent: boolean;
    slot : string;
} = {
    name: "Asfa",
    age: 20,
    isStudent : true,
    slot: "Thursday"
}
               
//                           // Type Alias 


 type IStudentInfo = {
    name: string;
    age : number;
    isStudent : boolean;
    slot ?: string;

 }   
 
 let studentData : IStudentInfo = {
    name: "Bisma",
    age: 21,
    isStudent : true,
    // slot : "Thursday"

 }
//                  // Interface 

       interface StudentData {
        name: string;
        age: number;
        slot: string
       }
       
 const student: StudentData = {
    name: "Asfa",
    age: 20,
    slot: "Thursday"
 }





 //              ASSIGNMENT 01
 
 // TYPE ALIAS BNANI HE JIS ME ARRAY OF OBJECT PEOPERTY BH STORE KRNI HE


//              ASSIGNMENT 02

// PRODUCT INFO K LIYE TYPE ALIAS BNYE GE 
//( 3 PROPERTY)
 //name:
 //price:
 //quantity:

 //   3 PRODUCT KA DATA STORE KRNA HE TYPE ALIAS KO USE KRTE OR USE PRINT KRNA

