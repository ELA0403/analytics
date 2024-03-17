import { Card, CardHeader } from 'reactstrap'
import { CreatedByMe, Href, Print } from '../../../../utils/Constant'
import { H3 } from '../../../../AbstractElements'
import { Printer } from 'react-feather'
import CreatedByme from './CreatedByme'
import ReactToPrint from 'react-to-print'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const ListOfTask = () => {
    const componentRef = useRef();
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <H3 className="mb-0">{CreatedByMe}</H3>
        <ReactToPrint
          trigger={() => (
            <Link to={Href}>
              <Printer className="me-2" />
              {Print}
            </Link>
          )}
          content={() => componentRef.current || null}
        />
      </CardHeader>
      <CreatedByme />
    </Card>
  )
}

export default ListOfTask