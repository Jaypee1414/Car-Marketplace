import { db } from '../../../../configs/index';
import { storage } from '../../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { carImages } from '../../../../configs/schema';

function UploadImage({triggeredUploadImages,setLoader}) {
    const [uploadImages, setUploadImages] = useState([])

    const handleSubmitImages = (event) =>{ 
        const image = event.target.files
        
        for (let index = 0; index < image.length; index++) {
            const file = image[index]
            setUploadImages((prevdata)=>[...prevdata,file])
        }
    }

    const removeItem = (img) => {
        const result = uploadImages.filter((item) => {
            return item != img
        })
        setUploadImages(result)
    }

    useEffect(()=>{
        if(triggeredUploadImages){
            UploadImage()
        }
    },[triggeredUploadImages])
    const UploadImage = async() => {
       await uploadImages.forEach((image) => {
            const filename = Date.now + 'jpeg'
            const storageRef = ref(storage,'car-marketplace/' + filename)
            const metaData ={
                contentType: 'image/jpeg'
            } 
            uploadBytes(storageRef,image,metaData).then((snapshot) => {
                console.log('Upload Image Successful')
                setLoader(true)
            }).then((res)=>{
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    console.log(downloadURL)
                    await db.insert(carImages).values({
                        imageURL: downloadURL,
                        carListingId: triggeredUploadImages
                    })
                    setLoader(false)
                })
            })
            
        })
    }

  return (
    <div>
        <h2 className="font-medium text-lg mb-6">Car Image</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
            {uploadImages.map((img,index) => (
            <div key={index}>
                <IoCloseCircle className='absolute m-3 cursor-pointer text-white' onClick={() => removeItem(img)}/>
                <img src={URL.createObjectURL(img)} alt="car image" className='w-full object-cover rounded-lg hover:shadow-md' />
            </div>
            ))}
            <label htmlFor='upload-images'>
                <div className='flex justify-center items-center border rounded-lg border-dotted border-primary bg-blue-100 cursor-pointer hover:shadow-md p-10'>
                    <h2 className='text-lg item-center text-primary'>+</h2>
                </div>
            </label>
            <input type="file" multiple={true} id='upload-images' className='opacity-0' onChange={handleSubmitImages}/>
        </div>    
    </div>
  )
}

export default UploadImage
