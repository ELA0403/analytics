import { H3, P } from "../../../../../AbstractElements"
import { activityLogData } from "../../../../../Data/Apps/SocialApp/SocialAppData"
import { AboutPropsType } from "../../../../../Types/Apps/SocialApp/SocialApp"

const MyActivity = ({ Heading }: AboutPropsType) => {
  return (
    <div className="my-activity">
      <H3 className="f-w-600 mb-3">{Heading}</H3>
      {activityLogData.map((item) => (
        <P key={item.id}>
          <span>{item.icon}</span>
          {item.description}
        </P>
      ))}
    </div>
  )
}

export default MyActivity