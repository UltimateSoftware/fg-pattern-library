import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text, StyleProvider } from 'native-base';

import getTheme from '../../../native-base-theme/components'; 
import material from '../../../native-base-theme/variables/platform';

export class Thumbnails extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header />
          <Content>
            <Text>Square Thumbnail</Text>
            <Thumbnail square small source={{uri: uri}} />
            <Thumbnail square source={{uri: uri}} />
            <Thumbnail square large source={{uri: uri}} />
            <Text>Circular Thumbnail</Text>
            <Thumbnail small source={{uri: uri}} />
            <Thumbnail source={{uri: uri}} />
            <Thumbnail large source={{uri: uri}} />
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}