import { Button, Card, CardBody, Col } from 'reactstrap'
import { BookmarkFilter, Href } from '../../../../utils/Constant'
import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks'
import { H3, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { setBookmarkFilter } from '../../../../ReaduxToolkit/Reducer/BookmarkTabSlice'
import NavTab from './NavTab'

const SideBar = () => {
  const {bookmarkFilter} = useAppSelector((state)=>state.bookmarkTab)
  const dispatch = useAppDispatch()
  return (
    <Col xl="3" className="box-col-4e">
      <div className="md-sidebar">
        <Button tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={()=>dispatch(setBookmarkFilter())}>{BookmarkFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${bookmarkFilter ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <div className="d-flex">
                    <div className="media-size-email">
                      <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="user" />
                    </div>
                    <div className="flex-grow-1">
                      <H3 className="f-w-600">{'MARK JECNO'}</H3>
                      <P>Markjecno@gmail.com</P>
                    </div>
                  </div>
                  <NavTab />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default SideBar