
const app = new Vue({

    data:{
        displayresume:{
            info:{
                name:'钟经义',
                job:'前端工程师',
                school:'苏州科技大学 本科',
                telephone:'18860905139',
                email:'nxdzhong@foxmail.com',
                wechat:'ajing741472797',
                age:'25',
                msg:'https://nxdzhong.com/resume',
                
            },
            projects:[
                {
                    name:'《jQuery仿网易云音乐》',
                    useSkill:'MVC、Observer设计模式、jQuery、响应式布局 、七牛&LeanCloud数据库、Swiper',
                    imgLink:'./img/163music.jpg',
                    previewLink:'https://ajing741472797.github.io/163-music-demo/src/index.html',
                    sourceLink:'https://github.com/ajing741472797/163-music-demo',
                    blogLink:'https://zhuanlan.zhihu.com/p/57983416',
                    describe:'移动端播放歌曲、切换、暂停、搜索等功能，PC 端歌曲上传、删除、修改等功能。使用 jQuery、MVC，以及七牛、LeanCloud等作为数据库实现。使用vConsole进行调试。'
                },
                {
                    name:'《Vue创建多人共享博客》',
                    useSkill:'vue-cli 、vue-router、vuex、axios、ES6、element-ui、filters、computed、组件通信、生命周期，MVVM，webpack',
                    imgLink:'./img/vue-blog-client.jpg',
                    previewLink:'https://ajing741472797.github.io/vue-blog-client/dist/index.html#/',
                    sourceLink:'https://github.com/ajing741472797/vue-blog-client',
                    blogLink:'https://zhuanlan.zhihu.com/p/57913633',
                    describe:'使用vue-cli作为脚手架，使用vue-router进行前端路由的切换及传参，使用axios获取数据并对api封装，使用vuex来做全局状态管理，webpack打包。完成首页、博客详情、注册登录、编辑创建博客等页面'
                },
                {
                    name:'《Vue搭建cnode社区》',
                    useSkill:'MVVM、组件化、vue-cli 、vue-router、vue-resource、filter、computed、生命周期、webpack',
                    imgLink:'./img/cnode.jpg',
                    previewLink:'https://ajing741472797.github.io/vue-cnode-community/dist/#/',
                    sourceLink:'https://github.com/ajing741472797/vue-cnode-community',
                    blogLink:'https://zhuanlan.zhihu.com/p/57399418',
                    describe:'使用vue-cli作为脚手架，使用vue-router进行前端路由的切换及传参，使用watch监听路由的变化，使用axios获取数据，JSON格式化工具对数据整理，webpack打包。'
                },
                {
                    name:'《自定义导航网页》',
                    useSkill:'原生JavaScript、locationStorage、JSON、favicon、onerror、图床、CSS Gradient Generator',
                    imgLink:'./img/bookmark.png',
                    previewLink:'https://ajing741472797.github.io/myBookmarks/index.html',
                    sourceLink:'https://github.com/ajing741472797/myBookmarks',
                    blogLink:'',
                    describe:'该项目使用原生JS实现一个键盘导航，该导航支持百度、谷歌搜索，键盘字母绑定自定义的网站。协议+域名+/favicon 作为 URL，请求成功后能够获取到网站的图标，用CSS Gradient Generator 实现了键盘颜色的渐变，用locationStorage实现了用户输入url保存到本地的功能。'
                },
                {
                    name:'《我是一只皮卡丘》',
                    useSkill:'JavaScript、jQuery、Prism.js、Rem响应式页面',
                    imgLink:'./img/pikachu.png',
                    previewLink:'https://ajing741472797.github.io/drawingPikachu/',
                    sourceLink:'https://github.com/ajing741472797/drawingPikachu',
                    blogLink:'',
                    describe:'动态向<style>标签和<pre>标签添加文本，绘制出皮卡丘的过程。用css3实现动画的效果，用prism.js实现代码高亮的效果，用rem实现响应式布局。'
                },
           
                {
                    name:'《Canvas画板》',
                    useSkill:'原生JavaScript、Canvas、移动端、SVG、特性检测',
                    imgLink:'./img/canvas.png',
                    previewLink:'https://ajing741472797.github.io/drawingboard/canvas.html',
                    sourceLink:'https://github.com/ajing741472797/drawingboard',
                    blogLink:'',
                    describe:'该项目使用原生JS实现，主要调用 Canvas API，实现了线粗、调色、橡皮擦、保存等功能。用 context.clearRect()实现了 橡皮檫和清屏的功能，用 className切换实现了笔的线粗、颜色切换的功能，用meta:vp、特性检测、ontouch事件实现了触屏设备与web端兼容。'
                },
                {
                    name:'《苹果风格无缝轮播》',
                    useSkill:'JavaScript、jQuery',
                    imgLink:'./img/appleslide.jpg',
                    previewLink:'https://ajing741472797.github.io/AppleSlide/',
                    sourceLink:'https://github.com/ajing741472797/AppleSlide',
                    blogLink:'',
                    describe:'该无缝轮播能够自动播放、点击前后按钮切换图片、点击第N个灰色按钮切换到第N张图片。通过百分比布局实现更改图片尺寸不影响无缝轮播效果，通过jQuery动态生成与img数量相等的button，通过jQuery动态增删class来激活button的状态。'
                },
            ],
            skills:[
                {
                    name:'HTML 5',
                    describe:'能够根据HTML5标准书写出符合语义化的html代码。如标签<header>、<main>、<section>、<footer> 等。'
                },   
                {
                    name:'DIV+CSS布局与居中',
                    describe:'能够使用flex、float+清除浮动布局，能够用多种方式进行水平居中、垂直居中。'
                },   
                {
                    name:'Canvas',
                    describe:'能够使用Canvas的部分API进行画图，并用Canvas做了《Canvas画板》。'
                }, 
                {
                    name:'原生JavaScript',
                    describe:'能够使用原生JS进行 DOM 元素的操作，事件的监听等。用原生JS做了《自定义导航网页》。'
                }, 
                {
                    name:'响应式布局、移动端适配',
                    describe:'能够使用meta:viewport、媒体查询、动态rem、vw/vh进行响应式布局，用媒体查询做了该简历。'
                },  
                {
                    name:'jQuery',
                    describe:'能够使用 jQuery 进行 DOM 操作，使用常见的API完成需求。用jQuery做了网易云音乐和轮播。'
                },    
                {
                    name:'Vue.js',
                    describe:'能够使用Vue.js完成需求，vue-cli、vue-router、axios、vuex、组件通信、数据绑定等。'
                }, 
                {
                    name:'MVC、Observer、MVVM设计模式',
                    describe:'了解 MVC、Observer、MVVM 设计模式，能够运用到实际的开发中。'
                }, 
                {
                    name:'webpack',
                    describe:'了解webpack基础操作，能够安装webpack及配置相关loader,如bable-loader、sass-loader、postcss-loader。'
                },    
                // {
                //     name:'Bootstrap',
                //     describe:'能够使用 Bootstrap 做出好看的网页。'
                // },                    
                {
                    name:'Git版本管理工具',
                    describe:'了解git，能够使用git的命令行进行代码版本的管理，并写了相应博客。'
                }, 
                {
                    name:'new、this、闭包、原型链、作用域',
                    describe:'了解 new 的过程，了解 this、闭包、原型链、作用域的基本概念，并能够熟练使用。'
                },    
                {
                    name:'继承',
                    describe:'了解 ES5 中原型链继承和 ES6 中 class 继承的方法。'
                }, 
                {
                    name:'DOM事件模型、事件委托',
                    describe:'了解 DOM 事件模型，捕获、冒泡、处理三个阶段以及如何阻止事件的传递。'
                },   
                {
                    name:'命令行',
                    describe:'了解命令行，能够使用命令行进行常用的操作。'
                },    
                {
                    name:'HTTP',
                    describe:'了解 HTTP 基础知识，了解常见状态码含义，能够根据请求查看响应。'
                }, 
                {
                    name:'AJAX、Promise',
                    describe:'了解AJAX、promise 的概念，并能够自己写出带有promise的AJAX请求。'
                }, 
                {
                    name:'Cookie和Session',
                    describe:'了解客户端缓存、Cookie、session 等知识。'
                },    
                {
                    name:'LocalStorage、Cache-Control、Etag',
                    describe:'了解 LocalStorage、Cache-Control、Etag、Expires 等知识，了解几者之间的区别。'
                }, 
                {
                    name:'Web性能优化',
                    describe:'了解常见的web性能优化方案，并写了相应的博客。'
                },    
                {
                    name:'同源策略、跨域',
                    describe:'了解同源策略，以及常用的跨域方法，比如JSONP、CORS、postMessage。'
                }, 
            ],
            statement:{
                content:'2018年6月毕业于苏州科技大学，在大学期间做了三年的微信公众号运营，热爱互联网。毕业后做了5个月运营工作。后来接触了前端，发现自己热爱技术。至今为止脱产自学前端半年，热爱写代码，享受解决bug的过程，目前掌握HTML，CSS，JavaScript，jQuery，Vue框架等技术，能胜任开发工作。我的简历：'
            },
        },
        line:{
            information:'信息 / INFORMATION',
            projects:'作品 / PROJECTS',
            skills:'技能 / SKILLS',
            stateself:'经历 / EXPERIENCE'
        },
    },
    methods:{
        xxx(){
            window.print()
        }
    }
}).$mount('#app')