import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Text, Button } from 'native-base';
export class Forms extends Component {
  render() {
    return (
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
    );
  }
}