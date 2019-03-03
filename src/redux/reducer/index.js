import { combineReducers } from 'redux'
import tree from './tree'
import toggleTreeNodeExpand from './toggleTreeNodeExpand'

export default combineReducers({
  tree,
  toggleTreeNodeExpand,
})
