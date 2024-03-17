import { TabContent, TabPane } from "reactstrap";
import { borderData } from "../../../../Data/Ui-Kits/TabData";

const TabComponent = ({ tabId }: { tabId: string }) => {
  return (
    <TabContent activeTab={tabId}>
      {borderData &&
        borderData.map((item, index) => (
          <TabPane className="fade show" tabId={item.id} key={index} >
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default TabComponent;
