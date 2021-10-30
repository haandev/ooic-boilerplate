import React, { HTMLAttributes } from 'react'
import classnames, { ClassName } from 'utils/classnames'
import {
  BreakpointType,
  AlignItemsValue,
  GutterAxisValue,
  GutterSizeValue,
  FlexDirectionValue,
  JustifyContentValue,
} from '../shared/types'
import { breakpoints } from '../shared/constants'

type RowViewport = {
  hidden?: boolean
  alignItems?: AlignItemsValue
  gutter?: {
    axis?: GutterAxisValue
    size?: GutterSizeValue
  }
  direction?: FlexDirectionValue
  justifyContent?: JustifyContentValue
}

type BreakpointStyle = { [key in BreakpointType]?: RowViewport }

interface RowProps
  extends BreakpointStyle,
    Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassName
}

const createClasses = (
  viewport: BreakpointType,
  properties: RowViewport = {}
) => {
  const classNames = []

  properties.hidden
    ? classNames.push(`${viewport}-hidden`)
    : classNames.push(`${viewport}-flex`)

  properties.alignItems &&
    classNames.push(`${viewport}-align-items-${properties.alignItems}`)

  properties.gutter &&
    classNames.push(
      `row-${viewport}-axis-${
        properties.gutter.axis || 'xy'
      } row-${viewport}-gutter-${properties.gutter.size || 'medium'}`
    )

  properties.direction &&
    classNames.push(`${viewport}-flex-direction-${properties.direction}`)

  properties.justifyContent &&
    classNames.push(`${viewport}-justify-content-${properties.justifyContent}`)
  return classNames
}

const Row: React.FunctionComponent<RowProps> = (props) => {
  return (
    <div
      className={classnames(
        'row',
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

export default Row
