module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          blue: {
            midnight : '#1c1938',
          },
          black: {
            lighter: '#0a0c1b',
          },
          purple:{
            stale: '#7c43a0',
          },
        },
        backgroundImage : (theme) => ({
          'image-header' : "url('images/image-header-desktop.jpg')",
        }),
      },
    },
    variants: {},
    plugins: [],
  }