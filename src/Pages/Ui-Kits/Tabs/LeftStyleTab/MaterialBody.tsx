import { TabContent, TabPane } from "reactstrap";
import { leftTabData } from "../../../../Data/Ui-Kits/TabData";

const MaterialBody = ({ tabId }: { tabId: string }) => {
  return (
    <TabContent activeTab={tabId}>
      {leftTabData &&
        leftTabData.map((item, index) => (
          <TabPane className="fade show" tabId={item.id} key={index} > 
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default MaterialBody;
