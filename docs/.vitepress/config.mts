import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'LittleSkin 用户使用手册',
  description: 'LittleSkin 用户使用手册',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

  lastUpdated: true,
  sitemap: {
    hostname: 'https://ls-manual-ng.pages.dev'
  },

  lang: 'zh',
  appearance: true,

  markdown: {
    theme: { light: 'catppuccin-latte', dark: 'one-dark-pro' },
  },

  cleanUrls: true,

  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'LittleSkin User Manual',
      themeConfig: {
        logo: '/favicon.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Return to LittleSkin', link: 'https://littlesk.in/' },
          { text: 'Community Support Robot', link: 'https://bot-manual.commspt.littlesk.in/' },
          { text: 'Sponsor Support', link: 'https://afdian.net/a/tnqzh123' }
        ],

        docFooter: {
          prev: 'Previous Page',
          next: 'Next Page'
        },
        langMenuLabel: 'Multilingual',
        returnToTopLabel: 'Return to Top',
        sidebarMenuLabel: 'Catalog',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to Light Mode',
        darkModeSwitchTitle: 'Switch to Dark Mode',
        externalLinkIcon: true,
        lastUpdated: {
          text: 'Last updated on'
        },
        outline: {
          'label': 'On this page'
        },
        editLink: {
          pattern: 'https://github.com/LittleSkinCommspt/manual-ng/edit/main/docs/:path',
          text: 'Help us improve this page'
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              en: {
                translations: {
                  button: {
                    buttonText: 'Search Documents',
                    buttonAriaLabel: 'Search Documents'
                  },
                  modal: {
                    noResultsText: 'No relevant results found',
                    resetButtonTitle: 'Clear Query',
                    footer: {
                      selectText: 'Select',
                      navigateText: 'Switch'
                    }
                  }
                }
              }
            }
          }
        },

        sidebar: {
          '/': [
            {
              text: 'User Manual',
              link: '/en/',
              items: [
                {
                  text: 'Policy Terms',
                  link: '/en/policies/',
                  items: [
                    { text: 'User Service Terms', link: '/en/policies/tos' },
                    { text: 'Privacy Statement', link: '/en/policies/privacy' }
                  ]
                },
                {
                  text: 'Newbie Guide',
                  link: '/en/newbee/',
                  items: [
                    { text: 'Create Character', link: '/en/newbee/player' },
                    { text: 'Set Texture', link: '/en/newbee/textures' },
                    { text: 'Configure Mod', link: '/en/newbee/mod' }
                  ]
                },
                { text: 'Score System', link: '/en/score' },
                {
                  text: 'Yggdrasil External Login',
                  link: '/en/yggdrasil/',
                  items: [
                    { text: 'Configure Client', link: '/en/yggdrasil/client' },
                    {
                      text: 'Configure Server',
                      link: '/en/yggdrasil/server',
                      items: [
                        { text: 'authlib-injector', link: '/en/yggdrasil/authlib-injector' },
                        { text: 'MultiLogin', link: '/en/yggdrasil/multilogin' }
                      ]
                    }
                  ]
                },
              ]
            },
            {
              text: 'Problems and Solutions',
              link: '/en/problems',
              items: [
                {
                  text: 'Frequently Asked Questions',
                  link: '/en/faq/',
                  items: [
                    { text: 'Site Usage Related', link: '/en/faq/site' },
                    { text: 'In-game Usage Related', link: '/en/faq/in-game' },
                  ]
                },

              ]
            },
            {
              text: 'Communication and Interaction',
              items: [
                { text: 'User Group', link: '/en/user-group' },
                { text: 'Email Ticket', link: '/en/email' }
              ]
            },
            {
              text: 'Advanced Features',
              link: '/en/advanced/',
              items: [
                { text: 'OAuth 2', link: '/en/advanced/oauth2' },
                { text: 'LittleSkin API', link: '/en/advanced/api' },
              ]
            },
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/LittleSkinCommspt/manual-ng' },
        ],

      },
    }
  },

  themeConfig: {
    logo: '/favicon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '返回 LittleSkin', link: 'https://littlesk.in/' },
      { text: '社区支持机器人', link: 'https://bot-manual.commspt.littlesk.in/' },
      { text: '赞助支持', link: 'https://afdian.net/a/tnqzh123' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true,
    lastUpdated: {
      text: '上次更新于'
    },
    outline: {
      'label': '在此页面上'
    },
    editLink: {
      pattern: 'https://github.com/LittleSkinCommspt/manual-ng/edit/main/docs/:path',
      text: '帮助我们完善这个页面'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    sidebar: {
      '/': [
        {
          text: '用户使用手册',
          link: '/',
          items: [
            {
              text: '政策条款',
              link: '/policies/',
              items: [
                { text: '用户服务条款', link: '/policies/tos' },
                { text: '隐私声明', link: '/policies/privacy' }
              ]
            },
            {
              text: '新手指引',
              link: '/newbee/',
              items: [
                { text: '创建角色', link: '/newbee/player' },
                { text: '设定材质', link: '/newbee/textures' },
                { text: '配置 Mod', link: '/newbee/mod' }
              ]
            },
            { text: '积分系统', link: '/score' },
            {
              text: 'Yggdrasil 外置登录',
              link: '/yggdrasil/',
              items: [
                { text: '配置客户端', link: '/yggdrasil/client' },
                {
                  text: '配置服务端',
                  link: '/yggdrasil/server',
                  items: [
                    { text: 'authlib-injector', link: '/yggdrasil/authlib-injector' },
                    { text: 'MultiLogin', link: '/yggdrasil/multilogin' }
                  ]
                }
              ]
            },
          ]
        },
        {
          text: '疑难杂症',
          link: '/problems',
          items: [
            {
              text: '常见问题解答',
              link: '/faq/',
              items: [
                { text: '站点使用相关', link: '/faq/site' },
                { text: '游戏内使用相关', link: '/faq/in-game' },
              ]
            },

          ]
        },
        {
          text: '沟通和交流',
          items: [
            { text: '用户交流群', link: '/user-group' },
            { text: '邮件工单', link: '/email' }
          ]
        },
        {
          text: '高级功能',
          link: '/advanced/',
          items: [
            { text: 'OAuth 2', link: '/advanced/oauth2' },
            { text: 'LittleSkin API', link: '/advanced/api' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleSkinCommspt/manual-ng' },
    ],

  },
  vite: {
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ],
    },
  },
});
