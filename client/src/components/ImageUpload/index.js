import React, { useState, useEffect} from "react";

const ImageUpload = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImagesURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImagesURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return( 
        <>
            <input type="file" multiple accept="image/*" onChange={onImageChange} />
            { imageURLs.map(imageSrc => <img src={imageSrc} />)}
        </>
    );
}

export default ImageUpload;