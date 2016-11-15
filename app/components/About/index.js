/* eslint linebreak-style: ["error", "windows"]*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function About() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default About;
