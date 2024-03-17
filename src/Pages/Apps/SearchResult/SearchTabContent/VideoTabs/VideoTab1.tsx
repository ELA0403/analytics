import { Col } from 'reactstrap'
import { H4, H6, LI, P, UL } from '../../../../../AbstractElements'
import { Href } from '../../../../../utils/Constant'
import { searchTabsData } from '../../../../../Data/Apps/SearchResult/SearchResultData'
import PagesSort from '../AllTabs/PagesSort'
import { Link } from 'react-router-dom'

const VideoTab1 = () => {
  return (
    <Col xxl="6">
      <H4 className="f-w-700 mb-2">{'About 6,000 results (0.60 seconds)'}</H4>
      {searchTabsData.slice(0, 3).map((item) => (
        <div className="info-block d-flex" key={item.id}>
          <iframe className="me-3" width="200" height="100" src={item.videoLink} title=''></iframe>
          <div className='flex-grow-1'>
            <Link to={Href}>{item.url}</Link>
            <H6>{item.title}</H6>
            <P>{item.detail}</P>
            <div className="star-ratings">
              <UL className="search-info simple-list flex-row">
                <LI>{item.star}</LI>
                <LI>{item.vote}</LI>
                <LI>{item.news}</LI>
              </UL>
            </div>
          </div>
        </div>
      ))}
      <PagesSort />
    </Col>
  )
}

export default VideoTab1