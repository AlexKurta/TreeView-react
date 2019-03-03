import { LOAD_TREE, TOGGLE_TREE_NODE_EXPAND } from '../constants'

export function loadTree() {
  return {
    type: LOAD_TREE,
    callApi: '../../data.json',
  }
}

export function toggleTreeNodeExpand(id) {
  return {
    type: TOGGLE_TREE_NODE_EXPAND,
    payload: id,
  }
}
