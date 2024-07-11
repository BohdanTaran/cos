/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary90: '#1C0041',
        primary80: '#390082',
        primary70: '#5500C4',
        primary60: '#7206FF',
        primary50: '#9747FF',
        primary40: '#AC6CFF',
        primary30: '#C191FF',
        primary20: '#D5B5FF',
        primary10: '#EADAFF',

        neutral90: '#111113',
        neutral80: '#222226',
        neutral70: '#343438',
        neutral60: '#45454B',
        neutral50: '#56565E',
        neutral40: '#82828C',
        neutral30: '#A1A1A9',
        neutral20: '#D0D0D4',
        neutral10: '#EFEFF1',

        success90: '#082516',
        success80: '#104B2B',
        success70: '#197041',
        success60: '#219656',
        success50: '#29BB6C',
        success40: '#46D688',
        success30: '#74E1A6',
        success20: '#A2EBC4',
        success10: '#D1F5E1',

        danger90: '#3E0000',
        danger80: '#7C0000',
        danger70: '#BB0000',
        danger60: '#F90000',
        danger50: '#3E0000',
        danger40: '#3E0000',
        danger30: '#3E0000',
        danger20: '#3E0000',
        danger10: '#3E0000',
      },
    },

    screens: {
      xs: '320px',
    },
  },
  plugins: [],
};
