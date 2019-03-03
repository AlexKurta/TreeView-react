var res
export function getTreeNodes(arr, level) {
  if (!arr.length) return null
  for (let i = 0; i < arr.length; i++) {
    if (arr.nodes) {
      res.push({
        node: arr[i].nodes,
        level: level,
        key: arr[i].id,
      })
      const nextLevel = getTreeNodes(arr[i].nodes, level + 1)
      if (nextLevel) return nextLevel
    }
  }
  return res
}
