/*<ORACLECOPYRIGHT>
* Copyright (C) 1994-2013 Oracle and/or its affiliates. All rights reserved.
* Oracle and Java are registered trademarks of Oracle and/or its affiliates.
* Other names may be trademarks of their respective owners.
* UNIX is a registered trademark of The Open Group.
*
* This software and related documentation are provided under a license agreement
* containing restrictions on use and disclosure and are protected by intellectual property laws.
* Except as expressly permitted in your license agreement or allowed by law, you may not use, copy,
* reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish,
* or display any part, in any form, or by any means. Reverse engineering, disassembly,
* or decompilation of this software, unless required by law for interoperability, is prohibited.
*
* The information contained herein is subject to change without notice and is not warranted to be error-free.
* If you find any errors, please report them to us in writing.
*
* U.S. GOVERNMENT RIGHTS Programs, software, databases, and related documentation and technical data delivered to U.S.
* Government customers are "commercial computer software" or "commercial technical data" pursuant to the applicable
* Federal Acquisition Regulation and agency-specific supplemental regulations.
* As such, the use, duplication, disclosure, modification, and adaptation shall be subject to the restrictions and
* license terms set forth in the applicable Government contract, and, to the extent applicable by the terms of the
* Government contract, the additional rights set forth in FAR 52.227-19, Commercial Computer Software License
* (December 2007). Oracle America, Inc., 500 Oracle Parkway, Redwood City, CA 94065.
*
* This software or hardware is developed for general use in a variety of information management applications.
* It is not developed or intended for use in any inherently dangerous applications, including applications that
* may create a risk of personal injury. If you use this software or hardware in dangerous applications,
* then you shall be responsible to take all appropriate fail-safe, backup, redundancy,
* and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any
* damages caused by use of this software or hardware in dangerous applications.
*
* This software or hardware and documentation may provide access to or information on content,
* products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and
* expressly disclaim all warranties of any kind with respect to third-party content, products, and services.
* Oracle Corporation and its affiliates will not be responsible for any loss, costs,
* or damages incurred due to your access to or use of third-party content, products, or services.
</ORACLECOPYRIGHT>*/
if(typeof(SiebelAppFacade.EditUIRenderer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.EditUIRenderer");define("siebel/epuidetailrenderer",["siebel/phyrenderer"],function(){SiebelAppFacade.EditUIRenderer=(function(){var p=SiebelJS.Dependency("SiebelAppFacade.FacadeConstants");var y=SiebelJS.Dependency("SiebelApp.Utils");var u=SiebelJS.Dependency("SiebelApp.Constants");var w=u.get("SWE_PST_BUTTON_CTRL");var z=u.get("SWE_CTRL_DETAIL");var j=u.get("SWE_PST_COL");var e=u.get("SWE_CTRL_MVG");var o=u.get("SWE_CTRL_PLAINTEXT");var l=u.get("SWE_CTRL_TEXT");var i=u.get("SWE_CTRL_CHECKBOX");var c=u.get("SWE_CTRL_IMAGECONTROL");var g=u.get("SWE_CTRL_LINK");function d(C){SiebelAppFacade.EditUIRenderer.superclass.constructor.call(this,C);var B={};this.SetConsolidatedRecordLayout=function(D){B=D};this.GetConsolidatedRecordLayout=function(){return B}}SiebelJS.Extend(d,SiebelAppFacade.PhysicalRenderer);d.prototype.Init=function(){SiebelAppFacade.EditUIRenderer.superclass.Init.call(this);this.AttachPMBinding("ShowSelection",this.ShowSelectionCustom);this.AttachPMBinding("FieldChange",this.SetControlValueCustom);this.AttachPMBinding("UpdateUI",function(){this.ShowSelectionCustom()})};d.prototype.ShowUI=function(){var F=this.GetPM();var M="#s_"+F.Get("GetFullId")+"_div";var E=$(M).find('div[id="EPUIRecordTemplate"]').html();var H=$(M).find('div[id="EPUIRecordTemplate"]').empty();var N=F.Get("GetControls");var C=F.Get("GetRowListRowCount");var K=[];var D="";var J=F.Get("RecordGroupField");var I;for(I=0;I<C;I++){var B=E;K[I]=s.call(this,B,I);D=D+'<div myRecordIndex="'+I+'" data-role="EPUIRec" class="siebui-epui-tr" ></div>'}var L=$(D);for(I=0;I<K.length;I++){L.filter('div[myRecordIndex="'+I+'"]').append(K[I])}H.replaceWith(L);for(var G in N){if(N.hasOwnProperty(G)){this.ShowRowLevelControl(N[G])}}SiebelAppFacade.EditUIRenderer.superclass.ShowUI.call(this);this.SetConsolidatedRecordLayout($(M).find('div[name="EditPromDetailTab"]').html())};function s(H,E){var D=this.GetPM();var K=D.Get("GetControls");var J=$(H);for(var G in K){if(K.hasOwnProperty(G)){var F=K[G];var C=F.GetInputName();var B=C.substr(0,C.lastIndexOf("_")+1)+E;var I=J.find('[id="'+C+'"]');if(I.length>0){I.attr("id",B)}else{I=J.find('[name="'+C+'"]');I.attr("name",B)}}}return J}function b(B){B.preventDefault();m.call(B.data.ctx,B.data.ctrl,B.target.id)}function v(F){var C=this.GetPM();var D="#s_"+C.Get("GetFullId")+"_div";var E=F.GetInputName().substring(0,F.GetInputName().lastIndexOf("_")+1);switch(F.GetUIType()){case g:var B='a[id^="'+E+'"]';$(B).unbind("click");$(D).off("click",B).on("click",B,{ctx:this,ctrl:F},b);break;case w:var G='[id^="'+E+'"]';$(G).unbind("click");$(D).off("click",G).on("click",G,{ctx:this,ctrl:F},b);break}}function f(E){var D=E.data.ctx.GetPM();var C=$(this).attr("name");var F=E.data.ctrl.GetName();if(typeof(C)==="undefined"){return}var B=parseInt(C.substring(C.lastIndexOf("_")+1),10);if(D.Get("GetSelection")!==B){D.OnControlEvent(u.get("PHYEVENT_SELECT_ROW"),B)}if(D.ExecuteMethod("IsControlReadOnly",F,B)){return}D.OnControlEvent(u.get("PHYEVENT_CONTROL_FOCUS"),E.data.ctrl,$(this).val())}function h(E){var D=E.data.ctx.GetPM();var G=$(this);var C=G.attr("name");var F=E.data.ctrl.GetName();if(typeof(C)==="undefined"){return}var B=parseInt(C.substring(C.lastIndexOf("_")+1),10);if(D.ExecuteMethod("IsControlReadOnly",F,B)){return}D.OnControlEvent(u.get("PHYEVENT_CONTROL_BLUR"),E.data.ctrl,$(this).val())}function k(E){var C=this.GetPM();var D="#s_"+C.Get("GetFullId")+"_div";var B="[name^="+E.GetSpanPrefix()+"]";if($(B).length===0){B="[id^="+E.GetSpanPrefix()+"]"}$(D).on("blur",B,{ctx:this,ctrl:E},h).on("focus",B,{ctx:this,ctrl:E},f)}d.prototype.BindEvents=function(B){SiebelAppFacade.EditUIRenderer.superclass.BindEvents.call(this,B);B=B||this.GetPM().Get("GetControls");for(var D in B){if(B.hasOwnProperty(D)){var C=B[D];if(C.GetControlType()===j){k.call(this,C)}else{v.call(this,C)}}}$('[name="EPUIIntegratedApplet"]').focusin(function(){setTimeout(function(){$('[name="EPUITitleRow"]').addClass("siebui-epui-title-selected")},5)});$('[name="EPUIIntegratedApplet"]').focusout(function(){setTimeout(function(){$('[name="EPUITitleRow"]').removeClass("siebui-epui-title-selected")})})};function r(){var D=this.GetPM();var K=D.Get("GetRecordSet");var N=D.Get("GetControls");var C=D.Get("LastBoundData");var M=C.length;var F=K.length;var B=false;if(M!==F){a.call(this);B=true}else{for(var I=0;I<C.length;I++){for(var L in C[I]){if(C[I].hasOwnProperty(L)&&C[I][L]!==K[I][L]){for(var H in N){if(N.hasOwnProperty(H)){var E=N[H];if(E.GetUIType()===c){continue}var G=E.GetFieldName();if(G===L){var J=D.ExecuteMethod("GetFormattedFieldValue",E,true,I);this.SetControlValueCustom.call(this,E,J,I);break}}}}}}}D.SetProperty("LastBoundData",K);return B}function a(){var C=this.GetPM();var D="#s_"+C.Get("GetFullId")+"_div";$(D).find('div[name="EditPromDetailTab"]').empty();var B=this.GetConsolidatedRecordLayout();$(D).find('div[name="EditPromDetailTab"]').html(B)}d.prototype.BindData=function(I){if(this.inProgress){return false}if(I){var H=r.call(this);if(!H){return}}var D=this.GetPM();var F=D.Get("GetRecordSet");var E=D.Get("GetBeginRow")||0;var G=Number(this.GetPM().Get("GetRowListRowCount"))+Number(E);for(var B=0;(B<G)&&(B<F.length);B++){this.ShowSelectionCustom.call(this,B);var C=$('[data-role="EPUIRec"]').filter('[myrecordindex="'+B+'"]');C.find("[data-role]").each(function(K,L){var J=$(L).attr("data-role");if(!D.ExecuteMethod("CanShowRowLevelControl",J,B)){C.find('[data-role="'+J+'"]').hide()}else{C.find('[data-role="'+J+'"]').show()}})}$('[data-role="EPUIRec"]').slice(F.length).hide();D.SetProperty("LastBoundData",F)};function x(D){var C=this;var B=$('[name^="'+D.GetSpanPrefix()+'"]');if(B.length===0){B=$('[id^="'+D.GetSpanPrefix()+'"]')}switch(D.GetUIType()){case l:B.each(function(E,F){$(this).attr("maxlength",D.GetMaxSize()||256);if(D.GetPopupType()){SiebelAppFacade.ControlBuilder.DetailPopup({target:$(this),className:"applet-form-pick",scope:C,click:function(G){C.GetPM().OnControlEvent(u.get("PHYEVENT_INVOKE_DETAIL_POPUP"),G)},control:D})}C.InjectQTPInfo($(this),D)});break;case o:if(y.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){B.each(function(E,F){$(this).html('<Label tabindex="0" id="'+$(this).attr("id")+'_Label"></Label>')})}break;default:SiebelAppFacade.EditUIRenderer.superclass.ShowUIControl.call(this,D)}}function q(G,D,E,C,H,F){var B='<button id="'+D+'_Ctrl" myRecordIndex="'+C+'" class="'+(H?"appletButton":"appletButtonDis")+'" type="button" data-display="'+E+'" title="'+F+E+'" '+((H===true)?" ":'disabled="disabled"')+">"+E+"</button>";return B}function n(G,C,D,B,H,E){var F='<a  id ="'+C+'_mb" myRecordIndex="'+B+'" tabindex ="'+G.GetSeq()+'" href="#" >'+D+"</a>";return F}function t(F){var J=this;var D=this.GetPM();var B=F.GetMethodName();var C=F.GetDisplayName();var G=D.ExecuteMethod("CanInvokeMethod",B);var H=D.Get("GetAppletLabel");if(H!==""){H=H+":"}var I=F.GetInputName().substring(0,F.GetInputName().lastIndexOf("_")+1);
var E=$("[id^="+I+"]");if(!D.ExecuteMethod("IsRowLevelControl",F.GetName())){return}switch(F.GetUIType()){case z:case w:if((B==="NewFileAttachment")||(B==="ShowQueryAssistant")){SiebelAppFacade.EditUIRenderer.superclass.ShowUIControl.call(this,F)}$(E).each(function(M,O){var P=$(O);var L=P.attr("id");var K=parseInt(L.substring(L.lastIndexOf("_")+1),10);var N=q.call(this,F,L,C,K,G,H);var Q=G?F.GetEnabledBmp():F.GetDisabledBmp();if(Q){P.append('<a  role="button" >'+Q+"</a>").addClass(G?"siebui-btn-icon-e":"siebui-btn-icon-d").children("a").attr("tabindex",G?"0":"-1");J.InjectQTPInfo(P,F)}else{P.replaceWith(N);J.InjectQTPInfo($("#"+L+"_Ctrl"),F)}});E=null;break;case g:$(E).each(function(M,N){var O=$(N);var L=O.attr("id");var K=parseInt(L.substring(L.lastIndexOf("_")+1),10);var Q=G?F.GetEnabledBmp():F.GetDisabledBmp();if(Q){O.append('<a  role="link">'+Q+"</a>").addClass(G?"siebui-link-icon-e":"siebui-link-icon-d");O.children("a").attr("tabindex",G?"0":"-1")}else{var P=n.call(this,F,L,C,K,G,H);O.append(P).addClass("siebui-ctrl-link")}J.InjectQTPInfo($("#"+L+"_mb"),F)});E=null;break;default:SiebelAppFacade.EditUIRenderer.superclass.ShowUIControl.call(this,F)}}d.prototype.ShowRowLevelControl=function(E){if(typeof(E.GetInputName)!=="function"){return}var C=this.GetPM();var D=C.Get("GetRecordSet");var B=this;if(E.GetControlType()===j){x.call(this,E)}else{t.call(this,E)}};d.prototype.ShowSelectionCustom=function(C){if(this.inProgress){return false}var E=this.GetPM(),B=E.Get("GetControls");if(typeof(C)==="undefined"){C=E.Get("GetSelection")}for(var H in B){if(B.hasOwnProperty(H)){var G=B[H];if(G.GetControlType()===j){var F=E.ExecuteMethod("GetFormattedFieldValue",G,true,C);SiebelAppFacade.EditUIRenderer.superclass.EnableControl.call(this,G,E.ExecuteMethod("CanUpdate",H),C);this.SetControlValueCustom(G,F,C)}else{if(E.ExecuteMethod("IsRowLevelControl",G.GetName())&&!E.ExecuteMethod("CanShowRowLevelControl",G.GetName(),C)){var I=G.GetInputName();var D=I.substr(0,I.lastIndexOf("_")+1)+C;elem=$('[id^="'+D+'_"]');if(typeof(elem)!=="undefined"){elem.remove()}}}}}};d.prototype.SetControlValueCustom=function(H,P,J){var E;var F=this.GetPM();var N=this.GetPM().ExecuteMethod("CanUpdate",H.GetName());var L=this.GetPM().ExecuteMethod("CanNavigate",H.GetName());var B=H.GetInputName();var I=H.GetName();var Q=J;if(typeof(Q)==="undefined"){Q=F.Get("GetSelection")}var M=B.substr(0,B.lastIndexOf("_")+1)+Q;var G=$("#"+M)[Q]||$("[name="+M+"]")[Q];if(typeof(G)==="undefined"){G=$("#"+M);if(G.length===0){G=$("[name="+M+"]")}}G=$(G);var O=false;if(!F.ExecuteMethod("CanShowRowLevelControl",I,Q)){G.empty();return}O=F.ExecuteMethod("IsControlReadOnly",I,Q);if(L&&!N&&H.GetUIType()!==e&&!y.IsEmpty(P)){setTimeout(function(){var R='<a  id ="'+M+'_mb"  class = "siebui-ctrl-drilldown"  name = "'+I+'"  rowId = "'+(Q+1)+'"  href="javascript:void(0)" >'+HtmlEncode(P)+"</a>";if(G.next(":not(br,img)").length===1){if(G.next(":not(br,img)").attr("id")!==M+"_mb"||G.next(":not(br,img)").html()!==HtmlEncode(P)){G.next(":not(br,img)").html(R)}}else{G.after(R)}G.next().show();G.hide();G.nextAll("img#"+G.attr("name")+"_icon").hide();G=null},5);return}switch(H.GetUIType()){case o:if(y.IsTrue(SiebelApp.S_App.GetAccessibilityEnhanced())){if($("#"+M+"_Label").length===1){G=$("#"+M+"_Label")}}if(!y.IsEmpty(E)){G.html(E)}else{if(H.IsCalc()){if(H.GetDispMode()==="DontEncodeData"){y.IsEmpty(P)?G.html(""):G.html(P)}else{y.IsEmpty(P)?G.html(""):G.html(HtmlEncode(P))}}else{y.IsEmpty(P)?G.html(""):G.html(HtmlEncode(P))}}break;case i:E=A.call(this,H,P,G);if(!y.IsEmpty(E)&&!y.IsEmpty(G)){var C=G.attr("name");var D=G.attr("id");var K=$(E);if(typeof(C)!=="undefined"&&!y.IsEmpty(C)){K.attr("name",C)}if(typeof(D)!=="undefined"&&!y.IsEmpty(D)){K.attr("id",D)}K.attr("alt",P);K.css("vertical-align","middle");G.replaceWith(K);return}if(P==="Yes"){P="Y"}else{if(P==="No"){P="N"}}G.val(P);if(G.prop("checked")!==y.IsTrue(P)){G.prop("checked",y.IsTrue(P))}break;case c:y.IsEmpty(P)?G.html(""):G.html('<a role="button" tabindex="0" >'+P+"</a>");break;default:y.IsEmpty(P)?G.attr("value",""):G.attr("value",P);break}if(O){G.attr("readOnly",true)}};function A(G,F,E){var B="";var H=SiebelApp.S_App.GetIconMap();var D=H[SiebelApp.S_App.LookupStringCache(G.GetIconMap())];if(D){for(var C=0;C<D.length;C++){if(!y.IsEmpty(F)&&D[C].iconName===F){return D[C].iconImage}if(D[C].iconName==="Default"){B=D[C].iconImage}}if(!y.IsEmpty(B)){return B}}return""}d.prototype.SetCellValue=function(C,D,B){};function m(G,C){var F=G.GetMethodPropSet();var B=F.Clone();var E=this.GetPM();var D;if(G.GetUIType()===w){D=C.substring(0,C.lastIndexOf("_Ctrl"))}else{D=C.substring(0,C.lastIndexOf("_mb"))}if(typeof(D)==="undefined"){return}D=D.substring(D.lastIndexOf("_")+1);B.SetProperty(u.get("SWE_REQ_ROW_ID_STR"),"1");B.SetProperty(u.get("SWE_ROW_STR"),D);this.GetPM().OnControlEvent(u.get("PHYEVENT_INVOKE_CONTROL"),G.GetMethodName(),B)}return d}());return"SiebelAppFacade.EditUIRenderer"})};