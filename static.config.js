import path from 'path'

export default {
  getRoutes: async () => {
    return [
      {
        path: '/generated-one',
        getData: () => ({
          title: 'One',
        }),
        template: 'src/templates/generated',
      },
      {
        path: '/generated-two',
        getData: () => ({
          title: 'Two',
        }),
        template: 'src/templates/generated',
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
