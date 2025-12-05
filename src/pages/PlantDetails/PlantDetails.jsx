import Container from '../../components/Shared/Container'
import Heading from '../../components/Shared/Heading'
import Button from '../../components/Shared/Button/Button'
import PurchaseModal from '../../components/Modal/PurchaseModal'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const PlantDetails = () => {
  let [isOpen, setIsOpen] = useState(false)
  const instance = useAxiosSecure()
  const {id}=useParams()
  const {data:plants={}}=useQuery({
    queryKey:['plant-details', id],
    queryFn: async()=>{
const res = await instance.get(`/plants/${id}`)
return res.data
    }
  })

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Container>
      <div className='mx-auto flex flex-col lg:flex-row justify-between w-full gap-12'>
        {/* Header */}
        <div className='flex flex-col gap-6 flex-1'>
          <div>
            <div className='w-full overflow-hidden rounded-xl'>
              <img
                className='object-cover w-full'
                src={plants.image}
                alt='header image'
              />
            </div>
          </div>
        </div>
        <div className='md:gap-10 flex-1'>
          {/* Plant Info */}
          <Heading
            title={plants.name}
            subtitle={`Category: ${plants.category}`}
          />
          <hr className='my-6' />
          <div
            className='
          text-lg font-light text-neutral-500'
          >
          {plants.description}
          </div>
          <hr className='my-6' />

          <div
            className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
          >
            <div>Seller:{plants.userEmail}</div>

            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              referrerPolicy='no-referrer'
              src={plants.photo}
            />
          </div>
          <hr className='my-6' />
          <div>
            <p
              className='
                gap-4 
                font-light
                text-neutral-500
              '
            >
              Quantity: {plants.quantity} Units Left Only!
            </p>
          </div>
          <hr className='my-6' />
          <div className='flex justify-between'>
            <p className='font-bold text-3xl text-gray-500'>Price: {plants.price}$</p>
            <div>
              <Button onClick={() => setIsOpen(true)} label='Purchase' />
            </div>
          </div>
          <hr className='my-6' />

          <PurchaseModal plants={plants} closeModal={closeModal} isOpen={isOpen} />
        </div>
      </div>
    </Container>
  )
}

export default PlantDetails
