import { createTheme } from '@mui/material/styles';

// Replicate your palette and any typographic preferences here.
const darkGothicTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // from your --color-accent
      main: '#8b0000', 
    },
    secondary: {
      // from your --color-accent-light
      main: '#c81f1f',
    },
    background: {
      // match --color-bg and --color-bg-secondary
      default: '#1b1b1d',
      paper: '#2c2c2f',
    },
    text: {
      // match --color-text
      primary: '#f5f5f5',
      // If you need a secondary text color, define it here
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: `'Merriweather', serif`, // or your preferred gothic typeface
    h1: {
      fontFamily: `'Pirata One', serif`,
      fontSize: '2rem',
    },
    h2: {
      fontFamily: `'Pirata One', serif`,
      fontSize: '1.75rem',
    },
    // ...and so on for h3, h4, h5
  },
  components: {
    // Override styles for MUI components here

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          // You can add spacing, hover states, etc.
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#f5f5f5', // or palette.text.primary
          '&:hover': {
            backgroundColor: '#2c2c2f', // slight highlight
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        // The main text area for the selected option
        select: {
          color: '#f5f5f5',
          backgroundColor: '#2c2c2f',
        },
        // The icon (chevron) to open the dropdown
        icon: {
          color: '#f5f5f5',
        },
      },
    },

    // ...repeat overrides for other components if needed
  },
});

export default darkGothicTheme;
