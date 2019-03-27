Debugger.html is a React-Redux based application — the UI is constructed using React Components. the follow illustration provides a simplistic high level view:


Application-critical objects are stored in one global state object (housed in a Redux store) that some components have access to. Many components are not aware of this state but are passed in values to render using React properties.

In the Debugger.html project we also often use React’s setState to manage component local state. For example, storing the state of a tree in the sources view or using it in the App component to remember if the file search box is being displayed (cmd->p).

When a user manipulates the UI, Redux Actions are fired to collect payload data, which affects the state of the application for the given operation. Actions set a specific type of operation for the store and dispatch the event.

Reducers handle all actions and decide the new application state based on the action type. You can think of a reducer as a set of functions that take a specific action type and the current state of the app as parameters and returns the new state of the application.

The Store is a JavaScript object that contains and manages the state of the application. After the Reducers create a new version of the state, the store will fire a re-rendering of all the components. Note that a new state is created every time — the old state is not modified.

React uses a Virtual DOM; only required changes to the actual DOM will be rendered.