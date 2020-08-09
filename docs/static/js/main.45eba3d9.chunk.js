(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/RickandMorty.75509f2e.png"},23:function(e,t,a){e.exports=a.p+"static/media/RickAndMorty33.e8c11f08.jpg"},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),s=(a(29),a(6)),l=a(7),o=a(10),m=a(9),u=a(8),h=(a(30),a(11)),p=(a(18),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(h.b,{style:{textDecoration:"none"},to:"/character/".concat(this.props.id)},r.a.createElement("li",{className:"serieCard serieCard-".concat(this.props.id)},r.a.createElement("div",{className:"serieCard__img serieCard__img-".concat(this.props.id)},r.a.createElement("img",{src:this.props.image,alt:"Imagen de ".concat(this.props.name)})),r.a.createElement("div",{className:"serieCard__text"},r.a.createElement("h2",{className:"name"},this.props.name),r.a.createElement("h3",{className:"species"},this.props.species," ","Alien"===this.props.species?"\ud83d\udc7d":"\ud83e\uddd1"))))}}]),a}(r.a.Component)),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderList",value:function(){return console.log(this.props),this.props.characters.map((function(e,t){return r.a.createElement(p,{key:t,id:e.id,name:e.name,species:e.species,image:e.image})}))}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("ul",{className:"list"},0===this.props.characters.length?r.a.createElement("p",{className:"list__error"},"No hay ningun personaje que coincida con ",this.props.filterText):this.renderList()))}}]),a}(r.a.Component),f=(a(36),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleModalContentClick=function(e){e.preventDefault()},n.iconFunction=n.iconFunction.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"iconFunction",value:function(){var e=this.props.status;return"Dead"===this.props.status?"far fa-dizzy":"Alive"===e?"far fa-smile-beam":"fas fa-question"}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(h.b,{style:{textDecoration:"none"},to:"/"},r.a.createElement("div",{className:"detailCard",onClick:this.handleModalContentClick},r.a.createElement(h.b,{style:{textDecoration:"none"},to:"/"},r.a.createElement("span",{className:"detailCard__back"},r.a.createElement("i",{class:"fas fa-backward"})," Volver"," ")),r.a.createElement("div",{className:"detailCard__img"},r.a.createElement("img",{src:this.props.image,alt:"Imagen de ".concat(this.props.name)})),r.a.createElement("div",{className:"detailCard__text"},r.a.createElement("h2",null,this.props.name),r.a.createElement("ul",{className:"detailsList"},r.a.createElement("li",null,"Status: ",r.a.createElement("span",{className:"listData"},this.props.status," ")," ",r.a.createElement("i",{class:this.iconFunction()})),r.a.createElement("li",null,"Species:"," ",r.a.createElement("span",{className:"listData"},this.props.species," "),"Alien"===this.props.status?r.a.createElement("i",{class:"fab fa-reddit-alien"}):r.a.createElement("i",{class:"far fa-user"})),r.a.createElement("li",null,"Origin:"," ",r.a.createElement("span",{className:"listData"},this.props.origin.name)),r.a.createElement("li",null,"Episodes:"," ",r.a.createElement("span",{className:"listData"},this.props.episodes)))))))}}]),a}(r.a.Component)),E=a(22),g=a.n(E),b=a(23),v=a.n(b),N=(a(37),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleModalContentClick=function(e){e.preventDefault()},n.handleFilterName=n.handleFilterName.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleFilterName",value:function(e){this.props.changeFilterText(e.currentTarget.value)}},{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("section",{className:"header__box"},r.a.createElement("div",{className:"header__img"},r.a.createElement("img",{src:v.a,className:"header__img",alt:"Imagen Rick y Morty hablando"})),r.a.createElement("div",{className:"header__input"},r.a.createElement("form",{onSubmit:this.handleModalContentClick},r.a.createElement("input",{type:"text",placeholder:"Nombre del personaje...",id:"filterName",value:this.props.filterText,onChange:this.handleFilterName}))),r.a.createElement("div",{className:"header__box--title"},r.a.createElement("div",{className:"header__logo"},r.a.createElement("img",{src:g.a,className:"header__logo",alt:"Imagen Rick y Morty"})),r.a.createElement("div",{className:"header__title"},r.a.createElement("h1",null,"Busca tus personajes de Rick y Morty")))))}}]),a}(r.a.Component)),_=function(){return fetch("https://rickandmortyapi.com/api/character/#").then((function(e){return e.json()})).then((function(e){return e.results.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}))},C=a(1),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!1,characterData:[],isChecked:!1,filterText:""},n.changeFilterText=n.changeFilterText.bind(Object(o.a)(n)),n.renderCharacterDetail=n.renderCharacterDetail.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;_().then((function(t){e.setState({loading:!0,characterData:t})}))}},{key:"changeFilterText",value:function(e){this.setState({filterText:e}),console.log("filtertext",e)}},{key:"renderCharacterDetail",value:function(e){console.log(e);var t=parseInt(e.match.params.characterId),a=this.state.characterData.find((function(e){return e.id===t}));return console.log(a),a?r.a.createElement(f,{name:a.name,status:a.status,species:a.species,origin:a.origin,episodes:a.episode.length,image:a.image}):r.a.createElement("p",{className:"list__error"},"Personaje no encontrado")}},{key:"render",value:function(){var e=this,t=this.state.characterData.filter((function(t){return""===e.state.filterText||t.name.toUpperCase().includes(e.state.filterText.toUpperCase())}));return r.a.createElement("div",null,r.a.createElement(C.a,{exact:!0,path:"/"},r.a.createElement(N,{filterText:this.state.filterText,changeFilterText:this.changeFilterText,data:this.state.characterData}),r.a.createElement(d,{characters:t,filterText:this.state.filterText,sort:this.sortNames})),r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/character/:characterId",render:this.renderCharacterDetail})))}}]),a}(r.a.Component);i.a.render(r.a.createElement(h.a,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.45eba3d9.chunk.js.map