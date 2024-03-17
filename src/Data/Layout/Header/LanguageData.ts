import { Deutsch, English, Español, Français, Português, 简体中文 } from "../../../utils/Constant";
export interface languageDataType{
    languageParameter:string,
    languageName:string,
    languageIconClassName:string,
    subTitle?:string
}
export let languageData = [
    {
        languageParameter: "en",
        languageName: English,
        languageIconClassName: "us",
        subTitle:"US"
    },
    {
        languageParameter: "du",
        languageName: Deutsch,
        languageIconClassName: "de",
    },
    {
        languageParameter: "es",
        languageName: Español,
        languageIconClassName: "es",
    },
    {
        languageParameter: "fr",
        languageName: Français,
        languageIconClassName: "fr",
    },
    {
        languageParameter: "pt",
        languageName: Português,
        languageIconClassName: "pt",
        subTitle:"BR"
    },
    {
        languageParameter: "cn",
        languageName: 简体中文,
        languageIconClassName: "cn",
    },
    {
        languageParameter: "ae",
        languageName: "لعربي",
        languageIconClassName: "ae",
        subTitle:"ae"
    },
];