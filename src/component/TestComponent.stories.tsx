import React from 'react';
import { storiesOf } from '@storybook/react';
import TestComponent from './TestComponent';

storiesOf('TestComponent', module)
  .add('Default', () => <TestComponent />)
  .add('With Custom Style', () => <div className="test-component"><TestComponent /></div>);