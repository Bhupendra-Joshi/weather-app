import { JSXElementConstructor, ReactNode } from 'react'

export interface CustomScreenHeaderProps {
    LeftComponent?: JSXElementConstructor<ReactNode>
    CenterComponent?: JSXElementConstructor<ReactNode>
    RightComponent?: JSXElementConstructor<ReactNode>
    darkTheme?: boolean
    onMenuPress?: () => void
    onSearchPress?: () => void
}
