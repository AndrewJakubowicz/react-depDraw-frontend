import {connect} from 'react-redux';

import {getText, getFileTokens} from '../../reducers/reducer';

import * as comp from '../../components/codeTokens/codeTokens';


const mapStateToProps = state => {
    return {
        backupText: getText(state),
        tokenList: getFileTokens(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTokenClick: tokenClickLogic
    }
}

export const CodeTokens = connect(
    mapStateToProps,
    mapDispatchToProps
)(comp.CodeTokens);


const tokenClickLogic = startOfToken => {
    console.log('you clicked me and my position is', startOfToken);
}