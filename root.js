
const app = new Vue({

    data:{
        displayresume:{
            info:{
                name:'钟经义',
                job:'前端工程师',
                school:'苏州科技大学 本科',
                telephone:'18860905139',
                email:'741472797@qq.com',
                wechat:'ajing741472797',
                age:'25',
            },
            projects:[
                {
                    name:'《自定义导航网页》',
                    useSkill:'原生JavaScript、locationStorage、JSON、favicon、onerror、图床、CSS Gradient Generator',
                    imgLink:'./img/1.png',
                    sourceLink:'https://github.com/ajing741472797/myBookmarks',
                    previewLink:'https://ajing741472797.github.io/myBookmarks/index.html',
                    blogLink:' ',
                    describe:'该项目使用原生JS实现一个键盘导航，该导航支持百度、谷歌搜索，键盘字母绑定自定义的网站。协议+域名+/favicon 作为 URL，请求成功后能够获取到网站的图标，用CSS Gradient Generator 实现了键盘颜色的渐变，用locationStorage实现了用户输入url保存到本地的功能。'
                },
                {
                    name:'《我是一只皮卡丘》',
                    useSkill:'JavaScript、jQuery、Prism.js、Rem响应式页面',
                    imgLink:'./img/2.png',
                    sourceLink:'https://github.com/ajing741472797/drawingPikachu',
                    previewLink:'https://ajing741472797.github.io/drawingPikachu/',
                    blogLink:' ',
                    describe:'动态向<style>标签和<pre>标签添加文本，绘制出皮卡丘的过程。用css3实现动画的效果，用prism.js实现代码高亮的效果，用rem实现响应式布局。'
                },
           
                {
                    name:'《Canvas画板》',
                    useSkill:'原生JavaScript、Canvas、移动端、SVG、特性检测',
                    imgLink:'./img/4.png',
                    sourceLink:'https://github.com/ajing741472797/drawingboard',
                    previewLink:'https://ajing741472797.github.io/drawingboard/canvas.html',
                    blogLink:' ',
                    describe:'该项目使用原生JS实现，主要调用 Canvas API，实现了线粗、调色、橡皮擦、保存等功能。用 context.clearRect()实现了 橡皮檫和清屏的功能，用 className切换实现了笔的线粗、颜色切换的功能，用meta:vp、特性检测、ontouch事件实现了触屏设备与web端兼容。'
                },
                {
                    name:'《苹果风格无缝轮播》',
                    useSkill:'JavaScript、jQuery',
                    imgLink:'./img/3.jpg',
                    sourceLink:'https://github.com/ajing741472797/AppleSlide',
                    previewLink:'https://ajing741472797.github.io/AppleSlide/',
                    blogLink:' ',
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
                    describe:'能够使用Canvas的部分API进行画图，并用Canvas做了《Canvas画板》写了相关的博客。'
                }, 
                {
                    name:'原生JavaScript',
                    describe:'能够使用原生JS进行 DOM 元素的操作，事件的监听等。用原生JS做了《自定义导航网页》。'
                }, 
                {
                    name:'响应式布局、移动端适配',
                    describe:'能够使用meta:viewport、媒体查询、动态rem、vw/vh进行响应式布局，用媒体查询做了该简历，用rem做了大白。'
                },  
                {
                    name:'jQuery',
                    describe:'能够使用 jQuery 进行 DOM 操作，使用常见的API完成需求。用jQuery做了轮播和2048游戏。'
                },    
                {
                    name:'Vue.js',
                    describe:'能够使用Vue.js完成需求，vue-cli、vue-router、vue-resource、vuex、slot、filters、组件通信、数据绑定等。'
                }, 
                {
                    name:'MVC、Observer、MVVM设计模式',
                    describe:'了解 MVC、Observer、MVVM 设计模式，能够运用到实际的开发中。'
                }, 
                {
                    name:'webpack',
                    describe:'了解webpack基础操作，能够安装webpack及配置相关loader,如bable-loader、sass-loader、postcss-loader。'
                },    
                {
                    name:'Bootstrap',
                    describe:'能够使用 Bootstrap 做出好看的网页。'
                },                    
                {
                    name:'Git版本管理工具',
                    describe:'了解git，能够使用git的命令行进行代码版本的管理，并写了相应博客。'
                }, 
                {
                    name:'new、this、闭包、原型链、作用域',
                    describe:'了解 new 的过程，了解 this、闭包、原型链、作用域的基本概念，并能够熟练使用，写了相应博客。'
                },    
                {
                    name:'继承',
                    describe:'了解 ES5 中原型链继承和 ES6 中 class 继承的方法。'
                }, 
                {
                    name:'DOM事件模型、事件委托',
                    describe:'了解 DOM 事件模型，捕获、冒泡、处理三个阶段以及如何阻止事件的传递，并做了一个按钮 demo 。'
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
                    describe:'了解客户端缓存、Cookie、session 等知识，并写了相应博客。'
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
                content:'2018年6月毕业于苏州科技大学，在大学期间做了三年的微信公众号运营。大四期间在科锐国际一家上市猎头公司做了1个月的运营实习生，帮助团队推动即派项目的进行。毕业后五个月先后在一家网约车和一家电商运营公司做运营。工作五个月接触了前端，发现自己热爱技术。至今为止脱产自学前端半年，热爱写代码，享受通过各种代码组合做出想要成果的过程，享受解决bug的过程，享受创造的过程。'
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