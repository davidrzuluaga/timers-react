(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(35),r=n.n(i),l=(n(66),n(9)),o=n(10),s=n(12),u=n(11),m=n(13),d=n(127),h=n(128),p=n(125),k=(n(68),[{id:1,name:"Birthday Celebration",description:"Life",timer:17081993,running:!0,state:""},{id:2,name:"Train Rugby",description:"Sports",timer:0,running:!1,state:""}]),f=n(60),g=n(36),E=Object(g.b)(function(e,t){return"setClock"===t.type?Object(f.a)({},e,{clocks:t.clocks}):e},{},Object(g.a)()),j=n(129),v=n(124),y=n(130),b=n(58),C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).editingTimer=function(e){var t=n.state.clocks.findIndex(function(t){return t.id===Math.floor(e.target.id)}),a=n.state.clocks.map(function(e,n){return t===n?{id:e.id,name:e.name,description:e.description,timer:e.timer,running:e.running,state:"editing"}:e}),c=n.state.clocks[t].name,i=n.state.clocks[t].description;n.setState({title:c,project:i}),n.setClock(a)},n.deleteTimer=function(e){var t=n.state.clocks.findIndex(function(t){return t.id===Math.floor(e.target.id)}),a=n.state.clocks.filter(function(e,n){return t!==n});n.setClock(a)},n.modifyTimer=function(e){var t=n.state.clocks.findIndex(function(t){return t.id===Math.floor(e.target.id)}),a=""===n.state.title?"Timer ".concat(e.target.id):n.state.title,c=""===n.state.project?"Timer ".concat(e.target.id):n.state.project,i=n.state.clocks.map(function(e,n){return t===n?{id:e.id,name:a,description:c,timer:e.timer,running:e.running,state:""}:e});n.setClock(i),n.setState({title:"",project:""})},n.titleChange=function(e){n.setState({title:e.target.value})},n.projectChange=function(e){n.setState({project:e.target.value})},n.state={title:"",project:""},E.subscribe(function(){n.setState({clocks:E.getState().clocks})}),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setClock",value:function(e){E.dispatch({type:"setClock",clocks:e})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(j.a.Heading,{className:"editing"===this.props.clock.state?"":"hidden"},c.a.createElement(j.a.Title,null,""===this.state.title?"Timer":this.state.title)),c.a.createElement("div",{className:"editing"===this.props.clock.state?"":"hidden"},c.a.createElement(j.a.Body,null,c.a.createElement("form",null,c.a.createElement(v.a,null,"Title"),c.a.createElement(y.a,{type:"text",value:this.state.title,placeholder:"Enter text",onChange:this.titleChange}),c.a.createElement(v.a,null,"Project"),c.a.createElement(y.a,{type:"text",value:this.state.project,placeholder:"Enter text",onChange:this.projectChange}))),c.a.createElement(j.a.Footer,{id:this.props.clock.id,onClick:this.modifyTimer,className:"stopped"}," Modify ")),c.a.createElement("div",{className:"editing"===this.props.clock.state?"hidden":"clockoptions"},c.a.createElement(b.a,{id:this.props.clock.id,className:"clickableGly",onClick:this.deleteTimer,glyph:"glyphicon glyphicon-trash"}),c.a.createElement(b.a,{id:this.props.clock.id,className:"clickableGly",onClick:this.editingTimer,glyph:"glyphicon glyphicon-pencil"})))}}]),t}(a.Component),S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).pauseTimer=function(t){var n=e.state.clocks.findIndex(function(e){return e.id===Math.floor(t.target.id)}),a=e.state.clocks.map(function(e,t){return n===t?{id:e.id,name:e.name,description:e.description,timer:e.timer,running:!e.running,state:e.state}:e});e.setClock(a)},e.state={clocks:k},E.subscribe(function(){e.setState({clocks:E.getState().clocks})}),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"millisecondsToHuman",value:function(e){var t=Math.floor(e/1e3%60),n=Math.floor(e/1e3/60%60),a=Math.floor(e/1e3/60/60);return[this.pad(a.toString(),2),this.pad(n.toString(),2),this.pad(t.toString(),2)].join(":")}},{key:"pad",value:function(e,t){for(var n=e;n.length<t;)n="0".concat(n);return n}},{key:"setClock",value:function(e){E.dispatch({type:"setClock",clocks:e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.state.clocks.map(function(t,n){return c.a.createElement(p.a,{key:t.id,sm:4},c.a.createElement(j.a,null,c.a.createElement(j.a.Heading,{className:"editing"===t.state?"hidden":""},c.a.createElement(j.a.Title,null,t.name)),c.a.createElement("div",{className:"editing"===t.state?"hidden":""},c.a.createElement(j.a.Body,null,c.a.createElement("p",{className:"clockdescription"},t.description)),c.a.createElement("p",{className:"clockrunning"},e.millisecondsToHuman(t.timer))),c.a.createElement(C,{clock:t}),c.a.createElement("div",{className:"editing"===t.state?" hidden ":""},c.a.createElement(j.a.Footer,{id:t.id,className:t.running?" running ":" stopped ",onClick:e.pauseTimer},t.running?"Stop":"Start"))))}))}}]),t}(a.Component),O=n(59),T=n(126),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).newTimer=function(){var t=Math.max.apply(Math,Object(O.a)(e.state.clocks.map(function(e){return e.id})))+1,n=""===e.state.title?"Timer ".concat(t):e.state.title,a=""===e.state.project?"Timer ".concat(t):e.state.project,c=e.state.clocks.concat({id:t,name:n,description:a,timer:0,running:!1,state:""});e.setClock(c),e.setState({title:"",project:""})},e.formShow=function(){e.setState({formShow:"",iconShow:"hidden"})},e.formHide=function(){e.setState({formShow:"hidden",iconShow:""})},e.titleChange=function(t){e.setState({title:t.target.value})},e.projectChange=function(t){e.setState({project:t.target.value})},e.state={formShow:"hidden",iconShow:"",title:"",project:""},E.subscribe(function(){e.setState({clocks:E.getState().clocks})}),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setClock",value:function(e){E.dispatch({type:"setClock",clocks:e}),this.formHide()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:this.state.formShow},c.a.createElement(p.a,{sm:4},c.a.createElement(j.a,null,c.a.createElement(j.a.Heading,null,c.a.createElement(j.a.Title,null,""===this.state.title?"New Timer":this.state.title)),c.a.createElement(j.a.Body,null,c.a.createElement("form",null,c.a.createElement(v.a,null,"Title"),c.a.createElement(y.a,{type:"text",value:this.state.title,placeholder:"Enter text",onChange:this.titleChange}),c.a.createElement(v.a,null,"Project"),c.a.createElement(y.a,{type:"text",value:this.state.project,placeholder:"Enter text",onChange:this.projectChange}))),c.a.createElement(j.a.Footer,{onClick:this.newTimer,className:"stopped"}," Create ")))),c.a.createElement(T.a,{bsSize:"large",className:this.state.iconShow,onClick:this.formShow}," ",c.a.createElement(b.a,{glyph:"glyphicon glyphicon-plus"})))}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).clock=function(){var e=n.state.clocks.map(function(e,t){return e.running?{id:e.id,name:e.name,description:e.description,timer:e.timer+1e3,running:e.running,state:e.state}:e});n.setClock(e),setTimeout(n.clock,1e3)},n.stopClocks=function(){var e=n.state.clocks.map(function(e,t){return e.running?{id:e.id,name:e.name,description:e.description,timer:e.timer,running:!1}:e});n.setClock(e)},n.state={clocks:k},E.subscribe(function(){n.setState({clocks:E.getState().clocks})}),n.clock(),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setClock",value:function(e){E.dispatch({type:"setClock",clocks:e})}},{key:"render",value:function(){return c.a.createElement(T.a,{onClick:this.stopClocks}," ",c.a.createElement(b.a,{glyph:"glyphicon glyphicon-pause"}))}}]),t}(a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(h.a,null,c.a.createElement("div",{className:"title"},c.a.createElement("h3",null,"Timers")),c.a.createElement(N,null),c.a.createElement(p.a,{smOffset:1},c.a.createElement(S,null),c.a.createElement(w,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,n){e.exports=n(123)},66:function(e,t,n){},68:function(e,t,n){}},[[61,2,1]]]);
//# sourceMappingURL=main.36bc7776.chunk.js.map