import Card from './Card'
import Container from '../Shared/Container'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const Plants = () => {
  const instance = useAxiosSecure()
  const{data: plants=[]}=useQuery({
queryKey:['plants'],
queryFn: async()=>{
const res = await instance.get('/plants')
return res.data
}
  })
  return (
    <Container>
      <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {
          plants.map(plant=><Card key={plant._id} plant={plant}></Card>)
        }
      </div>
    </Container>
  )
}

export default Plants
