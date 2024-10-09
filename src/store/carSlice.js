import { createSlice } from "@reduxjs/toolkit";
import { db } from '../../configs/index'
import { carImages, carListing } from '../../configs/schema'

const carListing = async () =>{
    const result = await db.select()
    .from(carListing)
    .leftJoin(carImages,eq(carListing.id, carImages.carListingId))
    .orderBy(desc(carListing.id))
    console.log(result)
}

export const carSlice = createSlice({
    name: 'car', 
    initialState: carListing,
    reducers: {
        
        addCarListing: (state) => {

        }, 

        fetchCarListing: (state) => {

        },

        getCarListByEmail:(state) => {

        },

        deleteCarListing: (state) => {


        },

        updateCarListing:(state) => {

        }
    }
})


export const {addCarListing,fetchCarListing,deleteCarListing,updateCarListing } = carSlice.actions
export default carSlice.reducer