"use strict";(self.webpackChunkgrade_scope_istic=self.webpackChunkgrade_scope_istic||[]).push([[754],{4754:(te,T,s)=>{s.r(T),s.d(T,{commentsRoute:()=>ee});var l=s(6604),u=s(4190),j=s(2572),h=s(59),d=s(9831),p=s(5597),_=s(5318),g=s(8423),c=s(6223),m=s(6814),e=s(9212),U=s(380);const x=n=>({id:n});function D(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"form",1),e.NdJ("ngSubmit",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.confirmDelete(o.comments.id))}),e._uU(1,"\n  "),e.TgZ(2,"div",2),e._uU(3,"\n    "),e.TgZ(4,"h4",3),e._uU(5,"Confirm delete operation"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"button",4),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.cancel())}),e._uU(8,"\xd7"),e.qZA(),e._uU(9,"\n  "),e.qZA(),e._uU(10,"\n\n  "),e.TgZ(11,"div",5),e._uU(12,"\n    "),e._UZ(13,"jhi-alert-error"),e._uU(14,"\n\n    "),e.TgZ(15,"p",6),e._uU(16,"\n      Are you sure you want to delete this Comments?\n    "),e.qZA(),e._uU(17,"\n  "),e.qZA(),e._uU(18,"\n\n  "),e.TgZ(19,"div",7),e._uU(20,"\n    "),e.TgZ(21,"button",8),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.cancel())}),e._uU(22,"\n      "),e._UZ(23,"fa-icon",9),e._uU(24,"\xa0"),e.TgZ(25,"span",10),e._uU(26,"Cancel"),e.qZA(),e._uU(27,"\n    "),e.qZA(),e._uU(28,"\n\n    "),e.TgZ(29,"button",11),e._uU(30,"\n      "),e._UZ(31,"fa-icon",12),e._uU(32,"\xa0"),e.TgZ(33,"span",13),e._uU(34,"Delete"),e.qZA(),e._uU(35,"\n    "),e.qZA(),e._uU(36,"\n  "),e.qZA(),e._uU(37,"\n"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(15),e.Q6J("translateValues",e.VKq(1,x,t.comments.id))}}let I=(()=>{class n{commentsService;activeModal;comments;constructor(t,i){this.commentsService=t,this.activeModal=i}cancel(){this.activeModal.dismiss()}confirmDelete(t){this.commentsService.delete(t).subscribe(()=>{this.activeModal.close("deleted")})}static \u0275fac=function(i){return new(i||n)(e.Y36(U.r),e.Y36(h.Kz))};static \u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","commentsDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["id","jhi-delete-comments-heading","jhiTranslate","gradeScopeIsticApp.comments.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-comments","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(i,o){1&i&&(e.YNc(0,D,38,3,"form",0),e._uU(1,"\n")),2&i&&e.Q6J("ngIf",o.comments)},dependencies:[m.O5,c.u5,c._Y,c.JL,c.F,g.P,_.A,p.BN],encapsulation:2})}return n})();var J=s(5607),F=s(7),R=s(2941),v=s(8907);const z=()=>["/comments/new"],A=n=>["/comments",n,"view"],N=n=>["/comments",n,"edit"],L=n=>["/student-response",n,"view"],P=(n,r,t)=>({page:n,totalItems:r,itemsPerPage:t});function k(n,r){1&n&&(e.TgZ(0,"div",12),e._uU(1,"\n    "),e.TgZ(2,"span",13),e._uU(3,"No comments found"),e.qZA(),e._uU(4,"\n  "),e.qZA())}function Q(n,r){if(1&n&&(e.TgZ(0,"div"),e._uU(1,"\n              "),e.TgZ(2,"a",29),e._uU(3),e.qZA(),e._uU(4,"\n            "),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(2,L,t.studentResponseId)),e.xp6(),e.Oqu(t.studentResponseId)}}function w(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr",28),e._uU(1,"\n          "),e.TgZ(2,"td"),e._uU(3,"\n            "),e.TgZ(4,"a",29),e._uU(5),e.qZA(),e._uU(6,"\n          "),e.qZA(),e._uU(7,"\n          "),e.TgZ(8,"td"),e._uU(9),e.qZA(),e._uU(10,"\n          "),e.TgZ(11,"td"),e._uU(12),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"td"),e._uU(15,"\n            "),e.YNc(16,Q,5,4,"div",11),e._uU(17,"\n          "),e.qZA(),e._uU(18,"\n          "),e.TgZ(19,"td",30),e._uU(20,"\n            "),e.TgZ(21,"div",31),e._uU(22,"\n              "),e.TgZ(23,"button",32),e._uU(24,"\n                "),e._UZ(25,"fa-icon",33),e._uU(26,"\n                "),e.TgZ(27,"span",34),e._uU(28,"View"),e.qZA(),e._uU(29,"\n              "),e.qZA(),e._uU(30,"\n\n              "),e.TgZ(31,"button",35),e._uU(32,"\n                "),e._UZ(33,"fa-icon",36),e._uU(34,"\n                "),e.TgZ(35,"span",37),e._uU(36,"Edit"),e.qZA(),e._uU(37,"\n              "),e.qZA(),e._uU(38,"\n\n              "),e.TgZ(39,"button",38),e.NdJ("click",function(){const o=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.delete(o))}),e._uU(40,"\n                "),e._UZ(41,"fa-icon",39),e._uU(42,"\n                "),e.TgZ(43,"span",40),e._uU(44,"Delete"),e.qZA(),e._uU(45,"\n              "),e.qZA(),e._uU(46,"\n            "),e.qZA(),e._uU(47,"\n          "),e.qZA(),e._uU(48,"\n        "),e.qZA()}if(2&n){const t=r.$implicit;e.xp6(4),e.Q6J("routerLink",e.VKq(7,A,t.id)),e.xp6(),e.Oqu(t.id),e.xp6(4),e.Oqu(t.zonegeneratedid),e.xp6(3),e.Oqu(t.jsonData),e.xp6(4),e.Q6J("ngIf",t.studentResponseId),e.xp6(7),e.Q6J("routerLink",e.VKq(9,A,t.id)),e.xp6(8),e.Q6J("routerLink",e.VKq(11,N,t.id))}}function Y(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",14),e._uU(1,"\n    "),e.TgZ(2,"table",15),e._uU(3,"\n      "),e.TgZ(4,"thead"),e._uU(5,"\n        "),e.TgZ(6,"tr",16),e.Uc_("predicateChange",function(o){e.CHM(t);const a=e.oxw();return e.nJJ(a.predicate,o)||(a.predicate=o),e.KtG(o)})("ascendingChange",function(o){e.CHM(t);const a=e.oxw();return e.nJJ(a.ascending,o)||(a.ascending=o),e.KtG(o)}),e.NdJ("sortChange",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.loadPage())}),e._uU(7,"\n          "),e.TgZ(8,"th",17)(9,"span",18),e._uU(10,"ID"),e.qZA(),e._uU(11," "),e._UZ(12,"fa-icon",19),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"th",20),e._uU(15,"\n            "),e.TgZ(16,"span",21),e._uU(17,"Zonegeneratedid"),e.qZA(),e._uU(18," "),e._UZ(19,"fa-icon",19),e._uU(20,"\n          "),e.qZA(),e._uU(21,"\n          "),e.TgZ(22,"th",22),e._uU(23,"\n            "),e.TgZ(24,"span",23),e._uU(25,"Json Data"),e.qZA(),e._uU(26," "),e._UZ(27,"fa-icon",19),e._uU(28,"\n          "),e.qZA(),e._uU(29,"\n          "),e.TgZ(30,"th",24),e._uU(31,"\n            "),e.TgZ(32,"span",25),e._uU(33,"Student Response"),e.qZA(),e._uU(34," "),e._UZ(35,"fa-icon",19),e._uU(36,"\n          "),e.qZA(),e._uU(37,"\n          "),e._UZ(38,"th",26),e._uU(39,"\n        "),e.qZA(),e._uU(40,"\n      "),e.qZA(),e._uU(41,"\n      "),e.TgZ(42,"tbody"),e._uU(43,"\n        "),e.YNc(44,w,49,13,"tr",27),e._uU(45,"\n      "),e.qZA(),e._uU(46,"\n    "),e.qZA(),e._uU(47,"\n  "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(6),e.E3D("predicate",t.predicate)("ascending",t.ascending),e.xp6(38),e.Q6J("ngForOf",t.comments)("ngForTrackBy",t.trackId)}}function B(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n    "),e.TgZ(2,"div",41),e._uU(3,"\n      "),e._UZ(4,"jhi-item-count",42),e._uU(5,"\n    "),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",41),e._uU(8,"\n      "),e.TgZ(9,"ngb-pagination",43),e.Uc_("pageChange",function(o){e.CHM(t);const a=e.oxw();return e.nJJ(a.ngbPaginationPage,o)||(a.ngbPaginationPage=o),e.KtG(o)}),e.NdJ("pageChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.loadPage(o))}),e.qZA(),e._uU(10,"\n    "),e.qZA(),e._uU(11,"\n  "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("params",e.kEZ(7,P,t.page,t.totalItems,t.itemsPerPage)),e.xp6(5),e.Q6J("collectionSize",t.totalItems),e.E3D("page",t.ngbPaginationPage),e.Q6J("pageSize",t.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}let O=(()=>{class n{commentsService;activatedRoute;router;modalService;zone;comments;isLoading=!1;totalItems=0;itemsPerPage=d.gK;page;predicate;ascending;ngbPaginationPage=1;constructor(t,i,o,a,Z){this.commentsService=t,this.activatedRoute=i,this.router=o,this.modalService=a,this.zone=Z}loadPage(t,i){this.isLoading=!0;const o=t??this.page??1;this.commentsService.query({page:o-1,size:this.itemsPerPage,sort:this.sort()}).subscribe({next:a=>{this.isLoading=!1,this.onSuccess(a.body,a.headers,o,!i)},error:()=>{this.isLoading=!1,this.onError()}})}ngOnInit(){this.handleNavigation()}trackId(t,i){return i.id}delete(t){const i=this.modalService.open(I,{size:"lg",backdrop:"static"});i.componentInstance.comments=t,i.closed.subscribe(o=>{"deleted"===o&&this.loadPage()})}sort(){const t=[this.predicate+","+(this.ascending?d.aW:d.jo)];return"id"!==this.predicate&&t.push("id"),t}handleNavigation(){(0,j.a)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([t,i])=>{const a=+(i.get("page")??1),Z=(i.get(d._l)??t.defaultSort).split(","),q=Z[0],S=Z[1]===d.aW;(a!==this.page||q!==this.predicate||S!==this.ascending)&&(this.predicate=q,this.ascending=S,this.loadPage(a,!0))})}onSuccess(t,i,o,a){this.totalItems=Number(i.get("X-Total-Count")),this.page=o,a&&this.zone.run(()=>{this.router.navigate(["/comments"],{queryParams:{page:this.page,size:this.itemsPerPage,sort:this.predicate+","+(this.ascending?d.aW:d.jo)}})}),this.comments=t??[],this.ngbPaginationPage=this.page}onError(){this.ngbPaginationPage=this.page??1}static \u0275fac=function(i){return new(i||n)(e.Y36(U.r),e.Y36(u.gz),e.Y36(u.F0),e.Y36(h.FF),e.Y36(e.R0b))};static \u0275cmp=e.Xpm({type:n,selectors:[["jhi-comments"]],standalone:!0,features:[e.jDz],decls:38,vars:7,consts:[["id","page-heading","data-cy","CommentsHeading"],["jhiTranslate","gradeScopeIsticApp.comments.home.title"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"click","disabled"],["icon","sync",3,"animation"],["jhiTranslate","gradeScopeIsticApp.comments.home.refreshListLabel"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-comments",3,"routerLink"],["icon","plus"],["jhiTranslate","gradeScopeIsticApp.comments.home.createLabel"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],[4,"ngIf"],["id","no-result",1,"alert","alert-warning"],["jhiTranslate","gradeScopeIsticApp.comments.home.notFound"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col","jhiSortBy","zonegeneratedid"],["jhiTranslate","gradeScopeIsticApp.comments.zonegeneratedid"],["scope","col","jhiSortBy","jsonData"],["jhiTranslate","gradeScopeIsticApp.comments.jsonData"],["scope","col","jhiSortBy","studentResponse.id"],["jhiTranslate","gradeScopeIsticApp.comments.studentResponse"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-end"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"],[1,"d-flex","justify-content-center"],[3,"params"],[3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks"]],template:function(i,o){1&i&&(e.TgZ(0,"div"),e._uU(1,"\n  "),e.TgZ(2,"h2",0),e._uU(3,"\n    "),e.TgZ(4,"span",1),e._uU(5,"Comments"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",2),e._uU(8,"\n      "),e.TgZ(9,"button",3),e.NdJ("click",function(){return o.loadPage()}),e._uU(10,"\n        "),e._UZ(11,"fa-icon",4),e._uU(12,"\n        "),e.TgZ(13,"span",5),e._uU(14,"Refresh List"),e.qZA(),e._uU(15,"\n      "),e.qZA(),e._uU(16,"\n\n      "),e.TgZ(17,"button",6),e._uU(18,"\n        "),e._UZ(19,"fa-icon",7),e._uU(20,"\n        "),e.TgZ(21,"span",8),e._uU(22," Create a new Comments "),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n    "),e.qZA(),e._uU(25,"\n  "),e.qZA(),e._uU(26,"\n\n  "),e._UZ(27,"jhi-alert-error"),e._uU(28,"\n\n  "),e._UZ(29,"jhi-alert"),e._uU(30,"\n\n  "),e.YNc(31,k,5,0,"div",9),e._uU(32,"\n\n  "),e.YNc(33,Y,48,4,"div",10),e._uU(34,"\n\n  "),e.YNc(35,B,12,11,"div",11),e._uU(36,"\n"),e.qZA(),e._uU(37,"\n")),2&i&&(e.xp6(9),e.Q6J("disabled",o.isLoading),e.xp6(2),e.Q6J("animation","spin"),e.xp6(6),e.Q6J("routerLink",e.DdM(6,z)),e.xp6(14),e.Q6J("ngIf",0===(null==o.comments?null:o.comments.length)),e.xp6(2),e.Q6J("ngIf",o.comments&&o.comments.length>0),e.xp6(2),e.Q6J("ngIf",o.comments&&o.comments.length>0))},dependencies:[g.P,p.BN,u.rH,_.A,v.w,m.O5,R.b,F.T,m.ax,J.N,h.N9],encapsulation:2})}return n})();const E=n=>["/comments",n,"edit"],M=n=>["/student-response",n,"view"];function K(n,r){if(1&n&&(e.TgZ(0,"div"),e._uU(1,"\n            "),e.TgZ(2,"a",16),e._uU(3),e.qZA(),e._uU(4,"\n          "),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("routerLink",e.VKq(2,M,t.comments.studentResponseId)),e.xp6(),e.Oqu(t.comments.studentResponseId)}}function H(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n      "),e.TgZ(2,"h2",3)(3,"span",4),e._uU(4,"Comments"),e.qZA()(),e._uU(5,"\n\n      "),e._UZ(6,"hr"),e._uU(7,"\n\n      "),e._UZ(8,"jhi-alert-error"),e._uU(9,"\n\n      "),e._UZ(10,"jhi-alert"),e._uU(11,"\n\n      "),e.TgZ(12,"dl",5),e._uU(13,"\n        "),e.TgZ(14,"dt")(15,"span",6),e._uU(16,"ID"),e.qZA()(),e._uU(17,"\n        "),e.TgZ(18,"dd"),e._uU(19,"\n          "),e.TgZ(20,"span"),e._uU(21),e.qZA(),e._uU(22,"\n        "),e.qZA(),e._uU(23,"\n        "),e.TgZ(24,"dt")(25,"span",7),e._uU(26,"Zonegeneratedid"),e.qZA()(),e._uU(27,"\n        "),e.TgZ(28,"dd"),e._uU(29,"\n          "),e.TgZ(30,"span"),e._uU(31),e.qZA(),e._uU(32,"\n        "),e.qZA(),e._uU(33,"\n        "),e.TgZ(34,"dt")(35,"span",8),e._uU(36,"Json Data"),e.qZA()(),e._uU(37,"\n        "),e.TgZ(38,"dd"),e._uU(39,"\n          "),e.TgZ(40,"span"),e._uU(41),e.qZA(),e._uU(42,"\n        "),e.qZA(),e._uU(43,"\n        "),e.TgZ(44,"dt")(45,"span",9),e._uU(46,"Student Response"),e.qZA()(),e._uU(47,"\n        "),e.TgZ(48,"dd"),e._uU(49,"\n          "),e.YNc(50,K,5,4,"div",2),e._uU(51,"\n        "),e.qZA(),e._uU(52,"\n      "),e.qZA(),e._uU(53,"\n\n      "),e.TgZ(54,"button",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.previousState())}),e._uU(55,"\n        "),e._UZ(56,"fa-icon",11),e._uU(57,"\xa0"),e.TgZ(58,"span",12),e._uU(59,"Back"),e.qZA(),e._uU(60,"\n      "),e.qZA(),e._uU(61,"\n\n      "),e.TgZ(62,"button",13),e._uU(63,"\n        "),e._UZ(64,"fa-icon",14),e._uU(65,"\xa0"),e.TgZ(66,"span",15),e._uU(67,"Edit"),e.qZA(),e._uU(68,"\n      "),e.qZA(),e._uU(69,"\n    "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(21),e.Oqu(t.comments.id),e.xp6(10),e.Oqu(t.comments.zonegeneratedid),e.xp6(10),e.Oqu(t.comments.jsonData),e.xp6(9),e.Q6J("ngIf",t.comments.studentResponseId),e.xp6(12),e.Q6J("routerLink",e.VKq(5,E,t.comments.id))}}let V=(()=>{class n{activatedRoute;comments=null;constructor(t){this.activatedRoute=t}ngOnInit(){this.activatedRoute.data.subscribe(({comments:t})=>{this.comments=t})}previousState(){window.history.back()}static \u0275fac=function(i){return new(i||n)(e.Y36(u.gz))};static \u0275cmp=e.Xpm({type:n,selectors:[["jhi-comments-detail"]],standalone:!0,features:[e.jDz],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","commentsDetailsHeading"],["jhiTranslate","gradeScopeIsticApp.comments.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","gradeScopeIsticApp.comments.zonegeneratedid"],["jhiTranslate","gradeScopeIsticApp.comments.jsonData"],["jhiTranslate","gradeScopeIsticApp.comments.studentResponse"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"],[3,"routerLink"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.YNc(4,H,70,7,"div",2),e._uU(5,"\n  "),e.qZA(),e._uU(6,"\n"),e.qZA(),e._uU(7,"\n")),2&i&&(e.xp6(4),e.Q6J("ngIf",o.comments))},dependencies:[m.O5,g.P,_.A,v.w,u.rH,p.BN],encapsulation:2})}return n})();var b=s(9922),G=s(681);function X(n,r){if(1&n&&(e.TgZ(0,"option",14),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("ngValue",t.id),e.xp6(),e.hij("\n              ",t.id,"\n            ")}}let C=(()=>{class n{commentsService;studentResponseService;activatedRoute;fb;isSaving=!1;studentresponses=[];editForm;constructor(t,i,o,a){this.commentsService=t,this.studentResponseService=i,this.activatedRoute=o,this.fb=a,this.editForm=this.fb.group({id:[],zonegeneratedid:[],jsonData:[],studentResponseId:[]})}ngOnInit(){this.activatedRoute.data.subscribe(({comments:t})=>{this.updateForm(t),this.studentResponseService.query().subscribe(i=>this.studentresponses=i.body||[])})}updateForm(t){this.editForm.patchValue({id:t.id,zonegeneratedid:t.zonegeneratedid,jsonData:t.jsonData,studentResponseId:t.studentResponseId})}previousState(){window.history.back()}save(){this.isSaving=!0;const t=this.createFromForm();this.subscribeToSaveResponse(void 0!==t.id?this.commentsService.update(t):this.commentsService.create(t))}createFromForm(){return{...new b.H,id:this.editForm.get(["id"]).value,zonegeneratedid:this.editForm.get(["zonegeneratedid"]).value,jsonData:this.editForm.get(["jsonData"]).value,studentResponseId:this.editForm.get(["studentResponseId"]).value}}subscribeToSaveResponse(t){t.subscribe(()=>this.onSaveSuccess(),()=>this.onSaveError())}onSaveSuccess(){this.isSaving=!1,this.previousState()}onSaveError(){this.isSaving=!1}trackById(t,i){return i.id}static \u0275fac=function(i){return new(i||n)(e.Y36(U.r),e.Y36(G.o),e.Y36(u.gz),e.Y36(c.QS))};static \u0275cmp=e.Xpm({type:n,selectors:[["jhi-comments-update"]],standalone:!0,features:[e.jDz],decls:73,vars:7,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"ngSubmit","formGroup"],["id","jhi-comments-heading","data-cy","CommentsCreateUpdateHeading","jhiTranslate","gradeScopeIsticApp.comments.home.createOrEditLabel"],[1,"row","mb-3",3,"hidden"],["jhiTranslate","global.field.id","for","field_id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],[1,"row","mb-3"],["jhiTranslate","gradeScopeIsticApp.comments.zonegeneratedid","for","field_zonegeneratedid",1,"form-label"],["type","text","name","zonegeneratedid","id","field_zonegeneratedid","data-cy","zonegeneratedid","formControlName","zonegeneratedid",1,"form-control"],["jhiTranslate","gradeScopeIsticApp.comments.jsonData","for","field_jsonData",1,"form-label"],["type","text","name","jsonData","id","field_jsonData","data-cy","jsonData","formControlName","jsonData",1,"form-control"],["jhiTranslate","gradeScopeIsticApp.comments.studentResponse","for","field_studentResponse",1,"form-label"],["id","field_studentResponse","name","studentResponse","formControlName","studentResponseId",1,"form-control"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf","ngForTrackBy"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return o.save()}),e._uU(5,"\n      "),e.TgZ(6,"h2",3),e._uU(7,"\n        Create or edit a Comments\n      "),e.qZA(),e._uU(8,"\n\n      "),e.TgZ(9,"div"),e._uU(10,"\n        "),e._UZ(11,"jhi-alert-error"),e._uU(12,"\n\n        "),e.TgZ(13,"div",4),e._uU(14,"\n          "),e.TgZ(15,"label",5),e._uU(16,"ID"),e.qZA(),e._uU(17,"\n          "),e._UZ(18,"input",6),e._uU(19,"\n        "),e.qZA(),e._uU(20,"\n\n        "),e.TgZ(21,"div",7),e._uU(22,"\n          "),e.TgZ(23,"label",8),e._uU(24,"Zonegeneratedid"),e.qZA(),e._uU(25,"\n          "),e._UZ(26,"input",9),e._uU(27,"\n        "),e.qZA(),e._uU(28,"\n\n        "),e.TgZ(29,"div",7),e._uU(30,"\n          "),e.TgZ(31,"label",10),e._uU(32,"Json Data"),e.qZA(),e._uU(33,"\n          "),e._UZ(34,"input",11),e._uU(35,"\n        "),e.qZA(),e._uU(36,"\n\n        "),e.TgZ(37,"div",7),e._uU(38,"\n          "),e.TgZ(39,"label",12),e._uU(40,"Student Response"),e.qZA(),e._uU(41,"\n          "),e.TgZ(42,"select",13),e._uU(43,"\n            "),e._UZ(44,"option",14),e._uU(45,"\n            "),e.YNc(46,X,2,2,"option",15),e._uU(47,"\n          "),e.qZA(),e._uU(48,"\n        "),e.qZA(),e._uU(49,"\n      "),e.qZA(),e._uU(50,"\n\n      "),e.TgZ(51,"div"),e._uU(52,"\n        "),e.TgZ(53,"button",16),e.NdJ("click",function(){return o.previousState()}),e._uU(54,"\n          "),e._UZ(55,"fa-icon",17),e._uU(56,"\xa0"),e.TgZ(57,"span",18),e._uU(58,"Cancel"),e.qZA(),e._uU(59,"\n        "),e.qZA(),e._uU(60,"\n\n        "),e.TgZ(61,"button",19),e._uU(62,"\n          "),e._UZ(63,"fa-icon",20),e._uU(64,"\xa0"),e.TgZ(65,"span",21),e._uU(66,"Save"),e.qZA(),e._uU(67,"\n        "),e.qZA(),e._uU(68,"\n      "),e.qZA(),e._uU(69,"\n    "),e.qZA(),e._uU(70,"\n  "),e.qZA(),e._uU(71,"\n"),e.qZA(),e._uU(72,"\n")),2&i&&(e.xp6(4),e.Q6J("formGroup",o.editForm),e.xp6(9),e.Q6J("hidden",null==o.editForm.get("id").value),e.xp6(5),e.Q6J("readonly",!0),e.xp6(26),e.Q6J("ngValue",null),e.xp6(2),e.Q6J("ngForOf",o.studentresponses)("ngForTrackBy",o.trackById),e.xp6(15),e.Q6J("disabled",o.editForm.invalid||o.isSaving))},dependencies:[c.u5,c._Y,c.YN,c.Kr,c.Fj,c.wV,c.EJ,c.JJ,c.JL,c.UX,c.sg,c.u,g.P,_.A,m.ax,p.BN],encapsulation:2})}return n})();var y=s(2096),W=s(6232),$=s(1631);let f=(()=>{class n{service;router;zone;constructor(t,i,o){this.service=t,this.router=i,this.zone=o}resolve(t){const i=t.params.id;return i?this.service.find(i).pipe((0,$.z)(o=>o.body?(0,y.of)(o.body):(this.zone.run(()=>{this.router.navigate(["404"])}),W.E))):(0,y.of)(new b.H)}static \u0275fac=function(i){return new(i||n)(e.LFG(U.r),e.LFG(u.F0),e.LFG(e.R0b))};static \u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const ee=[{path:"",component:O,data:{defaultSort:"id,asc",authorities:["ROLE_ADMIN"]},canActivate:[l.Z]},{path:":id/view",component:V,resolve:{comments:f},data:{authorities:["ROLE_ADMIN"]},canActivate:[l.Z]},{path:"new",component:C,resolve:{comments:f},data:{authorities:["ROLE_ADMIN"]},canActivate:[l.Z]},{path:":id/edit",component:C,resolve:{comments:f},data:{authorities:["ROLE_ADMIN"]},canActivate:[l.Z]}]}}]);