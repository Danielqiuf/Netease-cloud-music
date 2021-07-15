# 网易云音乐(netease cloud music)的vue3+typescript模拟开发版本
## （此版本目前只做了首页，有待更新）
### 项目结构
│  App.tsx   <br/>
│  main.ts  <br/>
│  shims-vue.d.ts   <br/>
│ <br/>
├─api  // 请求库 <br/>
│      index.ts <br/>
│ <br/>
├─assets <br/>
│  ├─images <br/>
│  │      banner.png <br/>
│  │      coverall.png <br/>
│  │      download.png <br/>
│  │      iconall.png <br/>
│  │      index.png <br/>
│  │      topbar.png <br/>
│  │      white-r-icon@3x.png <br/>
│  │      wrap1.png <br/>
│  │ <br/>
│  └─sass   <br/>
│          global.css <br/>
│          global.min.css <br/>
│          global.scss <br/>
│          utils.css <br/>
│          utils.min.css <br/>
│          utils.scss <br/>
│          _aliyuns.scss <br/>
│ <br/>
├─components <br/>
│  │  global.scss <br/>
│  │ <br/>
│  ├─Index <br/>
│  │  ├─Banner <br/>
│  │  │      banner.scss <br/>
│  │  │      Banner.tsx <br/>
│  │  │ <br/>
│  │  ├─Cvrlst <br/>
│  │  │      cvrlst.css <br/>
│  │  │      cvrlst.min.css <br/>
│  │  │      cvrlst.scss <br/>
│  │  │      Cvrlst.tsx <br/>
│  │  │ <br/>
│  │  ├─Right <br/>
│  │  │  │  right.css <br/>
│  │  │  │  right.min.css <br/>
│  │  │  │  right.scss <br/>
│  │  │  │  Right.tsx <br/>
│  │  │  │ <br/>
│  │  │  ├─Popular <br/>
│  │  │  │      popular.scss <br/>
│  │  │  │      Popular.tsx <br/>
│  │  │  │ <br/>
│  │  │  ├─Profile <br/>
│  │  │  │      profile.css <br/>
│  │  │  │      profile.min.css <br/>
│  │  │  │      profile.scss <br/>
│  │  │  │      Profile.tsx <br/>
│  │  │  │ <br/>
│  │  │  └─Singer <br/>
│  │  │          singer.css <br/>
│  │  │          singer.min.css <br/>
│  │  │          singer.scss <br/>
│  │  │          Singer.tsx <br/>
│  │  │ <br/>
│  │  └─Tab <br/>
│  │          tab.css <br/>
│  │          tab.min.css <br/>
│  │          tab.scss <br/>
│  │          Tab.tsx <br/>
│  │ <br/>
│  └─public <br/>
│      ├─header <br/>
│      │  │  public-header.css <br/>
│      │  │  public-header.min.css <br/>
│      │  │  public-header.scss <br/>
│      │  │  Public-header.tsx <br/>
│      │  │
│      │  ├─Nav <br/>
│      │  │      nav.scss <br/>
│      │  │      Nav.tsx <br/>
│      │  │ <br/>
│      │  ├─SubNav <br/>
│      │  │      subnav.css <br/>
│      │  │      subnav.min.css <br/>
│      │  │      subnav.scss <br/>
│      │  │      SubNav.tsx <br/>
│      │  │ <br/>
│      │  └─Suggest <br/>
│      │          suggest-search.css <br/>
│      │          suggest-search.min.css <br/>
│      │          suggest-search.scss <br/>
│      │          Suggest-search.tsx <br/>
│      │          utils.ts <br/>
│      │
│      └─VdTitle <br/>
│              VdTitle.css <br/>
│              VdTitle.min.css <br/>
│              VdTitle.scss <br/>
│              VdTitle.tsx <br/>
│ <br/>
├─enum   // 枚举库 <br/>
│      base.ts <br/>
│      index.ts <br/>
│
├─interface   // 接口类型库，用于指定响应的内容类型 <br/>
│      request.ts <br/>
│      response.ts <br/>
│ <br/>
├─router <br/>
│      index.ts <br/>
│ <br/>
├─store <br/>
│      index.ts <br/>
│ <br/>
├─types   // type类型库，用于定义普通的类型别名 <br/>
│      base.ts <br/>
│      index.ts <br/>
│ <br/>
├─utils <br/>
│      base.ts <br/>
│      deep-assign.ts <br/>
│      index.ts   // 主入口，内容聚集了utils下所有文件并一起导出 <br/>
│      request.ts <br/>
│      throttle.ts <br/>
│      utils.ts <br/>
│      validate.ts <br/>
│ <br/>
└─views <br/>
    └─index <br/>
            index.scss <br/>
            Index.tsx <br/>
