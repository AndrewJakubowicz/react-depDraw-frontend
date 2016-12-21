import {connect} from 'react-redux';

import {getSelectedTokenDependencies, getSelectedTokenDependents, getSelectedTokenType} from '../../reducers/dragonFlyReducer';

import * as comp from '../../components/dragonfly/dragonfly';


const mapStateToProps = state => {
    return {
        highlightedTokenData: getSelectedTokenType(state),
        dependencies: getSelectedTokenDependencies(state),
        dependents: getSelectedTokenDependents(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export const DragonFly = connect(
    mapStateToProps,
    mapDispatchToProps
)(comp.DragonFly);

