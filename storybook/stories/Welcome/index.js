import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
  };

  showApp(event) {
    event.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Welcome to the Fearlessly Girl Pattern Library</Text>
        <Text style={this.styles.content}>
          This is a UI Component development environment for your React Native app. Here you can see
          the style guide as well what the component looks like in whatever native environment you are
          working in.
        </Text>
        <Text style={this.styles.content}>
          We have added some stories inside the "storybook/stories" directory for examples. Try
          editing the "storybook/stories/Welcome.js" file to edit this message.
        </Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
