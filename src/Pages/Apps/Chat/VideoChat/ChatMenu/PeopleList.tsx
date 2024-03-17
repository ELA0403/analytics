import { Image, LI, UL } from '../../../../../AbstractElements'
import { CallData } from '../../../../../Data/Apps/Chat/ChatData'
import { dynamicImage } from '../../../../../Service'

const PeopleList = () => {
  return (
    <div className="people-list">
      <UL className="list digits simple-list custom-scrollbar">
        {CallData.map((data, index) => (
          <LI className="clearfix" key={index}>
            <Image
              className="rounded-circle user-image"
              src={dynamicImage(`user/${data.img}`)}
              alt="call-user"
            />
            <div className="about">
              <div className="name">{data.name}</div>
              <div className="status">
                <i className={`fa fa-${data.color === "success" ? "share" : "reply"} font-${data.color}`}></i>
                {data.date}
              </div>
            </div>
          </LI>
        ))}
      </UL>
  </div>
  )
}

export default PeopleList