(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(13),i=n.n(a),s=(n(20),n(3)),o=n.n(s),d=n(4),j=n(11),h=n(10),l=n(6),u=n(7),b=n.n(u),p=n(1),x=r.a.createContext(),f=function(e){var t=e.children,n=Object(c.useState)([]),r=Object(l.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(null),u=Object(l.a)(s,2),f=u[0],O=u[1],m=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<16;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},w=function(){var e=Object(h.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=91d2f9efc77a289707cbc8c106b46727"));case 2:if(404===(n=e.sent).status){e.next=14;break}return e.next=6,n.json();case 6:return c=e.sent,e.next=9,y(c.coord.lon,c.coord.lat);case 9:r=e.sent,console.log(c),a.find((function(e){return e.city.id===c.id}))||i([].concat(Object(j.a)(a),[{city:Object(d.a)(Object(d.a)({},c),{},{date:b()().format("LL"),time:b()().format("LTS")}),forecast:r}])),e.next=15;break;case 14:alert("Error - Invalid Location Entered");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(o.a.mark((function e(t,n){var c,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n,"&lon=").concat(t,"&exclude=current,minutely,hourly,alerts&units=metric&appid=91d2f9efc77a289707cbc8c106b46727"));case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,(a=Object(j.a)(r.daily))[1].id=m(),a[2].id=m(),a[3].id=m(),a[4].id=m(),a[5].id=m(),a[6].id=m(),a[7].id=m(),e.abrupt("return",Object(d.a)(Object(d.a)({},r),{},{daily:a}));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))},v=function(){var e=Object(h.a)(o.a.mark((function e(){var t,n,c,r,s,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,n=t.coords.latitude,c=t.coords.longitude,e.next=7,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(c,"&units=metric&appid=91d2f9efc77a289707cbc8c106b46727"));case 7:if(404===(r=e.sent).status){e.next=16;break}return e.next=11,r.json();case 11:return s=e.sent,e.next=14,y(c,n);case 14:h=e.sent,a.find((function(e){return e.city.id===s.id}))||i([].concat(Object(j.a)(a),[{city:Object(d.a)(Object(d.a)({},s),{},{date:b()().format("LL"),time:b()().format("LTS")}),forecast:h}]));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(x.Provider,{value:{weatherData:a,currentForecast:f,getCityData:w,getLongLatData:v,getLocation:g,setCurrentForecast:O,updateCurrentForecast:function(e){O(a[e].forecast)}},children:t})},O=function(){return Object(c.useContext)(x)},m=n(14),w=n(9),y=function(e){var t=e.weatherData,n=e.index,c=O().updateCurrentForecast,r=t.weather[0].description.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}));return Object(p.jsxs)("div",{id:t.id,className:"weather-card",tabindex:"0",onClick:function(){return c(n)},onKeyUp:function(){return c(n)},children:[Object(p.jsxs)("div",{className:"weather-info",children:[Object(p.jsxs)("h3",{id:"weather-header",children:[t.name," ",Object(p.jsx)("span",{id:"weather-country",children:t.sys.country})]}),Object(p.jsx)("p",{id:"weather-date",children:t.date}),Object(p.jsx)("p",{id:"weather-time",children:t.time})]}),Object(p.jsxs)("div",{className:"weather-info",id:"weather-temp-info",children:[Object(p.jsx)("img",{id:"weather-img",src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,".png"),alt:"weather icon",role:"presentation"}),Object(p.jsx)("p",{id:"weather-description",children:r}),Object(p.jsxs)("p",{id:"weather-temp",children:[Math.round(t.main.temp),"\xb0C"]})]}),Object(p.jsxs)("div",{className:"weather-info",children:[Object(p.jsxs)("p",{id:"weather-humidity",children:[Object(p.jsx)("span",{children:"Humidity:"}),Object(p.jsxs)("span",{id:"humidity-data",children:[t.main.humidity,"%"]}),Object(p.jsx)("span",{className:"icon",id:"humidity-icon",children:Object(p.jsx)(w.a,{"aria-hidden":!0,focusable:!1})})]}),Object(p.jsxs)("p",{id:"weather-sunset",children:[Object(p.jsx)("span",{children:"Sunset: "}),Object(p.jsxs)("span",{children:[new Date(1e3*t.sys.sunset).toLocaleTimeString("en-GB"),"pm"]}),Object(p.jsx)("span",{className:"icon",id:"sunset-icon",children:Object(p.jsx)(m.a,{"aria-hidden":!0,focusable:!1})})]})]})]})},g=function(){var e=O().weatherData;return Object(p.jsx)("div",{id:"weather-data-container",children:0!==e.length?e.map((function(e,t){return Object(p.jsx)(y,{index:t,weatherData:e.city},e.city.id)})):Object(p.jsx)("div",{})})},v=n(15),C=function(){var e=O(),t=e.getLongLatData,n=e.getCityData,r=Object(c.useState)(""),a=Object(l.a)(r,2),i=a[0],s=a[1];return Object(p.jsx)("form",{id:"location-searchbar",children:Object(p.jsxs)("div",{className:"location-bar",children:[Object(p.jsx)("label",{htmlFor:"location-input",className:"hidden-label",children:"Location Input"}),Object(p.jsx)("input",{id:"location-input",type:"text",value:i,placeholder:"Search for a location",onChange:function(e){s(e.target.value)},tabIndex:"0"}),Object(p.jsx)("label",{htmlFor:"search-btn",className:"hidden-label",children:"Search Button"}),Object(p.jsx)("button",{id:"search-btn",type:"submit",onClick:function(e){e.preventDefault(),n(i),s("")},disabled:""===i,children:"Submit"}),Object(p.jsx)("label",{htmlFor:"current-location-btn",className:"hidden-label",children:"Current Location Button"}),Object(p.jsx)("button",{id:"current-location-btn",onClick:function(e){e.preventDefault(),t()},children:Object(p.jsx)(v.a,{id:"location-icon","aria-hidden":!0,focusable:!1})})]})})},L=function(e){var t=e.day,n=t.weather[0].description.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}));return Object(p.jsxs)("div",{className:"forecast-card",children:[Object(p.jsxs)("div",{className:"forecast-weather-info",id:"forecast-temp-info",children:[Object(p.jsx)("h4",{id:"forecast-header",children:new Date(1e3*t.dt).toLocaleDateString("en-GB")}),Object(p.jsx)("img",{id:"forecast-img",src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,".png"),alt:"forecast weather icon",role:"presentation"}),Object(p.jsx)("p",{id:"forecast-description",children:n})]}),Object(p.jsxs)("p",{id:"forecast-humidity",children:[Object(p.jsx)("span",{children:"Humidity:"}),Object(p.jsxs)("span",{id:"forecast-humidity-data",children:[t.humidity,"%"]}),Object(p.jsx)("span",{className:"icon",id:"forecast-humidity-icon",children:Object(p.jsx)(w.a,{"aria-hidden":!0,focusable:!1})})]}),Object(p.jsx)("table",{className:"forecast-weather-info",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{}),Object(p.jsx)("th",{children:"Temp"}),Object(p.jsx)("th",{children:"Feels Like"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Morning"}),Object(p.jsxs)("td",{children:[Math.round(t.temp.morn),"\xb0C"]}),Object(p.jsxs)("td",{children:[Math.round(t.feels_like.morn),"\xb0C"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Afternoon"}),Object(p.jsxs)("td",{children:[Math.round(t.temp.day),"\xb0C"]}),Object(p.jsxs)("td",{children:[Math.round(t.feels_like.day),"\xb0C"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Evening"}),Object(p.jsxs)("td",{children:[Math.round(t.temp.eve),"\xb0C"]}),Object(p.jsxs)("td",{children:[Math.round(t.feels_like.eve),"\xb0C"]})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Night"}),Object(p.jsxs)("td",{children:[Math.round(t.temp.night),"\xb0C"]}),Object(p.jsxs)("td",{children:[Math.round(t.feels_like.night),"\xb0C"]})]})]})})]})},k=function(){var e=O().currentForecast;return Object(p.jsx)("div",{id:"daily-weather-forecast",children:e&&e.daily.map((function(e,t){if(0!==t)return Object(p.jsx)(L,{day:e},e.id)}))})},N=function(){return Object(p.jsxs)("div",{id:"app-container",children:[Object(p.jsx)(C,{}),Object(p.jsx)(g,{}),Object(p.jsx)(k,{})]})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(f,{children:Object(p.jsx)(N,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8ae7292e.chunk.js.map