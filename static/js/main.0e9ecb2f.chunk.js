(this.webpackJsonpgame_of_life_ts=this.webpackJsonpgame_of_life_ts||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(10),s=n.n(r),i=n(7),a=n(0),o=n(9),u=n(4),c=n(5),h=function(){function t(e){Object(u.a)(this,t),this.count=void 0,this.count=e}return Object(c.a)(t,[{key:"caseOne",get:function(){return this.count<=1}},{key:"caseTwo",get:function(){return this.count>=4}},{key:"caseThree",get:function(){return 2===this.count||3===this.count}},{key:"caseFour",get:function(){return 3===this.count}}]),t}(),l=new(function(){function t(e,n,r,s,i){var a=this;Object(u.a)(this,t),this.rows=void 0,this.columns=void 0,this.step=void 0,this.setup={},this.finalSetup={},this.finalBoard=void 0,this.tempBoard=void 0,this.checkCellStatus=function(t,e,n){a.swapValues(a.finalBoard,a.tempBoard);var r=0===n?a.createBoard(a.setup):a.finalBoard,s=a.getNeighbours(t,e,r),i=0;for(var o in s.all)null!==s.all[o]&&i++;var u=new h(i);return r[t][e]?(u.caseOne||u.caseTwo)&&(r[t][e]=!1):u.caseFour&&(r[t][e]=!0),r},this.rows=e,this.columns=n,this.step=r,this.setup=s,this.finalSetup=i,this.finalBoard=this.createBoard(this.finalSetup),this.tempBoard=this.createBoard(this.finalSetup)}return Object(c.a)(t,[{key:"getNeighbours",value:function(t,e,n){var r=t-1,s=t+1,i=e-1,a=e+1,u=this.confirmPosition(n),c={d0:u(r,i),d1:u(r,a),d2:u(s,i),d3:u(s,a)},h={p0:u(r,e),p1:u(s,e),p2:u(t,i),p3:u(t,a)};return{diagonals:c,opposites:h,all:Object(o.a)(Object(o.a)({},c),h)}}},{key:"confirmPosition",value:function(t){var e=this;return function(n,r){return-1===n||-1===r||n>=e.rows||r>=e.columns?null:t[n][r]?[n,r]:null}}},{key:"createBoard",value:function(t){for(var e=this,n=new Array(this.rows),r=0;r<n.length;r++)n[r]=new Array(this.columns);return Object.keys(t).forEach((function(r,s){for(var i=0;i<e.rows;i++)t[s].includes(i)?n[s][i]=!0:n[s][i]=!1})),n}},{key:"swapValues",value:function(t,e){for(var n=0;n<this.rows;n++)for(var r=0;r<this.columns;r++)t[n][r]=e[n][r]}},{key:"runGame",value:function(t){for(var e,n=this.createBoard(this.finalSetup),r=0;r<this.rows;r++)for(var s=0;s<this.columns;s++)e=this.checkCellStatus(r,s,t),n[r][s]=e[r][s];return this.swapValues(this.tempBoard,n),0===t?[e,n]:n}},{key:"init",value:function(){for(var t=[],e=0;e<this.step;e++)t.push(this.runGame(e));return t}}]),t}())(30,30,200,{0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[17,18],11:[16,19],12:[17,18],13:[],14:[15,16,17,18],15:[14,19],16:[10,14,15,18,19],17:[],18:[15],19:[],20:[],21:[],22:[],23:[],24:[],25:[],26:[],27:[],28:[],29:[]},{0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],13:[],14:[],15:[],16:[],17:[],18:[],19:[],20:[],21:[],22:[],23:[],24:[],25:[],26:[],27:[],28:[],29:[]}).init(),f=n(8),v=(n(15),n(1)),p=function(t){var e=t.game,n=Object(a.useState)([]),r=Object(f.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(0),u=Object(f.a)(o,2),c=u[0],h=u[1];Object(a.useEffect)((function(){var t=setInterval((function(){c>=e.length?clearInterval(t):(i(e[c]),h((function(t){return t+1})))}),500);return function(){return clearInterval(t)}}),[e,c]);for(var l="",p=0;p<s.length;p++){for(var d=0;d<s.length;d++)l+='<span class="grid-span'.concat(s[p][d]?" active":"",'"></span>');l+="<br/>"}return Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:l}})},d=(n(17),function(){var t=[l[0][0],l[0][1]];return l.shift(),t=[].concat(Object(i.a)(t),Object(i.a)(l)),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(p,{game:t})})});s.a.render(Object(v.jsx)(d,{}),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0e9ecb2f.chunk.js.map