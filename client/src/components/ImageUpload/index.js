<<<<<<< HEAD
import React, { useState, useEffect} from "react";
import FileBase64 from "react-file-base64";
=======
// import React, {useState} from 'react'
// import storage from "../../firebase.js"
>>>>>>> 7258dcdc062cd7603bfac267a1e13d2595e77d1e

// const ImageUpload = () => {
//     const allInputs = {imgUrl: ''}
//     const [imageAsFile, setImageAsFile] = useState('')
//     const [imageAsUrl, setImageAsUrl] = useState(allInputs)

//     const handleImageAsFile = (e) => {
//         const image = e.target.files[0]
//         setImageAsFile(imageFile => (image))
//     }

//     const handleFireBaseUpload = e => {
//         e.preventDefault()
//         console.log('start of upload')

//         if(imageAsFile === '' ) {
//             console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
//         }

//         const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)

//         uploadTask.on('state_changed', 
//         (snapShot) => {
//           console.log(snapShot)
//         }, (err) => {
//           console.log(err)
//         }, () => {
//           storage.ref('images').child(imageAsFile.name).getDownloadURL()
//            .then(fireBaseUrl => {
//              setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
//            })
//         })
//     }

//     return (
//         <div className="App">
//             <form onSubmit={handleFireBaseUpload}>
//                 <input 
//                 type="file"
//                 onChange={handleImageAsFile}
//             />
//                 <button>upload to firebase</button>
//             </form>

//             <img src={imageAsUrl.imgUrl} alt="image tag" />
//         </div>
//     );
// }


// export default ImageUpload();