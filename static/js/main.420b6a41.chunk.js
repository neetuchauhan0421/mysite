(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{62:function(e,t,a){e.exports=a(89)},67:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),l=a.n(o),c=(a(67),a(24)),i=a(20),s=a(6),u=a(42),m=a(43),d=a(55),p=a(54),f=a(112),g=a(47),h=a.n(g),b=a(114),E=a(115),v=a(116),y=a(117),j=Object(f.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2),height:"50%"},title:{flexGrow:1}}}));var O=Object(i.b)((function(e){return{user:e.user}}))(Object(s.f)((function(e){var t=j();return r.a.createElement("div",{className:t.grow},r.a.createElement(b.a,{style:{position:"fixed",backgroundColor:"#000000"}},r.a.createElement(E.a,null,r.a.createElement(v.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"home"},r.a.createElement(h.a,null)),r.a.createElement(y.a,{className:t.title,variant:"h6",noWrap:!0},"Food Life"))))}))),w=a(124),k=a(118),x=a(119),C=a(122),F=a(121),D=a(120),N=a(123),B=a(48),R=a.n(B),S=Object(f.a)({root:{},CardContent:{display:"flex",flexDirection:"column",alignItems:"center"},media:{height:400}});var _=Object(i.b)((function(e){return{user:e.user}}))(Object(s.f)((function(e){var t=S();return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:t.root},r.a.createElement(x.a,null,r.a.createElement(D.a,{style:{width:"16rem",margin:"auto"},className:t.media,image:e.product.restaurantImage}),r.a.createElement(F.a,{className:t.CardContent},r.a.createElement(y.a,{gutterBottom:!0,variant:"body2"},e.product.restaurantName),r.a.createElement(y.a,{gutterBottom:!0,variant:"body2",title:e.product.longDescription},e.product.shortDescription),r.a.createElement(y.a,{variant:"body1"},e.product.displayCostForTwo),r.a.createElement(R.a,{rating:parseFloat(e.product.averageReview),starRatedColor:"blue",numberOfStars:6,starDimension:"12px",starSpacing:"5px",name:"rating"}))),r.a.createElement(C.a,null,r.a.createElement(N.a,{variant:"contained",style:{color:"#FFFFFF",backgroundColor:"black",borderRadius:"5px",width:"100%"},onClick:function(){console.log("l")}},"ADD"))))}))),T=a(49),I=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={loading:!0},n.componentDidMount=function(){n.updatestate()},n.updatestate=function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({latitude:13.012345,longitude:80.123456})};fetch("https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",e).then((function(e){return e.json()})).then((function(e){n.props.getlist(e.listRestaurants),n.setState({loading:!1})}))},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(w.a,{container:!0,spacing:2,style:{marginTop:80,display:"flex",justifyContent:"space-between"}},r.a.createElement(r.a.Fragment,null,this.state.loading?r.a.createElement(T.Block,{color:"black"}):r.a.createElement(r.a.Fragment,null,"(",this.props.user.hotel_list.map((function(e,t){return r.a.createElement(w.a,{key:t,item:!0,xs:6,sm:3,md:3},r.a.createElement(_,{product:e}))})),")"))))}}]),a}(n.Component),J=Object(i.b)((function(e){return{user:e.user}}),{getlist:function(e){return function(t){t({type:"hotel_list",payload:e})}}})(Object(s.f)(I)),W=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",name:"Dashboard",component:J}))},G=a(21),M=a(53),A=a(35),L={hotel_list:[]},P=Object(G.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"hotel_list":return Object(A.a)(Object(A.a)({},e),{},{hotel_list:t.payload});default:return e}}}),$=[M.a],q=Object(G.e)((function(e,t){return P(e,t)}),{},Object(G.d)(G.a.apply(void 0,$)));var z=function(){return r.a.createElement(i.a,{store:q},r.a.createElement(c.a,{basename:"mysite"},r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.420b6a41.chunk.js.map