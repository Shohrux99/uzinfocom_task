// https://mui.com/material-ui/customization/theming/

import { createTheme } from '@mui/material'

export default createTheme({
  typography: {
    fontFamily: ['Inter'].join(',')
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fff'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
          '&:hover': {
            color: 'black'
          }
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width: 600px)': {
            paddingLeft: '12px',
            paddingRight: '12px'
          }
        },
        maxWidthLg: {
          '@media (min-width: 1440px)': {
            maxWidth: '1248px'
          },
          '@media (min-width: 1600px)': {
            maxWidth: '1500px'
          },
          '@media (max-width: 736px)': {
            paddingLeft: '16px',
            paddingRight: '16px'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          filter: 'drop-shadow(0px 0px 45px rgba(0, 0, 0, 0.07))',
          boxShadow: 'none'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '8px 12px',
          color: '#323232',
          height: '36px',
          minHeight: '36px',
          borderRadius: '6px',
          textTransform: 'none',
          fontSize: '14px',
          lineHeight: '20px',
          position: 'relative',
          zIndex: 1,
          maxWidth: 'none',
          minWidth: '102px',
          transition: 'all 0.25s ease-in-out'
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          padding: '4px',
          border: '1px solid #EDEDED',
          borderRadius: '8px',
          minHeight: '44px'
        },
        indicator: {
          height: '36px',
          background: '#D90506',
          borderRadius: '6px'
        }
      }
    }
  }
})
