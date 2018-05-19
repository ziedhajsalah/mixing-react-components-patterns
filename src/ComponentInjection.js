import React from 'react';
import { Toggle } from './toggle';
import { Switch } from './switch';

// 🦆 Hey! So here's the component injection pattern!
// It's almost identical to the render prop pattern except instead of simply
// calling the function you provide, it actually uses React.createElement.
// This means that you can use this pattern the same way you do render
// props if you want to, but you can also create a component and pass that
// instead and all your lifecycle methods will work as you'd expect.
//
// 🦉 This pattern suffers from the prop drilling problem that render props
// has.
//
// One other potential frustration with this pattern is if you don't
// need lifecycle hooks and you really only need a render method, the
// fact that it's calling React.createElement is wasteful and clutters
// up React DevTools.
class MyToggleConsumerComponent extends React.Component {
  render() {
    const { on, getTogglerProps } = this.props;
    return (
      <div>
        {on ? 'The button is on' : 'The button is off'}
        <Switch {...getTogglerProps()} />
      </div>
    );
  }
}

function ComponentInjection(props) {
  return <Toggle {...props}>{MyToggleConsumerComponent}</Toggle>;
}

export default ComponentInjection;
