// JavaScript File for Facility UIJ
// Automatically produced by siebelrc

var _SWEmsgAry = new Array();
var _SWEbMsgInit = false;

function _SWEgetGlobalMsgAry()
{
   if (! _SWEbMsgInit)
   {
      _SWEbMsgInit = true;
      _SWEmsgAry["IDS_REPEAT_ALLFUTURE"] = "Modify this and all future instances(SBL-UIJ-00213)";
      _SWEmsgAry["IDS_CLIENT_ERROR_FILE_DOWNLOAD"] = "Unable to download file %1.(SBL-UIJ-00429)";
      _SWEmsgAry["IDS_CLIENT_ERROR_FILE_UPLOAD"] = "Unable to upload file %1.(SBL-UIJ-00430)";
      _SWEmsgAry["IDS_CLIENT_ERROR_FILE_OPEN"] = "Unable to open file %1.(SBL-UIJ-00431)";
      _SWEmsgAry["IDS_CLIENT_ERROR_FILE_SAVE"] = "Unable to save file %1.(SBL-UIJ-00432)";
      _SWEmsgAry["IDS_CLIENT_ERROR_FILE_TEMP_DIR"] = "Unable to find a temporary directory to perform file download.(SBL-UIJ-00433)";
      _SWEmsgAry["IDS_CLIENT_ERROR_FUNC_FAIL"] = "Function %1 failed - %2(SBL-UIJ-00434)";
      _SWEmsgAry["IDS_BHC_ERR_CORRECTING"] = "Can not correct your browser settings. Please follow the instruction below to correct manually.(SBL-UIJ-00436)";
      _SWEmsgAry["IDS_CLIENT_ERROR_CALC_DIVIDEBYZERO"] = "Divided by 0.(SBL-UIJ-00451)";
      _SWEmsgAry["IDS_SWE_DELETE_CONFIRM_WARNING"] = "Are you sure you want to delete the selected record in '%1'?";
      _SWEmsgAry["IDS_FILE_DOWNLOAD_PROMPT"] = "You are downloading the file %1.  Would you like to open the file or save it to your computer?";
      _SWEmsgAry["IDS_FILE_CLOSE_PROMPT"] = "The file %1 is still open in another application.  If you would like to keep any changes, please save and close the file in that application and then press the Yes button below.  If you do not want to keep those changes, press the No button.  Press Cancel to abort the current operation.";
      _SWEmsgAry["IDS_FILE_CLOSE_STILL_OPEN"] = "File %1 is still open!";
      _SWEmsgAry["IDS_CLIENT_FILE_DOWNLOAD"] = "File Download";
      _SWEmsgAry["IDS_CLIENT_YES"] = "Yes";
      _SWEmsgAry["IDS_CLIENT_NO"] = "No";
      _SWEmsgAry["IDS_CLIENT_OPEN"] = "Open";
      _SWEmsgAry["IDS_CLIENT_SAVE"] = "Save";
      _SWEmsgAry["IDS_CLIENT_CANCEL"] = "Cancel";
      _SWEmsgAry["IDS_CLIENT_WARNING"] = "Warning";
      _SWEmsgAry["IDS_FILE_CLEANUP_SAVE_PROMPT"] = "We were unable to upload changes you made to attachment %1. If you wish to upload the changes back to the server, please hit OK and save the file to a location known to you. You may re-attach the saved file to the appropriate record.";
      _SWEmsgAry["IDS_FILE_CLEANUP_OPEN_PROMPT"] = "The attachment %1 is still open. If you wish to upload the changes, please save the file to a known location, close the file and hit OK to continue. You may re-attach the saved file to the appropriate record.";
      _SWEmsgAry["IDS_BHC_ADVANCED_INSTRUCTIONS_CHECK"] = "To fix this manually, in Internet Explorer, choose Tools > Internet Options > Advanced Options. Select the %1 check box.";
      _SWEmsgAry["IDS_BHC_ADVANCED_INSTRUCTIONS_UNCHECK"] = "To fix this manually, in Internet Explorer, choose Tools > Internet Options > Advanced Options. Clear the %1 check box.";
      _SWEmsgAry["IDS_BHC_AUTO_CORRECT"] = "Auto &Fix";
      _SWEmsgAry["IDS_BHC_BROWSER"] = "Internet Explorer";
      _SWEmsgAry["IDS_BHC_CHECKED"] = "Checked";
      _SWEmsgAry["IDS_BHC_COL_TYPE"] = "Type";
      _SWEmsgAry["IDS_BHC_COL_REQUIRED_VALUE"] = "Desired Value";
      _SWEmsgAry["IDS_BHC_COL_SETTINGS"] = "Setting";
      _SWEmsgAry["IDS_BHC_COL_USER_VALUE"] = "Current Value";
      _SWEmsgAry["IDS_BHC_CONTINUE"] = "&Skip";
      _SWEmsgAry["IDS_CLIENT_ERROR"] = "Error";
      _SWEmsgAry["IDS_BHC_DLG_TITLE"] = "Siebel Browser Check";
      _SWEmsgAry["IDS_BHC_EXIT"] = "E&xit";
      _SWEmsgAry["IDS_BHC_INSTALL_NEW_VERSION"] = "This setting can not be automatically fixed. Please contact your administrator for assistance in installing the described software.";
      _SWEmsgAry["IDS_BHC_NO_FUTURE_CHECK"] = "Please do not warn me again about recommended settings.";
      _SWEmsgAry["IDS_BHC_OPTIONAL"] = "Recommended";
      _SWEmsgAry["IDS_BHC_QFE"] = "QFE for Internet Explorer";
      _SWEmsgAry["IDS_BHC_REQUIRED"] = "Required";
      _SWEmsgAry["IDS_BHC_SECURITY_INSTRUCTIONS"] = "To fix this manually, in Internet Explorer menu, choose Tools > Internet Options > Security. Then choose the %1 security zone and click on Custom Level. Change %2 to %3.";
      _SWEmsgAry["IDS_BHC_SUN_JRE"] = "Sun Java Runtime";
      _SWEmsgAry["IDS_BHC_TITLE_MAIN"] = "Your browser is not configured correctly to run the Siebel application. Click Auto Fix to update the settings selected below. You may clear the recommended settings before running Auto Fix. You may click Run to run the Siebel application after all the required settings are fixed.";
      _SWEmsgAry["IDS_BHC_UNCHECKED"] = "Unchecked";
      _SWEmsgAry["IDS_BHC_UNABLE_CHECK"] = "Unable to perform browser check (Reason: %s).";
      _SWEmsgAry["IDS_BHC_UNABLE_GET_SECURITY_ZONE"] = "Unable to determine the security zone for URL %s.";
      _SWEmsgAry["IDS_BHC_UNABLE_GET_WINDOW_VER"] = "Failed to retrieve Windows version from this machine.";
      _SWEmsgAry["IDS_BHC_UNABLE_GET_BROWSER_VER"] = "Failed to retrieve Internet Explorer version from this machine.";
      _SWEmsgAry["IDS_BHC_VALUE_UNKNOWN"] = "Unknown";
      _SWEmsgAry["IDS_BHC_DETAILS"] = "Details:";
      _SWEmsgAry["IDS_BHC_FIXED"] = "Fixed";
      _SWEmsgAry["IDS_BHC_VIEW_DETAILS"] = "Please click on a setting to view details.";
      _SWEmsgAry["IDS_BHC_RUN"] = "&Run";
      _SWEmsgAry["IDS_BHC_SKIP_CONFIRM"] = "There are some recommended settings not set correctly. You may experience functionality or performance problems. Are you sure you want to continue?";
      _SWEmsgAry["IDS_BHC_PRNT_BG"] = "This is to enable printing screens to a printer using browser print command.";
      _SWEmsgAry["IDS_BHC_DISABLE_DEBUG"] = "The script debugging feature is typically automatically enabled by Microsoft Visual Studio products.  To improve performance of the Web browser for use with Siebel employee applications, it is recommended to disable script debugging in the Internet Explorer browser.";
      _SWEmsgAry["IDS_BHC_USE_SUN_JAVA"] = "Sun Java is the only supported Java runtime environment.";
      _SWEmsgAry["IDS_BHC_REUSE_WINDOW"] = "Use the same browser window to launch shortcuts.";
      _SWEmsgAry["IDS_BHC_QFE323759"] = "Required for full functionality of the Siebel Application.";
      _SWEmsgAry["IDS_BHC_BROWSER_VERSION"] = "Required for full functionality of the Siebel Application.";
      _SWEmsgAry["IDS_BHC_JAVA_VERSION"] = "This is required for use of Message bar, CTI toolbar, Workflow designer, Personalization business rules designer, Smartscript designer, Org-chart designer, Sales Pipeline Charts and Marketing campaign designer and other features.";
      _SWEmsgAry["IDS_BHC_ACTIVEX"] = "ActiveX needs to be enabled for the Siebel application to function correctly.";
      _SWEmsgAry["IDS_BHC_FILE_DOWNLOAD"] = "This is related to attachments and file import and export.";
      _SWEmsgAry["IDS_BHC_SCRIPT"] = "Scripting is required in HI framework to manage data only interactions with the server and to interact with the browser DOM, ActiveX controls and Java Applets etc,.  In addition, the HI framework also supports browser scripting for data validations etc,.";
      _SWEmsgAry["IDS_BHC_SCRIPT_JAVA"] = "Scripting is used in HI framework to manage data only interactions with the server and to interact with the browser DOM, ActiveX controls and Java Applets etc,.  In addition, the HI framework also supports browser scripting for data validations etc,.";
      _SWEmsgAry["IDS_BHC_SCRIPT_PASTE"] = "Recommended for full functionality of the Siebel Application.";
      _SWEmsgAry["IDS_BHC_LAUNCHING"] = "The Siebel application creates templates that make use of IFRAMES.";
      _SWEmsgAry["IDS_BHC_ALL_FIXED"] = "All settings have been fixed. You can now click Run to start using the Siebel application.";
      _SWEmsgAry["IDS_BHC_SETTING_FIXED"] = "This setting has been fixed.";
      _SWEmsgAry["IDS_BHC_REQ_RESTART"] = "One or more settings fixed requires the browser to be restarted. Please exit the Siebel application, launch a new browser and try to login to the Siebel application again.";
      _SWEmsgAry["IDS_BHC_SUN_JRE_CONFIG"] = "Please install Sun Java Runtime Environment version %s or higher. The correct Sun Java Runtime Environment can be downloaded from <<http://java.sun.com/products/archive/index.html>>. After the installation is completed, please configure Sun Java Runtime Environment version %s or higher as the default for your browser. This is performed in the Java Plug-in Control Panel. Please contact your administrator if you need assistance.";
      _SWEmsgAry["IDS_BHC_QFE314312"] = "Q314312 or above is required for environments using Input Method Editors for eastern languages only, (example: Japanese) on Internet Explorer 5.5. Microsoft makes this patch and related information available through their support organization and/or the following link:  http://support.microsoft.com/default.aspx?scid=kb;EN-US;Q314312.";
      _SWEmsgAry["IDS_BHC_IE55_SP2"] = "Internet Explorer 5.5 Service Pack 2 is a prerequisite for Siebel 7 HI applications running for Internet Explorer 5.5 Microsoft makes this software and related information available through their support organization for customers with extended support contracts and makes additional information available at the following download location:  http://support.microsoft.com/default.aspx?scid=kb;enus;Q303201&ID=303201.";
      _SWEmsgAry["IDS_BHC_IE60_SP1"] = "Internet Explorer 6.0 Service Pack 1 or above is a prerequisite for Siebel 7 HI applications running on Internet Explorer 6.0.Microsoft makes this patch and related information available through their support organization or the following download location:  http://www.microsoft.com/windows/ie/downloads/critical/ie6sp1/default.asp.  The \u201CWindows Update\u201D feature may provide this and other valuable updates to your browser environment.";
      _SWEmsgAry["IDS_BHC_QFE823099"] = "The registry entry workaround described in Q823099 is a prerequisite for Siebel 7 HI applications running against SunOne Web servers using Siebel Web Server compression on Internet Explorer. Microsoft makes the workaround instructions available through their support organization or the following location: http://support.microsoft.com/default.aspx?scid=kb;en-us;q823099.";
      _SWEmsgAry["IDS_BHC_QFE818506"] = "Q818506 or above is a prerequisite for Siebel 7 HI applications running on Internet Explorer 6.0. Microsoft makes this patch and related information available through their support organization or the following download location:  http://www.microsoft.com/downloads/details.aspx?FamilyId=6AD4034B-22DF-4100-B211-5CF7E0EAC5E1&displaylang=en. The \u201CWindows Update\u201D feature may provide this and other valuable updates to your browser environment.";
      _SWEmsgAry["IDS_BHC_QFE824145_IE55"] = "Cumulative Security Update for Internet Explorer 5.5 Service Pack 2 (Q824145) is a prerequisite for Siebel 7 HI applications running for Internet Explorer 5.5. Microsoft makes this software and related information available through their support organization for customers with extended support contracts and makes additional information available at the following download location:  http://www.microsoft.com/downloads/details.aspx?FamilyId=E438AFD4-DF70-448C-8925-1075C8BE6C5E&displaylang=en. The \u201CWindows Update\u201D feature may provide this and other valuable updates to your browser environment.";
      _SWEmsgAry["IDS_BHC_QFE824145_IE60"] = "Cumulative Security Update for Internet Explorer 6 Service Pack 1 (Q824145) or above is required for environments running with Internet Explorer 6.0. Microsoft makes this patch and related information available through their support organization or the following download location: http://www.microsoft.com/downloads/details.aspx?FamilyId=9D8543E9-0E2B-46C9-B6C612DE03860465&displaylang=en. The \u201CWindows Update\u201D feature may provide this and other valuable updates to your browser environment.";
      _SWEmsgAry["IDS_BHC_INSTALL_WORKAROUND"] = "Please click Auto Fix to implement the workaround.";
      _SWEmsgAry["IDS_FILE_IMPORT_PROMPT"] = "You are importing a file to the server.  Please wait...";
      _SWEmsgAry["IDS_BHC_QFE832894_IE60"] = "Cumulative Security Update Q832894 is suggested for Siebel 7 HI applications running for Internet Explorer 6.0.  This update provides drag and drop capability.  Microsoft makes this patch and related information available through their support organization or the following download location:  <<<http://www.microsoft.com/downloads/details.aspx?FamilyId=70530968-B59A-47C0-90D3-0C884910BC97&displaylang=en>>>  Please contact your administrator for assistance in installing the described software.  The 'Windows Update' feature may provide this and other valuable updates to your browser environment.";
      _SWEmsgAry["IDS_CANCELQRY_INITIALTEXT"] = "Retrieving Data...";
      _SWEmsgAry["IDS_CANCELQRY_HEADERTEXT"] = "Querying...";
      _SWEmsgAry["IDS_CANCELQRY_BUTTONTEXT"] = "Cancel";
      _SWEmsgAry["IDS_CANCELQRY_RESPONSETEXT"] = "Canceling Query...";
      _SWEmsgAry["IDS_SWE_CANCELTASK_CONFIRM_WARNING"] = "You are about to Delete or Undo changes to this task. Click \"OK\" to continue.";
      _SWEmsgAry["IDS_SWE_GENERIC_CONFIRM_WARNING"] = "Click \"OK\" to continue the selected action in '%1'.";
      _SWEmsgAry["IDS_SWE_TASKPANE_NOTASKDEFINED"] = "No tasks are defined for this view.";
      _SWEmsgAry["IDS_REPEAT_LABELE1"] = "This appointment is part of a repeating series";
      _SWEmsgAry["IDS_REPEAT_LABELE2"] = "Please choose one of the following";
      _SWEmsgAry["IDS_REPEAT_SERIESONE"] = "Modify this instance";
      _SWEmsgAry["AlarmCurrentTime"] = "Current Time is";
      _SWEmsgAry["AlarmDismiss"] = "Press OK to Dismiss";
      _SWEmsgAry["AlarmSchedule"] = "Scheduled at";
      _SWEmsgAry["AppErrBrowserOldVersion"] = "This application requires, at minimum, Internet Explorer version 5.5 with Service Pack 2. Either your browser is an earlier version or you do not have Service Pack 2 installed. Please download and install the latest version of Internet Explorer from http://www.microsoft.com/ie. Once you have upgraded, you must restart the browser before continuing.";
      _SWEmsgAry["AppErrConnectionFailed"] = "Error connecting to the server.";
      _SWEmsgAry["AppErrInvalidBusObj"] = "Business object specified is not valid.";
      _SWEmsgAry["AppErrInvalidServiceName"] = "Invalid empty service name specified.";
      _SWEmsgAry["AppErrInvalidView"] = "View specified is not valid.";
      _SWEmsgAry["AppErrJVMOldVersion"] = "This Siebel application works optimally with Microsoft Virtual Machine version %1 or higher. Your current version is %2. For the best performance, upgrade to a higher version of  Microsoft Virtual Machine by downloading the latest version from http://www.microsoft.com/ie.";
      _SWEmsgAry["AppErrLocaleAppletNotDownloaded"] = "This Siebel applet is required in order to run the application. Please close the browser and login using a new browser window.";
      _SWEmsgAry["AppErrNeedToDownloadMSXML3"] = "Microsoft \"MSXML Parser 3.0 Release\" or better is required for running this application on your machine. Please download and install \"MSXML Parser 3.0 Release\" from http://www.microsoft.com by searching for it from the Microsoft homepage. After the installation is complete, please start a new browser window to continue with the application.";
      _SWEmsgAry["AppErrNoSuchBusObj"] = "Business object was not found.";
      _SWEmsgAry["AppErrNoSuchService"] = "Service was not found.";
      _SWEmsgAry["AppErrRPCAppletNotDownloaded"] = "The Siebel Server Communications applet is required in order to run this application. Please close the browser and login using a new browser window.";
      _SWEmsgAry["AppletConfirmDeleteRecord"] = "Are you sure you want to delete this record?";
      _SWEmsgAry["AppletErrInvalidControlName"] = "Invalid empty control name specified.";
      _SWEmsgAry["AppletErrInvalidListColName"] = "Invalid empty list column name specified.";
      _SWEmsgAry["AppletErrInvalidRowCount"] = "Invalid number of rows for list applet.";
      _SWEmsgAry["AppletErrInvalidUserPropName"] = "Invalid empty user property name specified.";
      _SWEmsgAry["AppletErrNoBusComp"] = "Applet has no BusComp!";
      _SWEmsgAry["AppletErrNoListCols"] = "No list columns defined for list applet.";
      _SWEmsgAry["AppletErrNoSuchControl"] = "Control '%1' not found in applet.";
      _SWEmsgAry["AppletErrNoSuchListCol"] = "List column '%1' not found in applet.";
      _SWEmsgAry["AppletErrNoSuchMethod"] = "InvokeMethod '%1' not supported by applet.";
      _SWEmsgAry["AppletErrNoView"] = "Applet has no view!";
      _SWEmsgAry["BCErrAtBOF"] = "At beginning of records.";
      _SWEmsgAry["BCErrAtEOF"] = "At end of records.";
      _SWEmsgAry["BCErrCantDelete"] = "Delete not allowed here.";
      _SWEmsgAry["BCErrCantInsert"] = "Insert not allowed here.";
      _SWEmsgAry["BCErrCantUpdate"] = "Updating not allowed here.";
      _SWEmsgAry["BCErrDupAddField"] = "Duplicate addition of field '%1' to BusComp.";
      _SWEmsgAry["BCErrInvalidFieldName"] = "Invalid empty field name specified.";
      _SWEmsgAry["BCErrInvalidNotifyObj"] = "Notification object specified is not valid.";
      _SWEmsgAry["BCErrInvalidNtfyId"] = "Invalid notification ID specified.";
      _SWEmsgAry["BCErrInvalidPickList"] = "PickList specified is not valid.";
      _SWEmsgAry["BCErrInvalidRecord"] = "Record specified is not valid.";
      _SWEmsgAry["BCErrInvalidUserPropName"] = "Invalid empty user property name specified.";
      _SWEmsgAry["BCErrInvalidWSSize"] = "Size specified for working set is invalid.";
      _SWEmsgAry["BCErrMultipleMatchPickList"] = "Specified value matches multiple entries in the bounded pick list.";
      _SWEmsgAry["BCErrNoActiveRow"] = "No row is currently active in the BusComp.";
      _SWEmsgAry["BCErrNoMatchPickList"] = "Specified value does not match the bounded pick list.";
      _SWEmsgAry["BCErrNoSuchField"] = "Field '%1' not found in BusComp.";
      _SWEmsgAry["BCErrNoSuchRowId"] = "Record not found in working set.";
      _SWEmsgAry["BCErrNoTotalsRow"] = "Totals are not currently enabled on the BusComp.";
      _SWEmsgAry["BOErrInvalidBusComp"] = "Business component specified is invalid.";
      _SWEmsgAry["BOErrInvalidBusCompName"] = "Invalid empty business component name.";
      _SWEmsgAry["BOErrNoSuchBusComp"] = "Business component '%1' not found.";
      _SWEmsgAry["CalendarDeleteActivity"] = "Click YES to delete all repeating instances. Click NO to delete this instance only.";
      _SWEmsgAry["CalendarSaveActivity"] = "Click YES to save for all repeating instances. Click NO to save for this instance only.";
      _SWEmsgAry["CmdMgrInvokeMethodError"] = "An Invoke Method [%1] returns error.";
      _SWEmsgAry["IDS_CXP_UI_EBIZ_HELP"] = "Help text goes here<br>so user knows what to do.";
      _SWEmsgAry["IDS_CXP_UI_INCOMPLETE_CONFIG"] = "The configuration you are trying to save is incomplete. \r\n Click the Cancel button to return and complete your configuration.  Click the OK button to continue saving the incomplete configuration.";
      _SWEmsgAry["LocaleErrFormattedToString"] = "Can't convert formatted string to its internal representation.  Please check if your data is in correct format.";
      _SWEmsgAry["LocaleErrStringToFormatted"] = "Can't format string. Please check if your data is in correct format.";
      _SWEmsgAry["LocalePhoneCountry"] = "1";
      _SWEmsgAry["LocalePhoneCtryFormat"] = "+";
      _SWEmsgAry["LocalePhoneExtFormat"] = "x";
      _SWEmsgAry["LongOpPercentageComplete"] = "% complete";
      _SWEmsgAry["NextRecSetToolTip"] = "Next record set";
      _SWEmsgAry["NextRecToolTip"] = "Next record";
      _SWEmsgAry["NotSortableToolTip"] = "(Not Sortable)";
      _SWEmsgAry["PrevRecSetToolTip"] = "Previous record set";
      _SWEmsgAry["PrevRecToolTip"] = "Previous record";
      _SWEmsgAry["RTCBold"] = "Bold";
      _SWEmsgAry["RTCCenter"] = "Center align";
      _SWEmsgAry["RTCCopy"] = "Copy";
      _SWEmsgAry["RTCCut"] = "Cut";
      _SWEmsgAry["RTCExportHTML"] = "Export HTML";
      _SWEmsgAry["RTCFindEOF"] = "End of document.";
      _SWEmsgAry["RTCFindGo"] = "Go";
      _SWEmsgAry["RTCFindReplace"] = "Find/replace";
      _SWEmsgAry["RTCFindTxt"] = "Find";
      _SWEmsgAry["RTCFontColor"] = "Font color";
      _SWEmsgAry["RTCImage"] = "Embed image";
      _SWEmsgAry["RTCImportHTML"] = "Import HTML";
      _SWEmsgAry["RTCIndent"] = "Indent";
      _SWEmsgAry["RTCItalic"] = "Italic";
      _SWEmsgAry["RTCLeft"] = "Left Align";
      _SWEmsgAry["RTCLink"] = "Embed link";
      _SWEmsgAry["RTCOL"] = "Ordered list";
      _SWEmsgAry["RTCOutdent"] = "Outdent";
      _SWEmsgAry["RTCPaste"] = "Paste";
      _SWEmsgAry["RTCPopupCancel"] = "Cancel";
      _SWEmsgAry["RTCPopupConfirm"] = "Do you want to close the editor without committing your changes ?";
      _SWEmsgAry["RTCPopupOK"] = "OK";
      _SWEmsgAry["RTCPopupTitle"] = "Siebel Rich Text Editor";
      _SWEmsgAry["RTCReplaceAll"] = "Replace All";
      _SWEmsgAry["RTCReplaceCount"] = "Total matches: %1";
      _SWEmsgAry["RTCReplaceGo"] = "Go";
      _SWEmsgAry["RTCReplaceTxt"] = "Replace";
      _SWEmsgAry["RTCReplaceWith"] = "with";
      _SWEmsgAry["RTCRight"] = "Right align";
      _SWEmsgAry["RTCStripHTML"] = "Remove HTML tags";
      _SWEmsgAry["RTCStripHtmlConfirm"] = "Warning: this action removes all HTML formatting from this field.  Click 'OK' to proceed or 'Cancel' to abort.";
      _SWEmsgAry["RTCStripIFRAME"] = "Security Alert: IFRAME tag removed.";
      _SWEmsgAry["RTCUL"] = "Unordered list";
      _SWEmsgAry["RTCUnderline"] = "Underline";
      _SWEmsgAry["SWEConfirmDelete"] = "Are you sure you want to delete the current record?";
      _SWEmsgAry["SWEConfirmMoveLargeNumberRecords"] = "You are about to move a large number of records. Are you sure you want to continue?";
      _SWEmsgAry["SWEDataLossWarning"] = "You have unsaved changes on %1.  Continue?";
      _SWEmsgAry["SWEMoreDrilldownInfo"] = "Insufficient information to perform drilldown.";
      _SWEmsgAry["SWENoRecToDelete"] = "No Records to Delete";
      _SWEmsgAry["SWESelectRecFirst"] = "Please select a record first.";
      _SWEmsgAry["SWEWindowsControlWarning"] = "Your version of the Siebel High Interactivity Framework for IE, required for use of this Siebel application, may not be current.  In order to download a current version of the Siebel High Interactivity Framework, please ensure that your browser security settings are correct and then log in to the application again.  Consult your system administrator for details about the Siebel High Interactivity Framework and correct browser settings.";
      _SWEmsgAry["SortAscToolTip"] = "Sort ascending";
      _SWEmsgAry["SortDesToolTip"] = "Sort descending";
      _SWEmsgAry["SortableToolTip"] = "(Sortable)";
      _SWEmsgAry["ViewErrInvalidApplet"] = "Applet object specified is not valid.";
      _SWEmsgAry["ViewErrInvalidAppletName"] = "Invalid empty applet name specified.";
      _SWEmsgAry["ViewErrNoApplets"] = "No applets associated with view.";
      _SWEmsgAry["ViewErrNoSuchApplet"] = "Applet '%1' not found in view.";
      _SWEmsgAry["IDS_BHC_CROSS_DOMAIN_DATA"] = "This is required if the Siebel Server and the Siebel Analytics Web Server are installed on machines in completely different domains.";
      _SWEmsgAry["IDS_SAVE_ONLY_FILE_DOWNLOAD_PROMPT"] = "You are downloading the file %1.  Would you like to save the file to your computer?";
      _SWEmsgAry["IDS_BHC_QFE832894_IE55"] = "Cumulative Security Update Q832894 is suggested for Siebel 7 HI applications running for Internet Explorer 5.5.  This update provides drag and drop capability.  Microsoft makes this software and related information available through their support organization for customers with extended support contracts and makes additional information available at the following download location:  <<<http://www.microsoft.com/downloads/details.aspx?FamilyId=EFFE87F6-7ACA-4A54-B767-5597DDE95C6F&displaylang=en>>>  Please contact your administrator for assistance in installing the described software.  The 'Windows Update' feature may provide this and other valuable updates to your browser environment.";
      _SWEmsgAry["IDS_SWE_CSQ_WATERMARK"] = "<Case Required>";
      _SWEmsgAry["IDS_SWE_CSQ_MSG"] = "The selected field is case sensitive.";
      _SWEmsgAry["IDS_SWE_DELETELOV_CONFIRM_WARNING"] = "WARNING: Deleting this record will cause cascaded deletion of all its children and its grand-children. Are you sure you want to proceed?";
      _SWEmsgAry["IDS_CXP_MULTISELECT_UI_INCOMPLETE"] = "Some of your selections are not validated, Please submit your changes for validation and try again.";
      _SWEmsgAry["IDS_CXP_UI_CUSTOMIZE"] = "Customize";
      _SWEmsgAry["IDS_CXP_UI_EXPLANATION"] = "Explanation";
      _SWEmsgAry["IDS_CXP_UI_EDITFIELD"] = "EditField";
      _SWEmsgAry["IDS_CXP_UI_REMOVE"] = "Remove";
   }
   return _SWEmsgAry;
}
function _SWEgetMessage(key)
{
   ary = _SWEgetGlobalMsgAry();
   return ary[key];
}
