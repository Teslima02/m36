import { green, red, cyan } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const themesConfig = {
    default    : {
        palette: {
            type     : 'light',
            primary  : {
                main: '#93a847'
            },
            secondary: {
                light: green[400],
                main : green[700],
                dark : green[900]
            },
            error    : {
                main: red[800]
            }
        },
        status : {
            danger: red[500]
        }
    }
}

export default createMuiTheme(themesConfig.default)
