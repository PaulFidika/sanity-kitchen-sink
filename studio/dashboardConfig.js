export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8894e63e984d014eaaabb0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-g2qmkxso',
                  apiId: '2428441d-bd9e-4050-90d3-be03e7fbf410'
                },
                {
                  buildHookId: '5f8894e60a7a00128f2711ef',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-c6b57e12',
                  apiId: '1682941c-5157-47bd-b0ea-63b2f63a79aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PaulFidika/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-c6b57e12.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
