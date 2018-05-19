import React, { Component } from 'react';

import Title from './Title';
import CompoundComponents from './CompoundComponents';
import RenderProps from './RenderProps';
import ComponentInjection from './ComponentInjection';
import ProviderPattern from './ProviderPattern';
import HOC from './HOC';
import './App.css';
// 🦉 Hi! I'm Olivia the Owl and I'm here to guide you through this example.
// Allow me to introduce you to my assistants:
// 🐻 Barry the Bear
// 🦁 Lisa the Lion
// 🦆 Derek the Duck
// 🦊 Freddy the Fox
// 🐸 Felicity the Frog
//
// You'll find us throughout the code explaining what's going on. I (Olivia) will appear wherever
// there's a general comment about the code for you. My assistants will appear next to comments
// around code that's there to support specific patterns:
// - 🐻 compound components
// - 🦁 render props
// - 🦆 Component Injection
// - 🦊 provider pattern
// - 🐸 HOC
//
// 🦉 In particular, this example is attempting to show the different patterns for controlling
// rendering. There are various other patterns which allow you to expose mechanims for
// controlling component state (state initializers, state reducers, control props, etc.).
// Note: in order facilitate flexibility over rendering, we're also using the prop getter
// pattern in this component as well.
// Enjoy!

// 🦉 The toggle file is full of comments from myself and my assistants
// that you might find insightful!

// 🦉 Below, I'll be mentioning a few shortcomings that the different
// APIs have themselves. Because our one component implements _all_ of
// these patterns, we can side-step many of the issues by mixing them
// together where they make the most sense.
// I should note that this example is NOT a suggestion that you should
// be doing this for all of your components. Think critically about
// which patterns make the most sense for your component. If you only
// want to implement one, then I suggest render props.

// *****************************************************************
// **                                                             **
// **  All other patterns can be built out of a render prop API!  **
// **                                                             **
// *****************************************************************

class App extends Component {
  onToggle = (...args) => {
    console.log(...args);
  };

  render() {
    return (
      <div>
        <h1>Mixing Component Patterns</h1>
        <Title>Compound Components</Title>
        <CompoundComponents onToggle={this.onToggle} />
        <hr />
        <Title>Render Props</Title>
        <RenderProps onToggle={this.onToggle} />
        <hr />
        <Title>Component Injection</Title>
        <ComponentInjection onToggle={this.onToggle} />
        <hr />
        <Title>Provider Pattern</Title>
        <ProviderPattern onToggle={this.onToggle} />
        <hr />
        <Title>Higher Order Component</Title>
        <HOC onToggle={this.onToggle} />
      </div>
    );
  }
}

export default App;
