import React from 'react';
import { Tab, Header } from 'semantic-ui-react';

const ApplicationHelpItem = () => (
  <Tab.Pane>
      <Header>Application</Header>
      <br />
      <strong>Prerequisites [for local development / testing]</strong><br />
      To start application locally it is required to install <strong><a href='https://yarnpkg.com/lang/en/docs/install'>Yarn</a></strong>.
      <br /><br/>
      Application is built using React framework. Basic command line (execute from project root directory) commands to start application locally are : <br />
      <ol>
          <li><strong>yarn install</strong> - to install all dependencies</li>
          <li><strong>yarn start</strong> - to start application locally. Port 3000 will be used by default. If port 3000
          is already used, yarn will ask user to start application on first next free port.</li>
      </ol>
      <br />
      More info can be found in <strong>README.md</strong> file in the project root directory.
  </Tab.Pane>
);

export default ApplicationHelpItem;
