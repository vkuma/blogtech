const date = new Date();
const year = date.getFullYear();

const APPCONFIG = {
  brand: 'NoisyTechnology',
  user: 'Noisy Technology',
  year: year,
  AutoCloseMobileNav: true,          // true, false. Automatically close sidenav on route change (Mobile only)
  showCustomizer: false,              // Boolean: true, false. Customizer will be opened (visible) first time app was loaded if set to true
  color: {
    primary: '#00BCD4',
    success: '#8BC34A',
    info: '#66BB6A',
    infoAlt: '#7E57C2',
    warning: '#FFCA28',
    danger: '#F44336',
    text: '#3D4051',
    gray: '#EDF0F1'
  },
  settings: {
    layoutBoxed: false,               // true, false
    navCollapsed: true,              // true, false
    navBehind: true,                 // true, false
    fixedHeader: true,                // true, false
    sidebarWidth: 'small',           // small, middle, large
    colorOption: '23',                // String: 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
    theme: 'light',                   // light, gray, dark
  }
};

export default APPCONFIG;
