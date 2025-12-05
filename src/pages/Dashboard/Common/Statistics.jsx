import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
import CustomerStatistics from '../../../components/Dashboard/Statistics/CustomerStatistics'
import SellerStatistics from '../../../components/Dashboard/Statistics/SellerStatistics'
import useRoles from '../../../hooks/useRoles'
const Statistics = () => {
  const {role}=useRoles()
  return (
    <div>
      {role === 'admin' &&  <AdminStatistics/>}
      {role === 'customer' && <CustomerStatistics></CustomerStatistics> }
      {role === 'seller' &&  <SellerStatistics></SellerStatistics>}
     
    </div>
  )
}

export default Statistics
