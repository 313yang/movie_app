(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{68:function(n,e,t){"use strict";t.r(e);var i,r,o=t(0),a=t(34),s=t.n(a),c=t(10),d=t(2),l=t(4),p=t(5),b=p.b.nav(i||(i=Object(l.a)(['\n  font-family: "Bebas Neue", cursive;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  padding: 20px 50px;\n  width: 100%;\n  background-color: #101010ed;\n  color: white;\n  a {\n    display: flex;\n    align-items: center;\n    font-size: 22px;\n  }\n']))),x=p.b.h1(r||(r=Object(l.a)(["\n  color: red;\n  font-weight: 800;\n  font-size: 40px;\n  margin: 0;\n  letter-spacing: 3px;\n"]))),j=t(1);var h,m=function(){return Object(j.jsxs)(b,{children:[Object(j.jsx)(c.b,{to:"/",children:Object(j.jsx)(x,{children:"NETFLEX"})}),Object(j.jsx)("div",{children:Object(j.jsx)(c.b,{to:"/login",children:"Sign In"})})]})},u=p.b.div(h||(h=Object(l.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/6d68acdf-6efa-4f03-9513-ef482daff117/KR-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg);\n  form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 50px 40px;\n    width: 350px;\n    border-radius: 3px;\n    background-color: rgba(0, 0, 0, 0.9);\n    h1 {\n      font-family: "Bebas Neue", cursive;\n      color: white;\n      margin: 0 0 30px 0;\n      border-bottom: 1px solid red;\n      padding-bottom: 10px;\n    }\n    input {\n      font-family: "Martel Sans", sans-serif;\n      width: 100%;\n      padding: 8px 14px;\n      border: none;\n      border-radius: 5px;\n      color: white;\n      background-color: #333;\n      &::placeholder {\n        color: rgba(255, 255, 255, 0.9);\n      }\n      &[type="submit"] {\n        margin-top: 20px;\n        background-color: red;\n      }\n      &:not(:last-child) {\n        margin-bottom: 20px;\n      }\n      &:focus,\n      &:active {\n        outline: none;\n      }\n    }\n  }\n'])));var f,g=function(){return Object(j.jsx)(u,{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"Sign In"}),Object(j.jsx)("input",{type:"email",placeholder:"Email",required:!0}),Object(j.jsx)("input",{type:"password",placeholder:"Password",required:!0}),Object(j.jsx)("input",{type:"submit",value:"Sign In"})]})})},v=t(23),O=t.n(v),y=t(38),w=t(15),k=t(16),_=t(18),z=t(17),M=t(39),N=t.n(M),S=p.b.div(f||(f=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  div {\n    width: 230px;\n    height: 345px;\n    overflow: hidden;\n    img {\n      width: 100%;\n      transition: 0.1s all ease-in;\n    }\n    img:hover {\n      transform: scale(1.1);\n      opacity: 0.3;\n    }\n  }\n"])));var L,B,E,I,q,C,D=function(n){var e=n.bg,t=n.id,i=n.year,r=n.poster,o=n.title,a=n.genres,s=n.summary;return Object(j.jsx)(c.b,{to:{pathname:"/movie/".concat(t),state:{year:i,title:o,summary:s,poster:r,genres:a,bg:e}},children:Object(j.jsxs)(S,{children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:r,alt:o,title:o})}),Object(j.jsx)("h3",{className:"movie__title",children:o}),Object(j.jsx)("h5",{className:"movie__year",children:i})]})})},F=p.b.section(L||(L=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: 1980px;\n  padding: 100px 50px;\n  margin: 0 auto;\n"]))),J=p.b.div(B||(B=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  width: 100%;\n  justify-content: space-between;\n  margin: 20px;\n  a {\n    h3 {\n      font-size: 18px;\n      color: white;\n      width: 230px;\n    }\n  }\n  h5 {\n    margin-top: 0;\n  }\n"]))),A=p.b.div(E||(E=Object(l.a)(["\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  margin: 20% auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 7px solid rgba(255, 255, 255, 0.2);\n  border-right: 7px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 7px solid rgba(255, 255, 255, 0.2);\n  border-left: 7px solid #ffffff;\n  transform: translateZ(0);\n  animation: load8 1.1s infinite linear;\n\n  @keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),K=function(n){Object(_.a)(t,n);var e=Object(z.a)(t);function t(){var n;Object(w.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={isLoading:!0,movies:[]},n.getMovies=Object(y.a)(O.a.mark((function e(){var t,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=like_count");case 2:t=e.sent,i=t.data.data.movies,n.setState({movies:i,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),n}return Object(k.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var n=this.state,e=n.isLoading,t=n.movies;return Object(j.jsx)(F,{children:e?Object(j.jsx)(A,{children:Object(j.jsx)("div",{children:"Loading..."})}):Object(j.jsx)(J,{children:t.map((function(n){return Object(j.jsx)(D,{id:n.id,year:n.year,title:n.title,summary:n.summary,poster:n.medium_cover_image,genres:n.genres,bg:n.background_image_original},n.id)}))})})}}]),t}(o.Component),P=Object(p.a)(I||(I=Object(l.a)(["\n\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\nbody{\n  margin:0;\n  padding:0;\n  background-color: #101010;\n  font-family: 'Martel Sans', sans-serif;\n}\na{\n  text-decoration: none;\n  color:#f2f2f2;\n  &:hover{\n    color:white;\n  }\n}\n"]))),R=p.b.section(q||(q=Object(l.a)(["\n  div:first-child {\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      position: absolute;\n      top: 0;\n      z-index: -99;\n    }\n  }\n  div:last-child {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    color: white;\n    margin-top: 10%;\n    img {\n      width: 300px;\n      height: 450px;\n      border-radius: 5px;\n      object-fit: cover;\n      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n        0 10px 10px rgba(0, 0, 0, 0.22);\n    }\n  }\n"]))),T=Object(p.b)(R)(C||(C=Object(l.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 60%;\n  margin-left: 50px;\n  margin-top: 0px;\n  padding: 50px;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  h1 {\n    font-family: "Bebas Neue", cursive;\n    font-size: 50px;\n    font-style: oblique;\n    letter-spacing: 2px;\n    text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);\n    margin: 0px;\n    padding-bottom: 30px;\n    border-bottom: 1px solid #ff2727;\n  }\n  h3 {\n    margin: 20px 0 0 0;\n    font-size: 22px;\n  }\n  ul {\n    list-style: none;\n    padding: 0px;\n    li {\n      margin: 15px 0 0 0;\n    }\n  }\n']))),X=function(n){Object(_.a)(t,n);var e=Object(z.a)(t);function t(){return Object(w.a)(this,t),e.apply(this,arguments)}return Object(k.a)(t,[{key:"componentDidMount",value:function(){var n=this.props,e=n.location,t=n.history;void 0===e.state&&t.push("/")}},{key:"render",value:function(){var n=this.props.location.state;return n?Object(j.jsxs)(R,{children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:n.bg,alt:n.title})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:n.poster,alt:n.title,title:n.title}),Object(j.jsxs)(T,{children:[Object(j.jsx)("h1",{children:n.title}),Object(j.jsx)("h3",{children:n.year}),Object(j.jsx)("ul",{children:n.genres.map((function(n,e){return Object(j.jsxs)("li",{children:["\ud83c\udf7f ",n]},e)}))}),Object(j.jsx)("p",{children:n.summary})]})]})]}):null}}]),t}(o.Component);var Z=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(P,{}),Object(j.jsxs)(c.a,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(d.a,{path:"/",exact:!0,component:K}),Object(j.jsx)(d.a,{path:"/login",component:g}),Object(j.jsx)(d.a,{path:"/movie/:id",component:X})]})]})};s.a.render(Object(j.jsx)(Z,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.3c1ba78c.chunk.js.map