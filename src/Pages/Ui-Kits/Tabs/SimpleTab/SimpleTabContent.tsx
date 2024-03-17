import { TabContent, TabPane } from "reactstrap";
import { simpleTabData } from "../../../../Data/Ui-Kits/TabData";

const SimpleTabContent = ({ tabId }: { tabId: string }) => {
  return (
    <TabContent activeTab={tabId}>
      {simpleTabData &&
        simpleTabData.map((item, index) => (
          <TabPane className="fade show" tabId={item.id} key={index}>
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default SimpleTabContent;
