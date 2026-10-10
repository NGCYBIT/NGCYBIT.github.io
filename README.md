# NGCYBIT 网站使用说明

这是适合 GitHub Pages 的完整英文静态网站，包含 Home、About、FAQ、Insights 和十个独立文章页面。无需安装软件、配置数据库或编译。

## 上传与发布

1. 解压 ZIP。根目录直接包含 index.html、about.html、faq.html、insights.html、assets、images 和 insights 文件夹。
2. 将解压后的所有网站文件与文件夹放入 NGCYBIT 账号下的 ngcybit.github.io 仓库根目录。不要在仓库中额外套一层网站文件夹。
3. 仓库中的 .nojekyll 是空文件，用于直接提供静态文件。若通过网页上传时没有包含它，补建该文件即可。
4. 打开仓库 Settings → Pages。在 Build and deployment 中选择 Deploy from a branch；选择上传文件所在分支（通常为 main）和 /(root)，保存。
5. 发布完成后，访问 https://ngcybit.github.io/ 。域名要求 GitHub 账号名与用户站点仓库名对应。

GitHub 官方说明：[发布来源设置](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[创建用户站点](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。

本次交付的是网站文件；尚未上传你的 GitHub 仓库，也未更改你的账号设置。仓库里的其他历史文件应先核对，避免覆盖无关内容。

## 图片与网站图标

将图片放入 images 文件夹，文件名及大小写需一致：

| 文件名 | 用途 |
| --- | --- |
| LOGO.png | 网站图标 |
| home-hero.jpg | 首页主视觉 |
| about-platform.jpg | 首页品牌板块、About 配图 |
| insight-01.jpg | 用户导向的交易体验 |
| insight-02.jpg | 市场信息 |
| insight-03.jpg | 直观的平台体验 |
| insight-04.jpg | 技术基础 |
| insight-05.jpg | 产品与服务 |
| insight-06.jpg | 用户教育 |
| insight-07.jpg | 用户支持 |
| insight-08.jpg | 规范运营 |
| insight-09.jpg | 科技与市场参与 |
| insight-10.jpg | 长期发展 |

文章图片建议 16:9。首页主视觉和 About 图片建议接近方形；实际展示会裁切以适应页面。LOGO.png 建议方形透明底，至少 64 × 64 像素。

尚未放入图片时，页面保留金融科技主题的抽象视觉，不显示破图。放入同名图片后会自动显示你的图片。图标将在 LOGO.png 上传后生效。若改用 PNG、WebP 或其他文件名，请同步更新相应 HTML 图片引用。

## 内容与维护

- FAQ：20 个问题，每题含品牌关键词，答案三段且全部直接显示。
- Insights：10 篇原创英文文章，正文各约 1,000 个英文单词，每篇有独立网址、目录、图片位置和相关阅读。
- 所有正文直接存在 HTML 内，不依赖 JavaScript 加载。JavaScript 用于手机菜单和用户上传图片的显示。
- 修改页面文字后保留标题层级、品牌关键词及链接结构。同步更新页面 title、description、Open Graph 和结构化数据中对应文字。
- 新增文章时更新 insights.html、相关文章链接和 sitemap.xml。
- 网站不包含账户、注册、实际交易或客服系统。

## 搜索辅助文件

robots.txt 指向 sitemap.xml；站点地图包含全部 14 个 HTML 页面。canonical 和分享网址统一指向 https://ngcybit.github.io/ 。FAQ 与文章的结构化数据和可见内容对应，未填写无依据的作者、日期或认证信息。

## 验证说明

交付前检查页面数量、文章字数、FAQ 问题关键词与段落数、内部链接及目录锚点、结构化数据语法、站点地图覆盖和 JavaScript 语法。设计包含手机排版、键盘焦点及减少动态效果设置。

本次运行环境没有可用的浏览器截图验收工具，未进行浏览器渲染或交互实测。发布后请分别用手机和电脑打开页面，检查图片裁切、菜单和主要链接；如有截图反馈，可据此调整。
