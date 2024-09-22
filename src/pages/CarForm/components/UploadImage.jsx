import React, { useState } from 'react'

function UploadImage() {
    const [uploadImages, setUploadImages] = useState([])

    const handleSubmitImages = (event) =>{ 
        const image = event.target.files
        
        for (let index = 0; index < image.length; index++) {
            const file =image[index]
            setUploadImages((prevdata)=>[...prevdata,file])
        }
    }

  return (
    <div>
        <h2 className="font-medium text-lg mb-6">Car Image</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
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
