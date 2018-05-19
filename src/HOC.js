import React from 'react';
import { Toggle, withToggle } from './toggle';
import { Switch } from './switch';

// 🐸 Hi! Here's our HOC example
// Here, you create a component that accepts the toggle state as a prop
// (called `toggle` here). Then you pass that component to the `withToggle`
// Higher Order Component function. That will return you a new component
// that will render yours with the toggle state.
function MyToggleComponent({ toggle: { on, getTogglerProps } }) {
  return (
    <div>
      {on ? 'The button is on' : 'The button is off'}
      <Switch {...getTogglerProps()} />
    </div>
  );
}
const MyWrappedToggleComponent = withToggle(MyToggleComponent);

function HOC(props) {
  return (
    <Toggle {...props}>
      <MyWrappedToggleComponent />
    </Toggle>
  );
}

export default HOC;
