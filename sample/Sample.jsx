import React, { useState } from 'react';
import DatePicker from 'reseller-react-date-picker';

import './Sample.less';

export default function Sample() {
  const [value, onChange] = useState(new Date());
  const [monthYearDate, setMonthYearDate] = useState(new Date());
  return (
    <div className="Sample">
      <header>
        <h1>react-date-picker sample page</h1>
      </header>
      <div>{value.toString()}</div>
      <button onClick={() => onChange(new Date())}>Set today</button>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <DatePicker
            format="dd/MM/yyyy"
            locale="th"
            onChange={onChange}
            culture="buddhist"
            value={value}
          />
        </main>
      </div>
      <div>Year/Month</div>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <DatePicker
            format="MM/yyyy"
            locale="th"
            onChange={setMonthYearDate}
            culture="buddhist"
            value={monthYearDate}
            defaultView="year"
            view="year"
            maxDetail="year"
          />
        </main>
      </div>
    </div>
  );
}
