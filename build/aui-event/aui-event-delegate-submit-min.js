AUI.add("aui-event-delegate-submit",function(a){var e=a.Object,d=a.Node,c=a.Selector,f="click",b="submit";a.Event.define(b,{delegate:function(k,j,i,h){var g=this;var l=g._prepareHandles(j,k);if(!e.owns(l,f)){l[f]=k.delegate(f,function(q){var p=q.target;if(g._getNodeName(p,"input")||g._getNodeName(p,"button")){var o=p.get("form");if(o){var n=g._prepareHandles(j,o);if(!e.owns(n,b)){var m=function(v){var t=k.getDOM();var r=true;var u=o.getDOM();var s=a.clone(v);do{if(u&&c.test(u,h)){s.currentTarget=a.one(u);s.container=k;r=i.fire(s);if(s.prevented){v.preventDefault(s._event.returnValue);}var w=s.stopped;if(w){if(w===1){v.stopPropagation();}else{if(w===2){v.stopImmediatePropagation();}}}}u=u.parentNode;}while(r!==false&&!s.stopped&&u&&u!==t);return((r!==false)&&(s.stopped!==2));};n[b]=a.Event._attach([b,m,o,i]);}}}},h);}},detach:function(j,i,h){var g=this;g._detachEvents(j,i,h);},detachDelegate:function(j,i,h){var g=this;g._detachEvents(j,i,h);},on:function(k,j,i){var g=this;var h=g._prepareHandles(j,k);h[b]=a.Event._attach([b,i.fire,k,i]);},_detachEvents:function(i,h,g){a.each(h._handles,function(k,l,j){a.each(k,function(o,n,m){o.detach();});});delete h._handles;},_getNodeName:function(h,g){var i=h.get("nodeName");return i&&i.toLowerCase()===g.toLowerCase();},_prepareHandles:function(i,h){if(!e.owns(i,"_handles")){i._handles={};}var g=i._handles;if(!e.owns(g,h)){g[h]={};}return g[h];}},true);},"@VERSION@",{requires:["aui-node-base","aui-event-base"],condition:{name:"aui-event-delegate-submit",trigger:"event-base-ie",ua:"ie"}});