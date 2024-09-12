//try , catch its like if else jayse ki try ke ander ager koi code wrong ho jaye tab catch ke ander jo code dunga wo show hoga (error ke badle)
// or finally hamesha show hoga try ke ander code wrong huya ya right always show hoga
// try,catch and finally ye tab use hota hain jab code crash hota hain tab user ko kya dikhaya jai

// try{
//     let v = undefined;
//     console.log(s[0]);
// } catch{
//     console.log("Your internet connction is slow");
// } finally{
//     console.log("Finally you got excused");
// }
// console.log('The End');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// try ,catch and finally (another trying)
try {
    console.log("First");

    function hehe() {
        console.log(hello);
    }
    hehe()
    
    console.log("second");
} catch {
    console.log("Server down");
} finally {
    console.log("hello world");
}