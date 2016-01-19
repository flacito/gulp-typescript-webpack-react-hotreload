import * as React from 'react';
import { connect } from 'react-redux';
import Application from '../../components/application';

@connect(state => state)
export default class ApplicationContainer extends React.Component<any, any> {
  render() {
    return <Application {...this.props} />;
  }
}
