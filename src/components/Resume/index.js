import React from 'react';
import { Document, Page } from 'react-pdf/build/entry.webpack';

import './styles.css';

import resume from '../../assets/erkanResumeNoPhone.pdf';

export default () => (
  <div id='resume'>
    <Document id='pdf' file={resume}>
      <Page pageNumber={1} scale={1.8} />
    </Document>
  </div>
);
