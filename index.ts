import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux'

export default <StateType>() => {
  return <ComponentProp>(mapStateAndDispatchToProps: (state: StateType, dispatch: Dispatch<Action<any>>, ownProps?: any) => ComponentProp) => {
    return connect((state: StateType) => ({ state }), dispatch => ({ dispatch }), (stateProps, dispatchProps, ownProps?) => {
      return mapStateAndDispatchToProps(stateProps.state, dispatchProps.dispatch, ownProps)
    })
  }
}
