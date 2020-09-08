// @ts-nocheck
import { ApplyPluginsType, dynamic } from 'C:/Users/LEI/Desktop/node/ant-design-pro/node_modules/_@umijs_runtime@3.2.19@@umijs/runtime';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/layouts/UserLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "name": "login",
        "path": "/user/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/pages/user/login'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/layouts/SecurityLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/welcome",
            "exact": true
          },
          {
            "path": "/welcome",
            "name": "welcome",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/pages/Welcome'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/admin",
            "name": "admin",
            "icon": "crown",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/pages/Admin'), loading: LoadingComponent}),
            "authority": [
              "admin"
            ],
            "routes": [
              {
                "path": "/admin/sub-page",
                "name": "sub-page",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/pages/Welcome'), loading: LoadingComponent}),
                "authority": [
                  "admin"
                ],
                "exact": true
              }
            ]
          },
          {
            "name": "list.table-list",
            "icon": "table",
            "path": "/list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListTableList' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/pages/ListTableList'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/LEI/Desktop/node/ant-design-pro/src/pages/404'), loading: LoadingComponent}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
