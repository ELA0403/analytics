import { Button, CardBody, Collapse } from 'reactstrap'
import { FilterPropsType } from '../../../../../../Types/Apps/SocialApp/SocialApp'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { profileIntroData } from '../../../../../../Data/Apps/SocialApp/SocialAppData'
import { P } from '../../../../../../AbstractElements'
import { Dribbble, Facebook, SocialNetworks, Twitter } from '../../../../../../utils/Constant'

const ProfileIntroCollapse = ({ isFilter }: FilterPropsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="filter-cards-view">
        {profileIntroData.map((data, index) => (
          <Fragment key={index}>
            <span className="f-w-600">{data.tittle} :</span>
            <P>{data.paragraph}</P>
          </Fragment>
        ))}
        <div className="social-network theme-form">
          <span className="f-w-600">{SocialNetworks}</span>
          <Link to="https://www.facebook.com/">
            <Button color="transparent" className="social-btn btn-fb mb-2 text-center"><i className="fa fa-facebook m-r-5" />{Facebook}
            </Button>
          </Link>
          <Link to="https://www.twitter.com/">
            <Button color="transparent" className="social-btn btn-twitter mb-2 text-center"><i className="fa fa-twitter m-r-5" />{Twitter}</Button>
          </Link>
          <Link to="https://dribbble.com/session/new">
            <Button color="transparent" className="social-btn btn-google text-center"><i className="fa fa-dribbble m-r-5" />{Dribbble}</Button>
          </Link>
        </div>
      </CardBody>
    </Collapse>
  )
}

export default ProfileIntroCollapse