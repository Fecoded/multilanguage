import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('');

  const onChange = e => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="container" style={{ marginTop: '10px' }}>
      <div className="row">
        <div style={{ width: '250px' }} className="right">
          <select value={lang} onChange={onChange} className="browser-default">
            <option value="" disabled>
              {t('language.1')}
            </option>
            <option value="en">English</option>
            <option value="cz">Czech</option>
            <option value="sp">Spanish</option>
          </select>
        </div>
        <div className="col s12">
          <div className="card grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{t('logo.1')}</span>
              <h3>{t('Welcome.1')}</h3>
              <p>{t('p1.1')}</p>
              <div className="input-field">
                <input type="text" />
                <label htmlFor="">{t('placeholder.1')}</label>
              </div>
              <input type="submit" className="btn" value={t('value.1')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
