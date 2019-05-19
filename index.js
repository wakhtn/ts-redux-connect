"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
exports.default = () => {
    return (hook) => {
        return react_redux_1.connect((state) => ({ state }), dispatch => ({ dispatch }), (stateProps, dispatchProps, ownProps) => {
            return hook(stateProps.state, dispatchProps.dispatch, ownProps);
        });
    };
};
