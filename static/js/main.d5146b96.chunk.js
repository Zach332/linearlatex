(this.webpackJsonplinearlatex=this.webpackJsonplinearlatex||[]).push([[0],{13:function(t,e,r){},14:function(t,e,r){},18:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r.n(a),i=r(8),s=r.n(i),c=(r(13),r(2)),l=r(3),o=r(4),u=(r(14),function(t){if(j(t.slice(-1))){var e=t.slice(-1),r=t.slice(0,t.length-1).split("/");return[0,1,[[parseInt(r[0]),r.length>1?parseInt(r[1]):1],e]]}if(""==t)return[0,1];r=t.split("/");return[parseInt(r[0]),r.length>1?parseInt(r[1]):1]}),p=function(t,e){if(t.length>2){var r=[t[0]*e[0],t[1]*e[1],[[t[2][0][0]*e[0],t[2][0][1]*e[1]],t[2][1]]];return f(r)}if(e.length>2){r=[t[0]*e[0],t[1]*e[1],[[e[2][0][0]*t[0],e[2][0][1]*t[1]],e[2][1]]];return f(r)}r=[t[0]*e[0],t[1]*e[1]];return f(r)},h=function(t,e){if(t.length>2){var r=[t[0]*e[1]+e[0]*t[1],t[1]*e[1],[[t[2][0][0],t[2][0][1]],t[2][1]]];return f(r)}if(e.length>2){r=[t[0]*e[1]+e[0]*t[1],t[1]*e[1],[[e[2][0][0],e[2][0][1]],e[2][1]]];return f(r)}r=[t[0]*e[1]+e[0]*t[1],t[1]*e[1]];return f(r)},x=function t(e){return null==e?"":e.length>2?0==e[0]?t(e[2][0])+e[2][1]:t(e.slice(0,2))+" + "+t(e[2][0])+e[2][1]:1==e[1]?e[0]:e[0]+"/"+e[1]},f=function(t){if(0==t[0])return t[1]=1,t;for(var e=Math.min(Math.abs(t[0]),Math.abs(t[1])),r=2;r<=e;r++)t[0]/r%1==0&&t[1]/r%1==0&&(t[0]/=r,t[1]/=r,r--);return t},j=function(t){return t.match(/[a-z]/i)},b=r(0);function m(t){var e=t.matrix;return Object(b.jsx)("div",{children:e.map((function(t){return Object(b.jsx)("div",{className:"d-flex justify-content-center",children:t.map((function(t){return Object(b.jsx)("div",{className:"p-2",style:{width:75},children:x(t)})}))})}))})}function d(t){var e=t.matrix,r=t.setMatrix,a=n.a.useState([[]]),i=Object(o.a)(a,2),s=i[0],c=i[1],p=n.a.useState(3),h=Object(o.a)(p,2),f=h[0],j=h[1],m=n.a.useState(3),d=Object(o.a)(m,2),g=d[0],v=d[1];n.a.useEffect((function(){for(var t=[],a=[],n=0;n<f;n++){for(var i=[],s=[],l=0;l<g;l++)i.push(n+","+l),n<e.length&&l<e[n].length?s.push(e[n][l]):s.push([0,1]);t.push(i),a.push(s)}c(t),r(a)}),[f,g]);var O=function(t){var e=t.target.getAttribute("index").split(","),a=parseInt(e[0]),n=parseInt(e[1]);r((function(e){return[].concat(Object(l.a)(e.slice(0,a)),[[].concat(Object(l.a)(e[a].slice(0,n)),[u(t.target.value)],Object(l.a)(e[a].slice(n+1,e[a].length)))],Object(l.a)(e.slice(a+1,e.length)))}))},w=function(t){return t.split(",")[0]},M=function(t){return t.split(",")[1]};return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"p-3"}),Object(b.jsx)("input",{width:"10",onChange:function(t){""!=t.target.value&&j(t.target.value)},placeholder:"rows",className:"p-2"})," x ",Object(b.jsx)("input",{onChange:function(t){""!=t.target.value&&v(t.target.value)},placeholder:"columns",className:"p-2"}),Object(b.jsx)("div",{className:"p-3"}),s.map((function(t){return Object(b.jsx)("div",{className:"d-flex justify-content-center",children:t.map((function(t){return Object(b.jsx)("input",{index:t,defaultValue:x(e[w(t)][M(t)]),onChange:O,className:"p-2"},t)}))})}))]})}function g(t){var e=t.index,r=t.operation,a=t.setOperation,i=t.updateNext;n.a.useEffect((function(){r.showMatrix||l()}),[r]),n.a.useEffect((function(){l()}),[r.prevMatrix,r.startRow,r.multiplier,r.otherRow]);var s,l=function(){if("scale"==r.type&&Number.isInteger(r.startRow)&&null!=r.multiplier){for(var t=[],n=0;n<r.prevMatrix.length;n++){if(n==r.startRow){u=[];for(var s=0;s<r.prevMatrix.length;s++)u.push(p(r.multiplier,r.prevMatrix[r.startRow][s]))}else u=r.prevMatrix[n];t.push(u)}a(e,Object(c.a)(Object(c.a)({},r),{},{matrix:t,showMatrix:!0})),i(e,t)}else if("switch"==r.type&&Number.isInteger(r.startRow)&&Number.isInteger(r.otherRow)){t=[];console.log(r);var l=JSON.parse(JSON.stringify(r.prevMatrix[r.startRow])),o=JSON.parse(JSON.stringify(r.prevMatrix[r.otherRow]));for(n=0;n<r.prevMatrix.length;n++){u=n==r.startRow?o:n==r.otherRow?l:r.prevMatrix[n],t.push(u)}a(e,Object(c.a)(Object(c.a)({},r),{},{matrix:t,showMatrix:!0})),i(e,t)}else if(Number.isInteger(r.startRow)&&null!=r.multiplier&&Number.isInteger(r.otherRow)){for(t=[],n=0;n<r.prevMatrix.length;n++){var u;if(n==r.startRow){u=[];for(s=0;s<r.prevMatrix.length;s++)u.push(h(r.prevMatrix[r.startRow][s],p(r.multiplier,r.prevMatrix[r.otherRow][s])))}else u=r.prevMatrix[n];t.push(u)}a(e,Object(c.a)(Object(c.a)({},r),{},{matrix:t,showMatrix:!0})),i(e,t)}},o=function(t){var n=parseInt(t.target.value)-1;n<0||n>=r.prevMatrix.length||a(e,Object(c.a)(Object(c.a)({},r),{},{startRow:n}))},f=function(t){a(e,Object(c.a)(Object(c.a)({},r),{},{multiplier:u(t.target.value)}))},j=function(t){var n=parseInt(t.target.value)-1;n<0||n>=r.prevMatrix.length||a(e,Object(c.a)(Object(c.a)({},r),{},{otherRow:n}))},d=function(t){return null==t||""===t?"":t+1};return s="scale"==r.type?Object(b.jsxs)("span",{children:[" row ",Object(b.jsx)("input",{width:"10",placeholder:"row #",defaultValue:d(r.startRow),onChange:o,className:"p-2"})," *= ",Object(b.jsx)("input",{defaultValue:x(r.multiplier),onChange:f,placeholder:"multiplier",className:"p-2"})]}):"switch"==r.type?Object(b.jsxs)("span",{children:[" row ",Object(b.jsx)("input",{width:"10",placeholder:"row #",defaultValue:d(r.startRow),onChange:o,className:"p-2"})," <-> row ",Object(b.jsx)("input",{defaultValue:d(r.otherRow),onChange:j,placeholder:"row #",className:"p-2"})]}):Object(b.jsxs)("span",{children:[" row ",Object(b.jsx)("input",{width:"10",defaultValue:d(r.startRow),onChange:o,placeholder:"row #",className:"p-2"})," += ",Object(b.jsx)("input",{defaultValue:x(r.multiplier),onChange:f,placeholder:"multiplier",className:"p-2"})," * row ",Object(b.jsx)("input",{defaultValue:d(r.otherRow),onChange:j,placeholder:"row #",className:"p-2"})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("select",{onChange:function(t){a(e,Object(c.a)(Object(c.a)({},r),{},{type:t.target.value}))},value:r.type,style:{width:100},children:[Object(b.jsx)("option",{value:"add",children:"Add"}),Object(b.jsx)("option",{value:"scale",children:"Scale"}),Object(b.jsx)("option",{value:"switch",children:"Switch"})]}),s,r.showMatrix&&Object(b.jsx)(m,{matrix:r.matrix})]})}function v(t){var e=t.operations,r=t.setOperations;n.a.useEffect((function(){e[e.length-1].showMatrix&&r((function(t){return t.concat({prevMatrix:t[t.length-1].matrix})}))}),[e]);var a=function(t,a){t<e.length-1&&r((function(e){return[].concat(Object(l.a)(e.slice(0,t+1)),[Object(c.a)(Object(c.a)({},e[t+1]),{},{prevMatrix:a})],Object(l.a)(e.slice(t+2)))}))},i=function(t,e){r((function(r){return[].concat(Object(l.a)(r.slice(0,t)),[e],Object(l.a)(r.slice(t+1,r.length)))}))};return Object(b.jsx)("div",{children:e.map((function(t,e){return Object(b.jsx)(g,{index:e,operation:t,setOperation:i,updateNext:a})}))})}function O(t){var e=t.operations,r=n.a.useState(""),a=Object(o.a)(r,2),i=a[0],s=a[1];n.a.useEffect((function(){try{var t="";t+=l(e[0])+"\n\n",t+="\\noindent Obtain RREF:\n\n";for(var r=0;r<e.length-1;r++)t+=c(e[r])+"\n\n";t+="\\noindent The augmented matrix in reduced row echelon form derived above can be written as the system of equations:\n\n",t+=u(e[e.length-2]),s(t)}catch(a){s("Error parsing data")}}),[e]);var c=function(t){var e="\\begin{displaymath}\n";"scale"==t.type?e+="r_"+(parseInt(t.startRow)+1)+" \\rightsquigarrow "+p(t.multiplier)+"r_"+(parseInt(t.startRow)+1)+"\n":"switch"==t.type?e+="r_"+(parseInt(t.startRow)+1)+" \\leftrightsquigarrow r_"+(parseInt(t.otherRow)+1)+"\n":e+="r_"+(parseInt(t.startRow)+1)+" \\rightsquigarrow r_"+(parseInt(t.startRow)+1)+" + "+p(t.multiplier)+"r_"+(parseInt(t.otherRow)+1)+"\n",e+="\\begin{bmatrix}\n";for(var r=0;r<t.matrix.length;r++)for(var a=0;a<t.matrix[r].length;a++)a!=t.matrix[r].length-1?e+=p(t.matrix[r][a],!0)+" & ":r==t.matrix.length-1?e+=p(t.matrix[r][a],!0)+"\n":e+=p(t.matrix[r][a],!0)+"\\\\\n";return e+="\\end{bmatrix}\n",e+="\\end{displaymath}"},l=function(t){var e="\\section{}\n\n";e+="Augmented matrix:\n\n",e+="\\begin{displaymath}\n",e+="\\begin{bmatrix}\n";for(var r=0;r<t.prevMatrix.length;r++)for(var a=0;a<t.prevMatrix[r].length;a++)a!=t.prevMatrix[r].length-1?e+=p(t.prevMatrix[r][a],!0)+" & ":r==t.prevMatrix.length-1?e+=p(t.prevMatrix[r][a],!0)+"\n":e+=p(t.prevMatrix[r][a],!0)+"\\\\\n";return e+="\\end{bmatrix}\n",e+="\\end{displaymath}"},u=function(t){var e="";e+="\\begin{displaymath}\n",e+="\\systeme{\n";for(var r=0;r<t.matrix.length;r++)for(var a=!0,n=0;n<t.matrix[r].length;n++)n==t.matrix[r].length-1?r==t.matrix.length-1?e+=" = "+p(t.matrix[r][n],!0)+"\n":e+=" = "+p(t.matrix[r][n],!0)+",\n":0!=t.matrix[r][n][0]?a?(e+=p(t.matrix[r][n])+"x_"+(n+1),a=!1):e+=" + "+p(t.matrix[r][n])+"x_"+(n+1):n==t.matrix.length-2&&a&&(e+=p(t.matrix[r][n]));return e+="}\n",e+="\\end{displaymath}"},p=function t(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.length>2?0==e[0]?t(e[2][0],r)+e[2][1]:t(e.slice(0,2),r)+" + "+t(e[2][0],r)+e[2][1]:r||1!=e[1]||1!=e[0]?r||1!=e[1]||-1!=e[0]?1==e[1]?e[0]:"\\frac{"+e[0]+"}{"+e[1]+"}":"-":""};return Object(b.jsx)("div",{className:"card mt-4",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:"LaTeX"}),Object(b.jsx)("p",{className:"card-text",style:{whiteSpace:"pre",textAlign:"left"},children:i}),Object(b.jsx)("button",{className:"btn btn-info me-3",onClick:function(){navigator.clipboard.writeText(i)},children:"Copy to clipboard"}),Object(b.jsx)("a",{href:"https://www.overleaf.com/",target:"_blank",className:"btn btn-primary",children:"Overleaf"}),Object(b.jsx)("p",{className:"card-text",style:{whiteSpace:"pre",textAlign:"left"},children:"Remember to add:\n\\usepackage{amsmath}\n\\usepackage{amssymb}\n\\usepackage{systeme}}"})]})})}var w="matrix_persistent_storage",M="operations_persistent_storage",N=[{prevMatrix:[[[0,1],[0,1],[0,1]],[[0,1],[0,1],[0,1]],[[0,1],[0,1],[0,1]]]}],y=[[[0,1],[0,1],[0,1]],[[0,1],[0,1],[0,1]],[[0,1],[0,1],[0,1]]];var R=function(){var t=n.a.useState(function(){var t=localStorage.getItem(w),e=JSON.parse(t);return null===t?y:e}()),e=Object(o.a)(t,2),r=e[0],a=e[1],i=n.a.useState(function(){var t=localStorage.getItem(M),e=JSON.parse(t);return null===t?N:e}()),s=Object(o.a)(i,2),u=s[0],p=s[1];return n.a.useEffect((function(){u.length>1?p((function(t){return[Object(c.a)(Object(c.a)({},t[0]),{},{prevMatrix:r})].concat(Object(l.a)(t.slice(1)))})):p((function(t){return[Object(c.a)(Object(c.a)({},t[0]),{},{prevMatrix:r})]}))}),[r]),n.a.useEffect((function(){localStorage.setItem(w,JSON.stringify(r))}),[r]),n.a.useEffect((function(){localStorage.setItem(M,JSON.stringify(u))}),[u]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"mt-4",children:["All changes are saved in local storage.",Object(b.jsx)("button",{className:"btn btn-secondary btn-sm ms-3",onClick:function(){a(y),p(N),window.location.reload()},children:"Reset"})]}),Object(b.jsx)(d,{matrix:r,setMatrix:a}),Object(b.jsx)(m,{matrix:r}),Object(b.jsx)(v,{operations:u,setOperations:p}),Object(b.jsx)(O,{operations:u})]})},I=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(e){var r=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,s=e.getTTFB;r(t),a(t),n(t),i(t),s(t)}))};r(16),r(17);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),I()}},[[18,1,2]]]);
//# sourceMappingURL=main.d5146b96.chunk.js.map