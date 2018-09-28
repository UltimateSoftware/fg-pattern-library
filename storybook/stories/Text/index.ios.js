import React, {Component} from 'react';
import {
  Container, Content, Header, H1, H2, H3, Text, StyleProvider
} from 'native-base';

import getTheme from '../../../native-base-theme/components'; 
import material from '../../../native-base-theme/variables/platform';

export class Typography extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <H1>Header One</H1>
          <H2>Header Two</H2>
          <H3>Header Three</H3>
          <Text>Default</Text>
        </Content>
      </Container>
    );
  }
};