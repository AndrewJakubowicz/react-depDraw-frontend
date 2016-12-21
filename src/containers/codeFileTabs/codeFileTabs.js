import {connect} from 'react-redux';

import * as selectors from '../../reducers/reducer';

import * as comp from '../../components/codeFileTabs/codeFileTabs';


const mapStateToProps = state => {
    return {
        headingsList: selectors.getFilePathHeadings(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHeadingClick: headingClick
    }
}

export const CodeFileTabs = connect(
    mapStateToProps,
    mapDispatchToProps
)(comp.CodeFileTabs);


const headingClick = _ => {
    console.log('You clicked a heading');
}