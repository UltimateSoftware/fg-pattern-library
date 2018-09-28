import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Header, Button, Right, Body, Left, Text, Icon, StyleProvider, Card, CardItem
} from 'native-base';

import getTheme from '../../../native-base-theme/components'; 
import material from '../../../native-base-theme/variables/platform';

export default function Profile(props) {
    return (
    <StyleProvider style={getTheme(material)}>
 <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text>Fearlessly Girl</Text>
                  <Text note>Demo</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/> */}
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  {/* <Icon active name="thumbs-up" /> */}
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  {/* <Icon active name="chatbubbles" /> */}
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </StyleProvider>
    );
};

Profile.propTypes = {
    onPress: () => {}
};
  
Profile.defaultProps = {
    onPress: PropTypes.func
};