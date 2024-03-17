import { Col } from 'reactstrap'
import { H6, LI, P, UL } from '../../../../../AbstractElements'
import { searchTabsData } from '../../../../../Data/Apps/SearchResult/SearchResultData'
import { Href } from '../../../../../utils/Constant'
import { Link } from 'react-router-dom'

const VideoTab2 = () => {
  return (
    <Col xxl={6}>
      <P className="pb-4">{'About 6,000 results (0.60 seconds)'}</P>
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
    </Col>
  )
}

export default VideoTab2