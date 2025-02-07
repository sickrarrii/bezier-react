import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCommentOut(props: SVGProps<SVGSVGElement>) {
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
        d="M7 3a4 4 0 0 0-4 4v13.96c0 1.257 1.455 1.957 2.437 1.171l3.366-2.693a2 2 0 0 1 1.25-.438H17a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7ZM5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6.948a4 4 0 0 0-2.498.877L5 19.919V7Zm10.536 6.121a1 1 0 1 1-1.415 1.415L12 12.414l-2.121 2.122a1 1 0 1 1-1.415-1.415L10.586 11 8.464 8.879A1 1 0 1 1 9.88 7.464L12 9.586l2.121-2.122a1 1 0 1 1 1.415 1.415L13.414 11l2.122 2.121Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCommentOut)
