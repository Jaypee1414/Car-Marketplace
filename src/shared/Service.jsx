import axios from "axios"
const applicationID = import.meta.env.VITE_SENDBIRD_APPLICATION_ID
const  sendBirdToken = import.meta.env.VITE_SENDBIRD_API_TOKENS

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

const registerInSendbird = (userId,userName,userImageProfile ) => {
    return  axios.post(`https://api-${applicationID}.sendbird.com/v3/users`,{
        user_id: userId,
        nickname: userName,
        profile_url: userImageProfile,
        issue_access_token: false,
    },
    {
    headers:{
        'Content-Type': 'application/json',
        'Api-token': import.meta.env.VITE_SENDBIRD_API_TOKENS
    }
    })   
}
export default {
    FormResult,
    registerInSendbird
}