# 网易云音乐(netease cloud music)的vue3+typescript模拟开发版本

## 项目结构
│  App.tsx  
│  main.ts
│  shims-vue.d.ts
│
├─api  // 请求库
│      index.ts
│
├─assets
│  ├─images
│  │      banner.png
│  │      coverall.png
│  │      download.png
│  │      iconall.png
│  │      index.png
│  │      topbar.png
│  │      white-r-icon@3x.png
│  │      wrap1.png
│  │
│  └─sass  
│          global.css
│          global.min.css
│          global.scss
│          utils.css
│          utils.min.css
│          utils.scss
│          _aliyuns.scss
│
├─components
│  │  global.scss
│  │
│  ├─Index
│  │  ├─Banner
│  │  │      banner.scss
│  │  │      Banner.tsx
│  │  │
│  │  ├─Cvrlst
│  │  │      cvrlst.css
│  │  │      cvrlst.min.css
│  │  │      cvrlst.scss
│  │  │      Cvrlst.tsx
│  │  │
│  │  ├─Right
│  │  │  │  right.css
│  │  │  │  right.min.css
│  │  │  │  right.scss
│  │  │  │  Right.tsx
│  │  │  │
│  │  │  ├─Popular
│  │  │  │      popular.scss
│  │  │  │      Popular.tsx
│  │  │  │
│  │  │  ├─Profile
│  │  │  │      profile.css
│  │  │  │      profile.min.css
│  │  │  │      profile.scss
│  │  │  │      Profile.tsx
│  │  │  │
│  │  │  └─Singer
│  │  │          singer.css
│  │  │          singer.min.css
│  │  │          singer.scss
│  │  │          Singer.tsx
│  │  │
│  │  └─Tab
│  │          tab.css
│  │          tab.min.css
│  │          tab.scss
│  │          Tab.tsx
│  │
│  └─public
│      ├─header
│      │  │  public-header.css
│      │  │  public-header.min.css
│      │  │  public-header.scss
│      │  │  Public-header.tsx
│      │  │
│      │  ├─Nav
│      │  │      nav.scss
│      │  │      Nav.tsx
│      │  │
│      │  ├─SubNav
│      │  │      subnav.css
│      │  │      subnav.min.css
│      │  │      subnav.scss
│      │  │      SubNav.tsx
│      │  │
│      │  └─Suggest
│      │          suggest-search.css
│      │          suggest-search.min.css
│      │          suggest-search.scss
│      │          Suggest-search.tsx
│      │          utils.ts
│      │
│      └─VdTitle
│              VdTitle.css
│              VdTitle.min.css
│              VdTitle.scss
│              VdTitle.tsx
│
├─enum   // 枚举库
│      base.ts
│      index.ts
│
├─interface   // 接口类型库，用于指定响应的内容类型
│      request.ts
│      response.ts
│
├─router
│      index.ts
│
├─store
│      index.ts
│
├─types   // type类型库，用于定义普通的类型别名
│      base.ts
│      index.ts
│
├─utils
│      base.ts
│      deep-assign.ts
│      index.ts   // 主入口，内容聚集了utils下所有文件并一起导出
│      request.ts
│      throttle.ts
│      utils.ts
│      validate.ts
│
└─views
    └─index
            index.scss
            Index.tsx
