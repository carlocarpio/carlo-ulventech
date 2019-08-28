import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

/*
** ISSUE: Need to strictly check both values
** FROM: ownProps.filter == state.visibilityFilter
** TO: ownProps.filter === state.visibilityFilter
*/
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

/*
** ISSUE: when passed down to the connected COMPONENT Link onClick is being passed as Object
** FROM: onClick: dispatch(setVisibilityFilter(ownProps.filter))
** TO: onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
*/
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
