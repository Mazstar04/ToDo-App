// import firebase from "firebase";
// import { useEffect } from "react";

// const Update = ({ doc }) => {

//     const getValue = (event) => {
//         setValue(event.target.value);
//         };
//         const updateValue = () => {
//         db.collection("values")
//         .doc(doc)
//         .update({
//         value: value,
//         })
//         .then(function () {
//             console.log("Document successfully updated!");
//         })
//         .catch(function (error) {
//             console.error("Error updating document: ", error);
//         });
//         };
//     return (
//         <>
//             <input onClick={getValue} type='text' />
//             <button onClick={updateValue}>Update</button>
//         </>
//     );
// }
 
// export default Update;