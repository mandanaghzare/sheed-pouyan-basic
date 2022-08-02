import React, { useState } from 'react';
import '../css/style.css';
import { useDispatch,useSelector } from 'react-redux';
import { enLanguage, faLanguage } from '../../../redux/features/language/languageSlice';
import { useTranslation } from 'react-i18next';

function ChooseLang() {
    const [slideaway, setSlideaway] = useState(false)
    const dispatch = useDispatch();
    const langVal = useSelector((state) => state.language.value);
  
    const { i18n, t } = useTranslation();
    const handleLangFa = () => {
      dispatch(faLanguage())
      i18n.changeLanguage('fa');
      setSlideaway(true)
    };
    const handleLangEn = () => {
      dispatch(enLanguage())
      i18n.changeLanguage('en');
      setSlideaway(true)
    };

    return (
        <div className="chooseLang" id={slideaway ? "away" : ""}>
            <div onClick={handleLangFa} className="faPart">
                <h3>فارسی</h3>
            </div>
            <div onClick={handleLangEn} className="enPart">
                <h3>English</h3>
            </div>
        </div>
    )
}

export default ChooseLang