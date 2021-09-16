/* External dependencies */
import React, { CSSProperties } from 'react'

/* Internal dependencies */
import { UIComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'

export const MIN_ROWS = 5

export enum TextAreaSize {
  S = 10,
  M = 17,
  L = 29,
}

type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>

export default interface TextAreaProps extends UIComponentProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperInterpolation?: InjectedInterpolation
  wrapperStyle?: CSSProperties
  wrapperClassName?: string
  autoFocus?: boolean
  value?: string
  hasError?: boolean
  size?: TextAreaSize
  height?: number
  onFocus?: TextAreaChangeEventHandler
  onBlur?: TextAreaChangeEventHandler
  onChange?: TextAreaChangeEventHandler
}
