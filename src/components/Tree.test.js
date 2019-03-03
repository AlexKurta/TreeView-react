import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Tree from './Tree'

describe('TreeNode', () => {
  it('should render Tree', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Tree tree={[]} />
      </Provider>
    )
    expect(wrapper.length).toEqual(1)
  })
})
