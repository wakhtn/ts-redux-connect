ts-redux-connect
====

Overview

## Description
This is a lightweight implementation for typesafe use of the great library react-redux `connect()`. 

## Usage

Define your store using reduxt `createStore()`, and create function `connect()` using ts-redux-connect.
```
// store.ts
import createConnect from 'ts-redux-connect';

const initialState = {
  name: "",
  age: 2
}

export stateType = typeof initialState;
export connect = createConnect<stateType>();

```
use `connect()` that was created in `store.ts`;

```
// component.ts
import {connect} from './store'

interface ComponentProps {
  name: string
}

const MyComponent = (props: ComponentProps) => {
  return <div> {props.name} </div>
}

export default connect<ComponentProps>((state,dispatch)=>{
  return {
    name: state.name
  }
})(MyComponent)

```

## Install
```
$ npm install -S ts-redux-connect
or
$ yarn add ts-redux-connect
```

## Author

[wakhtn](https://github.com/wakhtn)
MIT