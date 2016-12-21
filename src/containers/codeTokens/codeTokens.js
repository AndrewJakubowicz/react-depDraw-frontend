import {connect} from 'react-redux';

import {getText, getFileTokens, getCurrentFile} from '../../reducers/reducer';

import * as comp from '../../components/codeTokens/codeTokens';
import {getTokenType} from '../../actions/actions';


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
            dispatch(tokenClickLogic(startOfToken, filePath));
        }
    }
}

export const CodeTokens = connect(
    mapStateToProps,
    mapDispatchToProps
)(comp.CodeTokens);



const tokenClickLogic = (startOfToken, filePath) => {
    console.log('you clicked me and my position is', startOfToken, filePath);
    return getTokenType(filePath, startOfToken.line, startOfToken.character);
}