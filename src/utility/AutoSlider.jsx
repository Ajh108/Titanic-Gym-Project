import React from 'react'

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import Subscription from '../components/Subscription'

export function MyDropdown(props) {
  return (
    <SlideDown className={'my-dropdown-slidedown'}>
      <Subscription />
    </SlideDown>
  )
}