import { SinceLastMonth, ThenLastWeek, TotalEarning, TotalSales, AverageCheck,Salespersquarefoot } from "../../../utils/Constant";
import { totalEarningChart, totalLikesOption, visitorChart , Check ,salesft} from "./ChartData";

export const totalEarningData =[
    {
        badgeColor:"primary",
        badge:"$",
        title:TotalEarning,
        amount:"340 860",
        color:"secondary",
        icon:"arrow-down",
        percentage:"- 36.28%",
        time:SinceLastMonth,
        chartId:"expensesChart",
        charts:totalEarningChart,
        type:"bar"
    },
    {
        badgeColor:"dark",
        svgIcon:"fill-Buy",
        title:TotalSales,
        amount:"9 340",
        color:"dark",
        icon:"arrow-up",
        percentage:"+ 20.34%",
        time:ThenLastWeek,
        chartId:"totalLikesAreaChart",
        charts:totalLikesOption,
        type:"area"
    },
    {
        badgeColor:"dark",
        svgIcon:"fill-Buy",
        title:AverageCheck,
        amount:"1 390",
        color:"dark",
        icon:"arrow-up",
        percentage:"+ 30.20%",
        time:ThenLastWeek,
        chartId:"totalLikesAreaChart",
        charts:Check,
        type:"area"
    },
    {
        badgeColor:"dark",
        svgIcon:"fill-Buy",
        title:Salespersquarefoot,
        amount:"2 400",
        color:"dark",
        icon:"arrow-up",
        percentage:"+ 15.08%",
        time:ThenLastWeek,
        chartId:"totalLikesAreaChart",
        charts:salesft,
        type:"area"
    },
    
]