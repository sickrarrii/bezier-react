import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.729 20.742a1 1 0 0 1-.044-1.413L17.632 13H4a1 1 0 1 1 0-2h13.607l-5.922-6.302a1 1 0 0 1 1.457-1.37l7.197 7.658a1.5 1.5 0 0 1 0 2.055l-7.197 7.657a1 1 0 0 1-1.413.044Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowRight)
