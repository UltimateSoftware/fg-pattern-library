import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text, Icon,
} from 'native-base';

export default function Profile(props) {
    <Container>
        <Content onPress={props.onPress}>
            <Text> TEST </Text>
        </Content>
    </Container>
};

Profile.propTypes = {
    onPress: () => {}
};
  
Profile.defaultProps = {
    onPress: PropTypes.func
};