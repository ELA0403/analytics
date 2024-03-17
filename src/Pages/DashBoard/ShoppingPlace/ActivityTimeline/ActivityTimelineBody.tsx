import { Badge } from "reactstrap";
import { Image, LI, P, UL } from "../../../../AbstractElements";
import { timeLineData } from "../../../../Data/Dashboard/ShoppingPlace/TimeLine";
import { dynamicImage } from "../../../../Service";

const ActivityTimelineBody = () => {
  return (
    <div className="activity-timeline">
      {timeLineData.map((data,index) => (
        <div className="d-flex align-items-start" key={index}>
          <div className="activity-line"></div>
          <div className={`activity-dot-${data.color}`}></div>
          <div className="flex-grow-1">
            <P className="todo-font">
              <span className={`font-${data.color}`}>{data.date}</span>
              {data.day}
              {data.badge && <Badge color="secondary" className="ms-2">{data.badge}</Badge>}
            </P>
            <span className="f-w-700">{data.Product}</span>
            <P className="mb-0">{data.describe}</P>
            {data.img && <UL className="img-wrapper simple-list flex-row">
                <LI>
                    <Image
                        className="img-30 img-fluid"
                        src={dynamicImage("dashboard/04.png")}
                        alt=""
                    />
                </LI>
                <LI>
                    <Image
                        className="img-fluid"
                        src={dynamicImage("dashboard/09.png")}
                        alt=""
                    />
                </LI>
            </UL>}
          </div>
          <i className={`fa fa-circle circle-dot-${data.color} pull-right`}></i>
        </div>
      ))} 
    </div>
  );
};

export default ActivityTimelineBody;
