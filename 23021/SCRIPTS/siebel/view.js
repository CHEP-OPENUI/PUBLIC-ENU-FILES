if(typeof(SiebelApp.S_App.View)==="undefined"){SiebelJS.Namespace("SiebelApp.S_App.View");SiebelApp.S_App.View=(function(){var i=SiebelJS.Dependency("SiebelApp.Utils");var f=SiebelJS.Dependency("SiebelApp.Constants");function a(){var m={};var k;var n;var p;var l;var o={};this.SetActiveAppletInternal=function(q){p=q};this.GetActiveAppletOnLoad=function(){return n};this.GetActiveApplet=function(){return p};this.GetActiveAppletBeforePopup=function(){return l};this.GetAppletMap=function(){return m};this.GetLayouts=function(){return o};this.GetThreadBarPlaceHolder=function(){return f.get("SWE_THREADBAR_IDENTIFIER")};this.RemoveApplet=function(q){if(this.GetActiveApplet()===q){this.SetActiveAppletInternal(null)}if(this.GetActiveAppletOnLoad()===q){this.SetActiveAppletOnLoad(null)}var r=this.GetAppletMap()[q.GetName()];if(r){if(r.EndLife){r.EndLife()}r=null;delete this.GetAppletMap()[q.GetName()];SiebelApp.S_App.ErrorObject.ClearErrorMsg();return true}SiebelApp.S_App.ErrorObject.SetErrorMsg("AppErrNoSuchApplet");return false};this.SetActiveAppletOnLoad=function(q){n=q};this.SetActiveAppletBeforePopup=function(q){l=q};this.DeletePopup=function(){var w=false;var v=[];var z=this.GetAppletMap();for(var q in z){if(z.hasOwnProperty(q)){var r=z[q];if(r.GetPopupApplet()){var x=r.GetPopupApplet();v.push(x);if(x.GetPopupApplet()){while(x&&x.GetPopupApplet()){var s=x.GetPopupApplet();v.push(s);x=s}}var t=v.length;for(var u=t-1;u>=0;u--){var y=v[u];y.GetParentApplet().DeletePopup();this.SetActiveAppletBeforePopup(null);w=true}}}}if(!w){b.call(this,this.GetActiveAppletBeforePopup());this.SetActiveAppletBeforePopup(null)}}}a.prototype.EndLife=function(){var k=this.GetAppletMap();for(var l in k){if(k.hasOwnProperty(l)){if(k[l]&&k[l].EndLife){k[l].EndLife()}delete k[l]}}k=null;this.SetActiveAppletInternal(null);this.SetActiveAppletOnLoad(null)};function b(k){if(k){this.SetActiveAppletInternal(k);k.SetAppletActive(true,k);k.SetFocusDefaultControl(true);k.FocusDefaultControl()}}function j(k){var l=this.GetApplet(k);if(l){l.Initialize();l.ShowOnly();l.ShowSelection()}b.call(this,this.GetActiveAppletOnLoad())}a.prototype.Initialize=function(){var l=null;var k=this.GetAppletMap();for(l in k){if(k.hasOwnProperty(l)){k[l].Initialize()}}if(SiebelApp.S_App.GetEnablePerfHooks()&&SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().TimeGoToView(this.GetName(),"Objects Initialized")}k=this.GetAppletMap();for(l in k){if(k.hasOwnProperty(l)){k[l].ShowOnly()}}if(SiebelApp.S_App.GetEnablePerfHooks()&&SiebelApp.S_App.GetTimer()){SiebelApp.S_App.GetTimer().TimeGoToView(this.GetName(),"Finished Populate")}k=this.GetAppletMap();for(l in k){if(k.hasOwnProperty(l)){k[l].ShowSelection();if(k[l].HasCustomShadow()&&k[l].shadow&&typeof(k[l].shadow.OnLoad)==="function"){k[l].shadow.OnLoad()}}}SiebelApp.S_App.NavCtrlMgr.Show(false);b.call(this,this.GetActiveAppletOnLoad());SiebelApp.S_App.GetCmdMgr().UpdateUIControls()};a.prototype.ExecuteFrame=function(m,l){var k=SiebelApp.S_App.GetRequestDefault();var q=CCFMiscUtil_CreatePropSet();var o=this.GetApplet(m);var n=0;k.SetProperty(f.get("SWE_CMD_ARG"),f.get("SWE_CMD_INVOKE_METHOD_STR"));k.SetProperty(f.get("SWE_METHOD_STR"),"ExecuteFrameQuery");k.SetProperty(f.get("SWE_APPLET_STR"),m);k.SetProperty(f.get("SWE_VIEW_ARG"),this.GetName());for(n=0;n<l.length;n++){var p=o.GetControl(l[n].field);k.SetProperty(p.GetInputName(),l[n].value)}SiebelApp.S_App.CallServer(k,q,true,{async:false})};function h(m){var l;var k=SiebelApp.S_App.GetRequestDefault();k.SetProperty(f.get("SWE_APPLET_STR"),m);k.SetProperty(f.get("SWE_CMD_ARG"),f.get("SWE_GET_APPLET_LAYOUT"));l=i.EncodeToQueryString(k);return SiebelApp.S_App.GetPageURL()+f.get("SWE_ARG_START")+l}a.prototype.HandleRefreshLayout=function(t){var s=t.GetChildByType("api");var o=f.get("SWE_PST_NEW_APPLET");var l=f.get("SWE_PST_NEW_LIST_APPLET");var n=f.get("SWE_PST_NEW_TREEAPPLET");var q=f.get("SWE_PST_APPLET_INFO");var m;if(!i.IsEmpty(s)){var k=s.GetChildByType("vi");var r=k.EnumChildren(true);do{var p=r.GetType();switch(p){case o:case l:case n:m=r.GetChild(0);g.call(this,m);break;case q:g.call(this,r);break}}while((r=k.EnumChildren(false)))}};function g(q){var o=false;o=i.IsTrue(q.GetProperty(f.get("SWE_PROP_IS_PARTIAL")));if(o){var l;var p;var m;l=q.GetProperty(f.get("SWE_PROP_NAME"));p=q.GetProperty(f.get("SWE_PROP_TOGGLE_VAR_NAME"));m=q.GetProperty(f.get("SWE_PROP_VAR_NAME"));if(i.IsEmpty(m)){m=q.GetValue();l=this.GetAppletById(m).GetName()}var k=h(l);if(!i.IsEmpty(p)){SiebelApp.S_App.uiStatus.Busy({target:$("#"+p),mask:true});$("#"+p).attr("id",m).attr("src",k)}else{SiebelApp.S_App.uiStatus.Busy({target:$("#"+m),mask:true});$("#"+m).attr("src",k)}if(!i.IsEmpty(k)&&!i.IsEmpty(p)){c.call(this,this.GetAppletById(p))}var n=this;SiebelApp.contentUpdater.AddCallBack(k,function(){j.call(n,l);SiebelJS.Log("Loaded applet:"+l);SiebelApp.S_App.uiStatus.Free()},this);SiebelApp.contentUpdater.loadContent()}}function c(k){this.RemoveApplet(k);if(k.GetBusComp().GetNotifyObject().GetAppletRegistry().length===1){delete k.GetBusComp().GetNotifyObject();this.GetBusObj().RemoveBusComp(k.GetBusComp());delete k.GetBusComp()}else{k.GetBusComp().GetNotifyObject().DeRegister(k)}delete k}a.prototype.GetApplet=function(k){if(!this.GetAppletMap()[k]){return null}return this.GetAppletMap()[k]};a.prototype.GetAppletById=function(m){var k=this.GetAppletMap();for(var l in k){if(k.hasOwnProperty(l)){if(k[l].GetVarName()==m){return k[l]}}}return null};a.prototype.GetFilesAndProcessObjectInfo=function(l){var k=new $.Deferred();var m=i.GetFileInfoFromPropSet(l);if(m.length>0){var n=this;require(m,function(){try{n.BuildFrame(l)}catch(o){}n=l=null;k.resolveWith(n,["View Process Object"])})}else{this.BuildFrame(l);k.resolveWith(this,["View Process Object"])}m=null;return k.promise()};a.prototype.BuildFrame=function(k){this.ProcessObjectInfo(k)};a.prototype.ProcessObjectInfo=function(D){if(D.GetType()!=f.get("SWE_PST_VIEW_INFO")){return}this.m_busObj=SiebelApp.S_App.GetActiveBusObj();SiebelApp.S_App.GetActiveBusObj().SetView(this);var v=i.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor,this,D);var y=f.get("SWE_PROP_NAME");if(D.PropertyExists(y)){v("GetName","SWE_PROP_NAME")}v("GetTitle","SWE_PROP_TITLE");v("GetPageURL","SWE_PROP_PAGEURL");v("IsCacheable","SWE_PROP_IS_CACHEABLE");v("GetThreadBarHTML","SWE_PROP_THREAD_BAR");v("GetViewType","SWE_PROP_VIEW_TYPE");v("IsCacheable","SWE_PROP_IS_CACHEABLE");v("GetInvokeMethod","SWE_PROP_VIEW_INVOKECOMMAND");v("GetTaskViewTitle","SWE_PROP_VIEW_TASKVIEWTITLE");v("GetTaskStepTitle","SWE_PROP_VIEW_TASKSTEPTITLE");v("GetActiveTask","SWE_PROP_VIEW_ACTIVETASK");v("GetDisableCancelPDQ","SWE_PROP_DISABLE_CANCEL_PDQ");var o=D.EnumChildren(true);if(!o){return}var B=SiebelApp.S_App.Applet;var r=f.get("SWE_PST_NEW_APPLET");var u=f.get("SWE_PST_NEW_LIST_APPLET");var t=f.get("SWE_PST_NEW_CALENDARAPPLET");var H=f.get("SWE_PST_NEW_PLAYBARAPPLET");var G=f.get("SWE_PST_QTP_INFO");var J=f.get("SWE_PST_ACTIVE_APPLET");var E=f.get("SWE_PST_APPLET_INFO");
var l=f.get("SWE_PST_ACCESSIBILITY_INFO");var m=f.get("SWE_PST_NEW_TREEAPPLET");var n;var w=null;do{var k=o.GetType();switch(k){case u:n=new SiebelApp.S_App.ListApplet();d.call(this,n,o.GetChild(0));if(SiebelApp.S_App.GetPopupPM().Get("state")===f.get("POPUP_STATE_VISIBLE")){SiebelApp.S_App.GetPopupPM().Get("currPopups").push(n)}break;case r:case t:case m:n=new SiebelApp.S_App.Applet();d.call(this,n,o.GetChild(0));if(SiebelApp.S_App.GetPopupPM().Get("state")===f.get("POPUP_STATE_VISIBLE")){SiebelApp.S_App.GetPopupPM().Get("currPopups").push(n)}break;case E:var x=o.GetValue();if(!i.IsEmpty(x)){n=this.GetAppletById(x);n.ProcessObjectInfo(o,false);this.GetAppletMap()[n.GetName()]=n}break;case l:var K=i.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor,this,o);K("GetViewSummary","SWE_PROP_VIEW_SUMMARY");if(this.GetViewSummary()===undefined){this.GetViewSummary=function(){return this.GetTitle()}}break;case H:var F=new SiebelApp.S_App.Applet();n=i.Inherit(F,SiebelApp.S_App.Playbarapplet);d.call(this,n,o.GetChild(0));break;case G:var q=i.Curry(SiebelApp.S_App.constructor.prototype.DefineAccessor,this,o);q("GetObjectType","SWE_PROP_QTP_OT");q("GetRepstrName","SWE_PROP_QTP_RN");q("GetUIName","SWE_PROP_QTP_UN");break;case J:w=o;break}}while((o=D.EnumChildren(false)));$("#"+this.GetThreadBarPlaceHolder()).html(this.GetThreadBarHTML());if(w!==null){var z=w.GetProperty(f.get("SWE_PROP_NAME"));var I=this.GetApplet(z);this.SetActiveAppletOnLoad(I);if(SiebelApp.S_App.GetPopupPM().Get("state")===f.get("POPUP_STATE_VISIBLE")&&I){var C=0;var s=SiebelApp.S_App.GetPopupPM().Get("currPopups").length;var p=SiebelApp.S_App.GetPopupPM().Get("currPopups");var A=false;for(C=0;C<s;C++){if(p[C].GetName()===I.GetName()){A=true;break}}if(!A){SiebelApp.S_App.GetPopupPM().Get("currPopups").push(this.GetApplet(z))}}}D=w=null};function d(k,l){k.SetView(SiebelApp.S_App.GetActiveView());k.ProcessObjectInfo(l);e.call(this,k)}a.prototype.GetBusObj=function(){return this.m_busObj};a.prototype.ExecuteUIUpdate=function(){var k=this.GetAppletMap();for(var l in k){if(k.hasOwnProperty(l)){k[l].ExecuteUIUpdate()}}};a.prototype.SetActiveApplet=function(k){if(this.IsAppletActive(k)){return true}var l=this.GetActiveApplet();if(l){if(!l.SetAppletActive(false,k)){return false}}this.SetActiveAppletInternal(k);if(k&&!this.GetActiveApplet().SetAppletActive(true,k)){return false}if(l&&l!==k){l.ResetAppletState()}SiebelApp.S_App.GetCmdMgr().UpdateUIControls();SiebelApp.S_App.ErrorObject.ClearErrorMsg();return true};a.prototype.IsAppletActive=function(k){return(this.GetActiveApplet()===k)};function e(k){this.GetAppletMap()[k.GetName()]=k}a.prototype.SetActiveAppletByName=function(m,l){var k=this.GetApplet(m);return this.SetActiveApplet(k)};a.prototype.GotoSelectedTreeNode=function(){var m=this.GetActiveApplet();if(m&&m.GetParentApplet()){return true}var k=this.GetAppletMap();for(var l in k){if(k.hasOwnProperty(l)){if(k[l]){k[l].FocusSelectedTreeNode()}}}};a.prototype.CycleActiveApplet=function(k){var l=true;var m=null;var q=null;var r=0;var s=[];var w;var u=this.GetActiveApplet();var n;var p;if(u&&u.GetParentApplet()){return true}var v=this.GetAppletMap();for(var t in v){if(v.hasOwnProperty(t)){s[r]=v[t];r++}}for(var o=0;o<s.length;o++){if(l){m=s[o];l=false}if(s[o]===u){w=o;break}q=s[o]}if(!m){SiebelApp.S_App.ErrorObject.SetErrorMsg("ViewErrNoApplets");return false}else{if(!u){return this.SetActiveApplet(m)}}if(k){if(!q){n=s[s.length-1]}else{n=q}}else{if(w<(s.length-1)){n=s[w+1]}else{n=s[0]}}if(!n||(u===n)){return true}p=this.SetActiveApplet(n);if(p){n.SetFocusDefaultControl(true);n.FocusDefaultControl(true)}};return a}())};