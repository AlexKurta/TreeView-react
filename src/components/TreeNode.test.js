import React from 'react'
import { mount } from 'enzyme'
import TreeNode from './TreeNode'
import { Provider } from 'react-redux'
import store from '../redux/store'

describe('TreeNode', () => {
  it('should render TreeNode', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TreeNode
          node={{ text: 'test', id: 'test', nodes: [] }}
          level={1}
          key={1}
          toggleTreeNodeExpand={() => {}}
        />
      </Provider>
    )
    expect(wrapper.length).toEqual(1)
    expect(wrapper.find('div.list-group-item').length).toEqual(1)
  })
})
