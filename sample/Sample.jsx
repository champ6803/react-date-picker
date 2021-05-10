import React, { useState } from 'react';
import DatePicker from 'reseller-react-date-picker';

import './Sample.less';

export default function Sample() {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <div className="Sample">
      <header>
        <h1>react-date-picker sample page</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <DatePicker
            format="dd/MM/yyyy"
            locale="th"
            onChange={onChange}
            value={value}
          />
        </main>
      </div>
    </div>
  );
}
