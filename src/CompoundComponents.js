import React from 'react';
import { Toggle } from './toggle';

// 🐻 Hi there! Here's an example of using the compound components API!
// They allow users of your component to ignore the implicit state that's
// shared between the compound components if they don't need access to
// it for rendering things.
//
// 🦉 It has the limitation that there's less flexibility over what gets
// rendered when used by itself because all state is implicitly shared.
// For example, if we wanted to render a different kind of button here,
// then we'd have to use one of the other patterns to access the
// `getTogglerProps` or the `toggle` function to attatch to the `onClick`
// handler of our custom button.
function CompoundComponents(props) {
  return (
    <Toggle {...props}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
}

export default CompoundComponents;
