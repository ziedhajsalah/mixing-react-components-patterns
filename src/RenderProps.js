import React from 'react';
import { Toggle } from './toggle';
import { Switch } from './switch';

// 🦁 Hey! Here's an example of using the render props API!!
// This gives the consumer 100% power over the rendering of the component.
// You can think of the render props API as simply moving the `render` method
// from your component to the consumer and accepting it as a prop.
//
// 🦉 One of the problems that this pattern suffers from is its susceptibility
// to the prop drilling problem (if you need to render a lot of UI and/or
// want to pass the state down through a few layers of components).
//
// Another problem this pattern suffers from is when composing multiple render props
// together you can wind up with a fairly deeply nested render method which
// can be pretty frustrating. You might consider using react-adopt if this
// is a problem for you.
//
// Finally, a third (sorta) problem with this approach is if you want access to
// lifecycle methods, you have to create a new component (for the lifecycle methods)
// and render that component: <Toggle>{props => <OtherComp {...props} />}</Toggle>
function RenderProps(props) {
  return (
    <Toggle {...props}>
      {({ on, getTogglerProps }) => (
        <div>
          {on ? 'The button is on' : 'The button is off'}
          <Switch {...getTogglerProps()} />
        </div>
      )}
    </Toggle>
  );
}

export default RenderProps;
