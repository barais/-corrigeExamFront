"use strict";(self.webpackChunkgrade_scope_istic=self.webpackChunkgrade_scope_istic||[]).push([[797],{6797:(ct,v,o)=>{o.r(v),o.d(v,{FinalResultModule:()=>rt});var F=o(2920),r=o(4190),p=o(6604),S=o(2572),d=o(9831),t=o(9212),g=o(4382),Z=o(3324),l=o(6223),_=o(6814),m=o(5597),f=o(8423),U=o(5318);const C=n=>({id:n});function I(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"form",1),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.confirmDelete(a.finalResult.id))}),t._uU(1,"\n  "),t.TgZ(2,"div",2),t._uU(3,"\n    "),t.TgZ(4,"h4",3),t._uU(5,"Confirm delete operation"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"button",4),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.cancel())}),t._uU(8,"\xd7"),t.qZA(),t._uU(9,"\n  "),t.qZA(),t._uU(10,"\n\n  "),t.TgZ(11,"div",5),t._uU(12,"\n    "),t._UZ(13,"jhi-alert-error"),t._uU(14,"\n\n    "),t.TgZ(15,"p",6),t._uU(16,"\n      Are you sure you want to delete this Final Result?\n    "),t.qZA(),t._uU(17,"\n  "),t.qZA(),t._uU(18,"\n\n  "),t.TgZ(19,"div",7),t._uU(20,"\n    "),t.TgZ(21,"button",8),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.cancel())}),t._uU(22,"\n      "),t._UZ(23,"fa-icon",9),t._uU(24,"\xa0"),t.TgZ(25,"span",10),t._uU(26,"Cancel"),t.qZA(),t._uU(27,"\n    "),t.qZA(),t._uU(28,"\n\n    "),t.TgZ(29,"button",11),t._uU(30,"\n      "),t._UZ(31,"fa-icon",12),t._uU(32,"\xa0"),t.TgZ(33,"span",13),t._uU(34,"Delete"),t.qZA(),t._uU(35,"\n    "),t.qZA(),t._uU(36,"\n  "),t.qZA(),t._uU(37,"\n"),t.qZA()}if(2&n){const e=t.oxw();t.xp6(15),t.Q6J("translateValues",t.VKq(1,C,e.finalResult.id))}}let j=(()=>{class n{finalResultService;activeModal;finalResult;constructor(e,i){this.finalResultService=e,this.activeModal=i}cancel(){this.activeModal.dismiss()}confirmDelete(e){this.finalResultService.delete(e).subscribe(()=>{this.activeModal.close("deleted")})}static \u0275fac=function(i){return new(i||n)(t.Y36(g.O),t.Y36(Z.Kz))};static \u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","finalResultDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["id","jhi-delete-finalResult-heading","jhiTranslate","gradeScopeIsticApp.finalResult.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-finalResult","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(i,a){1&i&&(t.YNc(0,I,38,3,"form",0),t._uU(1,"\n")),2&i&&t.Q6J("ngIf",a.finalResult)},dependencies:[l._Y,l.JL,l.F,_.O5,m.BN,f.P,U.A],encapsulation:2})}return n})();var T=o(8907),J=o(7),N=o(2941),L=o(5607);function D(n,u){1&n&&(t.TgZ(0,"div",12),t._uU(1,"\n    "),t.TgZ(2,"span",13),t._uU(3,"No finalResults found"),t.qZA(),t._uU(4,"\n  "),t.qZA())}const Q=n=>["/student",n,"view"];function P(n,u){if(1&n&&(t.TgZ(0,"div"),t._uU(1,"\n              "),t.TgZ(2,"a",29),t._uU(3),t.qZA(),t._uU(4,"\n            "),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(2,Q,e.studentId)),t.xp6(),t.Oqu(e.studentName)}}const k=n=>["/exam",n,"view"];function O(n,u){if(1&n&&(t.TgZ(0,"div"),t._uU(1,"\n              "),t.TgZ(2,"a",29),t._uU(3),t.qZA(),t._uU(4,"\n            "),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(2,k,e.examId)),t.xp6(),t.Oqu(e.examName)}}const A=n=>["/final-result",n,"view"],w=n=>["/final-result",n,"edit"];function B(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"tr",28),t._uU(1,"\n          "),t.TgZ(2,"td"),t._uU(3,"\n            "),t.TgZ(4,"a",29),t._uU(5),t.qZA(),t._uU(6,"\n          "),t.qZA(),t._uU(7,"\n          "),t.TgZ(8,"td"),t._uU(9),t.qZA(),t._uU(10,"\n          "),t.TgZ(11,"td"),t._uU(12,"\n            "),t.YNc(13,P,5,4,"div",11),t._uU(14,"\n          "),t.qZA(),t._uU(15,"\n          "),t.TgZ(16,"td"),t._uU(17,"\n            "),t.YNc(18,O,5,4,"div",11),t._uU(19,"\n          "),t.qZA(),t._uU(20,"\n          "),t.TgZ(21,"td",30),t._uU(22,"\n            "),t.TgZ(23,"div",31),t._uU(24,"\n              "),t.TgZ(25,"button",32),t._uU(26,"\n                "),t._UZ(27,"fa-icon",33),t._uU(28,"\n                "),t.TgZ(29,"span",34),t._uU(30,"View"),t.qZA(),t._uU(31,"\n              "),t.qZA(),t._uU(32,"\n\n              "),t.TgZ(33,"button",35),t._uU(34,"\n                "),t._UZ(35,"fa-icon",36),t._uU(36,"\n                "),t.TgZ(37,"span",37),t._uU(38,"Edit"),t.qZA(),t._uU(39,"\n              "),t.qZA(),t._uU(40,"\n\n              "),t.TgZ(41,"button",38),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.delete(s))}),t._uU(42,"\n                "),t._UZ(43,"fa-icon",39),t._uU(44,"\n                "),t.TgZ(45,"span",40),t._uU(46,"Delete"),t.qZA(),t._uU(47,"\n              "),t.qZA(),t._uU(48,"\n            "),t.qZA(),t._uU(49,"\n          "),t.qZA(),t._uU(50,"\n        "),t.qZA()}if(2&n){const e=u.$implicit;t.xp6(4),t.Q6J("routerLink",t.VKq(7,A,e.id)),t.xp6(),t.Oqu(e.id),t.xp6(4),t.Oqu(e.note),t.xp6(4),t.Q6J("ngIf",e.studentId),t.xp6(5),t.Q6J("ngIf",e.examId),t.xp6(7),t.Q6J("routerLink",t.VKq(9,A,e.id)),t.xp6(8),t.Q6J("routerLink",t.VKq(11,w,e.id))}}function Y(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",14),t._uU(1,"\n    "),t.TgZ(2,"table",15),t._uU(3,"\n      "),t.TgZ(4,"thead"),t._uU(5,"\n        "),t.TgZ(6,"tr",16),t.NdJ("predicateChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.predicate=a)})("ascendingChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.ascending=a)})("sortChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.loadPage())}),t._uU(7,"\n          "),t.TgZ(8,"th",17)(9,"span",18),t._uU(10,"ID"),t.qZA(),t._uU(11," "),t._UZ(12,"fa-icon",19),t.qZA(),t._uU(13,"\n          "),t.TgZ(14,"th",20),t._uU(15,"\n            "),t.TgZ(16,"span",21),t._uU(17,"Note"),t.qZA(),t._uU(18," "),t._UZ(19,"fa-icon",19),t._uU(20,"\n          "),t.qZA(),t._uU(21,"\n          "),t.TgZ(22,"th",22),t._uU(23,"\n            "),t.TgZ(24,"span",23),t._uU(25,"Student"),t.qZA(),t._uU(26," "),t._UZ(27,"fa-icon",19),t._uU(28,"\n          "),t.qZA(),t._uU(29,"\n          "),t.TgZ(30,"th",24),t._uU(31,"\n            "),t.TgZ(32,"span",25),t._uU(33,"Exam"),t.qZA(),t._uU(34," "),t._UZ(35,"fa-icon",19),t._uU(36,"\n          "),t.qZA(),t._uU(37,"\n          "),t._UZ(38,"th",26),t._uU(39,"\n        "),t.qZA(),t._uU(40,"\n      "),t.qZA(),t._uU(41,"\n      "),t.TgZ(42,"tbody"),t._uU(43,"\n        "),t.YNc(44,B,51,13,"tr",27),t._uU(45,"\n      "),t.qZA(),t._uU(46,"\n    "),t.qZA(),t._uU(47,"\n  "),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("predicate",e.predicate)("ascending",e.ascending),t.xp6(38),t.Q6J("ngForOf",e.finalResults)("ngForTrackBy",e.trackId)}}const M=(n,u,e)=>({page:n,totalItems:u,itemsPerPage:e});function z(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._uU(1,"\n    "),t.TgZ(2,"div",41),t._uU(3,"\n      "),t._UZ(4,"jhi-item-count",42),t._uU(5,"\n    "),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"div",41),t._uU(8,"\n      "),t.TgZ(9,"ngb-pagination",43),t.NdJ("pageChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.ngbPaginationPage=a)})("pageChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.loadPage(a))}),t.qZA(),t._uU(10,"\n    "),t.qZA(),t._uU(11,"\n  "),t.qZA()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("params",t.kEZ(7,M,e.page,e.totalItems,e.itemsPerPage)),t.xp6(5),t.Q6J("collectionSize",e.totalItems)("page",e.ngbPaginationPage)("pageSize",e.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}const E=()=>["/final-result/new"];let K=(()=>{class n{finalResultService;activatedRoute;router;modalService;zone;finalResults;isLoading=!1;totalItems=0;itemsPerPage=d.gK;page;predicate;ascending;ngbPaginationPage=1;constructor(e,i,a,s,c){this.finalResultService=e,this.activatedRoute=i,this.router=a,this.modalService=s,this.zone=c}loadPage(e,i){this.isLoading=!0;const a=e??this.page??1;this.finalResultService.query({page:a-1,size:this.itemsPerPage,sort:this.sort()}).subscribe({next:s=>{this.isLoading=!1,this.onSuccess(s.body,s.headers,a,!i)},error:()=>{this.isLoading=!1,this.onError()}})}ngOnInit(){this.handleNavigation()}trackId(e,i){return i.id}delete(e){const i=this.modalService.open(j,{size:"lg",backdrop:"static"});i.componentInstance.finalResult=e,i.closed.subscribe(a=>{"deleted"===a&&this.loadPage()})}sort(){const e=[this.predicate+","+(this.ascending?d.aW:d.jo)];return"id"!==this.predicate&&e.push("id"),e}handleNavigation(){(0,S.a)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([e,i])=>{const s=+(i.get("page")??1),c=(i.get(d._l)??e.defaultSort).split(","),x=c[0],q=c[1]===d.aW;(s!==this.page||x!==this.predicate||q!==this.ascending)&&(this.predicate=x,this.ascending=q,this.loadPage(s,!0))})}onSuccess(e,i,a,s){this.totalItems=Number(i.get("X-Total-Count")),this.page=a,s&&this.zone.run(()=>{this.router.navigate(["/final-result"],{queryParams:{page:this.page,size:this.itemsPerPage,sort:this.predicate+","+(this.ascending?d.aW:d.jo)}})}),this.finalResults=e??[],this.ngbPaginationPage=this.page}onError(){this.ngbPaginationPage=this.page??1}static \u0275fac=function(i){return new(i||n)(t.Y36(g.O),t.Y36(r.gz),t.Y36(r.F0),t.Y36(Z.FF),t.Y36(t.R0b))};static \u0275cmp=t.Xpm({type:n,selectors:[["jhi-final-result"]],decls:38,vars:7,consts:[["id","page-heading","data-cy","FinalResultHeading"],["jhiTranslate","gradeScopeIsticApp.finalResult.home.title"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"disabled","click"],["icon","sync",3,"spin"],["jhiTranslate","gradeScopeIsticApp.finalResult.home.refreshListLabel"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-final-result",3,"routerLink"],["icon","plus"],["jhiTranslate","gradeScopeIsticApp.finalResult.home.createLabel"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],[4,"ngIf"],["id","no-result",1,"alert","alert-warning"],["jhiTranslate","gradeScopeIsticApp.finalResult.home.notFound"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col","jhiSortBy","note"],["jhiTranslate","gradeScopeIsticApp.finalResult.note"],["scope","col","jhiSortBy","student.name"],["jhiTranslate","gradeScopeIsticApp.finalResult.student"],["scope","col","jhiSortBy","exam.name"],["jhiTranslate","gradeScopeIsticApp.finalResult.exam"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-end"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"],[1,"d-flex","justify-content-center"],[3,"params"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"]],template:function(i,a){1&i&&(t.TgZ(0,"div"),t._uU(1,"\n  "),t.TgZ(2,"h2",0),t._uU(3,"\n    "),t.TgZ(4,"span",1),t._uU(5,"Final Results"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"div",2),t._uU(8,"\n      "),t.TgZ(9,"button",3),t.NdJ("click",function(){return a.loadPage()}),t._uU(10,"\n        "),t._UZ(11,"fa-icon",4),t._uU(12,"\n        "),t.TgZ(13,"span",5),t._uU(14,"Refresh List"),t.qZA(),t._uU(15,"\n      "),t.qZA(),t._uU(16,"\n\n      "),t.TgZ(17,"button",6),t._uU(18,"\n        "),t._UZ(19,"fa-icon",7),t._uU(20,"\n        "),t.TgZ(21,"span",8),t._uU(22," Create a new Final Result "),t.qZA(),t._uU(23,"\n      "),t.qZA(),t._uU(24,"\n    "),t.qZA(),t._uU(25,"\n  "),t.qZA(),t._uU(26,"\n\n  "),t._UZ(27,"jhi-alert-error"),t._uU(28,"\n\n  "),t._UZ(29,"jhi-alert"),t._uU(30,"\n\n  "),t.YNc(31,D,5,0,"div",9),t._uU(32,"\n\n  "),t.YNc(33,Y,48,4,"div",10),t._uU(34,"\n\n  "),t.YNc(35,z,12,11,"div",11),t._uU(36,"\n"),t.qZA(),t._uU(37,"\n")),2&i&&(t.xp6(9),t.Q6J("disabled",a.isLoading),t.xp6(2),t.Q6J("spin",a.isLoading),t.xp6(6),t.Q6J("routerLink",t.DdM(6,E)),t.xp6(14),t.Q6J("ngIf",0===(null==a.finalResults?null:a.finalResults.length)),t.xp6(2),t.Q6J("ngIf",a.finalResults&&a.finalResults.length>0),t.xp6(2),t.Q6J("ngIf",a.finalResults&&a.finalResults.length>0))},dependencies:[_.sg,_.O5,Z.N9,m.BN,f.P,T.w,U.A,J.T,N.b,L.N,r.rH],encapsulation:2})}return n})();const V=n=>["/student",n,"view"];function H(n,u){if(1&n&&(t.TgZ(0,"div"),t._uU(1,"\n            "),t.TgZ(2,"a",16),t._uU(3),t.qZA(),t._uU(4,"\n          "),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("routerLink",t.VKq(2,V,e.finalResult.studentId)),t.xp6(),t.Oqu(e.finalResult.studentName)}}const G=n=>["/exam",n,"view"];function $(n,u){if(1&n&&(t.TgZ(0,"div"),t._uU(1,"\n            "),t.TgZ(2,"a",16),t._uU(3),t.qZA(),t._uU(4,"\n          "),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("routerLink",t.VKq(2,G,e.finalResult.examId)),t.xp6(),t.Oqu(e.finalResult.examName)}}const X=n=>["/final-result",n,"edit"];function W(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._uU(1,"\n      "),t.TgZ(2,"h2",3)(3,"span",4),t._uU(4,"Final Result"),t.qZA()(),t._uU(5,"\n\n      "),t._UZ(6,"hr"),t._uU(7,"\n\n      "),t._UZ(8,"jhi-alert-error"),t._uU(9,"\n\n      "),t._UZ(10,"jhi-alert"),t._uU(11,"\n\n      "),t.TgZ(12,"dl",5),t._uU(13,"\n        "),t.TgZ(14,"dt")(15,"span",6),t._uU(16,"ID"),t.qZA()(),t._uU(17,"\n        "),t.TgZ(18,"dd"),t._uU(19,"\n          "),t.TgZ(20,"span"),t._uU(21),t.qZA(),t._uU(22,"\n        "),t.qZA(),t._uU(23,"\n        "),t.TgZ(24,"dt")(25,"span",7),t._uU(26,"Note"),t.qZA()(),t._uU(27,"\n        "),t.TgZ(28,"dd"),t._uU(29,"\n          "),t.TgZ(30,"span"),t._uU(31),t.qZA(),t._uU(32,"\n        "),t.qZA(),t._uU(33,"\n        "),t.TgZ(34,"dt")(35,"span",8),t._uU(36,"Student"),t.qZA()(),t._uU(37,"\n        "),t.TgZ(38,"dd"),t._uU(39,"\n          "),t.YNc(40,H,5,4,"div",2),t._uU(41,"\n        "),t.qZA(),t._uU(42,"\n        "),t.TgZ(43,"dt")(44,"span",9),t._uU(45,"Exam"),t.qZA()(),t._uU(46,"\n        "),t.TgZ(47,"dd"),t._uU(48,"\n          "),t.YNc(49,$,5,4,"div",2),t._uU(50,"\n        "),t.qZA(),t._uU(51,"\n      "),t.qZA(),t._uU(52,"\n\n      "),t.TgZ(53,"button",10),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.previousState())}),t._uU(54,"\n        "),t._UZ(55,"fa-icon",11),t._uU(56,"\xa0"),t.TgZ(57,"span",12),t._uU(58,"Back"),t.qZA(),t._uU(59,"\n      "),t.qZA(),t._uU(60,"\n\n      "),t.TgZ(61,"button",13),t._uU(62,"\n        "),t._UZ(63,"fa-icon",14),t._uU(64,"\xa0"),t.TgZ(65,"span",15),t._uU(66,"Edit"),t.qZA(),t._uU(67,"\n      "),t.qZA(),t._uU(68,"\n    "),t.qZA()}if(2&n){const e=t.oxw();t.xp6(21),t.Oqu(e.finalResult.id),t.xp6(10),t.Oqu(e.finalResult.note),t.xp6(9),t.Q6J("ngIf",e.finalResult.studentId),t.xp6(9),t.Q6J("ngIf",e.finalResult.examId),t.xp6(12),t.Q6J("routerLink",t.VKq(5,X,e.finalResult.id))}}let tt=(()=>{class n{activatedRoute;finalResult=null;constructor(e){this.activatedRoute=e}ngOnInit(){this.activatedRoute.data.subscribe(({finalResult:e})=>{this.finalResult=e})}previousState(){window.history.back()}static \u0275fac=function(i){return new(i||n)(t.Y36(r.gz))};static \u0275cmp=t.Xpm({type:n,selectors:[["jhi-final-result-detail"]],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","finalResultDetailsHeading"],["jhiTranslate","gradeScopeIsticApp.finalResult.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","gradeScopeIsticApp.finalResult.note"],["jhiTranslate","gradeScopeIsticApp.finalResult.student"],["jhiTranslate","gradeScopeIsticApp.finalResult.exam"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"],[3,"routerLink"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.YNc(4,W,69,7,"div",2),t._uU(5,"\n  "),t.qZA(),t._uU(6,"\n"),t.qZA(),t._uU(7,"\n")),2&i&&(t.xp6(4),t.Q6J("ngIf",a.finalResult))},dependencies:[_.O5,m.BN,f.P,T.w,U.A,r.rH],encapsulation:2})}return n})();var b=o(8521),et=o(3740),nt=o(1389);function it(n,u){if(1&n&&(t.TgZ(0,"option",12),t._uU(1),t.qZA()),2&n){const e=u.$implicit;t.Q6J("ngValue",e.id),t.xp6(),t.Oqu(e.name)}}function at(n,u){if(1&n&&(t.TgZ(0,"option",12),t._uU(1),t.qZA()),2&n){const e=u.$implicit;t.Q6J("ngValue",e.id),t.xp6(),t.Oqu(e.name)}}let R=(()=>{class n{finalResultService;studentService;examService;activatedRoute;fb;isSaving=!1;students=[];exams=[];editForm;constructor(e,i,a,s,c){this.finalResultService=e,this.studentService=i,this.examService=a,this.activatedRoute=s,this.fb=c,this.editForm=this.fb.group({id:[],note:[],studentId:[],examId:[]})}ngOnInit(){this.activatedRoute.data.subscribe(({finalResult:e})=>{this.updateForm(e),this.studentService.query().subscribe(i=>this.students=i.body||[]),this.examService.query().subscribe(i=>this.exams=i.body||[])})}updateForm(e){this.editForm.patchValue({id:e.id,note:e.note,studentId:e.studentId,examId:e.examId})}previousState(){window.history.back()}save(){this.isSaving=!0;const e=this.createFromForm();this.subscribeToSaveResponse(void 0!==e.id?this.finalResultService.update(e):this.finalResultService.create(e))}createFromForm(){return{...new b.A,id:this.editForm.get(["id"]).value,note:this.editForm.get(["note"]).value,studentId:this.editForm.get(["studentId"]).value,examId:this.editForm.get(["examId"]).value}}subscribeToSaveResponse(e){e.subscribe(()=>this.onSaveSuccess(),()=>this.onSaveError())}onSaveSuccess(){this.isSaving=!1,this.previousState()}onSaveError(){this.isSaving=!1}trackById(e,i){return i.id}static \u0275fac=function(i){return new(i||n)(t.Y36(g.O),t.Y36(et.V),t.Y36(nt.O),t.Y36(r.gz),t.Y36(l.QS))};static \u0275cmp=t.Xpm({type:n,selectors:[["jhi-final-result-update"]],decls:78,vars:10,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-final-result-heading","data-cy","FinalResultCreateUpdateHeading","jhiTranslate","gradeScopeIsticApp.finalResult.home.createOrEditLabel"],[1,"row","mb-3",3,"hidden"],["jhiTranslate","global.field.id","for","field_id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],[1,"row","mb-3"],["jhiTranslate","gradeScopeIsticApp.finalResult.note","for","field_note",1,"form-label"],["type","number","name","note","id","field_note","data-cy","note","formControlName","note",1,"form-control"],["jhiTranslate","gradeScopeIsticApp.finalResult.student","for","field_student",1,"form-label"],["id","field_student","name","student","formControlName","studentId",1,"form-control"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf","ngForTrackBy"],["jhiTranslate","gradeScopeIsticApp.finalResult.exam","for","field_exam",1,"form-label"],["id","field_exam","name","exam","formControlName","examId",1,"form-control"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return a.save()}),t._uU(5,"\n      "),t.TgZ(6,"h2",3),t._uU(7,"\n        Create or edit a Final Result\n      "),t.qZA(),t._uU(8,"\n\n      "),t.TgZ(9,"div"),t._uU(10,"\n        "),t._UZ(11,"jhi-alert-error"),t._uU(12,"\n\n        "),t.TgZ(13,"div",4),t._uU(14,"\n          "),t.TgZ(15,"label",5),t._uU(16,"ID"),t.qZA(),t._uU(17,"\n          "),t._UZ(18,"input",6),t._uU(19,"\n        "),t.qZA(),t._uU(20,"\n\n        "),t.TgZ(21,"div",7),t._uU(22,"\n          "),t.TgZ(23,"label",8),t._uU(24,"Note"),t.qZA(),t._uU(25,"\n          "),t._UZ(26,"input",9),t._uU(27,"\n        "),t.qZA(),t._uU(28,"\n\n        "),t.TgZ(29,"div",7),t._uU(30,"\n          "),t.TgZ(31,"label",10),t._uU(32,"Student"),t.qZA(),t._uU(33,"\n          "),t.TgZ(34,"select",11),t._uU(35,"\n            "),t._UZ(36,"option",12),t._uU(37,"\n            "),t.YNc(38,it,2,2,"option",13),t._uU(39,"\n        "),t.qZA(),t._uU(40,"\n        "),t.qZA(),t._uU(41,"\n\n        "),t.TgZ(42,"div",7),t._uU(43,"\n          "),t.TgZ(44,"label",14),t._uU(45,"Exam"),t.qZA(),t._uU(46,"\n          "),t.TgZ(47,"select",15),t._uU(48,"\n            "),t._UZ(49,"option",12),t._uU(50,"\n            "),t.YNc(51,at,2,2,"option",13),t._uU(52,"\n        "),t.qZA(),t._uU(53,"\n        "),t.qZA(),t._uU(54,"\n      "),t.qZA(),t._uU(55,"\n\n      "),t.TgZ(56,"div"),t._uU(57,"\n        "),t.TgZ(58,"button",16),t.NdJ("click",function(){return a.previousState()}),t._uU(59,"\n          "),t._UZ(60,"fa-icon",17),t._uU(61,"\xa0"),t.TgZ(62,"span",18),t._uU(63,"Cancel"),t.qZA(),t._uU(64,"\n        "),t.qZA(),t._uU(65,"\n\n        "),t.TgZ(66,"button",19),t._uU(67,"\n          "),t._UZ(68,"fa-icon",20),t._uU(69,"\xa0"),t.TgZ(70,"span",21),t._uU(71,"Save"),t.qZA(),t._uU(72,"\n        "),t.qZA(),t._uU(73,"\n      "),t.qZA(),t._uU(74,"\n    "),t.qZA(),t._uU(75,"\n  "),t.qZA(),t._uU(76,"\n"),t.qZA(),t._uU(77,"\n")),2&i&&(t.xp6(4),t.Q6J("formGroup",a.editForm),t.xp6(9),t.Q6J("hidden",null==a.editForm.get("id").value),t.xp6(5),t.Q6J("readonly",!0),t.xp6(18),t.Q6J("ngValue",null),t.xp6(2),t.Q6J("ngForOf",a.students)("ngForTrackBy",a.trackById),t.xp6(11),t.Q6J("ngValue",null),t.xp6(2),t.Q6J("ngForOf",a.exams)("ngForTrackBy",a.trackById),t.xp6(15),t.Q6J("disabled",a.editForm.invalid||a.isSaving))},dependencies:[l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,_.sg,m.BN,l.sg,l.u,f.P,U.A],encapsulation:2})}return n})();var y=o(2096),ot=o(6232),st=o(1631);let h=(()=>{class n{service;router;zone;constructor(e,i,a){this.service=e,this.router=i,this.zone=a}resolve(e){const i=e.params.id;return i?this.service.find(i).pipe((0,st.z)(a=>a.body?(0,y.of)(a.body):(this.zone.run(()=>{this.router.navigate(["404"])}),ot.E))):(0,y.of)(new b.A)}static \u0275fac=function(i){return new(i||n)(t.LFG(g.O),t.LFG(r.F0),t.LFG(t.R0b))};static \u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const ut=[{path:"",component:K,data:{defaultSort:"id,asc",authorities:["ROLE_ADMIN"]},canActivate:[p.Z]},{path:":id/view",component:tt,resolve:{finalResult:h},data:{authorities:["ROLE_ADMIN"]},canActivate:[p.Z]},{path:"new",component:R,resolve:{finalResult:h},data:{authorities:["ROLE_ADMIN"]},canActivate:[p.Z]},{path:":id/edit",component:R,resolve:{finalResult:h},data:{authorities:["ROLE_ADMIN"]},canActivate:[p.Z]}];let lt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=t.oAB({type:n});static \u0275inj=t.cJS({imports:[r.Bz.forChild(ut),r.Bz]})}return n})(),rt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=t.oAB({type:n});static \u0275inj=t.cJS({imports:[F.m,lt]})}return n})()}}]);