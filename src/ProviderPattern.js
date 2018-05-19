import React from 'react';
import { Toggle } from './toggle';
import { Switch } from './switch';

// 🦊 Hi there! Here's the provider pattern!
// This helps you overcome the prop drilling problem that the render prop
// and component injection patterns both have. It allows developers to
// get access to your component's state at any spot within the render tree
// of your component. It leverages React.createContext heavily and in this
// example it's a fairly straightforward abstraction on top of that API.
//
// 🦉 One thing you need to consider with this pattern is ensuring you're
// not re-rendering all consumers unecessarily. This is addressed and noted
// in our implementation above.
// Also, in our implementation, we're not exposing the ToggleContext directly
// and that's intentional. It allows us to implement the provider ourselves
// and expose a slightly more capable consumer. See the implementation notes
// for more on this.
function ProviderPattern(props) {
  return (
    <Toggle {...props}>
      <div>
        {/*
           You can put whatever you want within the Toggle, and at any layer of
           the tree use Toggle.Consumer to access the Toggle state and helpers
        */}
        <div>
          <Toggle.Consumer>
            {({ on, toggle, getTogglerProps }) => (
              <div>
                {on ? 'The button is on' : 'The button is off'}
                <Switch {...getTogglerProps()} />
              </div>
            )}
          </Toggle.Consumer>
        </div>
      </div>
    </Toggle>
  );
}

export default ProviderPattern;
