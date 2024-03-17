import { TabContent, TabPane } from "reactstrap";
import { verticalTabData } from "../../../../Data/Ui-Kits/TabData";

const VerticalContent = ({ tabId }: { tabId: string }) => {
  return (
    <TabContent activeTab={tabId}>
      {verticalTabData &&
        verticalTabData.map((item, index) => (
          <TabPane className="fade show" tabId={item.id} key={index} >
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default VerticalContent;
