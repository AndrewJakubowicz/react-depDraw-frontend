import {connect} from 'react-redux';

import * as comp from '../../components/codeTokens/codeTokens';


const mapStateToProps = state => {
    return {
        tokenList: state.tokenList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTokenClick: () => {console.log('you clicked me!')}
    }
}

export const CodeTokens = connect(
    mapStateToProps,
    mapDispatchToProps
)(comp.CodeTokens);