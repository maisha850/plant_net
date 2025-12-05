import { useForm } from "react-hook-form"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"
import { imageUpload } from "../.."
import { useNavigate } from "react-router"

const AddPlantForm = () => {
   const instance = useAxiosSecure()
   const {user}=useAuth()
   const navigate = useNavigate()
  const{register, handleSubmit }=useForm()
  const handlePlantForm=async (data)=>{
    const imagefile = data.image[0]
    const image = await imageUpload(imagefile)
    console.log(image)
    const name = data.name
    const category = data.category
    const description = data.description
    const price = Number(data.price)
    const quantity = Number(data.quantity)
    
  const plant ={
    name, image, category, description , price, quantity,
    created_At : new Date().toLocaleString(),
    seller : user.email,
        photo: user?.photoURL,
          userName: user?.displayName
    
  }
instance.post('/plants', plant)
.then((res)=>{
  console.log(res.data)
  if(res.data.insertedId){
    toast.success('plant added successfully!')
    navigate('/')
  }

})
  }
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
     <form onSubmit={handleSubmit(handlePlantForm)}>
        <div className='grid grid-cols-1 gap-10'>
          <div className='space-y-6'>
            {/* Name */}
            <div className='space-y-1 text-sm'>
              <label className='block text-gray-600'>
                Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                name='name'
                {...register('name')}
                id='name'
                type='text'
                placeholder='Plant Name'
               
              />
              
            </div>
            {/* Category */}
            <div className='space-y-1 text-sm'>
              <label className='block text-gray-600 '>
                Category
              </label>
              <select
              {...register('category')}
                className='w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                name='category'
              >
                <option value='Indoor'>Indoor</option>
                <option value='Outdoor'>Outdoor</option>
                <option value='Succulent'>Succulent</option>
                <option value='Flowering'>Flowering</option>
              </select>
            </div>
            {/* Description */}
            <div className='space-y-1 text-sm'>
              <label  className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                {...register('description')}
                placeholder='Write plant description here...'
                className='block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 '
                name='description'
              ></textarea>
            </div>
          </div>
          <div className='space-y-6 flex flex-col'>
            {/* Price & Quantity */}
            <div className='flex justify-between gap-2'>
              {/* Price */}
              <div className='space-y-1 text-sm'>
                <label className='block text-gray-600 '>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                  name='price'
                  id='price'
                  type='number'
                  {...register('price')}
                  placeholder='Price per unit'
      
                />
              </div>

              {/* Quantity */}
              <div className='space-y-1 text-sm'>
                <label  className='block text-gray-600'>
                  Quantity
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                  name='quantity'
                  {...register('quantity')}
                  id='quantity'
                  type='number'
                  placeholder='Available quantity'
              
                />
              </div>
            </div>
            {/* Image */}
            <div className=' p-4  w-full  m-auto rounded-lg grow'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden file-input'
                      type='file'
                      {...register('image')}
                      name='image'
                      id='image'
                    
                      
                    />
                    <div className='bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500'>
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 '
            >
              Add Plant
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddPlantForm
