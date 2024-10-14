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
            result[listingId].image.push(item.carImages)
        }
    })

    result.forEach((item) => {
        finalResult.push({
            ...item.car, 
            image: item.image
        })
    })

    return finalResult
}

export default {
    FormResult
}