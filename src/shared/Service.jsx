const FormResult = (res) => {
    let result = []
    let finalResult = []
    res.forEach((item)=>{
        const listingId = item.carList.id
        if(!result[listingId]){
            result[listingId] = {
                car: item.carList,
                image:[]
            }
        }
        if(item.carImages){
            result[listingId].image.push(item.image)
        }
    })

    result.forEach((item) => {
        finalResult ={
            ...item.car , 
            image: item.image
        }
    })

    return finalResult
}

export default {
    FormResult
}