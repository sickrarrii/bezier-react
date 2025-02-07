/* Internal dependencies */
import { styled, absoluteCenter } from 'Foundation'
import { Icon as BaseIcon } from 'Components/Icon'

export const Circle = styled.div`
  position: relative;
  z-index: 0;
  box-sizing: content-box;
  width: var(--bezier-status-size);
  height: var(--bezier-status-size);
  background-color: var(--bg-white-high);
  border: var(--bezier-status-border-width) solid var(--bg-white-high);
  border-radius: 50%;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: var(--bezier-status-size);
    height: var(--bezier-status-size);
    content: '';
    background-color: var(--bezier-status-bg-color);
    border-radius: 50%;
  }
`

export const Icon = styled(BaseIcon)`
  ${absoluteCenter('')}
  z-index: 1;
`
