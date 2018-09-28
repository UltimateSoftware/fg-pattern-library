import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Content, Text, Button, Toast, StyleProvider } from "native-base";

import getTheme from '../../../native-base-theme/components'; 
import material from '../../../native-base-theme/variables/platform';

export class ToastDuration extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showToast: false
      };
    }
    render () {
    return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Header />
        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                duration: 3000
              })}
          >
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    </StyleProvider>
    );
  }
};

export class ToastPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                position: "top"
              })}
          >
            <Text>Top Toast</Text>
          </Button>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                position: "bottom"
              })}
          >
            <Text>Bottom Toast</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}