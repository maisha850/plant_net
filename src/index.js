import axios from "axios"

export const imageUpload=async(imageData)=>{
    const formData = new FormData()
    formData.append('image', imageData)
     const {data} = await axios.post(`https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_image_Host_key}`, formData)
    return data?.data?.url

}
export const saveOrUpdatedUserData=async(userData)=>{
const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/users`, userData)
return data
}