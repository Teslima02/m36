import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import themesConfig from './ThemeConfig'

function Theme({children, history})
{
    return (
        <MuiThemeProvider theme={themesConfig}>
            {children}
        </MuiThemeProvider>
    )
}

export default withRouter(Theme);
