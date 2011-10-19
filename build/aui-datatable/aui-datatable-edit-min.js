AUI.add("aui-datatable-edit",function(au){var ad=au.Lang,be=au.Array,e=ad.isArray,aT=ad.isBoolean,aO=ad.isFunction,J=ad.isObject,aY=ad.isString,aN=ad.String,aL=au.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),a4=function(A){return(A instanceof au.BaseCellEditor);},aq=au.WidgetStdMod,B=au.getClassName,af="add",a5="addOption",aM="baseCellEditor",s="boundingBox",R="calendar",am="cancel",aQ="cell",ay="celleditor",D="checkboxCellEditor",p="checked",aI="click",C="columnset",w="contentBox",aE="data",Q="datatable",M="dateCellEditor",al="dd",V="delete",ap="disk",aG="dotted",aP="dropDownCellEditor",N="edit",Z="editable",f="editor",G="editEvent",aj="editOptions",I="element",aD="elementName",aR="field",c="grip",F="handle",v="hide",aw="hideOnSave",ah="icon",aH="id",o="initEdit",bd="initToolbar",av="initValidator",ab="input",d="inputFormatter",bc="key",ax="label",ar="link",X="mousedown",aa="multiple",m="name",aV="option",a0="options",u="optionsCellEditor",a9="outputFormatter",l="pencil",ak="radioCellEditor",ai="records",k="recordset",ba="remove",a7="rendered",ag="return",n="row",aK="save",aW="selected",aB="selectedAttrName",Y="showToolbar",aZ="submit",S="textAreaCellEditor",y="textCellEditor",P="toolbar",z="unescapeValue",W="validator",a3="value",at="vertical",ae="visible",a1="wrapper",bh=",",i=".",T="",h="#",a6="\n",bb=" ",t=/<br\s*\/?>/gi,E=/[\r\n]/g,b=B(ay,N),g=B(ay,N,af,aV),bg=B(ay,N,al,F),aU=B(ay,N,V,aV),a8=B(ay,N,v,aV),az=B(ay,N,ab,m),aJ=B(ay,N,ab,a3),ao=B(ay,N,ax),q=B(ay,N,ar),aC=B(ay,N,aV,n),U=B(ay,I),aX=B(ay,ax),L=B(ay,aV),x=B(ay,a1),H=B(Q,Z),j=B(ah),ac=B(ah,c,aG,at),aS="<br/>";var a2=function(){};a2.NAME="dataTableCellEditorSupport";a2.ATTRS={editEvent:{setter:"_setEditEvent",validator:aY,value:aI}};au.mix(a2.prototype,{initializer:function(){var A=this;A.after({render:A._afterRenderEditor});A.on(A.get(G),A._onCellEdit);A.after(A._afterUiSetRecordset,A,"_uiSetRecordset");},getCellEditor:function(bi,bk){var A=this;var bj=bk.get(f);var bl=bi.get(aE).editor;if(bj===false||bl===false){return null;}return bl||bj;},getRecordColumnValue:function(A,bi){return A.getValue(bi.get(aR));},syncEditableColumnsUI:function(){var A=this;var bj=A.get(C);var bi=A.get(k);au.each(bj.idHash,function(bl){var bk=bl.get(f);if(a4(bk)){au.all("[headers="+bl.get(aH)+"]").addClass(H);}});au.each(bi.get(ai),function(bk){var bl=bk.get(aE).editor;var bm=a4(bl);au.all(h+bk.get("id")+">td").each(function(bp,bn){var bo=bj.getColumn(bn);if(bl===false){bp.removeClass(H);}else{if(bm||(bo.get(f)!==false)){bp.addClass(H);}}});});},_afterUiSetRecordset:function(bi){var A=this;A.syncEditableColumnsUI();},_afterRenderEditor:function(bi){var A=this;if(!A.events){A.plug(au.Plugin.DataTableEvents);}},_editCell:function(bm){var A=this;var bo=A.get(C);var bn=A.get(k);var bl=bm.column;var bi=bm.record;A.activeColumnIndex=bo.getColumnIndex(bl);A.activeRecordIndex=bn.getRecordIndex(bi);var bj=bm.alignNode||bm.cell;var bk=A.getCellEditor(bi,bl);if(a4(bk)){if(!bk.get(a7)){bk.on({visibleChange:au.bind(A._onEditorVisibleChange,A),save:au.bind(A._onEditorSave,A)});bk.render();}bk.set(a3,A.getRecordColumnValue(bi,bl));bk.show().move(bj.getXY());}},_onCellEdit:function(bi){var A=this;A._editCell(bi);},_onEditorVisibleChange:function(bn){var bi=this;var bl=bn.currentTarget;var bk=bi.selection;if(bk){var bj=bk.getActiveRecord();var bm=bk.getActiveColumn();var A=bi.getCellNode(bj,bm);var bo=bi.getRowNode(bj);if(bn.newVal){bl._syncFocus();}else{bk.select(A,bo);}}},_onEditorSave:function(bk){var A=this;var bj=bk.currentTarget;var bl=A.get(k);bj.set(a3,bk.newVal);var bi=A.selection;if(bi){bl.updateRecordDataByKey(bi.getActiveRecord(),bi.getActiveColumn().get(bc),bk.newVal);}},_setEditEvent:function(A){return aQ+aL(A);}});au.DataTable.CellEditorSupport=a2;au.DataTable.Base=au.Base.create("dataTable",au.DataTable.Base,[au.DataTable.CellEditorSupport]);var r=au.Component.create({NAME:aM,ATTRS:{editable:{value:false,validator:aT},elementName:{value:a3,validator:aY},footerContent:{value:T},hideOnSave:{value:true,validator:aT},inputFormatter:{value:function(A){if(aY(A)){A=A.replace(E,aS);}return A;}},outputFormatter:{value:function(bi){var A=this;if(aY(bi)){if(A.get(z)){bi=aN.unescapeEntities(bi);}bi=bi.replace(t,a6);}return bi;}},showToolbar:{value:true,validator:aT},strings:{value:{edit:"Edit",save:"Save",cancel:"Cancel"}},tabIndex:{value:1},toolbar:{setter:"_setToolbar",validator:J,value:null},unescapeValue:{value:true,validator:aT},validator:{setter:"_setValidator",validator:J,value:null},value:{value:T},visible:{value:false}},EXTENDS:au.Overlay,UI_ATTRS:[Z,Y,a3],prototype:{CONTENT_TEMPLATE:"<form></form>",ELEMENT_TEMPLATE:null,elements:null,validator:null,_hDocMouseDownEv:null,initializer:function(bi){var A=this;A._initEvents();},destructor:function(){var bi=this;var A=bi._hDocMouseDownEv;var bk=bi.toolbar;var bj=bi.validator;if(A){A.detach();}if(bk){bk.destroy();}if(bj){bj.destroy();}},bindUI:function(){var A=this;A.get(s).on(bc,au.bind(A._onEscKey,A),"down:27");},formatValue:function(bi,bj){var A=this;if(aO(bi)){bj=bi.call(A,bj);}return bj;},getValue:function(){var A=this;return A.formatValue(A.get(d),A.getElementsValue());},_initEvents:function(){var A=this;A.publish({cancel:{defaultFn:A._defCancelFn},initEdit:{defaultFn:A._defInitEditFn,fireOnce:true},initValidator:{defaultFn:A._defInitValidatorFn,fireOnce:true},initToolbar:{defaultFn:A._defInitToolbarFn,fireOnce:true},save:{defaultFn:A._defSaveFn}});A.after({render:A._afterRender,visibleChange:au.debounce(A._debounceVisibleChange,350,A)});A.on({"form-validator:submit":au.bind(A._onSubmit,A)});},_afterRender:function(){var A=this;A._handleInitValidatorEvent();A._handleInitToolbarEvent();},_defCancelFn:function(bi){var A=this;A.hide();},_defInitValidatorFn:function(bi){var A=this;A.validator=new au.FormValidator(A.get(W));},_defInitToolbarFn:function(bj){var A=this;var bi=A.get(Z);A.toolbar=new au.Toolbar(A.get(P)).render(A.footerNode);if(bi){A._uiSetEditable(bi);}},_defSaveFn:function(bi){var A=this;
if(A.get(aw)){A.hide();}},_debounceVisibleChange:function(bj){var bi=this;var A=bi._hDocMouseDownEv;if(bj.newVal){if(!A){bi._hDocMouseDownEv=au.getDoc().on(X,au.bind(bi._onDocMouseDownExt,bi));}}else{if(A){A.detach();bi._hDocMouseDownEv=null;}}},_handleCancelEvent:function(){var A=this;A.fire(am);},_handleEditEvent:function(){var A=this;A.fire(N);},_handleInitEditEvent:function(){var A=this;if(A.get(a7)){this.fire(o);}},_handleInitValidatorEvent:function(){var A=this;if(A.get(a7)){this.fire(av);}},_handleInitToolbarEvent:function(){var A=this;if(A.get(a7)&&A.get(Y)){this.fire(bd);}},_handleSaveEvent:function(){var A=this;if(!A.validator.hasErrors()){A.fire(aK,{newVal:A.getValue(),prevVal:A.get(a3)});}},_onDocMouseDownExt:function(bj){var A=this;var bi=A.get(s);if(!bi.contains(bj.target)){A.set(ae,false);}},_onEscKey:function(bi){var A=this;A.hide();},_onSubmit:function(bj){var A=this;var bi=bj.validator;A._handleSaveEvent();if(bi){bi.formEvent.halt();}},_setToolbar:function(bj){var bi=this;var A=bi.getStrings();return au.merge({activeState:false,children:[{label:A[aK],icon:ap,type:aZ},{handler:au.bind(bi._handleCancelEvent,bi),label:A[am]}]},bj);},_setValidator:function(bi){var A=this;return au.merge({boundingBox:A.get(w),bubbleTargets:A},bi);},_uiSetShowToolbar:function(bj){var A=this;var bi=A.footerNode;if(bj){bi.show();}else{bi.hide();}A._handleInitToolbarEvent();},getElementsValue:function(){var A=this;var bi=A.elements;if(bi){return bi.get(a3);}return T;},renderUI:function(){var A=this;if(A.ELEMENT_TEMPLATE){A.elements=au.Node.create(A.ELEMENT_TEMPLATE);A._syncElementsName();A.setStdModContent(aq.BODY,A.elements);}},_defInitEditFn:function(A){},_syncElementsFocus:function(){var A=this;A.elements.selectText();},_syncElementsName:function(){var A=this;A.elements.setAttribute(m,A.get(aD));},_syncFocus:function(){var A=this;au.later(0,A,A._syncElementsFocus);},_uiSetEditable:function(bj){var A=this;var bi=A.toolbar;if(A.get(a7)&&bi){if(bj){bi.add({handler:au.bind(A._handleEditEvent,A),icon:l,label:A.getString(N)},1);}else{bi.remove(1);}}},_uiSetValue:function(bj){var A=this;var bi=A.elements;if(bi){bi.val(A.formatValue(A.get(a9),bj));}}}});au.BaseCellEditor=r;var bf=au.Component.create({NAME:u,ATTRS:{inputFormatter:{value:null},options:{setter:"_setOptions",value:{},validator:J},outputFormatter:{value:null},selectedAttrName:{value:aW,validator:aY},strings:{value:{add:"Add",cancel:"Cancel",addOption:"Add option",edit:"Edit options",editOptions:"Edit option(s)",name:"Name",remove:"Remove",save:"Save",stopEditing:"Stop editing",value:"Value"}}},EXTENDS:au.BaseCellEditor,UI_ATTRS:[a0],prototype:{EDIT_TEMPLATE:'<div class="'+b+'"></div>',EDIT_OPTION_ROW_TEMPLATE:'<div class="'+aC+'">'+'<span class="'+[bg,j,ac].join(bb)+'"></span>'+'<input class="'+az+'" size="7" placeholder="{titleName}" title="{titleName}" type="text" value="{valueName}" /> '+'<input class="'+aJ+'" size="7" placeholder="{titleValue}" title="{titleValue}" type="text" value="{valueValue}" /> '+'<a class="'+[q,aU].join(bb)+'" href="javascript:void(0);">{remove}</a> '+"</div>",EDIT_ADD_LINK_TEMPLATE:'<a class="'+[q,g].join(bb)+'" href="javascript:void(0);">{addOption}</a> ',EDIT_LABEL_TEMPLATE:'<div class="'+ao+'">{editOptions}</div>',editContainer:null,editSortable:null,options:null,initializer:function(){var A=this;A.on(N,A._onEditEvent);A.on(aK,A._onSave);A.after(bd,A._afterInitToolbar);},addNewOption:function(bj,bl){var A=this;var bk=A.editContainer.all(i+aC).last();var bi=au.Node.create(A._createEditOption(bj||T,bl||T));bk.placeAfter(bi);bi.one(ab).focus();},removeOption:function(A){A.remove();},saveOptions:function(){var A=this;var bl=A.editContainer;if(bl){var bk=bl.all(i+az);var bi=bl.all(i+aJ);var bj={};bk.each(function(bo,bn){var bm=bo.val();var bp=bi.item(bn).val();if(bm&&bp){bj[bp]=bm;}});A.set(a0,bj);A._uiSetValue(A.get(a3));A.toggleEdit();}},toggleEdit:function(){var A=this;A.editContainer.toggle();},_createOptions:function(bj){var bn=this;var A=bn.elements;var bl=[];var bi=[];var bk=bn.OPTION_TEMPLATE;var bo=bn.OPTION_WRAPPER;au.each(bj,function(bs,br){var bq={id:au.guid(),label:bs,name:br,value:br};if(bk){bl.push(ad.sub(bk,bq));}if(bo){bi.push(ad.sub(bo,bq));}});var bp=au.NodeList.create(bl.join(T));var bm=au.NodeList.create(bi.join(T));if(bm.size()){bm.each(function(br,bq){br.prepend(bp.item(bq));});A.setContent(bm);}else{A.setContent(bp);}bn.options=bp;},_createEditBuffer:function(){var bi=this;var A=bi.getStrings();var bj=[];bj.push(ad.sub(bi.EDIT_LABEL_TEMPLATE,{editOptions:A[aj]}));au.each(bi.get(a0),function(bk,bl){bj.push(bi._createEditOption(bk,bl));});bj.push(ad.sub(bi.EDIT_ADD_LINK_TEMPLATE,{addOption:A[a5]}));return bj.join(T);},_createEditOption:function(bj,bk){var bi=this;var A=bi.getStrings();return ad.sub(bi.EDIT_OPTION_ROW_TEMPLATE,{remove:A[ba],titleName:A[m],titleValue:A[a3],valueName:bj,valueValue:bk});},_defInitEditFn:function(bi){var A=this;var bj=au.Node.create(A.EDIT_TEMPLATE);bj.delegate("click",au.bind(A._onEditLinkClickEvent,A),i+q);bj.delegate("keydown",au.bind(A._onEditKeyEvent,A),ab);A.editContainer=bj;A.setStdModContent(aq.BODY,bj.hide(),aq.AFTER);A.editSortable=new au.Sortable({container:bj,handles:[i+bg],nodes:i+aC,opacity:".3"}).delegate.dd.plug(au.Plugin.DDConstrained,{constrain:bj,stickY:true});A._syncEditOptionsUI();},_getSelectedOptions:function(){var A=this;var bi=[];A.options.each(function(bj){if(bj.get(A.get(aB))){bi.push(bj);}});return au.all(bi);},_onEditEvent:function(bi){var A=this;A._handleInitEditEvent();A.toggleEdit();A._syncEditOptionsUI();},_onEditLinkClickEvent:function(bi){var A=this;var bj=bi.currentTarget;if(bj.test(i+g)){A.addNewOption();}else{if(bj.test(i+a8)){A.toggleEdit();}else{if(bj.test(i+aU)){A.removeOption(bj.ancestor(i+aC));}}}bi.halt();},_onEditKeyEvent:function(bi){var A=this;var bj=bi.currentTarget;if(bi.isKey(ag)){var bk=bj.next(ab);if(bk){bk.selectText();}else{A.addNewOption();}bi.halt();}},_onSave:function(bi){var A=this;A.saveOptions();},_setOptions:function(bi){var A={};
if(e(bi)){be.each(bi,function(bj){A[bj]=bj;});}else{if(J(bi)){A=bi;}}return A;},_syncEditOptionsUI:function(){var A=this;A.editContainer.setContent(A._createEditBuffer());},_uiSetOptions:function(bi){var A=this;A._uiSetValue(A.get(a3));A._createOptions(bi);A._syncElementsName();},_uiSetValue:function(bj){var A=this;var bi=A.options;if(bi&&bi.size()){bi.set(A.get(aB),false);be.each(be(bj),function(bk){bi.filter('[value="'+bk+'"]').set(A.get(aB),true);});}return bj;}}});au.BaseOptionsCellEditor=bf;var aA=au.Component.create({NAME:y,EXTENDS:au.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<input autocomplete="off" class="'+U+'" type="text" />'}});au.TextCellEditor=aA;var aF=au.Component.create({NAME:S,EXTENDS:au.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<textarea class="'+U+'"></textarea>'}});au.TextAreaCellEditor=aF;var O=au.Component.create({NAME:aP,ATTRS:{multiple:{value:false,validator:aT}},EXTENDS:au.BaseOptionsCellEditor,UI_ATTRS:[aa],prototype:{ELEMENT_TEMPLATE:'<select class="'+U+'"></select>',OPTION_TEMPLATE:'<option value="{value}">{label}</option>',getElementsValue:function(){var A=this;if(A.get(aa)){return A._getSelectedOptions().get(a3);}return A.elements.get(a3);},_syncElementsFocus:function(){var A=this;A.elements.focus();},_uiSetMultiple:function(bj){var A=this;var bi=A.elements;if(bj){bi.setAttribute(aa,aa);}else{bi.removeAttribute(aa);}}}});au.DropDownCellEditor=O;var an=au.Component.create({NAME:D,ATTRS:{selectedAttrName:{value:p}},EXTENDS:au.BaseOptionsCellEditor,prototype:{ELEMENT_TEMPLATE:'<div class="'+U+'"></div>',OPTION_TEMPLATE:'<input class="'+L+'" id="{id}" name="{name}" type="checkbox" value="{value}"/>',OPTION_WRAPPER:'<label class="'+x+'" for="{id}"><span class="'+aX+'">{label}</span></label>',getElementsValue:function(){var A=this;return A._getSelectedOptions().get(a3);},_syncElementsFocus:function(){var A=this;var bi=A.options;if(bi&&bi.size()){bi.item(0).focus();}}}});au.CheckboxCellEditor=an;var K=au.Component.create({NAME:ak,EXTENDS:au.CheckboxCellEditor,prototype:{OPTION_TEMPLATE:'<input class="aui-field-input-choice" id="{id}" name="{name}" type="radio" value="{value}"/>',getElementsValue:function(){var A=this;return A._getSelectedOptions().get(a3)[0];},_syncElementsName:function(){var A=this;var bi=A.options;if(bi){bi.setAttribute(m,A.get(aD));}}}});au.RadioCellEditor=K;var a=au.Component.create({NAME:M,EXTENDS:au.BaseCellEditor,ATTRS:{bodyContent:{value:T},calendar:{setter:"_setCalendar",validator:J,value:null}},prototype:{ELEMENT_TEMPLATE:'<input class="'+U+'" type="hidden" />',initializer:function(){var A=this;A.on("calendar:select",au.bind(A._onDateSelect,A));},getElementsValue:function(){var A=this;return A.calendar.getFormattedSelectedDates().join(bh);},_afterRender:function(){var A=this;au.DateCellEditor.superclass._afterRender.apply(A,arguments);A.calendar=new au.Calendar(A.get(R)).render(A.bodyNode);},_onDateSelect:function(bi){var A=this;A.elements.val(bi.date.formatted.join(bh));},_setCalendar:function(bi){var A=this;return au.merge({bubbleTargets:A},bi);},_uiSetValue:function(bj){var A=this;var bi=A.calendar;if(bi){if(bj&&aY(bj)){bj=bj.split(bh);}A.calendar.set("dates",bj);}}}});au.DateCellEditor=a;},"@VERSION@",{skinnable:true,requires:["aui-calendar","aui-datatable-events","aui-toolbar","aui-form-validator","overlay","sortable"]});