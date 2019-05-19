import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux'

export default <StateType>() => {
  return <ComponentProp>(hook: (state: StateType, dispatch: Dispatch<Action<any>>, ownProps?: any) => ComponentProp) => {
    return connect((state: StateType) => ({ state }), dispatch => ({ dispatch }), (stateProps, dispatchProps, ownProps?) => {
      return hook(stateProps.state, dispatchProps.dispatch, ownProps)
    })
  }
}
