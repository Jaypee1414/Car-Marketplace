import { createSlice } from "@reduxjs/toolkit";
import { db } from '../../configs/index'
import { carImages, carListing } from '../../configs/schema'

const carList = []

export const carSlice = createSlice({
    name: 'car', 
    initialState: carList,
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