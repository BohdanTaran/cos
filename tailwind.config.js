/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-topper': "url('/assets/public/header-topper.jpg')",
      },
      colors: {
        "primary": {
          90: '#1C0041',
          80: '#390082',
          70: '#5500C4',
          60: '#7206FF',
          50: '#9747FF',
          40: '#AC6CFF',
          30: '#C191FF',
          20: '#D5B5FF',
          10: '#EADAFF',
        },
        "neutral": {
          90: '#111113',
          80: '#222226',
          70: '#343438',
          60: '#45454B',
          50: '#56565E',
          40: '#82828C',
          30: '#A1A1A9',
          20: '#D0D0D4',
          10: '#EFEFF1',
        },
        "success": {
          90: '#082516',
          80: '#104B2B',
          70: '#197041',
          60: '#219656',
          50: '#29BB6C',
          40: '#46D688',
          30: '#74E1A6',
          20: '#A2EBC4',
          10: '#D1F5E1',
        },
        "danger": {
          90: '#3E0000',
          80: '#7C0000',
          70: '#BB0000',
          60: '#F90000',
          50: '#3E0000',
          40: '#3E0000',
          30: '#3E0000',
          20: '#3E0000',
          10: '#3E0000',
        }
      },
    },
    screens: {
      phone: '320px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
      'desktop-xl': '1536px',
    },
    fontFamily: {
      azeret: ['"Azeret Mono"', 'monospace'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
