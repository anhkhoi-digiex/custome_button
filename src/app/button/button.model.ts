export type TypeButton = "text" | "primary" | "secondary"


export type SizeButton = "xl" | "l" | "s"


export type IconPosition = "left" | "right"

export type ColorButton = "white" | "dark"


export interface ButtonCustomeProps {
    title: string,
    loading?: boolean,
    disable?: boolean,
    size: SizeButton
    type: TypeButton,
    icon?: React.ReactNode,
    iconPosition?: IconPosition,
    theme?: ColorButton,
    onClick?: () => void
}