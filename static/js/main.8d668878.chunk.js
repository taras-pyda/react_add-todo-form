(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),r=a(8),s=a(10),o=a(3),c=a(4),l=a(6),d=a(5),u=a(1),m=a.n(u),h=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],p=a(0),j=m.a.memo((function(e){var t=e.name,a=e.email;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("p",{children:a})]})})),g=m.a.memo((function(e){var t=e.title,a=e.complited,n=e.user;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:t}),Object(p.jsx)("p",{children:a?"Done":"Not done"}),Object(p.jsx)(j,{name:n.name,email:n.email})]})})),y=m.a.memo((function(e){var t=e.todos;return Object(p.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,i=e.user;return i&&Object(p.jsx)("li",{children:Object(p.jsx)(g,{title:a,complited:n,user:i})},t)}))})})),f=a(2),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",userName:"",buttonClicked:!1},e.submitHandler=function(t){t.preventDefault();var a=e.state,n=a.title,i=a.userName,r=!!i&&!!n.trim();r&&e.props.addTodo(i,n),e.setState({title:r?"":n,userName:r?"":i,buttonClicked:!r})},e.changeHandler=function(t){var a=t.target.name,n=t.target.value;"title"===a&&!/^[a-zA-Z\u0410-\u042f\u0430-\u044f0-9\s]+$/.test(n)&&n.length>0||e.setState(Object(f.a)({},a,n))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.userName,n=e.buttonClicked,i=this.props.users;return Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("legend",{children:"Add todo form"}),Object(p.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(p.jsx)("p",{children:"Todo title"}),Object(p.jsx)("label",{htmlFor:"title",children:Object(p.jsx)("input",{type:"text",id:"title",name:"title",value:t,placeholder:"Enter the title",onChange:this.changeHandler})}),n&&!t.trim()&&Object(p.jsx)("span",{children:"Please enter the title"}),Object(p.jsx)("p",{children:"User"}),Object(p.jsx)("label",{htmlFor:"user",children:Object(p.jsxs)("select",{id:"user",name:"userName",value:a,onChange:this.changeHandler,children:[Object(p.jsx)("option",{value:"",children:"Choose user"}),i.map((function(e){var t=e.name;return Object(p.jsx)("option",{defaultValue:t,children:t},t)}))]})}),n&&!a&&Object(p.jsx)("span",{children:"Please choose a user"}),Object(p.jsx)("button",{type:"submit",style:{display:"block"},children:"Add"})]})]})}}]),a}(m.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={visibleTodos:[]},e.addTodo=function(t,a){var n=h.find((function(e){return e.name===t}));if(n&&a){var i={userId:n.id,id:+new Date,title:a,completed:!1,user:n};e.setState((function(e){return{visibleTodos:[].concat(Object(s.a)(e.visibleTodos),[i])}}))}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=b.map((function(e){var t=h.find((function(t){return t.id===e.userId}));return Object(r.a)(Object(r.a)({},e),{},{user:t||null})}));this.setState({visibleTodos:e})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("h1",{children:"List of todos"}),Object(p.jsx)(y,{todos:this.state.visibleTodos}),Object(p.jsx)(v,{users:h,addTodo:this.addTodo})]})}}]),a}(m.a.Component);i.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8d668878.chunk.js.map