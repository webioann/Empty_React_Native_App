// scheme for app theme colors
export type ColorsList = {
    bg_main: string
    bg_second: string
    bg_minor: string
    text_main: string
    text_second: string
    accent: string
}
export type LightColors = { light: ColorsList }
export type DarkColors = { dark: ColorsList }
// TODO: change ThemeColorsList to native colors ( #wwwwww; )
export interface ColorsTypes {
    light: ColorsList
    dark: ColorsList
}
