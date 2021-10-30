import React, { HTMLAttributes } from 'react'
import classnames, { ClassName } from 'utils/classnames'
import {
  BreakpointType,
  AlignItemsValue,
  FlexDirectionValue,
  JustifyContentValue,
} from '../shared/types'
import { breakpoints } from '../shared/constants'

type ColumnViewport = {
  size?: number
  offset?: number
  order?: 'first' | 'last' | number
  hidden?: boolean
  alignSelf?: AlignItemsValue
  flex?: {
    direction?: FlexDirectionValue
    justifyContent?: JustifyContentValue
    alignItems?: AlignItemsValue
  }
}

type BreakpointStyle = { [key in BreakpointType]?: ColumnViewport }

interface ColumnProps
  extends BreakpointStyle,
    Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassName
}

const createClasses = (
  viewport: BreakpointType,
  properties: ColumnViewport = {}
) => {
  const classNames = []

  properties.hidden && classNames.push(`${viewport}-hidden`)

  properties.size && classNames.push(`col-${viewport}-${properties.size}`)

  properties.order && classNames.push(`${viewport}-${properties.order}`)

  properties.offset && classNames.push(`${viewport}-${properties.offset}`)

  properties.alignSelf &&
    classNames.push(`${viewport}-align-self-${properties.alignSelf}`)
  if (properties.flex) {
    classNames.push(`${viewport}-flex`)

    properties.flex.direction &&
      classNames.push(`${viewport}-flex-direction-${properties.flex.direction}`)

    properties.flex.justifyContent &&
      classNames.push(
        `${viewport}-justify-content-${properties.flex.justifyContent}`
      )

    properties.flex.alignItems &&
      classNames.push(`${viewport}-align-items-${properties.flex.alignItems}`)
  }
  return classNames
}

const Column: React.FunctionComponent<ColumnProps> = (props) => {
  return (
    <div
      className={classnames(
        'col',
        breakpoints.map(
          (viewport) =>
            props[viewport as BreakpointType] &&
            createClasses(
              viewport as BreakpointType,
              props[viewport as BreakpointType]
            )
        ),
        props.className
      )}
    >{props.children}</div>
  )
}

export default Column
