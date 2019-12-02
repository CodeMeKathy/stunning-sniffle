# React Notes

## State Management

- In order to access data across components, or neighbor components, the use of state is required.

- State is simply an object that describes your application.

- State is able to change.

- State is data which turns into Props once it is passed down.

- Props are items that come from state and the child component is unable to make changes to the received prop.

-smart components are components with state. Components with state or a smart component requires a class.

## React Life Cycle Methods or Hooks

- Methods that get called at different stages at different points when then component gets rendered.

- Which run every time a change occurs within react

1. Mounting, 2) Updating, 3) Unmouinting

### Mounting

- componentDidMount() is called the first time a component is rendered to the virtual DOM

* Constructor

### Updating,
### Unmounting

## Organization

- Components with no state are called `dump` components.
- Components with state are considered `smart` components and usually filed within a `Container` directory.
