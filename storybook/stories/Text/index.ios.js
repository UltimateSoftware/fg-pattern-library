import React, {Component} from 'react';
import {
  Container, Content, Header, H1, H2, H3, Text, StyleProvider, Left, Button, Icon
} from 'native-base';

import getTheme from '../../../native-base-theme/components'; 
import material from '../../../native-base-theme/variables/platform';

export class Typography extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>

      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <H1>SOMETHING</H1>
        </Header>
        <Content>
          <H1>Header One</H1>
          <H2>Header Two</H2>
          <H3>Header Three</H3>
          <Text>Default</Text>
        </Content>
      </Container>
      </StyleProvider>
    );
  }
};