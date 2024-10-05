import { createSlice } from "@reduxjs/toolkit";


export const carSlice = createSlice({
    name: 'car', 
    initialState: null,
    reducers: {
        
        addCarListing: () => {

        }, 

        fetchCarListing: () => {

        },

        deleteCarListing: () => {


        },

        updateCarListing: () => {

        }
    }
})


export const {addCarListing,fetchCarListing,deleteCarListing,updateCarListing } = carSlice.actions
export default carSlice.reducer