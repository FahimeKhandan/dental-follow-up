import { ReactNode } from 'react'

export default interface NavRouteItemProps {
  icon?: (className: string) => ReactNode
  title: string
  isSelectedRoute?: boolean
  onClick: () => void
  isDisabled?: boolean
}
