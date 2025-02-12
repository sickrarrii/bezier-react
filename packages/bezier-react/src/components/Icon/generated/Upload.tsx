import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgUpload(props: SVGProps<SVGSVGElement>) {
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
        d="M13 16a1 1 0 1 1-2 0V6.414l-3.793 3.793a1 1 0 0 1-1.414-1.414l5.5-5.5a1 1 0 0 1 1.414 0l5.5 5.5a1 1 0 0 1-1.414 1.414L13 6.414V16ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgUpload)
