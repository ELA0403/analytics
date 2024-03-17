import { TabContent, TabPane } from "reactstrap";
import { pillTabData } from "../../../../Data/Ui-Kits/TabData";

const PillContent = ({ tabId }: { tabId: string }) => {
  return (
    <TabContent activeTab={tabId}>
      {pillTabData &&
        pillTabData.map((item, index) => (
          <TabPane className="fade show" tabId={item.id} key={index}  >
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default PillContent;
