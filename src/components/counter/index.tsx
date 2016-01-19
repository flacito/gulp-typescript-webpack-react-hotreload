import * as React from 'react';
import { CounterState } from '../../models';
import { CounterAction } from '../../actions';

export interface CounterProps {
  increaseCounter(amount: number): CounterAction;
  counter: CounterState;
}

export default class CounterComponent extends React.Component<CounterProps, any> {
  render() {
    const { increaseCounter } = this.props;

    return (
      <div>
        value: {this.props.counter.value}
        <button ref="increase" onClick={() => increaseCounter(+1)}>increase</button>
        <button ref="decrease" onClick={() => increaseCounter(-1)}>decrease</button>
      </div>
    );
  }
}
