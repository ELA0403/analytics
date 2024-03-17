  import { useState } from "react";
  import { LI } from "../../../AbstractElements";
  import { languageData, languageDataType } from "../../../Data/Layout/Header/LanguageData";
  import { useTranslation } from "react-i18next";
  const Language = () => {
    const [open, setOpen] = useState(false);
    const [lang,setLang] = useState("EN")
    const [flag,setFlag] = useState("us")
    const { i18n } = useTranslation();
    const changeLanguage = (lng:languageDataType) => {
      setLang(lng.languageParameter)
      setFlag(lng.languageIconClassName)
      i18n.changeLanguage(lng.languageParameter);
      setOpen(false);
    };
    const LanguageSelection = (open: boolean) => {
      if (open) {
        setOpen(!open);
      } else {
        setOpen(!open);
      }
    };
    return (
      <LI className="language-nav">
        <div className={`translate_wrapper ${open ? "active" : ""}`}>
          <div className="current_lang">
            <div className="lang" onClick={() => LanguageSelection(open)}>
              <i className={`flag-icon fi fi-${flag}`}></i>
              
            </div>
          </div>
          <div className={`more_lang ${open ? "active" : ""}`}>
            {languageData.map((data,index)=>(
              <div className="lang selected" key={index} onClick={() => changeLanguage(data)}>
                <i className={`flag-icon fi fi-${data.languageIconClassName}`}></i>
                <span className="lang-txt">
                  {data.languageName}
                  {data.subTitle && <span> ({data.subTitle})</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </LI>
    );
  };

  export default Language;
