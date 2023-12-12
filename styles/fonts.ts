import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// define your variable fonts
const inter = Inter({subsets: ['latin']})

// define 2 weights of a non-variable font

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const monasansMedium = localFont({ src: './MonaSansExpanded-Medium.ttf' })
const monasansLight = localFont({ src: './MonaSans-Light.ttf' })


export { inter, monasansMedium, monasansLight }