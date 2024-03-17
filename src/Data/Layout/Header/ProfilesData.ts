import { Href } from "../../../utils/Constant";
export interface profilesMessageType{
    name : string,
    icon : "User" | "Mail" |"FileText" |"Settings" | "LogOut" ,
    link : string
}

export const profilesMessage:profilesMessageType[] = [
    {
        name: "Account",
        icon:"User",
        link: ``
    },
   
   
    {
        name: "Settings",
        icon:"Settings",
        link: ``
    },
    {
        name: "Log Out",
        icon:"LogOut",
        link:`${process.env.PUBLIC_URL}/login`
    },
];