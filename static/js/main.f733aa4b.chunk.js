(this.webpackJsonpevent_app=this.webpackJsonpevent_app||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),s=n.n(i),o=n(2),c=n(11),l=n(8),m=n(3),u=n(4),d=n(6),v=n(5),p=n(7),h=(n(17),n(1)),E=n.n(h),f=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={months:"",weeks:"",days:"",hours:"",minutes:"",seconds:"",timeOver:!1},n.formatEventDate=function(){var e=n.props.dateTime,t=E()(e),a=E()(),r=t.diff(a),i=E.a.duration(r),s=i.months(),o=i.days(),c=i.hours(),l=i.minutes(),m=i.seconds();n.setState((function(){return{months:s,days:o,hours:c,minutes:l,seconds:m}}),n.stopTimer)},n.stopTimer=function(){var e=n.state,t=e.months,a=e.days,r=e.hours,i=e.minutes,s=e.seconds,o=!1;t<=0&&a<=0&&r<=0&&i<=0&&s<=0&&(o=!0,n.setState((function(){return{timeOver:o}}),(function(){return clearInterval(n.interval)})))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.formatEventDate(),this.interval=setInterval(this.formatEventDate,1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.months,n=e.days,a=e.hours,i=e.minutes,s=e.seconds,o=e.timeOver,c=this.props.dateTime;return r.a.createElement("div",{className:"timer"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"timer-item ".concat(o?"pastEvent":"")},r.a.createElement("span",null,E()(c).from(E()())))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"timer-item"},t," ",r.a.createElement("span",null,"months")),r.a.createElement("div",{className:"timer-item"},n," ",r.a.createElement("span",null,"days")),r.a.createElement("div",{className:"timer-item"},a," ",r.a.createElement("span",null,"hours")),r.a.createElement("div",{className:"timer-item"},i," ",r.a.createElement("span",null,"minutes")),r.a.createElement("div",{className:"timer-item"},s," ",r.a.createElement("span",null,"seconds"))))}}]),t}(a.Component),g=function(e){var t=e.id,n=e.title,a=e.description,i=e.dateTime,s=e.removeEvent;return r.a.createElement("div",{className:"event",id:t},r.a.createElement("h2",{className:"title"},"Event name: ",n),r.a.createElement("p",null,"Description: ",a),r.a.createElement(f,{dateTime:i}),r.a.createElement("button",{className:"deleteBtn",onClick:s},"Delete"))},b=function(e){var t=e.handleChange,n=e.handleSubmit,a=e.errors,i=e.isValid,s=a.titleError,o=a.dateTimeError,c=a.descriptionError;return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"form",onSubmit:n},r.a.createElement("div",{className:"dataInput"},r.a.createElement("input",{type:"text",placeholder:"Name your event...",name:"title",onChange:t}),""!==s&&!1===i&&r.a.createElement("div",{className:"error"},s)),r.a.createElement("div",{className:"dataInput"},r.a.createElement("input",{type:"datetime-local",placeholder:"Add date of it...",min:"2020-01-01T00:00",max:"2040-01-01T00:00",name:"dateTime",onChange:t}),""!==o&&!1===i&&r.a.createElement("div",{className:"error"},o)),r.a.createElement("div",{className:"dataInput"},r.a.createElement("input",{type:"text",placeholder:"Add some description...",name:"description",onChange:t}),""!==c&&!1===i&&r.a.createElement("div",{className:"error"},c)),r.a.createElement("div",{className:"submitInput"},r.a.createElement("input",{type:"submit",value:"Add event"}))))},y=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={eventInfo:{id:0,title:"",dateTime:"",description:""},errors:{titleError:"",dateTimeError:"",descriptionError:""},isValid:!1,events:[]},n.saveToLocalStorage=function(){var e=n.state.events;localStorage.setItem("events",JSON.stringify(e))},n.addEvent=function(){var e=n.state,t=e.isValid,a=e.eventInfo,r=e.events,i=r.length>0?r[r.length-1].id+1:0,s=Object(l.a)({},a,{id:i});t&&n.setState((function(){return{eventInfo:s,events:[].concat(Object(c.a)(r),[s])}}),(function(){n.saveToLocalStorage()}))},n.validateInputs=function(){var e=n.state.eventInfo,t=e.title,a=e.dateTime,r=e.description,i={titleError:"",dateTimeError:"",descriptionError:""},s=!1;t||(i.titleError="Title is required"),a||(i.dateTimeError="Date and time are required"),r||(i.descriptionError="Description is required"),t&&a&&r&&(s=!0),n.setState((function(){return{errors:i,isValid:s}}),(function(){n.addEvent()}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value,i=n.state.eventInfo;n.setState((function(){return{eventInfo:Object(l.a)({},i,Object(o.a)({},a,r))}}))},n.handleSubmit=function(e){e.preventDefault(),n.validateInputs()},n.removeEvent=function(e){var t=e.target.parentElement.id,a=n.state.events.filter((function(e){return e.id!==parseInt(t)}));n.setState((function(){return{events:a}}),(function(){n.saveToLocalStorage()}))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("events"))||[];this.setState((function(){return{events:e}}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.errors,a=t.isValid,i=t.events;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,errors:n,isValid:a}),i.length>0&&r.a.createElement("div",{className:"events"},i.map((function(t){return r.a.createElement(g,Object.assign({},t,{key:t.id,removeEvent:e.removeEvent}))}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.f733aa4b.chunk.js.map