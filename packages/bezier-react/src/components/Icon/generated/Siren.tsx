import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSiren(props: SVGProps<SVGSVGElement>) {
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
        d="M12 4a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1ZM6.536 5.536a1 1 0 0 1-1.415 0L3.707 4.12a1 1 0 1 1 1.414-1.414l1.415 1.414a1 1 0 0 1 0 1.415ZM17.707 4.12a1 1 0 0 0 1.414 1.415l1.415-1.415a1 1 0 1 0-1.415-1.414l-1.414 1.414Zm-5.7.88a7 7 0 0 0-7 7v8h-1v2h16v-2h-1v-8a7 7 0 0 0-7-7ZM9 10a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSiren)
