import React from 'react';
import { Text } from 'react-native';
import { Root } from "native-base";

import { storiesOf } from '../helpers/storiesOf';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import {ToastDuration, ToastPosition} from './Toast';
import {Typography} from './Text';
import {Thumbnails} from './Thumbnails';
import {TabProp, FooterTabs} from './Tabs';
import {Forms, Login} from './Forms'
import {About} from './About'
import Profile from './Profile';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Fearlessly Girl', () => <Welcome showApp={linkTo('Forms')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('about', module)
    .add('my about page', () => (
      <About></About>
    ));
storiesOf('Profile', module)
  // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with picture', () => (
    <Profile></Profile>
  ));

storiesOf('Toast', module)
  // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with durations', () => (
    <Root>
      <ToastDuration></ToastDuration>
    </Root>
  ))
  .add('with position', () => (
    <Root>
      <ToastPosition></ToastPosition>
    </Root>
  ));

storiesOf('Typography', module)
    .add('and text types', () => (
      <Root>
        <Typography></Typography>
      </Root>
    ));
  
storiesOf('Thumbnails', module)
    .add('shapes and sizes', () => (
        <Thumbnails></Thumbnails>
    ));

storiesOf('Tabs', module)
  .add('top', () => (
      <TabProp></TabProp>
  ))
  .add('footer', () => (
    <FooterTabs></FooterTabs>
  ))
function print () {
  console.log('submitted')
}
storiesOf('Forms', module)
  .add('login', () => (
      <Forms></Forms>
))
  .add('login with input', () => (
    
    <Login loading={false} onFormSubmit={action('help')}></Login>
  ))