import React, { HTMLAttributes } from 'react'
import classnames, { ClassName } from 'utils/classnames'
import { BreakpointType } from '../shared/types'
export type AlignItemsValue =
  | 'flex-start'
  | 'flex-center'
  | 'flex-end'
  | 'baseline'
  | 'stretch'

export type GutterAxisValue = 'x' | 'y' | 'xy'

export type FlexDirectionValue =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'

export type GutterSizeValue = 'small' | 'medium' | 'large' | 'xlarge' | 'none'

export type JustifyContentValue =
  | 'flex-start'
  | 'flex-center'
  | 'flex-end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'

export type RowViewport = {
  alignItems?: AlignItemsValue
  gutter?: {
    axis?: GutterAxisValue
    size?: GutterSizeValue
  }
  direction?: FlexDirectionValue
  justifyContent?: JustifyContentValue
}

export type BreakpointStyle = { [key in BreakpointType]: RowViewport }

export interface RowProps
  extends BreakpointStyle,
    Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassName
}

const createClasses = (
  viewport: BreakpointType,
  properties: RowViewport = {}
) => {
  const classNames = []
  properties.alignItems &&
    classNames.push(`row-${viewport}-align-items-${properties.alignItems}`)

  properties.gutter &&
    classNames.push(
      `row-${viewport}-axis-${
        properties.gutter.axis || 'xy'
      } row-${viewport}-gutter-${properties.gutter.size || 'medium'}`
    )

  properties.direction &&
    classNames.push(`row-${viewport}-flex-direction-${properties.direction}`)

  properties.justifyContent &&
    classNames.push(
      `row-${viewport}-justify-content-${properties.justifyContent}`
    )
  return classNames
}

const Row: React.FunctionComponent<RowProps> = (props) => {
  return (
    <div
      className={classnames(
        'row',
        ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map((viewport) =>
          createClasses(
            viewport as BreakpointType,
            props[viewport as BreakpointType]
          )
        )
      )}
    ></div>
  )
}

export default Row
