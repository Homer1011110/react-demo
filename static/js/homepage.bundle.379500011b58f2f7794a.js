(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{23:function(e,t,r){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,l=s&&s(Object);e.exports=function e(t,r,u){if("string"!=typeof r){if(l){var f=s(r);f&&f!==l&&e(t,f,u)}var m=c(r);i&&(m=m.concat(i(r)));for(var y=0;y<m.length;++y){var b=m[y];if(!(n[b]||o[b]||u&&u[b])){var d=p(r,b);try{a(t,b,d)}catch(e){}}}return t}return t}},25:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),c=r.n(a),i=r(23),p=r.n(i),s=r(7),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.a=function(e){var t=function(t){var r=t.wrappedComponentRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["wrappedComponentRef"]);return o.a.createElement(s.a,{children:function(t){return o.a.createElement(e,l({},n,t,{ref:r}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:c.a.func},p()(t,e)}},26:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(25),c=r(5),i="/home/homerwang/projects/code-split/src/containers/HomePage.jsx";t.default=Object(a.a)(function(e){var t=e.history;e.match,e.location;return o.a.createElement(c.a.Consumer,{__source:{fileName:i,lineNumber:13},__self:this},function(e){var r=e.theme,n=r.backgroundColor,a=r.textColor;return o.a.createElement("div",{style:{backgroundColor:n,color:a},__source:{fileName:i,lineNumber:15},__self:this},o.a.createElement("span",{__source:{fileName:i,lineNumber:18},__self:this},"Home Page"),o.a.createElement("button",{onClick:function(){return t.push("/act")},__source:{fileName:i,lineNumber:19},__self:this},"go to act page"))})})}}]);