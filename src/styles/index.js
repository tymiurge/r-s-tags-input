import { styling } from 'utils'
import table from './table'
import menu from './menu'
import container from './container'
import colors from './colors'

export default styling.composeStyles(
    container,
    menu,
    table,
    colors
)