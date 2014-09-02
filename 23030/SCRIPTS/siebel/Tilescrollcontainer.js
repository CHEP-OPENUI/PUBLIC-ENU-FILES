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
if(typeof(SiebelAppFacade.Tilescrollcontainer)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.Tilescrollcontainer");define("siebel/Tilescrollcontainer",["siebel/TileLayoutPR"],function(){SiebelAppFacade.Tilescrollcontainer=(function(){var g=SiebelJS.Dependency("SiebelApp.Constants");var a="easeInOutQuad",i=g.get("PAG_SCROLL_UP"),h=g.get("PAG_SCROLL_DN");function k(l){var n;this.SetScrollcontainer=function(r){n=r};this.GetScrollcontainer=function(){return n};var q=0;this.SetContainerWidth=function(r){q=r};this.GetContainerWidth=function(){return q};var p=0;this.SetTileWidth=function(r){p=r};this.GetTileWidth=function(){return p};var o=0;this.SetContainerHeight=function(r){o=r};this.GetContainerHeight=function(){return o};var m=0;this.SetTileHeight=function(r){m=r};this.GetTileHeight=function(){return m};SiebelAppFacade.Tilescrollcontainer.superclass.constructor.call(this,l)}SiebelJS.Extend(k,SiebelAppFacade.TileLayoutPR);k.prototype.ShowUI=function(){SiebelAppFacade.Tilescrollcontainer.superclass.ShowUI.call(this);this.EnhanceScroller()};k.prototype.EnhanceScroller=function(){var m=this.GetPM(),l=m.Get("GetFullId"),q=null,p=((this.GetTileScrollDirection()||"horizontal").toLowerCase()==="horizontal"),o="<div id='"+l+"_scrollarea' class='siebui-tile-scrollarea'></div>";q='<div id="tile-${DIRECTION}-scroll" class="siebui-tile-${DIRECTION}-scroll siebui-tile-scroll-d"><a class="siebui-tile-scroll-anchor" href="#"/></div>';if(p){this.GetContainer().children("div.siebui-tile-list").after(o);$("#"+l+"_scrollarea").append(q.replace(/\${DIRECTION}/g,"left")+q.replace(/\${DIRECTION}/g,"right"))}else{this.GetContainer().children("div.siebui-tile-list").before(q.replace(/\${DIRECTION}/g,"up")).after(q.replace(/\${DIRECTION}/g,"down")).end().after(o)}if(!this.GetVisibleTileScrollType()){var n='<div class="siebui-tile-slider-label"><div id=\''+l+"_scrollamount' class='siebui-scroll-amount'></div><div id='"+l+"_scrollslider' class='siebui-tile-scrollspeed-slider'></div>";$("#"+l+"_scrollarea").after(n);$(function(){$("#"+l+"_scrollslider").slider({value:m.Get("Default Tile Scroll Speed")?parseInt(m.Get("Default Tile Scroll Speed")):10,min:10,max:100,step:10,slide:function(r,s){$("#"+m.Get("GetFullId")+"_scrollamount").html(s.value)},stop:function(s,t){var r=CCFMiscUtil_CreatePropSet();r.SetProperty("Key","Default Tile Scroll Speed");r.SetProperty("Default Tile Scroll Speed",(t.value).toString());m.OnControlEvent(g.get("PHYEVENT_INVOKE_CONTROL"),m.Get(g.get("SWE_MTHD_UPDATE_USER_PREF")),r);m.SetProperty("Default Tile Scroll Speed",(t.value).toString())}});$("#"+l+"_scrollamount").html($("#"+l+"_scrollslider").slider("value"))})}this.BindScrollEvents()};k.prototype.UpdateScrollArrows=function(){var n=this.GetTileScrollDirection();var p=this.GetPM();var o=$("#"+p.Get("GetFullId")+"_"+g.get("SWE_TILE_CONTAINER"));var m=0;var l=p.Get("GetRecordSet")?p.Get("GetRecordSet").length:0;if(!n||n.toLowerCase()==="horizontal"){m=parseInt((o.width()||$("#s_"+p.Get("GetFullId")+"_div").width())/this.GetTileWidth(),10);if(l>m){o.find("#tile-right-scroll").removeClass("siebui-tile-scroll-d")}else{if(l===m&&p.ExecuteMethod("CanInvokeScrollMethod","ScrollNextData")){o.find("#tile-right-scroll").removeClass("siebui-tile-scroll-d")}else{o.find("#tile-right-scroll").addClass("siebui-tile-scroll-d")}}}else{m=parseInt(this.GetContainerHeight()/this.GetTileHeight(),10);if(l===0||l<=m){o.find("#tile-down-scroll").addClass("siebui-tile-scroll-d")}else{o.find("#tile-down-scroll").removeClass("siebui-tile-scroll-d")}}};k.prototype.EnableScrollArrow=function(l){if(l.length>0){l.removeClass("siebui-tile-scroll-d")}};function f(l,m,p,n,y,r,u){var s=false;var q=this.GetPM();var x=0;var t=0;var w=0;var v;var o;$("#"+q.Get("GetFullId")+"_"+g.get("SWE_TILE_CONTAINER")).find(l).bind("mousedown",{ctx:this},function(A){s=true;if($(this).hasClass("siebui-tile-scroll-d")){return}A.data.ctx.EnableScrollArrow($("#"+q.Get("GetFullId")+"_"+g.get("SWE_TILE_CONTAINER")).find(m));switch(y){case h:o=u==="marginLeft"?"-":"+";break;case i:o=u==="marginLeft"?"+":"-";break}z(A.data.ctx.GetContainer().children("div.siebui-tile-list"),o+"="+q.Get("Default Tile Scroll Speed")+"px");function z(E,F){if(u==="marginLeft"){x=A.data.ctx.GetContainerWidth();if(y===i){t=E.css(r);v=parseInt(t,10)>=0}else{t=-(parseInt(E.css(r),10))+A.data.ctx.GetTileWidth();v=t>=x}}else{t=E.scrollTop();w=A.data.ctx.GetContainerHeight();if(y===i){v=t<=0}else{v=t>=w}}if(v){s=false;var B=q.ExecuteMethod("CanInvokeScrollMethod",p);if(!B){$("#s_"+A.data.ctx.GetPM().Get("GetFullId")+"_div").find(l).addClass("siebui-tile-scroll-d")}q.OnControlEvent(g.get("PHYEVENT_VSCROLL_LIST"),y)}else{var C={};C[u]=F;var D=this;E.animate(C,10,function(){if(u!=="marginLeft"&&y===h&&t===E.scrollTop()){$("#"+q.Get("GetFullId")+"_"+g.get("SWE_TILE_CONTAINER")).find(l).addClass("siebui-tile-scroll-d");return}if(s){z(E,F)}})}}});$("#"+q.Get("GetFullId")+"_"+g.get("SWE_TILE_CONTAINER")).find(l).bind("mouseup",{ctx:this},function(z){s=false})}function d(){var l=this.GetPM();var m=this.GetVisibleTileScrollType();if(m&&m.toLowerCase()==="scrollvisibletiles"){var n=$("#"+l.Get("GetFullId")+"_"+g.get("SWE_TILE_CONTAINER"));n.data("Scroll_Index",0);n.find("#tile-left-scroll").bind("click",{ctx:this,horizontal:true},function(p){var o=this;b.call(p.data.ctx,p.data.ctx.GetContainer(),function(){c.call(o,p);o=null})}).end().find("#tile-right-scroll").bind("click",{ctx:this,horizontal:true},function(p){var o=this;b.call(this,p.data.ctx.GetContainer(),function(){e.call(o,p);o=null})});n.find("#tile-up-scroll").bind("click",{ctx:this,horizontal:false},function(p){var o=this;b.call(p.data.ctx,p.data.ctx.GetContainer(),function(){c.call(o,p);o=null})}).end().find("#tile-down-scroll").bind("click",{ctx:this,horizontal:false},function(p){var o=this;b.call(this,p.data.ctx.GetContainer(),function(){e.call(o,p);o=null})})}}k.prototype.BindScrollEvents=function(){var l=this.GetTileScrollDirection();var m=this.GetVisibleTileScrollType();if(m&&m.toLowerCase()==="scrollvisibletiles"){d.call(this)}else{if(!l||l.toLowerCase()==="horizontal"){f.call(this,"#tile-left-scroll","#tile-right-scroll","ScrollPrevData","ScrollNextData",i,"margin-left","marginLeft");f.call(this,"#tile-right-scroll","#tile-left-scroll","ScrollNextData","ScrollPrevData",h,"margin-left","marginLeft")}else{f.call(this,"#tile-up-scroll","#tile-down-scroll","ScrollPrevData","ScrollNextData",i,"","scrollTop");f.call(this,"#tile-down-scroll","#tile-up-scroll","ScrollNextData","ScrollPrevData",h,"","scrollTop")}}};k.prototype.SetFirstTileId=function(o,p){var m=this.GetTileScrollDirection();var l=$("#"+o).outerHeight(true);var n=$("#"+o).outerWidth(true);this.SetTileHeight($("#"+o).outerHeight(true));this.SetTileWidth($("#"+o).outerWidth(true));if(!m||m.toLowerCase()==="horizontal"){this.SetContainerHeight(l*p);this.SetContainerWidth(parseInt(n*p/2),10)}else{if(parseInt(this.GetContainer().children("div.siebui-tile-list").css("max-height"),10)>0){if(this.GetContainer().children("div.siebui-tile-list").outerHeight(true)<parseInt(this.GetContainer().children("div.siebui-tile-list").css("max-height"),10)){this.SetContainerHeight(this.GetContainer().children("div.siebui-tile-list").outerHeight(true))
}else{this.SetContainerHeight(parseInt(this.GetContainer().children("div.siebui-tile-list").css("max-height"),10))}}else{this.SetContainerHeight(l*p)}}if(!this.GetTileScrollDirection()||this.GetTileScrollDirection().toLowerCase()==="horizontal"){this.GetContainer().children("div.siebui-tile-list").outerHeight(l)}this.UpdateScrollArrows()};k.prototype.SetNewscrollpos=function(m,q){var n=this.GetPM();var s=this.GetTileScrollDirection();var o=-1;var p=0;var r=0;var v=this.GetContainerHeight();var u=this.GetContainerWidth();var t=(!s||s.toLowerCase()==="horizontal")?this.GetContainerWidth():this.GetContainerHeight();var l=n.Get("GetRecordSet").length;if(m===null||q===0){return}if(q<0){q=-q}if(this.GetVisibleTileScrollType()){var w=this.GetContainer().data("Scroll_Index");w=m?(w-Number(q)):(w+Number(q));this.GetContainer().data("Scroll_Index",w);if(!s||s.toLowerCase()==="horizontal"){this.GetContainer().children("div.siebui-tile-list").css("marginLeft",("-"+(w*this.GetTileWidth())+"px"))}else{this.GetContainer().children("div.siebui-tile-list").scrollTop(w*this.GetTileHeight())}return}if(!s||s.toLowerCase()==="horizontal"){r=this.GetContainer().children("div.siebui-tile-list").offset().left;if(!m){p=-(this.GetContainerWidth()-this.GetTileWidth())}else{p=0}}else{r=this.GetContainer().children("div.siebui-tile-list").scrollTop();if(!m){o=this.GetOffset(0,q);p=r+o}else{o=this.GetOffset(l-q-1,l-1);p=r-o}if(p<0){p=0}else{if(p>t){p=t}}}p=String(p)+"px";if(!s||s.toLowerCase()==="horizontal"){this.GetContainer().children("div.siebui-tile-list").animate({marginLeft:p},2)}else{this.GetContainer().children("div.siebui-tile-list").scrollTop(0);this.GetContainer().children("div.siebui-tile-list").animate({scrollTop:p},2)}};k.prototype.GetOffset=function(t,q){t=t+this.m_Offset;q=q+this.m_Offset;var p=this.GetPM();var r=this.GetTileScrollDirection();var l;var m=p.Get("GetRecordSet").length;var s=this.GetContainer().children("div.siebui-tile-list").height();var o=p.Get("GetFullId");var n=o+"_tile_"+t;var u=o+"_tile_"+q;if(!r||r.toLowerCase()==="horizontal"){u=o+"_tile_"+(q-1);l=$("#"+u).offset().left}else{l=$("#"+u).offset().top-$("#"+n).offset().top}return l};function e(p){if($(this).hasClass("siebui-tile-scroll-d")){j.call(p.data.ctx,p.data.ctx.GetContainer());return}var q=p.data.ctx,s=p.data.horizontal,l=(s?"#tile-left-scroll":"#tile-up-scroll");q.EnableScrollArrow(q.GetContainer().find(l));var o=null,n=q.GetPM().Get("GetRecordSet").length,m=q.GetContainer().data("Scroll_Index");if(s){o=parseInt((q.GetContainer().width()||$("#s_"+q.GetPM().Get("GetFullId")+"_div").width())/q.GetTileWidth(),10)}else{o=parseInt(q.GetContainerHeight()/q.GetTileHeight(),10)}if((m+(2*o))>n){if(q.GetPM().ExecuteMethod("CanInvokeScrollMethod","ScrollNextData")){q.GetPM().OnControlEvent(g.get("PHYEVENT_VSCROLL_LIST"),h);m=q.GetContainer().data("Scroll_Index")}}if((m+(2*o))>n){m-=((m+(2*o))-n)}m+=o;if((m+o)>=n&&!q.GetPM().ExecuteMethod("CanInvokeScrollMethod","ScrollNextData")){$(this).addClass("siebui-tile-scroll-d")}q.GetContainer().data("Scroll_Index",m);var r={};if(s){r.marginLeft="-"+(m*q.GetTileWidth())+"px"}else{r.scrollTop=(m*q.GetTileHeight())+"px"}q.GetContainer().children("div.siebui-tile-list").animate(r,{duration:2000,easing:a,complete:function(){j.call(q,q.GetContainer())}})}function c(o){if($(this).hasClass("siebui-tile-scroll-d")){j.call(o.data.ctx,o.data.ctx.GetContainer());return}var p=o.data.ctx,r=o.data.horizontal,l=(r?"#tile-right-scroll":"#tile-down-scroll");p.EnableScrollArrow(p.GetContainer().find(l));var n=null,m=p.GetContainer().data("Scroll_Index");if(r){n=parseInt((p.GetContainer().width()||$("#s_"+p.GetPM().Get("GetFullId")+"_div").width())/p.GetTileWidth(),10)}else{n=parseInt(p.GetContainerHeight()/p.GetTileHeight(),10)}if((m-n)<0){if(p.GetPM().ExecuteMethod("CanInvokeScrollMethod","ScrollPrevData")){p.GetPM().OnControlEvent(g.get("PHYEVENT_VSCROLL_LIST"),i);m=p.GetContainer().data("Scroll_Index")}}if((m-n)<0){m-=(m-n)}m-=n;if(m==0&&!p.GetPM().ExecuteMethod("CanInvokeScrollMethod","ScrollPrevData")){$(this).addClass("siebui-tile-scroll-d")}p.GetContainer().data("Scroll_Index",m);var q={};if(r){q.marginLeft="-"+(m*p.GetTileWidth())+"px"}else{q.scrollTop=(m*p.GetTileHeight())+"px"}p.GetContainer().children("div.siebui-tile-list").animate(q,{duration:2000,easing:a,complete:function(){j.call(p,$(this).parent())}})}function b(m,l){m.queue("Scroll_Queue",l);if(m.queue("Scroll_Queue").length===1&&!m.data("Scroll_Pending")){m.data("Scroll_Pending",true);m.dequeue("Scroll_Queue")}m=null}function j(l){if(l.queue("Scroll_Queue").length===0){l.removeData("Scroll_Pending")}l.dequeue("Scroll_Queue");l=null}return k}());return"SiebelAppFacade.Tilescrollcontainer"})};