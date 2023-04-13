const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      // https://tailwindcss.com/docs/screens#adding-larger-breakpoints
      screens: {
        'obs': '3440px',
        // 'obs': '3340px',
      }
    },

  },

  plugins: [],
};

module.exports = config;
