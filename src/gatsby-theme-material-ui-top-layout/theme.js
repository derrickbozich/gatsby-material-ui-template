// import { createTheme, colors } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// console.log(responsiveFontSizes)


// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#3f50b5',
      dark: '#000',
      // contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    // fontFamily: [
    //   'regular',
    //   "Red Hat Text",
    //   "Red Hat Mono"
    // ].join(','),
    homeH1: {
      fontWeight: 400,
      fontFamily: "bodini-reg",
    },
    homeH2: {
      fontWeight: 400,
      fontFamily: "bodini-reg",
      fontSize: '3rem',
      color: "white",
      
    },
    homeH3: {
      fontWeight: 400,
      fontFamily: "bodini-reg",
      fontSize: 42,
    },
    homeH4: {
      fontWeight: 400,
      fontFamily: "bodini-italic",
      fontSize: 22,
    },
    h1: {
      fontWeight: 600,
      fontFamily: "bodini-reg",
      fontSize: '2.5rem',
      marginBottom: '0.4rem',
      textTransform: 'uppercase',
      letterSpacing: '0.01em'
    },
    h2: {
      fontWeight: 600,
      fontFamily: "bodini-reg",
      fontSize: 42,
      marginBottom: '1rem',
      letterSpacing: '0.15em'
    },
    h3: {
      fontWeight: 600,
      fontFamily: "bodini-reg",
      fontSize: 32,
      marginBottom: '1rem'
    },
    p: {
      fontFamily: "bodini-reg",
    },
    body1: {
      fontFamily: "bodini-reg",
      fontSize: 18,
      marginBottom: '1rem'
    },
    body1italic: {
      fontFamily: "bodini-italic",
      fontSize: 18,
    },
    body2: {
      fontFamily: "bodini-reg",
      fontSize: 18,
    },
    body2Bold: {
      fontFamily: "bodini-reg",
      fontWeight: 600,
      fontSize: 18,
    },
    body2Black: {
      fontFamily: "bodini-reg",
      fontWeight: 700,
      fontSize: 18,
    },
    body3: {
      fontFamily: "bodini-reg",
      fontSize: 16,
      marginBottom: '1rem',
      display: 'block'
    },
    body3Bold: {
      fontFamily: "bodini-reg",
      fontSize: 16,
      fontWeight: 600,
    },
    nav: {
      fontFamily: "bodini-italic",
      fontSize: 16,
      letterSpacing: '0.15em'
    },
    brand: {
      fontFamily: "bodini-reg",
      fontWeight: 400,
      letterSpacing: '0.05em',
      // textTransform: 'uppercase'
    },
    footerBrand: {
      fontFamily: "bodini-reg",
      fontWeight: 600,
      letterSpacing: '0.05em',
      fontSize: 24
    },
    button: {
      fontFamily: "bodini-reg",
      fontWeight: 600,
      "textTransform": 'none',
      fontSize: 16,
    }, 
  },
});

// theme = responsiveFontSizes(theme);

export default theme;

