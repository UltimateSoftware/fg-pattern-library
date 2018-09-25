import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text, Icon, StyleProvider
} from 'native-base';

import getTheme from '../../../native-base-theme/components'; 
import material from '../../../native-base-theme/variables/platform';

export default function Profile(props) {
    return (
    <StyleProvider style={getTheme(material)}>
        <Container>
            <Content onPress={props.onPress}>
                <Text> TEST </Text>
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