// scheme for app theme colors
export type ColorsList = {
    bg_main: string
    bg_second: string
    bg_minor: string
    text_main: string
    text_second: string
    red: string
    blue: string
    green: string
    purple: string
    yellow: string
}
export type LightColors = { light: ColorsList }
export type DarkColors = { dark: ColorsList }
// TODO: change ThemeColorsList to native colors ( #wwwwww; )
export interface ColorsTypes {
    light: ColorsList
    dark: ColorsList
}
