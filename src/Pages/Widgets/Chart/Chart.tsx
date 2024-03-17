import { Container } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Charts, Widgets } from '../../../utils/Constant'
import TotalSaleWidgets from './TotalSaleWidgets/TotalSaleWidgets'
import MonthlyHistory from './MonthlyHistory/MonthlyHistory'
import LiveProducts from './LiveProducts/LiveProducts'
import StockMarket from './StockMarket/StockMarket'
import StripeInverseClass from "/Users/khaoula/Downloads/themeforest-dqHsE3Oe-cion-react-js-admin-dashboard-template/Template With Placeholder/src/Pages/Widgets/Chart/StripeInverseClass/StripeInverseClass";


const Chart = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Charts} parent={Widgets} title={Charts} />
      <Container fluid>
        <TotalSaleWidgets />
        <LiveProducts />
        <StockMarket/>
        <StripeInverseClass />
        
        <MonthlyHistory />  

        
        
      </Container>
    </>
  )
}

export default Chart