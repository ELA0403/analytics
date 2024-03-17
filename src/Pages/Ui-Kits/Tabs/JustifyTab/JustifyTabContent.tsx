import { TabContent, TabPane } from "reactstrap";
import { justifyTabData } from "../../../../Data/Ui-Kits/TabData";
import { H6, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const JustifyTabContent = ({ tabId }: { tabId: string }) => {
  return (
    <TabContent activeTab={tabId}>
      {justifyTabData &&
        justifyTabData.map((item, index) => (
          <TabPane className="fade show" tabId={item.id} key={index}>
            <div className="designer-details">
              {item.data &&
                item.data.map((item, index) => (
                  <div className="designer-profile" key={index}>
                    <div className="designer-wrap">
                      <Image
                        className="designer-img"
                        src={dynamicImage(`${item.img}`)}
                        alt="profile"
                        width={50}
                        height={50}
                      />
                      <div className="designer-content">
                        <H6>{item.head}</H6>
                        <P>{item.text}</P>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPane>
        ))}
    </TabContent>
  );
};

export default JustifyTabContent;
