(window["webpackJsonpgrade-calculator"]=window["webpackJsonpgrade-calculator"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(13),a(1)),s=a(2),o=a(4),u=a(3),h=a(5),d=(a(14),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.onChange(a.props.id,e.target.className,e.target.value)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"gradeEntry"},r.a.createElement("span",{className:"entryBox"},r.a.createElement("input",{className:"grade",type:"number",value:this.props.grade,onChange:this.handleChange})," %"),r.a.createElement("span",{className:"entryBox"},r.a.createElement("input",{className:"weight",type:"number",value:this.props.weight,onChange:this.handleChange})," %"))}}]),t}(r.a.Component)),g=(a(15),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).onChange=function(t,a,n){var r=e.state.entries.slice();"grade"===a?r[t].grade=n:r[t].weight=n,e.setState({entries:r})},e.onClick=function(){var t=0,a=0,n=!0,r=!1,l=void 0;try{for(var c,i=e.state.entries[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value;t+=s.grade*(s.weight/100),a+=parseInt(s.weight)}}catch(o){r=!0,l=o}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}console.log(t),console.log(a/100||0)},e.clear=function(){var t=e.state.entries.slice(),a=!0,n=!1,r=void 0;try{for(var l,c=t[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var i=l.value;i.grade="",i.weight=""}}catch(s){n=!0,r=s}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}e.setState({entries:t})},e.state={numEntry:2,entries:[{id:0,grade:"",weight:""},{id:1,grade:"",weight:""}]},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"gradeCalculator"},r.a.createElement("h1",null,"Grade Calculator"),r.a.createElement("span",null,"Instructions: enter your grades and their weight as percentages but do not include the percent sign (%). "),r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"columnHeaders"},r.a.createElement("h3",{className:"header"},"Grade"),r.a.createElement("h3",{className:"header"},"Weight")),this.state.entries.map(function(t){return r.a.createElement(d,{key:t.id,id:t.id,grade:t.grade,weight:t.weight,onChange:e.onChange})}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:this.onClick},"Am I Failing?"),r.a.createElement("button",{onClick:this.clear},"Clear"))))}}]),t}(r.a.Component));a(16);var m=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(g,null))};c.a.render(r.a.createElement(m,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.00ed6701.chunk.js.map