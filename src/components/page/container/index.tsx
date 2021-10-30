import React, { HTMLAttributes } from 'react'
import classnames, { ClassName } from 'utils/classnames'
export interface ContainerPropsFluid {
  className?: ClassName
}

type ContainerWidth = 'fluid' | 'extended' | 'wide' | 'medium' | 'narrow'

export interface ContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassName
  width?: ContainerWidth
  fluid?: boolean
}

const Container: React.FunctionComponent<ContainerProps> = ({
  width = 'wide',
  children,
  className,
}) => {
  return (
    <div className={classnames(className, 'container', `container-${width}`)}>
      {children}
    </div>
  )
}
export default Container
