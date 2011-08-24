AUI.add("aui-form-builder-field",function(b6){var bX=b6.Lang,aX=bX.isArray,bT=bX.isString,I=b6.IO.prototype._serialize,h="acceptChildren",e="bodyContent",aR="boundingBox",cf="builder",cm="button",J="buttons",x="buttonsNode",aH="checkbox",K="checked",o="children",ci="clearfix",aS="close",aT="component",cr="contentBox",aL="container",cy="dataType",cj="default",aY="delete",bI="disabled",bP=".",be="drag",aD="dragContainer",v="dragContainerNode",b1="dragNodesList",aA="drop",bi="dropContainer",bp="dropContainerNode",b7="dropNode",br="dropZone",a3="dropZoneNode",aF="duplicate",R="edit",bJ="",bq="field",g="fields",a9="fixed",bO="for",q="form",bf="formBuilder",aG="form-builder-field",s="help",n="helper",av="hidden",r="icon",ch="id",aj="label",b2="labelNode",bD="lightbulb",bh="metadata",aC="name",cz="node",b="panel",bb="portalLayout",aO="predefinedValue",bt="proxy",ce="readOnlyAttributes",ap="required",a8="requiredFlagNode",bH="state",bo="select",a0="settings",at="settingsFormNode",X="showLabel",aw="size",Y=" ",bS="string",bZ="strings",ad="templateNode",bL="text",ar="textarea",u="tip",bw="tipIconNode",Z="type",aE="unique",bU="zone",bk="widget",z=b6.getClassName,bn=z(aT),aK=z(bq,aj),p=z(n,ci),af=z(n,av),bQ=z(bH,cj),d=z(bq),bu=z(bq,bL),B=z(q,cf,cm),bM=z(q,cf,cm,aY),a5=z(q,cf,cm,aF),V=z(q,cf,cm,R),a4=z(q,cf,aA,cz),an=z(q,cf,aA,bU),cx=z(q,cf,r),j=z(q,cf,r,aY),w=z(q,cf,r,aF),al=z(q,cf,r,R),E=z(q,cf,r,u),bN=z(q,cf,bq),bA=z(q,cf,bq,J),bs=z(q,cf,a9),cw=z(q,cf,ap),bG=z(q,cf,aE),G=z(bk),b4='<li class="'+[G,bn,bN].join(Y)+'"></li>',a='<div class="'+[bA,af].join(Y)+'">'+'<a class="'+[B,V].join(Y)+'" href="javascript:;" title="Edit">'+'<div class="'+[cx,al].join(Y)+'"></div>'+"</a>"+'<a class="'+[B,a5].join(Y)+'" href="javascript:;" title="Duplicate">'+'<div class="'+[cx,w].join(Y)+'"></div>'+"</a>"+'<a class="'+[B,bM].join(Y)+'" href="javascript:;" title="Delete">'+'<div class="'+[cx,j].join(Y)+'"></div>'+"</a>"+"</div>",C='<div class="'+p+'"></div>',ac='<ul class="'+an+'"></ul>',ak='<span class="'+[d,bu].join(Y)+'"></span>',a7='<label class="'+aK+'"></label>',az='<span class="'+cw+'">*</span>',cv="<p></p>",bl='<a href="javascript:;" class="'+E+'"></a>';var t=b6.Component.create({NAME:aG,ATTRS:{acceptChildren:{value:true},dataType:{value:bS},disabled:{value:false},fixed:{value:false},formBuilder:{value:undefined},id:{value:bJ},icon:{value:bJ},key:{value:bJ},label:{value:bJ},localizationMap:{value:{}},name:{valueFn:function(){var A=this;return A.get(Z)+(++b6.Env._uidx);}},parent:{value:null},predefinedValue:{value:bJ},readOnlyAttributes:{value:[],validator:aX},required:{setter:b6.DataType.Boolean.parse,value:false},selected:{setter:b6.DataType.Boolean.parse,value:false},showLabel:{setter:b6.DataType.Boolean.parse,value:true},template:{value:bJ},tip:{value:bJ},type:{value:bJ},unique:{setter:b6.DataType.Boolean.parse,value:false},buttonsNode:{valueFn:function(){return b6.Node.create(a);}},dropZoneNode:{valueFn:function(){return b6.Node.create(ac);}},labelNode:{valueFn:function(){return b6.Node.create(a7);}},requiredFlagNode:{valueFn:function(){return b6.Node.create(az);}},templateNode:{valueFn:"getNode"},tipIconNode:{valueFn:function(){return b6.Node.create(bl);}}},AUGMENTS:[b6.FormBuilderFieldSupport],UI_ATTRS:[h,bI,a9,aj,aC,aO,ap,X,u,aE],HTML_PARSER:{buttonsNode:bP+bA,dropZoneNode:bP+an,labelNode:aj+bP+aK,requiredFlagNode:bP+cw,tipIconNode:bP+E},prototype:{BOUNDING_TEMPLATE:b4,initializer:function(){var A=this;A.get(aR).setData(bq,A);A.toolTip=new b6.Tooltip({trigger:A.get(bw),hideDelay:100});},bindUI:function(){var A=this;},renderUI:function(){var A=this;var cD=A.get(aR);var cG=A.get(x);var L=A.get(cr);var cC=A.get(b2);var cF=A.get(a8);var cE=A.get(ad);var cB=A.get(bw);L.addClass(p);cD.prepend(cG);L.append(cC);L.append(cF);L.append(cB);L.append(cE);A.toolTip.render();},settingsNodesMap:{},saveSettings:function(){var A=this;var L=A.get(bf);var cB=L.get(at);b6.Array.each(I(cB._node).split("&"),function(cD){var cC=cD.split("=");A.set(cC[0],decodeURIComponent(cC[1]));});},renderSettings:function(){var cJ=this;var cF=cJ.get(bf);var A=cF.get(at);var cK=cF.get(bZ);var cC=cJ.settingsNodesMap;if(!cJ.fieldSettingsNode){cJ.fieldSettingsNode=b6.Node.create(C);var cH=b6.Node.create(C);var cD=b6.Node.create(ak);var L=b6.Node.create(a7);var cI=b6.Node.create(cv);L.setContent(cK[Z]);cI.setContent(cJ.get(cy)||cJ.get(Z));cD.append(L);cD.append(cI);cD.appendTo(cH);cJ._renderSettingsFields([{type:"text",name:aj,labelText:"Label",value:cJ.get(aj)},{type:"checkbox",name:X,labelText:"Show label",labelAlign:"left",value:cJ.get(X)},{type:"text",name:aC,labelText:"Name",value:cJ.get(aC)},{type:"checkbox",name:ap,labelText:"Required",labelAlign:"left",value:ap},{type:"text",name:aO,labelText:"Default value",value:cJ.get(aO)},{type:"textarea",name:u,labelText:"Tip",value:cJ.get(u)}],cH);var cE=cC.labelSettingNode;cE.on({input:b6.bind(cJ._onLabelInput,cJ)});var cG=cC.showLabelSettingNode;cG.set(K,cJ.get(X));cG.on({change:b6.bind(cJ._onSettingsFieldChange,cJ)});var cB=cC.requiredSettingNode;cB.set(K,cJ.get(ap));cB.on({change:b6.bind(cJ._onSettingsFieldChange,cJ)});cJ.propertiesPanel=new b6.Panel({bodyContent:cH,collapsible:true,title:"Properties"}).render();cJ.fieldSettingsNode.append(cJ.propertiesPanel.get(aR));}A.setContent(cJ.fieldSettingsNode);},getHTML:function(){},getNode:function(){},_onLabelInput:function(L){var A=this;var cC=L.target;var cB=cC.val();A.set(aj,cB);},_onSettingsFieldChange:function(L){var A=this;var cC=L.target;var cB=cC.val();if(cC.get(Z)===aH){cB=cC.get(K);}A.set(cC.get(aC),cB);},_renderSettingsFields:function(L,cC){var A=this;var cB=A.get(ce);b6.each(L,function(cE){var cF;if(b6.Array.indexOf(cB,cE.name)>-1){cE.disabled=true;}if(cE.type===bo){cF=new b6.Select(cE);}else{if(cE.type===ar){cF=new b6.Textarea(cE);}else{cF=new b6.Field(cE);}}cF.render(cC);var cD=cF.get(cz);if(cE.type===aH){cD.set(K,cE.value);}A.settingsNodesMap[cE.name+"SettingNode"]=cD;});},_uiSetAcceptChildren:function(cD){var A=this;var L=A.get(aR);var cC=A.get(a3);
var cB=L.one(bP+an);if(cD&&!cB){L.append(cC);}else{if(!cD&&cB){cB.remove();}else{if(cD&&cB){A.set(a3,cB);}}}},_uiSetDisabled:function(cB){var A=this;var L=A.get(ad);if(cB){L.setAttribute(bI,cB);}else{L.removeAttribute(bI);}},_uiSetFixed:function(cB){var A=this;var cC=A.get(x);var L=cC.one(bP+bM);L.toggleClass(af,cB);},_uiSetLabel:function(cB){var A=this;var L=A.get(b2);L.setContent(cB);},_uiSetName:function(cB){var A=this;var L=A.get(ad);L.set(aC,cB);},_uiSetPredefinedValue:function(cB){var A=this;var L=A.get(ad);L.val(cB);},_uiSetRequired:function(cB){var A=this;var L=A.get(a8);L.toggleClass(af,!cB);},_uiSetShowLabel:function(cB){var A=this;var L=A.get(b2);L.toggleClass(af,!cB);},_uiSetTip:function(cB){var A=this;var L=A.get(bw);L.toggleClass(af,!cB);A.toolTip.set(e,cB);},_uiSetUnique:function(cB){var A=this;var L=A.get(aR);var cC=A.get(x);L.toggleClass(bG,cB);cC.one(bP+a5).toggleClass(af,cB);}}});b6.FormBuilderField=t;b6.FormBuilder.types["field"]=b6.FormBuilderField;var bX=b6.Lang,aX=bX.isArray,aB=bX.isNumber,bT=bX.isString,bx=function(A){return(A instanceof b6.Node);},a6=function(A){return(A instanceof b6.NodeList);},ba=b6.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),aR="boundingBox",cm="button",ck="buttonType",cr="contentBox",aL="container",bP=".",be="drag",aD="dragContainer",v="dragContainerNode",b1="dragNodesList",aA="drop",bi="dropContainer",bp="dropContainerNode",bJ="",bq="field",g="fields",aG="form-builder-field",bV="form-builder-button-field",ch="id",r="icon",a1="input",aj="label",aC="name",cz="node",T="option",ae="options",bb="portalLayout",aO="predefinedValue",bt="proxy",bR="reset",bg="selected",bY="selectedIndex",ay="submit",Y=" ",bZ="strings",aI="template",ad="templateNode",bL="text",Z="type",m="value",z=b6.getClassName,bv=z(bq,a1),P=z(bq,a1,bL),bN=z(aG),b9=z(aG,cz),bQ=z(bH,cj),bK='<input id="{id}" class="'+[b9,bv].join(Y)+'" name="{name}" type="{type}" value="{value}" />',cA=[ay,bR,cm];var b8=b6.Component.create({NAME:bV,ATTRS:{acceptChildren:{value:false,readOnly:true},buttonType:{value:ay,validator:function(A){return b6.Array(cA).indexOf(A.toLowerCase())>-1;}},predefinedValue:{value:ba(ay)},showLabel:{value:false},template:{valueFn:function(){return bK;}}},UI_ATTRS:b6.FormBuilderField.UI_ATTRS.concat([ck]),CSS_PREFIX:bN,HTML_PARSER:{templateNode:bP+b9},EXTENDS:b6.FormBuilderField,prototype:{getHTML:function(){var A=this;var cD=A.get(aI);var cF=A.get(ch);var cC=A.get(aj);var cB=A.get(aC);var L=A.get(ck);var cE=A.get(aO);return b6.substitute(cD,{id:cF,label:cC,name:cB,type:L,value:cE});},getNode:function(){var A=this;return b6.Node.create(A.getHTML());},renderSettings:function(){var cH=this;var cE=cH.get(bf);var A=cE.get(at);var cD=cH.get(ck);var cI=cE.get(bZ);var cC=cH.settingsNodesMap;b6.FormBuilderButtonField.superclass.renderSettings.apply(cH,arguments);if(!cH._renderedButtonSettings){cH._renderedButtonSettings=true;var L=cH.propertiesPanel.get(e);var cG=[];b6.each(cA,function(cJ){cG.push({labelText:cI[cJ],value:cJ});});cH._renderSettingsFields([{labelText:"Button type",name:ck,options:cG,type:"select"}],L.item(0));var cF=cC["buttonTypeSettingNode"];cF.on({change:b6.bind(cH._onButtonTypeChange,cH)});var cB=b6.Array(cA).indexOf(cD);cF.all(T).item(cB).set(bg,true);}},_onButtonTypeChange:function(L){var A=this;var cB=L.target;A.set(ck,cB.get(m));},_uiSetButtonType:function(cB){var A=this;var L=A.get(ad);L.setAttribute(Z,cB);}}});b6.FormBuilderButtonField=b8;b6.FormBuilder.types["button"]=b6.FormBuilderButtonField;var bX=b6.Lang,aX=bX.isArray,aZ=bX.isBoolean,aB=bX.isNumber,bT=bX.isString,aV="boolean",aR="boundingBox",e="bodyContent",aH="checkbox",K="checked",ax="choice",cr="contentBox",aL="container",bP=".",be="drag",aD="dragContainer",v="dragContainerNode",b1="dragNodesList",aA="drop",bi="dropContainer",bp="dropContainerNode",bJ="",bq="field",g="fields",aG="form-builder-field",co="form-builder-checkbox-field",ch="id",r="icon",bj="inline",aj="label",c="labels",aC="name",cz="node",S="parentNode",bb="portalLayout",aO="predefinedValue",bt="proxy",aw="size",Y=" ",aI="template",ad="templateNode",m="value",z=b6.getClassName,d=z(bq),ao=z(bq,aH),b3=z(bq,ax),bN=z(aG),cp=z(aG,aH),b9=z(aG,cz),bQ=z(bH,cj),b0=z(bq,c,bj),b4='<li class="'+[G,bn,bN,cp].join(Y)+'"></li>',aU='<input id="{id}" class="'+[b9,d,ao,b3].join(Y)+'" name="{name}" type="checkbox" value="{value}" {checked} />';var ab=b6.Component.create({NAME:co,ATTRS:{dataType:{value:aV},predefinedValue:{setter:b6.DataType.Boolean.parse,value:false},template:{valueFn:function(){return aU;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bN,HTML_PARSER:{templateNode:bP+b9},EXTENDS:b6.FormBuilderField,prototype:{BOUNDING_TEMPLATE:b4,bindUI:function(){var A=this;b6.FormBuilderCheckBoxField.superclass.bindUI.apply(A,arguments);var L=A.get(ad);L.on({"change":b6.bind(A._onValueChange,A)});},renderUI:function(){var A=this;var L=A.get(cr);var cC=A.get(ad);var cB=A.get(b2);b6.FormBuilderCheckBoxField.superclass.renderUI.apply(A,arguments);cB.insert(cC,cB,"before");},getHTML:function(){var A=this;var cC=A.get(aI);var cD=A.get(K);var cF=A.get(ch);var cB=A.get(aj);var L=A.get(aC);var cE=A.get(aO);return b6.substitute(cC,{checked:cD?'checked="checked"':bJ,id:cF,label:cB,name:L,value:cE});},getNode:function(){var A=this;return b6.Node.create(A.getHTML());},renderSettings:function(){var A=this;var L=A.get(bf);var cC=L.get(at);var cD=A.settingsNodesMap;b6.FormBuilderCheckBoxField.superclass.renderSettings.apply(A,arguments);if(!A._renderedCheckboxSettings){A._renderedCheckboxSettings=true;cD.predefinedValueSettingNode.get(S).remove();var cB=A.propertiesPanel.get(e);A._renderSettingsFields([{type:"checkbox",name:aO,labelText:"Checked",labelAlign:"left"}],cB.item(0));var cE=cD.predefinedValueSettingNode;cE.on({change:b6.bind(A._onValueChange,A)});cE.set(K,A.get(aO));}},_onValueChange:function(L){var A=this;var cB=L.target;A.set(aO,cB.get(K));},_uiSetPredefinedValue:function(cD){var A=this;var L=A.get(ad);var cB=A.settingsNodesMap;
var cC=cB.predefinedValueSettingNode;if(cC){cC.set(K,cD);}L.set(K,cD);}}});b6.FormBuilderCheckBoxField=ab;b6.FormBuilder.types["checkbox"]=b6.FormBuilderCheckBoxField;var bX=b6.Lang,aX=bX.isArray,aB=bX.isNumber,bT=bX.isString,bx=function(A){return(A instanceof b6.Node);},a6=function(A){return(A instanceof b6.NodeList);},aR="boundingBox",cr="contentBox",aL="container",cy="dataType",bP=".",aA="drop",bJ="",bq="field",g="fields",aG="form-builder-field",F="form-builder-fieldset-field",ch="id",r="icon",aj="label",aC="name",cz="node",aO="predefinedValue",Y=" ",bZ="strings",aI="template",ad="templateNode",bL="text",Z="type",m="value",bU="zone",z=b6.getClassName,bN=z(aG),b9=z(aG,cz),an=z(q,cf,aA,bU),aN='<fieldset id="{id}" class="'+[b9].join(Y)+'"></fieldset>',k='<legend class="'+aK+'"></legend>';var y=b6.Component.create({NAME:F,ATTRS:{acceptChildren:{value:true,readOnly:true},dataType:{value:undefined},template:{valueFn:function(){return aN;}},labelNode:{valueFn:function(){return b6.Node.create(k);}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[h,aj,X],CSS_PREFIX:bN,HTML_PARSER:{templateNode:bP+b9},EXTENDS:b6.FormBuilderField,prototype:{CONTENT_TEMPLATE:aN,renderUI:function(){var A=this;var cC=A.get(aR);var cE=A.get(x);var L=A.get(cr);var cB=A.get(b2);var cD=A.get(ad);if(!cC.contains(cE)){cC.prepend(cE);}if(!L.contains(cB)){L.append(cB);}},getHTML:function(){var A=this;var L=A.get(aI);var cB=A.get(ch);return b6.substitute(L,{id:cB});},getNode:function(){var A=this;return b6.Node.create(A.getHTML());},renderSettings:function(){var cI=this;var cE=cI.get(bf);var A=cE.get(at);var cJ=cE.get(bZ);var cB=cI.settingsNodesMap;if(!cI._renderedFieldsetSettings){cI._renderedFieldsetSettings=true;cI.fieldSettingsNode=b6.Node.create(C);var cG=b6.Node.create(C);var cC=b6.Node.create(ak);var L=b6.Node.create(a7);var cH=b6.Node.create(cv);L.setContent(cJ[Z]);cH.setContent(cI.get(cy)||cI.get(Z));cC.append(L);cC.append(cH);cC.appendTo(cG);cI._renderSettingsFields([{type:"text",name:aj,labelText:"Label",value:cI.get(aj)},{type:"checkbox",name:X,labelText:"Show label",labelAlign:"left",value:cI.get(X)}],cG);var cD=cB["labelSettingNode"];cD.on({input:b6.bind(cI._onLabelInput,cI)});var cF=cB["showLabelSettingNode"];cF.set(K,cI.get(X));cF.on({change:b6.bind(cI._onSettingsFieldChange,cI)});cI.propertiesPanel=new b6.Panel({bodyContent:cG,collapsible:true,title:"Properties"}).render();cI.fieldSettingsNode.append(cI.propertiesPanel.get(aR));}A.setContent(cI.fieldSettingsNode);},_uiSetAcceptChildren:function(cD){var A=this;var L=A.get(cr);var cC=A.get(a3);var cB=L.one(bP+an);if(cD&&!cB){L.append(cC);}else{if(!cD&&cB){cB.remove();}else{if(cD&&cB){A.set(a3,cB);}}}}}});b6.FormBuilderFieldsetField=y;b6.FormBuilder.types["fieldset"]=b6.FormBuilderFieldsetField;var bX=b6.Lang,aX=bX.isArray,aB=bX.isNumber,bT=bX.isString,bx=function(A){return(A instanceof b6.Node);},a6=function(A){return(A instanceof b6.NodeList);},aR="boundingBox",cr="contentBox",aL="container",cy="dataType",bP=".",bJ="",bq="field",g="fields",aG="form-builder-field",cq="form-builder-file-upload-field",ch="id",r="icon",aj="label",aC="name",cz="node",aO="predefinedValue",Y=" ",bZ="strings",aI="template",ad="templateNode",bL="text",Z="type",m="value",z=b6.getClassName,bN=z(aG),b9=z(aG,cz),bQ=z(bH,cj),bC='<input id="{id}" class="'+[b9].join(Y)+'" name="{name}" type="file" value="{value}" />';var M=b6.Component.create({NAME:cq,ATTRS:{template:{valueFn:function(){return bC;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bN,HTML_PARSER:{templateNode:bP+b9},EXTENDS:b6.FormBuilderField,prototype:{getHTML:function(){var A=this;var cD=A.get(aI);var cF=A.get(ch);var cB=A.get(aj);var L=A.get(aC);var cC=A.get(aw);var cE=A.get(aO);return b6.substitute(cD,{id:cF,label:cB,name:L,value:cE});},getNode:function(){var A=this;return b6.Node.create(A.getHTML());},renderSettings:function(){var cJ=this;var cF=cJ.get(bf);var A=cF.get(at);var cK=cF.get(bZ);var cC=cJ.settingsNodesMap;if(!cJ._renderedFileUploadSettings){cJ._renderedFileUploadSettings=true;cJ.fieldSettingsNode=b6.Node.create(C);var cH=b6.Node.create(C);var cD=b6.Node.create(ak);var L=b6.Node.create(a7);var cI=b6.Node.create(cv);L.setContent(cK[Z]);cI.setContent(cJ.get(cy)||cJ.get(Z));cD.append(L);cD.append(cI);cD.appendTo(cH);cJ._renderSettingsFields([{type:"text",name:aj,labelText:"Label",value:cJ.get(aj)},{type:"checkbox",name:X,labelText:"Show label",labelAlign:"left",value:cJ.get(X)},{type:"text",name:aC,labelText:"Name",value:cJ.get(aC)},{type:"checkbox",name:ap,labelText:"Required",labelAlign:"left",value:cJ.get(ap)},{type:"textarea",name:u,labelText:"Tip",value:cJ.get(u)}],cH);var cE=cC.labelSettingNode;cE.on({input:b6.bind(cJ._onLabelInput,cJ)});var cG=cC.showLabelSettingNode;cG.set(K,cJ.get(X));cG.on({change:b6.bind(cJ._onSettingsFieldChange,cJ)});var cB=cC.requiredSettingNode;cB.set(K,cJ.get(ap));cB.on({change:b6.bind(cJ._onSettingsFieldChange,cJ)});cJ.propertiesPanel=new b6.Panel({bodyContent:cH,collapsible:true,title:"Properties"}).render();cJ.fieldSettingsNode.append(cJ.propertiesPanel.get(aR));}A.setContent(cJ.fieldSettingsNode);}}});b6.FormBuilderFileUploadField=M;b6.FormBuilder.types["fileupload"]=b6.FormBuilderFileUploadField;var cg=b6.Lang,cs=b6.Array,aX=cg.isArray,aB=cg.isNumber,bT=cg.isString,bF=cg.sub,bx=function(A){return(A instanceof b6.Node);},a6=function(A){return(A instanceof b6.NodeList);},ba=b6.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),U="add",bW="addNode",aR="boundingBox",cm="button",ck="buttonType",cr="contentBox",aL="container",cj="default",au="defaultLabel",ct="defaultOptions",D="defaultValue",bP=".",be="drag",aD="dragContainer",v="dragContainerNode",b1="dragNodesList",aA="drop",bi="dropContainer",bp="dropContainerNode",bq="field",g="fields",aG="form-builder-field",N="form-builder-multiple-choice-field",r="icon",ch="id",a1="input",ai="item",aj="label",cl="multiple",aC="name",cz="node",T="option",bB="optionTemplate",ae="options",aO="predefinedValue",bt="proxy",cu="remove",bR="reset",ay="submit",Y=" ",aI="template",ad="templateNode",bL="text",Z="type",m="value",z=b6.getClassName,bv=z(bq,a1),P=z(bq,a1,bL),l=z(bq,ae,U),cc=z(bq,ae,ai),cb=z(bq,ae,ai,a1),aP=z(bq,ae,ai,a1,aj),ag=z(bq,ae,ai,a1,m),bc=z(bq,ae,ai,cu),bN=z(aG),b9=z(aG,cz),bQ=z(bH,cj),Q="",aq='<div class="'+[cc,b0,p].join(Y)+'">'+'<input type="text" class="'+[cb,aP,bv,P].join(Y)+'" value="{label}" />'+'<input type="text" class="'+[cb,ag,bv,P].join(Y)+'" value="{value}" />'+'<a href="javascript:;" class="'+bc+'">&nbsp;</a>'+"</div>";
TPL_ADD='<a class="'+l+'" href="javascript:;">Add an option</a>',ENTER="ENTER";var bm=b6.Component.create({NAME:ae,ATTRS:{allowClear:{value:false},defaultLabel:{value:Q},defaultValue:{value:Q},disabled:{validator:aZ,value:false},options:{getter:"_getOptions",validator:aX,value:[]},addNode:{valueFn:function(){return b6.Node.create(TPL_ADD);}}},HTML_PARSER:{addNode:bP+l},UI_ATTRS:[ae,bI],EXTENDS:b6.Widget,prototype:{renderUI:function(){var A=this;var L=A.get(aR);var cB=A.get(bW);if(!cB.inDoc()){L.append(cB);}},bindUI:function(){var A=this;var L=A.get(aR);var cB=A.get(bW);cB.on("click",b6.bind(A._onClickAdd,A));L.delegate("click",b6.bind(A._onClickOptionRemove,A),bP+bc);L.delegate("keypress",b6.bind(A._onKeyPressOption,A),bP+cb);},add:function(cB){var A=this;var L=A.get(ae);L.push(cB);A.set(ae,L);},clear:function(){var A=this;if(A.get(ALLOW_CLEAR)){A.set(ae,[]);}},remove:function(cB){var A=this;var L=A.get(cr);var cC=A._getOptionNode(cB);if(!A.get(bI)){if(cC){cC.remove();}A.items=L.all(bP+cc);}},_addNewOption:function(){var L=this;var cD=null;if(!L.get(bI)){var cB=L.get(cr);var cC=bF(aq,{label:L.get(au),value:L.get(D)});cD=b6.Node.create(cC);cB.append(cD);var A=cD.one(a1);A.focus();A.select();L.items=cB.all(bP+cc);}return cD;},_getOptionNode:function(L){var A=this;return A.items.item(L);},_getOptions:function(cB){var A=this;var L=[];if(A.items){b6.each(A.items,function(cE,cC,cH){var cG=cE.one(bP+aP);var cF=cE.one(bP+ag);var cD=cB[cC]||{};cD.label=cG.val();cD.value=cF.val();L.push(cD);});}else{L=cB;}return L;},_indexOfTarget:function(cB){var A=this;var L=cB.ancestor(bP+cc);return A.items.indexOf(L);},_onClickAdd:function(L){var A=this;A._addNewOption();},_onClickOptionRemove:function(cC){var A=this;var cB=A.get(ae);var L=A._indexOfTarget(cC.target);A.remove(L);},_onKeyPressOption:function(cD){var A=this;var cC=A.get(ae);var cE=cD.currentTarget;var L=A.items;if(cD.isKey(ENTER)){var cB=A._indexOfTarget(cE);var cF=cE.hasClass(ag);if((cB==L.size()-1)&&cF){A._addNewOption();}}},_uiSetDisabled:function(cC){var A=this;var cB=A.get(bW);var L=A.get(aR);cB.toggleClass(af,cC);L.all(bP+bc).toggleClass(af,cC);if(cC){L.all(a1).setAttribute(bI,cC);}else{L.all(a1).removeAttribute(bI);}},_uiSetOptions:function(cC){var A=this;var cB=A.get(cr);var L=[];cs.each(cC,function(cE,cD,cF){L.push(bF(aq,cE));});cB.setContent(L.join(Q));A.items=cB.all(bP+cc);}}});var f=b6.Component.create({NAME:N,ATTRS:{acceptChildren:{value:false,readOnly:true},options:{value:[{label:"option 1",value:"value 1"},{label:"option 2",value:"value 2"},{label:"option 3",value:"value 3"}]},optionTemplate:{value:'<option value="{value}">{label}</option>'}},UI_ATTRS:[h,aO,aj,aC,ae,X],CSS_PREFIX:bN,HTML_PARSER:{templateNode:bP+b9},EXTENDS:b6.FormBuilderField,prototype:{getNode:function(){var A=this;return b6.FormBuilderMultipleChoiceField.superclass.getNode.apply(A,arguments);},renderSettings:function(){var A=this;var L=A.get(ce);b6.FormBuilderMultipleChoiceField.superclass.renderSettings.apply(A,arguments);if(!A._renderedMultipleChoiceSettings){A._renderedMultipleChoiceSettings=true;var cC=b6.Node.create(C);A.optionsPanel=new b6.Panel({bodyContent:cC,collapsible:true,title:"Options"}).render();var cB=b6.Array.indexOf(L,ae)>-1;A.options=new bm({disabled:cB,options:A.get(ae)}).render(cC);A.fieldSettingsNode.append(A.optionsPanel.get(aR));}},saveSettings:function(){var A=this;b6.FormBuilderMultipleChoiceField.superclass.saveSettings.apply(A,arguments);A.set(ae,A.options.get(ae));},_uiSetOptions:function(cD){var A=this;var cC=A.get(ad);var cB=A.get(bB);var L=[];cs.each(cD,function(cF,cE,cG){L.push(bF(cB,cF));});cC.setContent(L.join(Q));}}});b6.FormBuilderMultipleChoiceField=f;b6.FormBuilder.types["multiple-choice"]=b6.FormBuilderMultipleChoiceField;var bX=b6.Lang,aX=bX.isArray,aZ=bX.isBoolean,aB=bX.isNumber,bT=bX.isString,aR="boundingBox",e="bodyContent",K="checked",ax="choice",cr="contentBox",aL="container",bP=".",bJ="",bq="field",g="fields",aG="form-builder-field",bd="form-builder-radio-field",ch="id",r="icon",bj="inline",aj="label",c="labels",aC="name",cz="node",H="optionsContainerNode",aO="predefinedValue",W="radio",aw="size",Y=" ",aI="template",ad="templateNode",m="value",z=b6.getClassName,d=z(bq),b3=z(bq,ax),bN=z(aG),aQ=z(aG,W),b9=z(aG,cz),ca=z(aG,ae,aL),bQ=z(bH,cj),b0=z(bq,c,bj),b4='<li class="'+[G,bn,bN,aQ].join(Y)+'"></li>',aa='<div class="'+ca+'"></div>',aW='<input id="{id}" class="'+[b9,d,b3].join(Y)+'" name="{name}" type="radio" value="{value}" {checked} />',cd='<input type="hidden" />';var i=b6.Component.create({NAME:bd,ATTRS:{name:{value:W},optionTemplate:{value:aW},template:{valueFn:function(){return aW;}},optionsContainerNode:{valueFn:function(){return b6.Node.create(aa);}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bN,HTML_PARSER:{optionsContainerNode:bP+ca,templateNode:bP+b9},EXTENDS:b6.FormBuilderMultipleChoiceField,prototype:{BOUNDING_TEMPLATE:b4,renderUI:function(){var A=this;var L=A.get(cr);var cB=A.get(H);b6.FormBuilderRadioField.superclass.renderUI.apply(A,arguments);L.append(cB);},getNode:function(){var A=this;return b6.Node.create(cd);},_onFieldChange:function(L){var A=this;var cB=L.target;A.set(aO,cB.val());},_uiSetDisabled:function(cB){var A=this;var L=A.get(H);L.all(a1).each(function(cC){if(cB){cC.setAttribute(bI,cB);}else{cC.removeAttribute(bI);}});},_uiSetOptions:function(cD){var A=this;var L=A.get(cr);var cC=A.get(H);var cB=A.get(ad);cC.empty();b6.each(cD,function(cG){var cF=new b6.Field({type:W,disabled:A.get(bI),name:A.get(aC),labelText:cG.label,labelAlign:"left",value:cG.value}).render(cC);var cE=cF.get(cz);if(cG.value==A.get(aO)){cE.set(K,true);}if(A.get(bI)){cE.setAttribute(bI,cD);}else{cE.removeAttribute(bI);}cE.on({change:b6.bind(A._onFieldChange,A)});});},_uiSetPredefinedValue:function(cD){var A=this;var L=A.get(bf);var cB=L.get(at);var cC=cB.one("input[name=predefinedValue]");if(cC){cC.val(cD);}}}});b6.FormBuilderRadioField=i;b6.FormBuilder.types["radio"]=b6.FormBuilderRadioField;var bX=b6.Lang,aX=bX.isArray,aB=bX.isNumber,bT=bX.isString,bx=function(A){return(A instanceof b6.Node);
},a6=function(A){return(A instanceof b6.NodeList);},ba=b6.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),aR="boundingBox",cm="button",ck="buttonType",cr="contentBox",aL="container",ct="defaultOptions",bP=".",be="drag",aD="dragContainer",v="dragContainerNode",b1="dragNodesList",aA="drop",bi="dropContainer",bp="dropContainerNode",bJ="",bq="field",g="fields",aG="form-builder-field",b5="form-builder-select-field",ch="id",r="icon",a1="input",aj="label",cl="multiple",aC="name",cz="node",T="option",ae="options",bb="portalLayout",aO="predefinedValue",bt="proxy",bR="reset",bY="selectedIndex",ay="submit",Y=" ",aI="template",ad="templateNode",bL="text",Z="type",m="value",z=b6.getClassName,bv=z(bq,a1),P=z(bq,a1,bL),bN=z(aG),b9=z(aG,cz),bQ=z(bH,cj),bE='<select id="{id}" class="'+[b9].join(Y)+'" name="{name}" value="{value}"></select>';var ah=b6.Component.create({NAME:b5,ATTRS:{multiple:{setter:b6.DataType.Boolean.parse,value:false},template:{valueFn:function(){return bE;}},templateNode:{valueFn:"getNode"}},UI_ATTRS:b6.FormBuilderField.UI_ATTRS.concat([cl]),CSS_PREFIX:bN,HTML_PARSER:{templateNode:bP+b9},EXTENDS:b6.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var A=this;var cC=A.get(aI);var cE=A.get(ch);var cB=A.get(aj);var L=A.get(aC);var cD=A.get(aO);return b6.substitute(cC,{id:cE,label:cB,name:L,value:cD});},getNode:function(){var A=this;return b6.Node.create(A.getHTML());},renderSettings:function(){var L=this;var cB=L.get(bf);var cD=cB.get(at);var cE=L.settingsNodesMap;b6.FormBuilderSelectField.superclass.renderSettings.apply(L,arguments);if(!L._renderedSelectSettings){L._renderedSelectSettings=true;var cC=L.propertiesPanel.get(e);L._renderSettingsFields([{type:"checkbox",name:cl,labelText:"Multiple",labelAlign:"left"}],cC.item(0));var A=cE["multipleSettingNode"];A.on({change:b6.bind(L._onSettingsFieldChange,L)});A.set(K,L.get(cl));}},_uiSetMultiple:function(cB){var A=this;var L=A.get(ad);if(cB){L.setAttribute(cl,cl);}else{L.removeAttribute(cl);}}}});b6.FormBuilderSelectField=ah;b6.FormBuilder.types["select"]=b6.FormBuilderSelectField;var bX=b6.Lang,aX=bX.isArray,aB=bX.isNumber,bT=bX.isString,bx=function(A){return(A instanceof b6.Node);},a6=function(A){return(A instanceof b6.NodeList);},aR="boundingBox",cr="contentBox",aL="container",bP=".",be="drag",aD="dragContainer",v="dragContainerNode",b1="dragNodesList",aA="drop",bi="dropContainer",bp="dropContainerNode",bJ="",bq="field",g="fields",aG="form-builder-field",a2="form-builder-input-field",ch="id",r="icon",a1="input",aj="label",aC="name",cz="node",bb="portalLayout",aO="predefinedValue",bt="proxy",Y=" ",aI="template",ad="templateNode",bL="text",m="value",bz="width",z=b6.getClassName,bv=z(bq,a1),P=z(bq,a1,bL),bN=z(aG),b9=z(aG,cz),bQ=z(bH,cj),bK='<input id="{id}" class="'+[b9,bv,P].join(Y)+'" name="{name}" type="text" value="{value}" />',aJ={small:25,medium:50,large:100};var by=b6.Component.create({NAME:a2,ATTRS:{template:{valueFn:function(){return bK;}},templateNode:{valueFn:"getNode"},width:{setter:b6.DataType.String.evaluate,value:25}},CSS_PREFIX:bN,HTML_PARSER:{templateNode:bP+b9},EXTENDS:b6.FormBuilderField,prototype:{bindUI:function(){var A=this;b6.FormBuilderTextField.superclass.bindUI.apply(A,arguments);var L=A.get(ad);L.on({input:b6.bind(A._onValueInput,A)});},getHTML:function(){var A=this;var cD=A.get(aI);var cF=A.get(ch);var cB=A.get(aj);var L=A.get(aC);var cE=A.get(aO);var cC=A.get(bz);return b6.substitute(cD,{id:cF,label:cB,name:L,value:cE,width:cC});},getNode:function(){var A=this;return b6.Node.create(A.getHTML());},renderSettings:function(){var cH=this;var cG=cH.get(bf);var cB=cG.get(at);var cF=cH.settingsNodesMap;var cI=cG.get(bZ);b6.FormBuilderTextField.superclass.renderSettings.apply(cH,arguments);if(!cH._renderedInputSettings){cH._renderedInputSettings=true;var cD=cH.propertiesPanel.get(e);var A=0;var cE=-1;var cC=[];b6.each(aJ,function(cL,cK){if(cL==cH.get(bz)){cE=A;}cC.push({labelText:cI[cK],value:cL});A++;});cH._renderSettingsFields([{labelText:"Width",name:bz,options:cC,type:"select",value:cH.get(bz)}],cD.item(0));var L=cF["predefinedValueSettingNode"];L.on({input:b6.bind(cH._onValueInput,cH)});var cJ=cF["widthSettingNode"];cJ.on({change:b6.bind(cH._onWidthChange,cH)});cJ.all(T).item(cE).set(bg,true);}},_onValueInput:function(L){var A=this;var cB=L.target;A.set(aO,cB.val());},_onWidthChange:function(L){var A=this;var cB=L.target;A.set(bz,cB.val());},_uiSetWidth:function(cB){var A=this;var L=A.get(ad);L.addClass(z("w"+cB));L.removeClass(z("w"+A.prevWidth));A.prevWidth=cB;}}});b6.FormBuilderTextField=by;b6.FormBuilder.types["text"]=b6.FormBuilderTextField;var bX=b6.Lang,aX=bX.isArray,aB=bX.isNumber,bT=bX.isString,aR="boundingBox",cr="contentBox",aL="container",bP=".",be="drag",aD="dragContainer",v="dragContainerNode",b1="dragNodesList",aA="drop",bi="dropContainer",bp="dropContainerNode",bJ="",bq="field",g="fields",aG="form-builder-field",cn="form-builder-textarea-field",ch="id",r="icon",aj="label",aC="name",cz="node",bb="portalLayout",aO="predefinedValue",bt="proxy",aw="size",Y=" ",aI="template",ad="templateNode",bL="text",ar="textarea",m="value",z=b6.getClassName,d=z(bq),bu=z(bq,bL),O=z(bq,ar),bN=z(aG),b9=z(aG,cz),bQ=z(bH,cj),am='<textarea id="{id}" class="'+[b9,d,bu,O].join(Y)+'" name="{name}">{value}</textarea>';var aM=b6.Component.create({NAME:cn,ATTRS:{template:{valueFn:function(){return am;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bN,HTML_PARSER:{templateNode:bP+b9},EXTENDS:b6.FormBuilderTextField,prototype:{getHTML:function(){var A=this;var cD=A.get(aI);var cF=A.get(ch);var cB=A.get(aj);var L=A.get(aC);var cC=A.get(aw);var cE=A.get(aO);return b6.substitute(cD,{id:cF,label:cB,name:L,value:cE});},getNode:function(){var A=this;return b6.Node.create(A.getHTML());}}});b6.FormBuilderTextAreaField=aM;b6.FormBuilder.types["textarea"]=b6.FormBuilderTextAreaField;},"@VERSION@",{requires:["aui-datatype","aui-form","aui-panel","aui-tooltip","io","substitute"],skinnable:true});