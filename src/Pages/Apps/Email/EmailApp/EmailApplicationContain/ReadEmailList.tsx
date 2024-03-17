import { H3, Image, P } from '../../../../../AbstractElements';
import { emailList } from '../../../../../Data/Apps/Email/EmailData';
import { dynamicImage } from '../../../../../Service';

const ReadEmailList = () => {
  return (
    <div className="inbox custom-scrollbar">
      {emailList.map((data, index) => (
        <div className="d-flex" key={index}>
          <div className="media-size-email">
            <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="image"/>
          </div>
          <div className="flex-grow-1">
            <H3>
              {data.tittle}
              <small>
                <span className="digits email-badge">({data.date}</span>{" "}
                {data.month}
                <span className="digits email-badge">{data.year})</span>
              </small>
            </H3>
            <P>{data.paragraph}</P>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReadEmailList