import { Card, CardBody, CardHeader, TabPane } from 'reactstrap'
import { Favourites } from '../../../../utils/Constant'
import ViewBookmark from './ViewBookmark'
import { H3 } from '../../../../AbstractElements'
import { useAppSelector } from '../../../../ReaduxToolkit/Hooks'
import FavDataLoop from './FavDataLoop'

const FavDataTab = () => {
  const { gridView } = useAppSelector((state)=>state.bookmarkTab)
  return (
    <TabPane tabId="2">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H3 className="mb-0">{Favourites}</H3>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div
            className={`details-bookmark text-center ${
              gridView ? "" : "list-bookmark"
            }`}
          >
            <FavDataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  )
}

export default FavDataTab