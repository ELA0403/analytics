import { Card, Col } from 'reactstrap'
import { H4, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import InformationCommon from './InformationCommon'
import { searchInformation, searchInformation2 } from '../../../../../Data/Apps/SearchResult/SearchResultData'

const SearchBanner = () => {
  return (
    <Col xxl={4} xl={6} className="box-col-12 mt-4">
      <Card className="o-hidden">
        <div className="blog-box blog-shadow">
          <Image className="img-fluid" src={dynamicImage('blog/blog.jpg')} alt="blog"/>
          <div className="blog-details">
            <P>{'25 July 2023'}</P>
            <H4>{'Accusamus et iusto odio dignissimos ducimus qui blanditiis.'}</H4>
            <UL className="blog-social simple-list flex-row">
              <LI><i className="icofont icofont-user"></i>{'Mark Jecno'}</LI>
              <LI><i className="icofont icofont-thumbs-up"></i>{'Hits'}</LI>
            </UL>
          </div>
        </div>
      </Card>
      <InformationCommon item={searchInformation}  />
      <InformationCommon item={searchInformation2}  />
    </Col>
  )
}

export default SearchBanner