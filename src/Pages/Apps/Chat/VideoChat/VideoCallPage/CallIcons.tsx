import { LI, UL } from '../../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href } from '../../../../../utils/Constant';

const CallIcons = () => {
    const callIconsData = ["video-camera", "volume", "user"];
  return (
    <div className="call-icons">
      <UL className="list-inline simple-list flex-row d-inline-flex">
        {callIconsData.map((data, index) => (
          <LI className="list-inline-item" key={index}>
            <Link to={Href}>
              <i className={`icon-${data}`} />
            </Link>
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default CallIcons