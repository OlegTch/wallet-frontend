import { useState } from 'react';
import './selectLang.scss';
import { language } from '@data/lang';
import { useTranslation } from 'react-i18next';

const getLang = () => {
    const lang = localStorage.getItem('lang');
    if (!lang) {
        localStorage.setItem('lang', 'ua');
        return 'ua';
    }
    return lang;
};

export const SelectLang = () => {
    const [lang, setLang] = useState(getLang());
    const [openSelect, setOpenSelect] = useState(false);
    const { t, i18n } = useTranslation();

    const onOpen = e => {
        setOpenSelect(true);
    };

    const onClose = e => {
        const lang = e.target.dataset.lang;
        console.log(lang);
        setLang(lang);
        setOpenSelect(false);
        localStorage.setItem('lang', lang);
        i18n.changeLanguage(lang);
    };

    return (
        <div className="lang">
            <button className={`button_lang ${lang}`} onClick={onOpen}></button>
            {openSelect && (
                <div className="block_select">
                    {language.map((el, idx) => {
                        console.log(el, lang, el !== lang);
                        return (
                            el !== lang && (
                                <button
                                    className={`button_lang ${el}`}
                                    key={idx}
                                    data-lang={el}
                                    onClick={onClose}
                                ></button>
                            )
                        );
                    })}
                </div>
            )}
        </div>
    );
};
