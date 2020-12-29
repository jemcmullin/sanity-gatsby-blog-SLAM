export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5feb6685e25dc6631637870a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-slam-studio',
                  apiId: 'fbb34857-328a-49ce-9ff7-a0ad444b0db6'
                },
                {
                  buildHookId: '5feb6685df7a47798106c997',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-slam',
                  apiId: 'b450bd06-8c9b-40f4-8365-cb946d2cec6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jemcmullin/sanity-gatsby-blog-SLAM',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-slam.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
