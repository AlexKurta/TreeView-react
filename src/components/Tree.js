import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadTree } from '../redux/actions'
import TreeNode from './TreeNode'
import { ListGroup } from 'react-bootstrap'

let result = []

class Tree extends React.Component {
  static propTypes = {
    // from connect
    tree: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    loadTree: PropTypes.func.isRequired,
    isOpenId: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const { loading, loaded, loadTree } = this.props
    if (!loaded && !loading) loadTree()
  }

  componentWillReceiveProps() {
    result = []
  }

  getTreeNode(arr, level, isOpenId) {
    if (!arr.length) return null

    for (let i = 0; i < arr.length; i++) {
      result.push(<TreeNode node={arr[i]} level={level} key={arr[i].id} />)

      const isNodeOpen = isOpenId.indexOf(arr[i].id)
      if (arr[i].nodes && isNodeOpen !== -1) {
        this.getTreeNode(arr[i].nodes, level + 1, isOpenId)
      }
    }
    return result
  }

  render() {
    const { tree, isOpenId } = this.props
    const startLevel = 1
    if (!tree.length) return null
    return <ListGroup>{this.getTreeNode(tree, startLevel, isOpenId)}</ListGroup>
  }
}

export default connect(
  state => {
    return {
      tree: state.tree.tree,
      loading: state.tree.loading,
      loaded: state.tree.loaded,
      isOpenId: state.toggleTreeNodeExpand,
    }
  },
  { loadTree }
)(Tree)
