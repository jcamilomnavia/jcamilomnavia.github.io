(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/profile.800d9a44.jpg"},function(e,a,t){e.exports=t.p+"static/media/aws.220380e8.svg"},function(e,a,t){e.exports=t.p+"static/media/git.9e6d36c9.svg"},function(e,a,t){e.exports=t.p+"static/media/graphql.5bf8a3ca.svg"},function(e,a,t){e.exports=t.p+"static/media/css.f2d9aa21.svg"},function(e,a,t){e.exports=t.p+"static/media/html.02fd3b60.svg"},function(e,a,t){e.exports=t.p+"static/media/linux.4ca74eec.svg"},function(e,a,t){e.exports=t.p+"static/media/docker.7781548f.svg"},function(e,a,t){e.exports=t.p+"static/media/nodejs.86c73215.svg"},function(e,a,t){e.exports=t.p+"static/media/react.c3798aca.svg"},function(e,a,t){e.exports=t.p+"static/media/mongo.d1743525.svg"},function(e,a,t){e.exports=t.p+"static/media/betlab.7691f4a9.png"},function(e,a,t){e.exports=t.p+"static/media/goggles.402fde99.png"},function(e,a,t){e.exports=t.p+"static/media/lar.45951f42.png"},,,function(e,a,t){e.exports=t(50)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),i=(t(34),t(2)),s=t(3),o=t(5),m=t(4),d=t(6),u=(t(35),t(36),t(37),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"containerHome"},l.a.createElement("div",{className:"gridHome row"},l.a.createElement("div",{id:"startbracket",className:"col-sm startBracket"},l.a.createElement("h1",null,"<")),l.a.createElement("div",{className:"col- mainHome"},l.a.createElement("h1",{className:"row"},"HELLO,"),l.a.createElement("h1",{className:"row"},"I'M"),l.a.createElement("h1",{className:"row"},"JUAN CAMILO"),l.a.createElement("div",{className:"row"},l.a.createElement("p",null,"Full Stack Developer"))),l.a.createElement("div",{id:"endbracket",className:"col-sm endBracket"},l.a.createElement("h1",null,"/>"))))}}]),a}(n.Component)),p=(t(38),t(13)),E=t.n(p),v=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"about",className:"aboutContent"},l.a.createElement("div",{className:"firstRow"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"About"))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"description"},l.a.createElement("p",{className:"descriptionText"},"I\u2019m a 20-year-old guy born in Colombia, always interested in learning and improving myself in every way. I\u2019m a passionate person in what I do and always do my best. I\u2019ve been always into computers and stuff, also reading books and articles. I really believe in self-taught learning, that's why even since I started the university, I like to taking the knowledge to the next level and now I\u2019m proud to say that I've become a developer, more specific a full-stack Developer. I started some projects about a year ago as a Freelancer and now I\u2019m looking forward to acquire more experience in the world of development with new technologies")),l.a.createElement("div",{className:"profilePic"},l.a.createElement("img",{src:E.a,alt:"profile"}))))}}]),a}(n.Component),h=t(7),f=(t(39),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={hidden:0},t.handleScroll=t.handleScroll.bind(Object(h.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var a=window.innerHeight,t=window.pageYOffset;t>=a?this.setState({hidden:1}):0===t?this.setState({hidden:0}):t<a&&this.setState({hidden:t/a})}},{key:"toggleNavBar",value:function(){var e=document.getElementById("nav-icon3"),a=document.getElementById("mobileNavContent");e.className.includes("open")?(e.classList.remove("open"),a.classList.remove("show")):(e.classList.add("open"),a.classList.add("show"))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{style:{opacity:this.state.hidden},className:"navbar navbar-dark bg-primary desktopNav"},l.a.createElement("i",{className:"fa fa-code fa-2x logoNav"}),l.a.createElement("div",{className:"navOptions"},l.a.createElement("span",null,l.a.createElement("a",{href:"#home"},"Home")),l.a.createElement("span",null,l.a.createElement("a",{href:"#about"},"About")),l.a.createElement("span",null,l.a.createElement("a",{href:"#skills"},"Skills")),l.a.createElement("span",null,l.a.createElement("a",{href:"#education"},"Education")),l.a.createElement("span",null,l.a.createElement("a",{href:"#portfolio"},"Portfolio")),l.a.createElement("span",null,l.a.createElement("a",{href:"#contact"},"Contact"))),l.a.createElement("ul",{className:"persoNavIcon"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"https://github.com/jcamilomnavia/"},l.a.createElement("i",{className:"fa fa-github fa-2x iconNavBar"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"https://www.instagram.com/camilonavia99/"},l.a.createElement("i",{className:"fa fa-instagram fa-2x iconNavBar"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/juan-camilo-mar\xedn-navia/"},l.a.createElement("i",{className:"fa fa-linkedin fa-2x iconNavBar"}))))),l.a.createElement("div",null,l.a.createElement("nav",{style:{opacity:this.state.hidden},className:"navbar navbar-dark bg-primary mobileNav"},l.a.createElement("i",{className:"fa fa-code fa-2x logoNav"}),l.a.createElement("div",{id:"nav-icon3",onClick:this.toggleNavBar},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{id:"mobileNavContent"},l.a.createElement("div",{className:"mobileContent"},l.a.createElement("span",null,l.a.createElement("a",{href:"index.html#home"},"Home")),l.a.createElement("span",null,l.a.createElement("a",{href:"index.html#about"},"About")),l.a.createElement("span",null,l.a.createElement("a",{href:"index.html#skills"},"Skills")),l.a.createElement("span",null,l.a.createElement("a",{href:"index.html#education"},"Education")),l.a.createElement("span",null,l.a.createElement("a",{href:"index.html#contact"},"Contact"))))))}}]),a}(n.Component)),g=(t(40),t(14)),b=t.n(g),N=t(15),j=t.n(N),k=t(16),y=t.n(k),w=t(17),O=t.n(w),C=t(18),x=t.n(C),S=t(19),I=t.n(S),L=t(20),P=t.n(L),A=t(21),B=t.n(A),D=t(22),T=t.n(D),H=t(23),J=t.n(H),M=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"skills",className:"skillsContent"},l.a.createElement("div",{className:"firstRow"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",{className:""},"Skills"))),l.a.createElement("section",null,l.a.createElement("h2",{className:"subtitle"},"Programming Languages"),l.a.createElement("div",{className:"dotContainer"},l.a.createElement("div",{className:"dot"},l.a.createElement("div",{className:"dotText"},l.a.createElement("span",{className:"dotTitle"},"JavaScript"),l.a.createElement("br",null),l.a.createElement("span",{className:"dotDescription"},"(2 Years)"))),l.a.createElement("div",{className:"dot"},l.a.createElement("div",{className:"dotText"},l.a.createElement("span",{className:"dotTitle"},"Java"),l.a.createElement("br",null),l.a.createElement("span",{className:"dotDescription"},"(3 Years)"))),l.a.createElement("div",{className:"dot"},l.a.createElement("div",{className:"dotText"},l.a.createElement("span",{className:"dotTitle"},"Python",l.a.createElement("br",null),"PHP",l.a.createElement("br",null),"C++"),l.a.createElement("br",null),l.a.createElement("span",{className:"dotDescription"},"(6 months)"))))),l.a.createElement("section",null,l.a.createElement("h2",{className:"subtitle"},"Techonologies"),l.a.createElement("div",{className:"skillsImageContainer"},l.a.createElement("div",{className:"skillsImage"},l.a.createElement("img",{src:T.a,alt:"node",title:"ReactJS"}),l.a.createElement("img",{src:B.a,alt:"node",title:"Node.JS"}),l.a.createElement("img",{src:J.a,alt:"mongo",title:"MongoDB"}),l.a.createElement("img",{src:y.a,alt:"Grapql",title:"GraphQl"}),l.a.createElement("img",{src:P.a,alt:"Docker",title:"Docker"}))),l.a.createElement("div",{className:"skillsImageContainer"},l.a.createElement("div",{className:"skillsImage"},l.a.createElement("img",{src:j.a,alt:"Git",title:"Git"}),l.a.createElement("img",{src:b.a,alt:"AWS",title:"AWS"}),l.a.createElement("img",{src:I.a,alt:"Linux",title:"Linux"}),l.a.createElement("img",{src:x.a,alt:"HTML",title:"HTML"}),l.a.createElement("img",{src:O.a,alt:"CSS",title:"CSS"})))))}}]),a}(n.Component),R=(t(41),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"education",className:"educationContent"},l.a.createElement("div",{className:"firstRow"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"Education"))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"degrees"},l.a.createElement("div",{className:"contentDegree"},l.a.createElement("h4",null,"EAFIT University"),l.a.createElement("p",{className:"float-right"},"Graduation date: July 2021"),l.a.createElement("h5",null,"Medellin, Colombia"),l.a.createElement("span",null,"Bachelor's in Computer Engineering"),l.a.createElement("br",null)),l.a.createElement("div",{className:"contentDegree"},l.a.createElement("h4",null," University La Salle Ramon Llull"),l.a.createElement("p",{className:"float-right"},"September 2019 - January 2020"),l.a.createElement("h5",null,"Barcelona, Spain"),l.a.createElement("span",null,"Bachelor's in Computer Engineering"),l.a.createElement("br",null),l.a.createElement("span",null,"Exchange Program"),l.a.createElement("br",null),l.a.createElement("span",null,"Courses: Data mining, Computer Architecture, Operative Systems, Project Management, Project Web ")))))}}]),a}(n.Component)),G=(t(42),t(43),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this))).state={img:e.img,name:e.name,link:e.link,description:e.description},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"contentProject"},l.a.createElement("p",{className:"nameProject"},this.state.name),l.a.createElement("a",{href:this.state.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"projectImg",src:this.state.img,alt:"project"})),l.a.createElement("div",{className:"superDescription"},l.a.createElement("p",{className:"descriptionProject"},this.state.description)))}}]),a}(n.Component)),W=t(24),U=t.n(W),F=t(25),q=t.n(F),Y=t(26),Q=t.n(Y),$=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"portfolio",className:"portfolioContent"},l.a.createElement("div",{className:"firstRow"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"Portfolio"))),l.a.createElement("div",{className:"projectItemsContainer"},l.a.createElement("div",{className:"projectItems"},l.a.createElement(G,{img:Q.a,link:"https://larproyectos-app-test.netlify.com/",name:"Lar Proyectos APP",description:"A data finance data management developed for a startUp. Made in react and GraphQL.For test use user permi@permi.com and password permi"}),l.a.createElement(G,{img:q.a,link:"https://googles-jcmn.netlify.com/",name:"Goggles",description:"An e-commerce made of pure HTML, CSS and JS app. All the views are fully responsive. The api doesnt work for everyone due to privacy of the owner"}),l.a.createElement(G,{img:U.a,link:"https://betlab.netlify.com/",name:"betlab",description:"A streaming application made in React that uses the twitch api for fetch the top 50 streamings"})),l.a.createElement("div",{className:"projectItems"})))}}]),a}(n.Component),_=t(27),z=t(28),K=t(9),V=(t(49),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"contact",className:"contactContent"},l.a.createElement("div",{className:"innerContent"},l.a.createElement("div",{className:"firstRowContact"},l.a.createElement("div",{className:"titleContact"},l.a.createElement("h1",null,"Contact"),l.a.createElement("i",{id:"contactIcon",className:"fa fa-code fa-2x logoNavContact float-right"})),l.a.createElement("div",{className:"contactDescription"},l.a.createElement(K.a,{icon:_.a})," ",l.a.createElement("span",null,"jcmavia@hotmail.com")),l.a.createElement("br",null),l.a.createElement("div",{className:"contactDescription"},l.a.createElement(K.a,{icon:z.a})," ",l.a.createElement("span",null,"+57 3003 345 3662")))))}}]),a}(n.Component)),X=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement(u,null),l.a.createElement(v,null),l.a.createElement(M,null),l.a.createElement(R,null),l.a.createElement($,null),l.a.createElement(V,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[29,1,2]]]);
//# sourceMappingURL=main.fe40b8e5.chunk.js.map