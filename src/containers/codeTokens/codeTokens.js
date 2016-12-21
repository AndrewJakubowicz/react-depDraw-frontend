import {connect} from 'react-redux';

import {getText, getFileTokens, getCurrentFile} from '../../reducers/reducer';

import * as comp from '../../components/codeTokens/codeTokens';
import {getTokenType, getTokenDependency, getTokenDependents} from '../../actions/actions';


const mapStateToProps = state => {
    return {
        backupText: getText(state),
        tokenList: getFileTokens(state),
        filePath: getCurrentFile(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTokenClick: (startOfToken, filePath) => {
            tokenClickLogic(startOfToken, filePath, dispatch);
        }
    }
}

export const CodeTokens = connect(
    mapStateToProps,
    mapDispatchToProps
)(comp.CodeTokens);



const tokenClickLogic = (startOfToken, filePath, dispatch) => {
    dispatch(getTokenType(filePath, startOfToken.line, startOfToken.character));
    dispatch(getTokenDependency(filePath, startOfToken.line, startOfToken.character));
    dispatch(getTokenDependents(filePath, startOfToken.line, startOfToken.character));
}