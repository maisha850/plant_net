import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const SellerDataRow = ({req,refetch}) => {
    const instance = useAxiosSecure()
     const handleSeller=async()=>{
        try{
         
    await instance.patch('/make-seller', {email: req.email , role:"seller"})
    toast.success('Request is approved!')
       refetch()
        }
        catch(err){
    toast.error(err?.response?.data?.message)
        }
       
      }
    
    return (
       <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{req.email}</p>
      </td>
      
        <td>
            <button onClick={handleSeller} className='btn btn-accent btn-sm'>Make Seller</button>
        </td>
    </tr>
    );
};

export default SellerDataRow;