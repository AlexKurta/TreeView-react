import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { toggleTreeNodeExpand } from '../redux/actions'
import { connect } from 'react-redux'

class TreeNode extends React.Component {
  static propTypes = {
    // from Tree
    node: PropTypes.object.isRequired,
    level: PropTypes.number.isRequired,
    // from connect
    toggleTreeNodeExpand: PropTypes.func.isRequired,
  }

  clickHandler = () => {
    const { node, toggleTreeNodeExpand } = this.props
    toggleTreeNodeExpand(node.id)
  }

  render() {
    const { level, node } = this.props
    return (
      <ListGroup.Item
        style={{ marginLeft: `${level * 10}px` }}
        onClick={this.clickHandler}
        key={node.id}
      >
        {node.text}
      </ListGroup.Item>
    )
  }
}

export default connect(
  null,
  { toggleTreeNodeExpand }
)(TreeNode)
