/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'tricolor-blob-orange': "url('/tricolored-orange-blob.svg')",
        'tricolor-blob-purple': "url('/tricolored-purple-blob.svg')",
        'tricolor-blob-cyan': "url('/green-yellow-cyan-blob.svg')",
        'orange-blob': "url('/orange-blob.svg')",
        'purple-blob': "url('/purple-violet-blob.svg')"
      })
    },
    fontFamily: {
      header: ['Roboto', 'sans-serif'],
      body: ['Noto Sans JP', 'sans-serif']
    },
    variants: {},
    plugins: []
  }
};
