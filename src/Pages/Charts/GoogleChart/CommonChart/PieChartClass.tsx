import { Card, CardBody } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import Chart from 'react-google-charts'
 interface CommonPropsType {
    data: any;
    title: string;
    colClass?: string;
  }
const PieChartClass = ({ data, title, colClass }: CommonPropsType) => {
  return (
    <div className={colClass ? "col-sm-12" : "col-sm-12 col-xl-6 col-12"}>
      <Card>
        <CommonHeader title={title} headClass='pb-0'/>
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={data?.width}
              height={data?.height}
              chartType={data?.chartType}
              loader={<div>{"Loading Chart"}</div>}
              data={data?.data}
              options={data?.options}
              rootProps={data?.rootProps}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default PieChartClass