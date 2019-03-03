import { LOAD_TREE, START, SUCCESS } from '../../constants'

const defaultTree = {
  loading: false,
  loaded: false,
  tree: [],
}

export default (treeState = defaultTree, action) => {
  const { type, response } = action
  switch (type) {
    //start loading
    case LOAD_TREE + START:
      return { ...treeState, loading: true, loaded: false }

    //catalog loaded
    case LOAD_TREE + SUCCESS:
      return {
        ...treeState,
        tree: response,
        loading: false,
        loaded: true,
      }

    default:
      return treeState
  }
}
