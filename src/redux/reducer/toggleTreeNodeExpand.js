import { TOGGLE_TREE_NODE_EXPAND } from '../../constants'

export default (treeNodeExpanded = [], action) => {
  const { type, payload } = action

  switch (type) {
    case TOGGLE_TREE_NODE_EXPAND:
      const isTreeNodeOpen = treeNodeExpanded.indexOf(payload)

      if (isTreeNodeOpen === -1) {
        return [payload].concat(...treeNodeExpanded)
      } else {
        const newTreeNodeExpanded = []
        for (let i = 0; i < treeNodeExpanded.length; i++) {
          if (i !== isTreeNodeOpen) {
            newTreeNodeExpanded.push(treeNodeExpanded[i])
          }
        }
        return newTreeNodeExpanded
      }

    default:
      return treeNodeExpanded
  }
}
