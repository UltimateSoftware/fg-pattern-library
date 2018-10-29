import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Form, Item, Label, Input, Text, Button, View, Header, StyleProvider, Left, Right, Title, Subtitle, Body
} from 'native-base';
// import { Actions } from 'react-native-router-flux';
import Loading from '../loading';
import Messages from '../message';
import { translate } from '../../i8';
import Spacer from '../spacer';

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




export class Login extends Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    locale: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
    locale: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    });
  }

  handleSubmit = () => {
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
    //   .then(() => Actions.pop())
    //   .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const {
      loading,
      error,
      success,
      locale,
    } = this.props;
    const { email } = this.state;

    if (loading) return <Loading />;

    return (
      <Container>
        <Content>
          <View padder>
            <Header
              title="Welcome back"
              content="Please use your email and password to login."
            />
             <Left />
            <Body>
              <Title>Title</Title>
              <Subtitle>Subtitle</Subtitle>
            </Body>
            <Right />
            { success ? <Messages type="success" message={success} /> : null }
            { error ? <Messages message={error} /> : null }
          </View>

          <Form>
            <Item stackedLabel>
              <Label>
                {translate('Email', locale)}
              </Label>
              <Input
                autoCapitalize="none"
                value={email}
                keyboardType="email-address"
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>
            <Item stackedLabel>
              <Label>
                {translate('Password', locale)}
              </Label>
              <Input
                secureTextEntry
                onChangeText={v => this.handleChange('password', v)}
              />
            </Item>

            <Spacer size={20} />

            <View padder>
              <Button block onPress={this.handleSubmit}>
                <Text>
                  {translate('Login', locale)}
                </Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}