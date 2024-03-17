import { TabContent, TabPane } from "reactstrap";
import { tabIconData } from "../../../../Data/Ui-Kits/TabData";

const IconTabBody = ({ tabId }: { tabId: string }) => {
  return (
    <TabContent activeTab={tabId}>
      {tabIconData &&
        tabIconData.map((item, index) => (
          <TabPane className="fade show" tabId={item.id} key={index} >
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default IconTabBody;
