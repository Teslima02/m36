import { green, red, cyan } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const themesConfig = {
    default    : {
        palette: {
            type     : 'light',
            primary  : {
                main: '#fced00',
                light: '#a69d11eb',
                dark: '#101012',
            },
            secondary: {
                light: green[400],
                main : green[700],
                dark : green[900]
            },
            text: {
                primary: '#fced00',
                secondary : green[700],
                light : green[900]
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
