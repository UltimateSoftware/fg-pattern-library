import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Text, Button, StyleProvider } from 'native-base';

import getTheme from '../../../native-base-theme/components'; 
import material from '../../../native-base-theme/variables/platform';

export class Forms extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header />
          <Content>
            <Form>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item last>
                <Input placeholder="Password" />
              </Item>
            </Form>
            <Button full>
              <Text>Sign In</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}