  !function(){function e(){var e,t,n=this.$$;this.commands=linux_commands||[],this.elm_query=n("query"),this.elm_btn=n("search_btn"),this.elm_result=n("result"),this.elm_search_result=n("search_list_result"),this.root_path=(e=n("current_path"),t=window.location.origin+window.location.pathname,e?t.replace(/\/(c\/)?(\w|-)+\.html/,"").replace(/\/$/,""):""),this.query="",this.query_size=5,this.page_size=50,this.init(),this.goToIndex()}e.prototype={$$:function(e){return document.getElementById(e)},goToIndex:function(){for(var e=document.getElementsByTagName("A"),t=0;t<e.length;t++)"/"===e[t].pathname&&(e[t].href=e[t].href)},bindEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},isSreachIndexOF:function(e,t){return e&&t?e.toLowerCase().indexOf(t.toLowerCase()):-1},getQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=decodeURIComponent(window.location.hash.replace(/^(\#\!|\#)/,"")).match(t);return null!=n?unescape(n[2]):null},pushState:function(){window.history&&window.history.pushState&&(this.query?history.pushState({},"linux_commands","#!kw="+this.query):history.pushState({},"linux_commands",window.location.pathname))},simple:function(e,n){return e.replace(/\$\w+\$/gi,function(e){var t=n[e.replace(/\$/g,"")];return void 0===t?"":t})},createKeyworldsHTML:function(e,t,n){var s,r=e.n,i=e.d,l=new RegExp("("+t+")","ig");t&&(r=e.n.replace(l,'<i class="kw">$1</i>'),i=e.d.replace(l,'<i class="kw">$1</i>')||"");var a=this.root_path.replace(/\/$/,"");return s=n?'<a href="'+a+'/c$url$.html"><strong>$name$</strong> - $des$</a><p></p>':'<a href="'+a+'/c$url$.html"><strong>$name$</strong> - $des$</a>',this.simple(s,{name:r,url:e.p,des:i})},searchResult:function(e){var t=this.commands,n=this,s=0,r=t.length,i=[],l=[],a=e?this.page_size:this.query_size,u=[],o=[];if(t&&t.length&&-1<toString.call(t).indexOf("Array"))for(;s<r&&t[s];s++){var c=n.isSreachIndexOF(t[s].n,n.query),h=n.isSreachIndexOF(t[s].d,n.query);if(-1<c)(d=t[s]).nIdx=c,u.push(d);else if(-1<h){var d;(d=t[s]).dIdx=h,o.push(d)}}for(u.sort(function(e,t){return e.nIdx-t.nIdx}),o.sort(function(e,t){return e.nIdx-t.nIdx}),l=(l=u.concat(o)).slice(0,a),s=0;s<l.length;s++)i.push(n.createKeyworldsHTML(l[s],n.query,e));var m=e?this.elm_search_result:this.elm_result;m.innerHTML="";for(s=0;s<i.length;s++){var p;(p=document.createElement("LI")).innerHTML=i[s],m.appendChild(p)}0===i.length&&((p=document.createElement("LI")).innerHTML=(this.query,"请尝试输入一些字符，进行搜索！</span>"),m.appendChild(p))},selectedResult:function(e){for(var t=this.elm_result.children,n=0,s=0;s<t.length;s++)if("ok"==t[s].className){t[s].className="",n="up"==e?s-1:s+1;break}t[n]&&(t[n].className="ok")},isSelectedResult:function(){for(var e=this.elm_result.children,t=!1,n=0;n<e.length;n++)if("ok"==e[n].className){t=e[n];break}return t},init:function(){var n=this,e=n.getQueryString("kw");this.elm_query.value=e,this.query=e||"",this.elm_search_result&&n.searchResult(!0),this.bindEvent(this.elm_query,"input",function(e){n.query=e.target.value,n.pushState(),n.query?n.searchResult():n.elm_result.style.display="none",n.elm_search_result?n.elm_btn.click():n.elm_result.style.display=n.query?"block":"none"}),this.bindEvent(this.elm_btn,"click",function(e){n.elm_result.style.display="none",n.elm_search_result?n.searchResult(!0):window.location.href=n.root_path+"/list.html#!kw="+n.query}),this.bindEvent(this.elm_query,"focus",function(e){n.searchResult(),n.query&&(n.elm_result.style.display="block")}),this.bindEvent(this.elm_query,"blur",function(e){setTimeout(function(){n.elm_result.style.display="none"},300)}),this.bindEvent(document,"keyup",function(e){if("Enter"==e.key){var t=n.isSelectedResult();if(!t)return n.elm_btn.click();t.children[0]&&t.children[0].click()}else 40===e.keyCode?n.selectedResult():38===e.keyCode&&n.selectedResult("up")}),e&&n.searchResult()}},new e}();
