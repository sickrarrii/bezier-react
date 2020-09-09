import React from 'react'

function SvgRow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.5 13c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5h15zm-.5 2H5v4h14v-4zm.5-12c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5h-15C3.673 11 3 10.327 3 9.5v-5C3 3.673 3.673 3 4.5 3h15zM19 5H5v4h14V5z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgRow
