import { Link } from "react-router-dom";
import { Image, LI, UL } from "../../../AbstractElements";
import { Href } from "../../../utils/Constant";
import { CustomCellInterFace, ScrollVerticalType, StateSavingTableDataType, ZeroConfigurationTableColumnsType } from "../../../Types/Tables/DataTables/BasicTables";
import { Badge } from "reactstrap";
import { dynamicImage } from "../../../Service";

export const zeroConfigurationSpan = [
    {
        text:"DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: ",
        code:"$().DataTable(); "
    }
] 
export const zeroConfigurationSpan2 =[
    {
        text:"Searching, ordering and paging goodness will be immediately added to the table, as shown in this example."
    }
] 

export const zeroConfigurationTableData = [
    {
      id: 1,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: 33,
      startDate: "2008/11/28",
      salery: "$162,700",
      action:"t-1"
    },
    {
      id: 2,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age:66,
      startDate: "2009/01/12",
      salery: "$86,000",
      action: "t-2"
    },
    {
      id: 3,
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: 61,
      startDate: "2012/12/02",
      salery: "$372,000",
      action: "t-3"
    }, {
      id: 4,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: 22,
      startDate: "2012/03/29",
      salery: "$433,060",
      action: "t-4"
    }, {
      id: 5,
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: 36,
      startDate: "2008/10/16",
      salery: "$470,600",
      action: "t-5"
    }, {
      id: 6,
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: 39,
      startDate: "2009/09/15",
      salery: "$205,500",
      action:"t-6"
    }, {
      id: 7,
      name: "Donna Snider",
      position: "Customer Support",
      office: "New York",
      age: 27,
      startDate: "2011/01/25",
      salery: "$112,000",
      action: "t-7"
    }, {
      id: 8,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      startDate: "2011/07/25",
      salery: "$170,750",
      action: "t-8"
    }, {
      id: 9,
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: 59,
      startDate: "2012/08/06",
      salery: "$137,500",
      action:"t-9"
    }, {
      id: 10,
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: 30,
      startDate: "2008/12/19",
      salery: "$90,560",
      action: "t-10"
    }, {
      id: 11,
      name: "Quinn Flynn",
      position: "Support Lead", 
      office: "Edinburgh",
      age: 22,
      startDate: "2013/03/03",
      salery: "$342,000",
      action: "t-11"
    }, {
      id: 12,
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: 55,
      startDate: "2010/10/14",
      salery: "$327,900",
      action: "t-12"
    }, {
      id: 13,
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: 23,
      startDate: "2008/12/13",
      salery: "$103,600",
      action: "t-13"
    }, {
      id: 14,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: 61,
      startDate: "2011/04/25",
      salery: "$320,800",
      action: "t-14"
    },
  ];

  interface TableActionType {
    id: string;
  }
  const TableAction = ({ id }: TableActionType) => {
    return (
      <UL className="action simple-list d-flex flex-row" id={id}>
        <LI className="edit">
          <Link to={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </LI>
        <LI className="delete">
          <Link to={Href}>
            <i className="icon-trash" />
          </Link>
        </LI>
      </UL>
    );
  };

  export const zeroConfigurationTableColumns = [
    {
      name: "Name",
      selector: (row:ZeroConfigurationTableColumnsType) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: "Position",
      selector: (row:ZeroConfigurationTableColumnsType) => `${row.position}`,
      sortable: true,
      center: true,
    },
    {
      name: "office",
      selector: (row:ZeroConfigurationTableColumnsType) => `${row.office}`,
      sortable: true,
      center: true,
    },
    {
      name: "Age",
      selector: (row:ZeroConfigurationTableColumnsType) => `${row.age}`,
      sortable: true,
      center: true,
    },
    {
      name: "start Date",
      selector: (row:ZeroConfigurationTableColumnsType) => row["startDate"],
      sortable: true,
      center: true,
    },
    {
      name: "Salery",
      selector: (row:ZeroConfigurationTableColumnsType) => `${row.salery}`,
      sortable: true,
      center: true,
    },
    {
      name: "action",
      cell: (row:ZeroConfigurationTableColumnsType) => <TableAction id={row.action}/>,
      sortable: true,
      center: true,
    },
  ];

  export const stateSavingTableData = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "Accountant",
      color:"secondary",
      office: "Edinburgh",
      age: "61",
      startDate: "2011/04/25",
      salery: "$320,800",
      action: "tr-1"
    },
    {
      id:2 ,
      name: "Garrett Winters",
       position: "Accountant",
      color:"secondary",
      office:"Tokyo",
      age:"63",
      startDate:"2011/07/25",
      salery:"$170,750",
      action: "tr-2"
    },
    {
      id: 3,
      name: "Ashton Cox",
       position: "Junior Technical Author",
      color:"primary",
      office:"San Francisco",
      age:"66",
      startDate:"2009/01/12",
      salery:"$86,000",
      action:"tr-3"
    }, {
      id:4 ,
      name: "Cedric Kelly",
       position: "Senior Javascript Developer",
      color:"primary",
      office:"Edinburgh",
      age:"22",
      startDate:"2012/03/29",
      salery:"$433,060",
      action: "tr-4"
    }, {
      id:5 ,
      name: "Airi Satou",
       position: "Accountant",
      color:"secondary",
      office:"Tokyo",
      age:"33",
      startDate:"2008/11/28",
      salery:"$162,700",
      action: "tr-5"
    }, {
      id:6 ,
      name: "Brielle Williamson",
       position: "Integration Specialist",
      color:"info",
      office:"New York",
      age:"61",
      startDate:"2012/12/02",
      salery:"$372,000",
      action: "tr-6"
    }, {
      id:7 ,
      name: "Herrod Chandler",
       position: "Sales Assistant",
      color:"primary",
      office:"San Francisco",
      age:"59",
      startDate:"2012/08/06",
      salery:"$137,500",
      action: "tr-7"
    }, {
      id:8 ,
      name: "Rhona Davidson",
       position: "Integration Specialist",
      color:"info",
      office:"Tokyo",
      age:"55",
      startDate:"2010/10/14",
      salery:"$327,900",
      action: "tr-8"
    }, {
      id:9 ,
      name: "Colleen Hurst",
       position: "Javascript Developer",
      color:"danger",
      office:"San Francisco",
      age:"39",
      startDate:"2009/09/15",
      salery:"$205,500",
      action: "tr-9"
    }, {
      id:10 ,
      name: "Sonya Frost",
       position: "Software Engineer",
      color:"success",
      office:"Edinburgh",
      age:"23",
      startDate:"2008/12/13",
      salery:"$103,600",
      action: "tr-10"
    }, {
      id:11 ,
      name: "Jena Gaines",
       position: "Office Manager",
      color:"primary",
      office:"London  ",
      age:"30 ",
      startDate:"2008/12/19 ",
      salery:"$90,560 ",
      action: "tr-11"
    }, {
      id:12 ,
      name: "Quinn Flynn",
       position: "Support Lead",
      color:"primary",
      office:"Edinburgh",
      age:"22",
      startDate:"2013/03/03",
      salery:"$342,000",
      action: "tr-12"
    },{
      id:13 ,
      name: "Charde Marshall",
       position: "Regional Director",
      color:"info",
      office:"San Francisco",
      age:"36",
      startDate:"2008/10/16",
      salery:"$470,600",
      action: "tr-13"
    },{
      id:14 ,
      name: "Haley Kennedy",
       position: "Senior Marketing Designer",
      color:"primary",
      office:"London",
      age:"43",
      startDate:"2012/12/18",
      salery:"$313,500",
      action: "tr-14"
    },{
      id:15 ,
      name: "Tatyana Fitzpatrick",
       position: "Regional Director",
      color:"info",
      office:"London",
      age:"19",
      startDate:"2010/03/17",
      salery:"$385,750",
      action: "tr-15"
    },{
      id:16 ,
      name: "Michael Silva",
       position: "Marketing Designer",
      color:"primary",
      office:"London",
      age:"66",
      startDate:"2012/11/27",
      salery:"$198,500",
      action: "tr-16"
    },{
      id:17 ,
      name: "Paul Byrd",
       position: "Chief Financial Officer (CFO)",
      color:"primary",
      office:"New York",
      age:"64",
      startDate:"2010/06/09",
      salery:"$725,000",
      action: "tr-17"
    },{
      id:18 ,
      name: "Gloria Little",
       position: "Systems Administrator",
      color:"primary",
      office:"New York",
      age:"59",
      startDate:"2009/04/10",
      salery:"$237,500",
      action: "tr-18"
    },{
      id:19 ,
      name: "Bradley Greer",
       position: "Software Engineer",
      color:"success",
      office:"London",
      age:"41",
      startDate:"2012/10/13",
      salery:"$132,000",
      action: "tr-19"
    },{
      id:20 ,
      name: "Dai Rios",
       position: "Personnel Lead",
      color:"primary",
      office:"Edinburgh",
      age:"35",
      startDate:"2012/09/26",
      salery:"$217,500",
      action: "tr-20"
    },{
      id:21 ,
      name: "Jenette Caldwell",
       position: "Development Lead",
      color:"primary",
      office:"New York",
      age:"30",
      startDate:"2011/09/03",
      salery:"$345,000",
      action: "tr-21"
    },{
      id:22 ,
      name: "Yuri Berry",
       position: "Chief Marketing Officer (CMO)",
      color:"primary",
      office:"New York",
      age:"40",
      startDate:"2009/06/25",
      salery:"$675,000",
      action: "tr-22"
    },{
      id:23 ,
      name: "Caesar Vance",
       position: "Pre-Sales Support",
      color:"primary",
      office:"New York",
      age:"21",
      startDate:"2011/12/12",
      salery:"$106,450",
      action: "tr-23"
    },{
      id:24 ,
      name: "Doris Wilder",
       position: "Sales Assistant",
      color:"primary",
      office:"Sidney",
      age:"23",
      startDate:"2010/09/20",
      salery:"$85,600",
      action: "tr-24"
    },{
      id:25 ,
      name: "Angelica Ramos",
       position: "Chief Executive Officer (CEO)",
      color:"primary",
      office:"London",
      age:"47",
      startDate:"2009/10/09",
      salery:"$1,200,000",
      action: "tr-25"
    },{
      id:26 ,
      name: "Gavin Joyce",
       position: "Developer",
      color:"success",
      office:"Edinburgh",
      age:"42",
      startDate:"2010/12/22",
      salery:"$92,575",
      action: "tr-26"
    },{
      id:27 ,
      name: "Jennifer Chang",
       position: "Regional Director",
      color:"info",
      office:"Singapore",
      age:"28",
      startDate:"2010/11/14",
      salery:"$357,650",
      action: "tr-27"
    },{
      id:28 ,
      name: "Brenden Wagner",
       position: "Software Engineer",
      color:"successs",
      office:"San Francisco",
      age:"28",
      startDate:"2011/06/07",
      salery:"$206,850", 
      action: "tr-28"
    },{
      id:29 ,
      name: "Fiona Green",
       position: "Chief Operating Officer (COO)",
      color:"primary",
      office:"San Francisco",
      age:"48",
      startDate:"2010/03/11",
      salery:"$850,000",
      action: "tr-29"
    },{
      id:30 ,
      name: "Shou Itou",
       position: "Regional Marketing",
      color:"primary",
      office:"Tokyo",
      age:"20",
      startDate:"2011/08/14",
      salery:"$163,000",
      action: "tr-30"
    },{
      id:31 ,
      name: "Michelle House",
       position: "Integration Specialist",
      color:"info",
      office:"Sidney",
      age:"37",
      startDate:"2011/06/02",
      salery:"$95,400",
      action: "tr-31"
    },{
      id:32 ,
      name: "Suki Burks",
       position: "Developer",
      color:"success",
      office:"London",
      age:"53",
      startDate:"2009/10/22",
      salery:"$114,500",
      action: "tr-32"
    },{
      id:33 ,
      name: "Prescott Bartlett",
       position: "Technical Author",
      color:"primary",
      office:"London",
      age:"27",
      startDate:"2011/05/07",
      salery:"$145,000",
      action: "tr-33"
    },{
      id:34 ,
      name: "Gavin Cortez",
       position: "Team Leader",
      color:"primary",
      office:"San Francisco",
      age:"22",
      startDate:"2008/10/26",
      salery:"$235,500",
      action: "tr-34"
    },{
      id:35 ,
      name: "Martena Mccray",
       position: "Post-Sales support",
      color:"primary",
      office:"Edinburgh",
      age:"46",
      startDate:"2011/03/09",
      salery:"$324,050",
      action: "tr-35"
    },{
      id:36 ,
      name: "Unity Butler",
       position: "Marketing Designer",
      color:"primary",
      office:"San Francisco",
      age:"47",
      startDate:"2009/12/09",
      salery:"$85,675",
      action: "tr-36"
    },{
      id:37 ,
      name: "Howard Hatfield",
       position: "Office Manager",
      color:"primary",
      office:"San Francisco",
      age:"51",
      startDate:"2008/12/16",
      salery:"$164,500",
      action: "tr-37"
    },{
      id:38 ,
      name: "Hope Fuentes",
       position: "Secretary",
      color:"primary",
      office:"San Francisco",
      age:"41",
      startDate:"2010/02/12",
      salery:"$109,850",
      action: "tr-38"
    },{
      id:39 ,
      name: "Vivian Harrell",
       position: "Financial Controller",
      color:"primary",
      office:"San Francisco",
      age:"62",
      startDate:"2009/02/14",
      salery:"$452,500",
      action: "tr-39"
    },{
      id:40 ,
      name: "Timothy Mooney",
       position: "Office Manager",
      color:"primary",
      office:"London",
      age:"37",
      startDate:"2008/12/11",
      salery:"$136,200",
      action: "tr-40"
    },{
      id:41 ,
      name: "Jackson Bradshaw",
       position: "Director",
      color:"primary",
      office:"New York",
      age:"65",
      startDate:"2008/09/26",
      salery:"$645,750",
      action: "tr-41"
    },{
      id:42 ,
      name: "Olivia Liang",
       position: "Support Engineer",
      color:"primary",
      office:"Singapore",
      age:"64",
      startDate:"2011/02/03",
      salery:"$234,500",
      action: "tr-42"
    },{
      id:43 ,
      name: "Bruno Nash",
       position: "Software Engineer",
      color:"success",
      office:"London",
      age:"38",
      startDate:"2011/05/03",
      salery:"$163,500",
      action: "tr-43"
    },{
      id:44 ,
      name: "Sakura Yamamoto",
       position: "Support Engineer",
      color:"primary",
      office:"Tokyo",
      age:"37",
      startDate:"2009/08/19",
      salery:"$139,575",
      action: "tr-44"
    },{
      id:45 ,
      name: "Thor Walton",
       position: "Developer",
      color:"primary",
      office:"New York",
      age:"61",
      startDate:"2013/08/11",
      salery:"$98,540",
      action: "tr-45"
    },{
      id:46 ,
      name: "Finn Camacho",
       position: "Support Engineer",
      color:"primary",
      office:"San Francisco",
      age:"<td>47</td>",
      startDate:"2009/07/07",
      salery:"$87,500",
      action: "tr-46"
    },{
      id:47 ,
      name: "Serge Baldwin",
       position: "Data Coordinator",
      color:"primary",
      office:"Singapore",
      age:"64",
      startDate:"2012/04/09",
      salery:"$138,575",
      action: "tr-47"
    },{
      id:48 ,
      name: "Zenaida Frank",
       position: "Software Engineer",
      color:"success",
      office:"New York",
      age:"63",
      startDate:"2010/01/04",
      salery:"$125,250",
      action: "tr-48"
    },{
      id:49 ,
      name: "Zorita Serrano",
       position: "Software Engineer",
      color:"success",
      office:"San Francisco",
      age:"56",
      startDate:"2012/06/01",
      salery:"$115,000",
      action: "tr-49"
    },{
      id:50 ,
      name: "Jennifer Acosta",
       position: "Junior Javascript Developer",
      color:"primary",
      office:"Edinburgh",
      age:"43",
      startDate:"2013/02/01",
      salery:"$75,650",
      action: "tr-50"
    },{
      id:51 ,
      name: "Cara Stevens",
       position: "Sales Assistant",
      color:"primary",
      office:"New York",
      age:"46",
      startDate:"2011/12/06",
      salery:"$145,600",
      action: "tr-51"
    },{
      id:52 ,
      name: "Hermione Butler",
       position: "Regional Director",
      color:"info",
      office:"London",
      age:"47",
      startDate:"2011/03/21",
      salery:"$356,250",
      action: "tr-52"
    },{
      id:53 ,
      name: "Lael Greer",
       position: "Systems Administrator",
      color:"primary",
      office:"London",
      age:"21",
      startDate:"2009/02/27",
      salery:"$103,500",
      action:"tr-53"
    },{
      id:54,
      name: "Jonas Alexander",
       position: "Developer",
      color:"success",
      office:"San Francisco",
      age:"30",
      startDate:"2010/07/14",
      salery:"$86,500",
      action: "tr-54"
    },{
      id:55,
      name: "Shad Decker",
       position: "Regional Director",
      color:"info",
      office:"Edinburgh",
      age:"51",
      startDate:"2008/11/13",
      salery:"$183,000",
      action: "tr-55"
    },{
      id:56,
      name: "Michael Bruce",
       position: "Javascript Developer",
      color:"danger",
      office:"Singapore",
      age:"29",
      startDate:"2011/06/27",
      salery:"$183,000",
      action: "tr-56"
    },{
      id:57,
      name: "Donna Snider",
       position: "Customer Support",
      color:"primary",
      office:"New York",
      age:"27",
      startDate:"2011/01/25",
      salery:"$112,000",
      action: "tr-57"
    }
    
  ];

  
  const CustomBadge = ({ position ,color }: CustomCellInterFace) => {
    return (
      <Badge color="" pill className={`badge-light-${color}`}>{position}</Badge>
    )
  };

  export const stateSavingTableColumns = [
    {
      name: "Name",
      selector: (row:StateSavingTableDataType) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: "Position",
      cell: (row:StateSavingTableDataType) => <CustomBadge color={row.color} position={row.position}  />,
      sortable: true,
      center: true,
    },
    {
      name: "office",
      selector: (row:StateSavingTableDataType) => `${row.office}`,
      sortable: true,
      center: true,
    },
    {
      name: "Age",
      selector: (row:StateSavingTableDataType) => `${row.age}`,
      sortable: true,
      center: true,
    },
    {
      name: "start Date",
      selector: (row:StateSavingTableDataType) => row["startDate"],
      sortable: true,
      center: true,
    },
    {
      name: "Salery",
      selector: (row:StateSavingTableDataType) => `${row.salery}`,
      sortable: true,
      center: true,
    },
    {
      name: "action",
      cell: (row:StateSavingTableDataType) => <TableAction id={row.action} />,
      sortable: true,
      center: true,
    },
  ];

  export const dynamicHeightSpan1 = [{
    text:"This example shows a vertically scrolling DataTable that makes use of the CSS3 vh unit in order to dynamically resize the viewport based on the browser window height. The vh unit is effectively a percentage of the browser window height. So the 50vh used in this example is 50% of the window height. The viewport size will update dynamically as the window is resized."
  }]
  export const dynamicHeightSpan2 = [{
    text:"A relatively modern browser is required for vh units to operate correctly. IE9+ supports the vh unit and all other evergreen browsers."
  }]

  export  const scrollVerticalDynamicHeightData =[
    {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" /> Zorita Serrano  </>,
      position: "Software Engineer",
      office: "San Francisco",
      age: "56",
      startDate: "2012/06/01",
      salery: "$115,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, 
    {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Zenaida Frank</>,
      position:"Software Engineer",
      office: "New York",
      age: "63",
      startDate:"2010/01/04",
      salery:"$125,250",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
    {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Yuri Berry</>,
      position:"Chief Marketing Officer (CMO)",
      office: "New York",
      age: "40",
      startDate:"2009/06/25",
      salery:"$675,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Vivian Harrell</>,
      position:"Financial Controller",
      office: "San Francisco",
      age: "62",
      startDate:"2009/02/14",
      salery:"$452,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" />Unity Butler </>,
      position:"Marketing Designer",
      office: "San Francisco",
      age: "47",
      startDate:"2009/12/09",
      salery:"$85,675",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Timothy Mooney</>,
      position:"Office Manager",
      office: "London",
      age: "37",
      startDate:"2008/12/11",
      salery:"$136,200",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" /> Tiger Nixon</>,
      position:"System Architect",
      office: "Edinburgh",
      age: "61",
      startDate:"2011/04/25",
      salery:"$320,800",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" /> Thor Walton</>,
      position:"Developer",
      office: "New York",
      age: "61",
      startDate:"2013/08/11",
      salery:"$98,540",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Tatyana Fitzpatrick</>,
      position:"Regional Director",
      office: "London",
      age: "19",
      startDate:"2010/03/17",
      salery:"$385,750",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Suki Burks</>,
      position:"Developer",
      office: "London",
      age: "53",
      startDate:"2009/10/22",
      salery:"$114,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Sonya Frost</>,
      position:"Software Engineer",
      office: "Edinburgh",
      age: "23",
      startDate:"2008/12/13",
      salery:"$103,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Shou Itou</>,
      position:"Regional Marketing",
      office: "Tokyo",
      age: "20",
      startDate:"2011/08/14",
      salery:"$163,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Shad Decker</>,
      position:"Regional Director",
      office: "Edinburgh",
      age: "51",
      startDate:"2008/11/13",
      salery:"$183,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" />Serge Baldwin </>,
      position:"Data Coordinator",
      office: "Singapore",
      age: "64",
      startDate:"2012/04/09",
      salery:"$138,575",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Sakura Yamamoto</>,
      position:"Support Engineer",
      office: "Tokyo",
      age: "37",
      startDate:"2009/08/19",
      salery:"$139,575",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Rhona Davidson</>,
      position:"Integration Specialist",
      office:"Tokyo" ,
      age:"55" ,
      startDate:"2010/10/14",
      salery:"$327,900",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Quinn Flynn</>,
      position:"Support Lead",
      office: "Edinburgh",
      age: "22",
      startDate:"2013/03/03",
      salery:"$342,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" /> Prescott Bartlett</>,
      position:"Technical Author",
      office: "London",
      age: "27",
      startDate:"2011/05/07",
      salery:"$145,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" />Paul Byrd </>,
      position:"Chief Financial Officer (CFO)",
      office: "New York",
      age: "64",
      startDate:"2010/06/09",
      salery:"$725,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Olivia Liang</>,
      position:"Support Engineer",
      office: "Singapore",
      age: "64",
      startDate:"2011/02/03",
      salery:"$234,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Michelle House</>,
      position:"Integration Specialist",
      office: "Sidney",
      age: "37",
      startDate:"2011/06/02",
      salery:"$95,400",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Michael Silva</>,
      position:"Marketing Designer",
      office: "London",
      age: "66",
      startDate:"2012/11/27",
      salery:"$198,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" />Michael Bruce </>,
      position:"Javascript Developer",
      office: "Singapore",
      age: "29",
      startDate:"2011/06/27",
      salery:"$183,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Martena Mccray</>,
      position:"Post-Sales support",
      office: "Edinburgh",
      age: "46",
      startDate:"2011/03/09",
      salery:"$324,050",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" /> Lael Greer</>,
      position:"Systems Administrator",
      office: "London",
      age: "21",
      startDate:"2009/02/27",
      salery:"$103,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Jonas Alexander</>,
      position:"Developer",
      office: "San Francisco",
      age: "30",
      startDate:"2010/07/14",
      salery:"$86,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Jennifer Chang</>,
      position:"Regional Director",
      office: "Singapore",
      age: "28",
      startDate:"2010/11/14",
      salery:"$357,650",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Jennifer Acosta</>,
      position:"Junior Javascript Developer",
      office: "Edinburgh",
      age: "43",
      startDate:"2013/02/01",
      salery:"$75,650",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Jenette Caldwell</>,
      position:"Development Lead",
      office: "New York",
      age: "30",
      startDate:"2011/09/03",
      salery:"$345,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Jena Gaines</>,
      position:"Office Manager",
      office: "London",
      age: "30",
      startDate:"2008/12/19",
      salery:"$90,560",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" /> Jackson Bradshaw</>,
      position:"Director",
      office: "New York",
      age: "65",
      startDate:"2008/09/26",
      salery:"$645,750",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" /> Howard Hatfield</>,
      position:"Office Manager",
      office: "San Francisco",
      age: "51",
      startDate:"2008/12/16",
      salery:"$164,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Hope Fuentes</>,
      position:"Secretary",
      office: "San Francisco",
      age: "41",
      startDate:"2010/02/12",
      salery:"$109,850",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" />Herrod Chandler </>,
      position:"Sales Assistant",
      office: "San Francisco",
      age: "59",
      startDate:"2012/08/06",
      salery:"$137,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Hermione Butler</>,
      position:"Regional Director",
      office: "London",
      age: "47",
      startDate:"2011/03/21",
      salery:"$356,250",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Haley Kennedy</>,
      position:"Senior Marketing Designer",
      office: "London",
      age: "43",
      startDate:"2012/12/18",
      salery:"$313,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Gloria Little</>,
      position:"Systems Administrator",
      office: "New York",
      age: "59",
      startDate:"2009/04/10",
      salery:"$237,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Gavin Joyce</>,
      position:"Developer",
      office: "Edinburgh",
      age: "42",
      startDate:"2010/12/22",
      salery:"$92,575",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Gavin Cortez</>,
      position:"Team Leader",
      office: "San Francisco",
      age: "22",
      startDate:"2008/10/26",
      salery:"$235,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Garrett Winters</>,
      position:"Accountant",
      office: "Tokyo",
      age: "63",
      startDate:"2011/07/25",
      salery:"$170,750",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" />Fiona Green </>,
      position:"Chief Operating Officer (COO)",
      office: "San Francisco",
      age: "48",
      startDate:"2010/03/11",
      salery:"$850,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Finn Camacho</>,
      position:"Support Engineer",
      office: "San Francisco",
      age: "47",
      startDate:"2009/07/07",
      salery:"$87,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" />Doris Wilder </>,
      position:"Sales Assistant",
      office: "Sidney",
      age: "23",
      startDate:"2010/09/20",
      salery:"$85,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Donna Snider</>,
      position:"Customer Support",
      office: "New York",
      age: "27",
      startDate:"2011/01/25",
      salery:"$112,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Dai Rios</>,
      position:"Personnel Lead",
      office: "Edinburgh",
      age: "35",
      startDate:"2012/09/26",
      salery:"$217,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" /> Colleen Hurst</>,
      position:"Javascript Developer",
      office: "San Francisco",
      age: "39",
      startDate:"2009/09/15",
      salery:"$205,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" /> Charde Marshall</>,
      position:"Regional Director",
      office: "San Francisco",
      age: "36",
      startDate:"2008/10/16",
      salery:"$470,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Cedric Kelly</>,
      position:"Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      startDate:"2012/03/29",
      salery:"$433,060",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Cara Stevens</>,
      position:"Sales Assistant",
      office: "New York",
      age: "46",
      startDate:"2011/12/06",
      salery:"$145,600",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" /> Caesar Vance</>,
      position:"Pre-Sales Support",
      office: "New York",
      age: "21",
      startDate:"2011/12/12",
      salery:"$106,450",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" />Bruno Nash </>,
      position:"Software Engineer",
      office: "London",
      age: "38",
      startDate:"2011/05/03",
      salery:"$163,500",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Brielle Williamson</>,
      position:"Integration Specialist",
      office: "New York",
      age: "61",
      startDate:"2012/12/02",
      salery:"$372,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/12.png")} alt="userImage" />Brenden Wagner </>,
      position:"Software Engineer",
      office: "San Francisco",
      age: "28",
      startDate:"2011/06/07",
      salery:"$206,850",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Bradley Greer</>,
      position:"Software Engineer",
      office: "London",
      age: "41",
      startDate:"2012/10/13",
      salery:"$132,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.jpg")} alt="userImage" /> Ashton Cox</>,
      position:"Junior Technical Author",
      office: "San Francisco",
      age: "66",
      startDate:"2009/01/12",
      salery:"$86,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/2.png")} alt="userImage" /> Angelica Ramos</>,
      position:"Chief Executive Officer (CEO)",
      office: "London",
      age: "47",
      startDate:"2009/10/09",
      salery:"$1,200,000",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    }, {
      name:<><Image width={32} height={32} className="img-fluid table-avtar" src={dynamicImage("user/1.jpg")} alt="userImage" />Airi Satou </>,
      position:"Accountant",
      office: "Tokyo",
      age: "33",
      startDate:"2008/11/28",
      salery:"$162,700",
      action: (
        <UL className="action simple-list flex-row">
          <LI className="edit"><Link to={Href}><i className="icon-pencil-alt" /></Link></LI>
          <LI className="delete"><Link to={Href}><i className="icon-trash" /></Link></LI>
        </UL>
      ),
    },
  ]

  export const scrollVerticalDynamicHeightColumns = [
    {
      name: "Name",
      selector: (row:ScrollVerticalType) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: "Position",
      selector: (row:ScrollVerticalType) => `${row.position}`,
      sortable: true,
      center: true,
    },
    {
      name: "office",
      selector: (row:ScrollVerticalType) => `${row.office}`,
      sortable: true,
      center: true,
    },
    {
      name: "Age",
      selector: (row:ScrollVerticalType) => `${row.age}`,
      sortable: true,
      center: true,
    },
    {
      name: "start Date",
      selector: (row:ScrollVerticalType) => row["startDate"],
      sortable: true,
      center: true,
    },
    {
      name: "Salery",
      selector: (row:ScrollVerticalType) => `${row.salery}`,
      sortable: true,
      center: true,
    },
    {
      name: "action",
      selector: (row:ScrollVerticalType) => row["action"],
      sortable: true,
      center: true,
    },
  ];