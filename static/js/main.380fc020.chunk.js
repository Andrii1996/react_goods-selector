(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(3),l=n.n(a),r=n(6),s=n(4),i=n(5),u=n(8),d=n(7),m=(n(14),n(15),function(e){var t=e.selectedGood,n=e.onClick;return c.a.createElement("div",null,c.a.createElement("h1",{className:"header"},"Selected good:  ",c.a.createElement("span",null,t.join(" "))),c.a.createElement("button",{className:"clearButton",type:"button",onClick:n},"X"))}),f=n(1),p=n.n(f),b=(p.a.shape({name:p.a.string.isRequired,id:p.a.number.isRequired}),n(18),function(e){var t=e.selectedGoods,n=e.onClick,o=e.item;return c.a.createElement("button",{className:t.includes(o.name)?"button button--isActive":"button",onClick:function(e){return n(o.name)},type:"button"},o.name)}),G=(n(19),function(e){var t=e.goodsItems,n=e.selectedGood,o=e.onClick;return c.a.createElement("ul",{className:"list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"list__item"},c.a.createElement(b,{selectedGoods:n,onClick:o,item:e}))})))}),k=(n(20),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{id:t+1,name:e}}))),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={selectedGood:[]},e.clickHandler=function(t){e.setState((function(e){return e.selectedGood.includes(t)?{selectedGood:e.selectedGood.filter((function(e){return e!==t}))}:{selectedGood:[].concat(Object(r.a)(e.selectedGood),[t])}}))},e.removeAll=function(){e.setState({selectedGood:[]})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.selectedGood;return c.a.createElement("div",{className:"App"},c.a.createElement(m,{selectedGood:e,onClick:this.removeAll}),c.a.createElement(G,{goodsItems:k,selectedGood:e,onClick:this.clickHandler}))}}]),n}(o.Component);l.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.380fc020.chunk.js.map