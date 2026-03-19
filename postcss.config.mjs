const config = {
  plugins: ["@tailwindcss/postcss"],
};

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/image.png')",
      },
    },
    screens: {
      'max-890': {'max': '889px'}, // applies below 890px
    },
    colors: {
        customBorder: 'rgba(243, 243, 243, 1)',
    },
  },
};

export default config;
