"use strict";(self.webpackChunkgrade_scope_istic=self.webpackChunkgrade_scope_istic||[]).push([[743],{8743:(W,h,s)=>{s.r(h),s.d(h,{questionTypeRoute:()=>X});var l=s(6604),c=s(4190),S=s(2572),Z=s(59),p=s(9831),_=s(5597),g=s(5318),m=s(8423),u=s(6223),d=s(6814),e=s(9212),T=s(1229);const x=i=>({id:i});function F(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"form",1),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.confirmDelete(n.questionType.id))}),e._uU(1,"\n  "),e.TgZ(2,"div",2),e._uU(3,"\n    "),e.TgZ(4,"h4",3),e._uU(5,"Confirm delete operation"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"button",4),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cancel())}),e._uU(8,"\xd7"),e.qZA(),e._uU(9,"\n  "),e.qZA(),e._uU(10,"\n\n  "),e.TgZ(11,"div",5),e._uU(12,"\n    "),e._UZ(13,"jhi-alert-error"),e._uU(14,"\n\n    "),e.TgZ(15,"p",6),e._uU(16,"\n      Are you sure you want to delete this Question Type?\n    "),e.qZA(),e._uU(17,"\n  "),e.qZA(),e._uU(18,"\n\n  "),e.TgZ(19,"div",7),e._uU(20,"\n    "),e.TgZ(21,"button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cancel())}),e._uU(22,"\n      "),e._UZ(23,"fa-icon",9),e._uU(24,"\xa0"),e.TgZ(25,"span",10),e._uU(26,"Cancel"),e.qZA(),e._uU(27,"\n    "),e.qZA(),e._uU(28,"\n\n    "),e.TgZ(29,"button",11),e._uU(30,"\n      "),e._UZ(31,"fa-icon",12),e._uU(32,"\xa0"),e.TgZ(33,"span",13),e._uU(34,"Delete"),e.qZA(),e._uU(35,"\n    "),e.qZA(),e._uU(36,"\n  "),e.qZA(),e._uU(37,"\n"),e.qZA()}if(2&i){const t=e.oxw();e.xp6(15),e.Q6J("translateValues",e.VKq(1,x,t.questionType.id))}}let N=(()=>{class i{questionTypeService;activeModal;questionType;constructor(t,o){this.questionTypeService=t,this.activeModal=o}cancel(){this.activeModal.dismiss()}confirmDelete(t){this.questionTypeService.delete(t).subscribe(()=>{this.activeModal.close("deleted")})}static \u0275fac=function(o){return new(o||i)(e.Y36(T.C),e.Y36(Z.Kz))};static \u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","questionTypeDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["id","jhi-delete-questionType-heading","jhiTranslate","gradeScopeIsticApp.questionType.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-questionType","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(o,n){1&o&&(e.YNc(0,F,38,3,"form",0),e._uU(1,"\n")),2&o&&e.Q6J("ngIf",n.questionType)},dependencies:[d.O5,u.u5,u._Y,u.JL,u.F,m.P,g.A,_.BN],encapsulation:2})}return i})();var Q=s(5607),I=s(7),J=s(2941),f=s(8907);const D=()=>["/question-type/new"],q=i=>["/question-type",i,"view"],P=i=>["/question-type",i,"edit"],L=(i,r,t)=>({page:i,totalItems:r,itemsPerPage:t});function z(i,r){1&i&&(e.TgZ(0,"div",12),e._uU(1,"\n    "),e.TgZ(2,"span",13),e._uU(3,"No questionTypes found"),e.qZA(),e._uU(4,"\n  "),e.qZA())}function k(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"tr",28),e._uU(1,"\n          "),e.TgZ(2,"td"),e._uU(3,"\n            "),e.TgZ(4,"a",29),e._uU(5),e.qZA(),e._uU(6,"\n          "),e.qZA(),e._uU(7,"\n          "),e.TgZ(8,"td"),e._uU(9),e.qZA(),e._uU(10,"\n          "),e.TgZ(11,"td"),e._uU(12),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"td"),e._uU(15),e.qZA(),e._uU(16,"\n          "),e.TgZ(17,"td",30),e._uU(18,"\n            "),e.TgZ(19,"div",31),e._uU(20,"\n              "),e.TgZ(21,"button",32),e._uU(22,"\n                "),e._UZ(23,"fa-icon",33),e._uU(24,"\n                "),e.TgZ(25,"span",34),e._uU(26,"View"),e.qZA(),e._uU(27,"\n              "),e.qZA(),e._uU(28,"\n\n              "),e.TgZ(29,"button",35),e._uU(30,"\n                "),e._UZ(31,"fa-icon",36),e._uU(32,"\n                "),e.TgZ(33,"span",37),e._uU(34,"Edit"),e.qZA(),e._uU(35,"\n              "),e.qZA(),e._uU(36,"\n\n              "),e.TgZ(37,"button",38),e.NdJ("click",function(){const n=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.delete(n))}),e._uU(38,"\n                "),e._UZ(39,"fa-icon",39),e._uU(40,"\n                "),e.TgZ(41,"span",40),e._uU(42,"Delete"),e.qZA(),e._uU(43,"\n              "),e.qZA(),e._uU(44,"\n            "),e.qZA(),e._uU(45,"\n          "),e.qZA(),e._uU(46,"\n        "),e.qZA()}if(2&i){const t=r.$implicit;e.xp6(4),e.Q6J("routerLink",e.VKq(7,q,t.id)),e.xp6(),e.Oqu(t.id),e.xp6(4),e.Oqu(t.algoName),e.xp6(3),e.Oqu(t.endpoint),e.xp6(3),e.Oqu(t.jsFunction),e.xp6(6),e.Q6J("routerLink",e.VKq(9,q,t.id)),e.xp6(8),e.Q6J("routerLink",e.VKq(11,P,t.id))}}function w(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",14),e._uU(1,"\n    "),e.TgZ(2,"table",15),e._uU(3,"\n      "),e.TgZ(4,"thead"),e._uU(5,"\n        "),e.TgZ(6,"tr",16),e.Uc_("predicateChange",function(n){e.CHM(t);const a=e.oxw();return e.nJJ(a.predicate,n)||(a.predicate=n),e.KtG(n)})("ascendingChange",function(n){e.CHM(t);const a=e.oxw();return e.nJJ(a.ascending,n)||(a.ascending=n),e.KtG(n)}),e.NdJ("sortChange",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.loadPage())}),e._uU(7,"\n          "),e.TgZ(8,"th",17)(9,"span",18),e._uU(10,"ID"),e.qZA(),e._uU(11," "),e._UZ(12,"fa-icon",19),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"th",20),e._uU(15,"\n            "),e.TgZ(16,"span",21),e._uU(17,"Algo Name"),e.qZA(),e._uU(18," "),e._UZ(19,"fa-icon",19),e._uU(20,"\n          "),e.qZA(),e._uU(21,"\n          "),e.TgZ(22,"th",22),e._uU(23,"\n            "),e.TgZ(24,"span",23),e._uU(25,"Endpoint"),e.qZA(),e._uU(26," "),e._UZ(27,"fa-icon",19),e._uU(28,"\n          "),e.qZA(),e._uU(29,"\n          "),e.TgZ(30,"th",24),e._uU(31,"\n            "),e.TgZ(32,"span",25),e._uU(33,"Js Function"),e.qZA(),e._uU(34," "),e._UZ(35,"fa-icon",19),e._uU(36,"\n          "),e.qZA(),e._uU(37,"\n          "),e._UZ(38,"th",26),e._uU(39,"\n        "),e.qZA(),e._uU(40,"\n      "),e.qZA(),e._uU(41,"\n      "),e.TgZ(42,"tbody"),e._uU(43,"\n        "),e.YNc(44,k,47,13,"tr",27),e._uU(45,"\n      "),e.qZA(),e._uU(46,"\n    "),e.qZA(),e._uU(47,"\n  "),e.qZA()}if(2&i){const t=e.oxw();e.xp6(6),e.E3D("predicate",t.predicate)("ascending",t.ascending),e.xp6(38),e.Q6J("ngForOf",t.questionTypes)("ngForTrackBy",t.trackId)}}function E(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n    "),e.TgZ(2,"div",41),e._uU(3,"\n      "),e._UZ(4,"jhi-item-count",42),e._uU(5,"\n    "),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",41),e._uU(8,"\n      "),e.TgZ(9,"ngb-pagination",43),e.Uc_("pageChange",function(n){e.CHM(t);const a=e.oxw();return e.nJJ(a.ngbPaginationPage,n)||(a.ngbPaginationPage=n),e.KtG(n)}),e.NdJ("pageChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.loadPage(n))}),e.qZA(),e._uU(10,"\n    "),e.qZA(),e._uU(11,"\n  "),e.qZA()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("params",e.kEZ(7,L,t.page,t.totalItems,t.itemsPerPage)),e.xp6(5),e.Q6J("collectionSize",t.totalItems),e.E3D("page",t.ngbPaginationPage),e.Q6J("pageSize",t.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}let R=(()=>{class i{questionTypeService;activatedRoute;router;modalService;zone;questionTypes;isLoading=!1;totalItems=0;itemsPerPage=p.gK;page;predicate;ascending;ngbPaginationPage=1;constructor(t,o,n,a,U){this.questionTypeService=t,this.activatedRoute=o,this.router=n,this.modalService=a,this.zone=U}loadPage(t,o){this.isLoading=!0;const n=t??this.page??1;this.questionTypeService.query({page:n-1,size:this.itemsPerPage,sort:this.sort()}).subscribe({next:a=>{this.isLoading=!1,this.onSuccess(a.body,a.headers,n,!o)},error:()=>{this.isLoading=!1,this.onError()}})}ngOnInit(){this.handleNavigation()}trackId(t,o){return o.id}delete(t){const o=this.modalService.open(N,{size:"lg",backdrop:"static"});o.componentInstance.questionType=t,o.closed.subscribe(n=>{"deleted"===n&&this.loadPage()})}sort(){const t=[this.predicate+","+(this.ascending?p.aW:p.jo)];return"id"!==this.predicate&&t.push("id"),t}handleNavigation(){(0,S.a)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([t,o])=>{const a=+(o.get("page")??1),U=(o.get(p._l)??t.defaultSort).split(","),j=U[0],C=U[1]===p.aW;(a!==this.page||j!==this.predicate||C!==this.ascending)&&(this.predicate=j,this.ascending=C,this.loadPage(a,!0))})}onSuccess(t,o,n,a){this.totalItems=Number(o.get("X-Total-Count")),this.page=n,a&&this.zone.run(()=>{this.router.navigate(["/question-type"],{queryParams:{page:this.page,size:this.itemsPerPage,sort:this.predicate+","+(this.ascending?p.aW:p.jo)}})}),this.questionTypes=t??[],this.ngbPaginationPage=this.page}onError(){this.ngbPaginationPage=this.page??1}static \u0275fac=function(o){return new(o||i)(e.Y36(T.C),e.Y36(c.gz),e.Y36(c.F0),e.Y36(Z.FF),e.Y36(e.R0b))};static \u0275cmp=e.Xpm({type:i,selectors:[["jhi-question-type"]],standalone:!0,features:[e.jDz],decls:38,vars:7,consts:[["id","page-heading","data-cy","QuestionTypeHeading"],["jhiTranslate","gradeScopeIsticApp.questionType.home.title"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"click","disabled"],["icon","sync",3,"animation"],["jhiTranslate","gradeScopeIsticApp.questionType.home.refreshListLabel"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-question-type",3,"routerLink"],["icon","plus"],["jhiTranslate","gradeScopeIsticApp.questionType.home.createLabel"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],[4,"ngIf"],["id","no-result",1,"alert","alert-warning"],["jhiTranslate","gradeScopeIsticApp.questionType.home.notFound"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicateChange","ascendingChange","sortChange","predicate","ascending"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col","jhiSortBy","algoName"],["jhiTranslate","gradeScopeIsticApp.questionType.algoName"],["scope","col","jhiSortBy","endpoint"],["jhiTranslate","gradeScopeIsticApp.questionType.endpoint"],["scope","col","jhiSortBy","jsFunction"],["jhiTranslate","gradeScopeIsticApp.questionType.jsFunction"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-end"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"],[1,"d-flex","justify-content-center"],[3,"params"],[3,"pageChange","collectionSize","page","pageSize","maxSize","rotate","boundaryLinks"]],template:function(o,n){1&o&&(e.TgZ(0,"div"),e._uU(1,"\n  "),e.TgZ(2,"h2",0),e._uU(3,"\n    "),e.TgZ(4,"span",1),e._uU(5,"Question Types"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",2),e._uU(8,"\n      "),e.TgZ(9,"button",3),e.NdJ("click",function(){return n.loadPage()}),e._uU(10,"\n        "),e._UZ(11,"fa-icon",4),e._uU(12,"\n        "),e.TgZ(13,"span",5),e._uU(14,"Refresh List"),e.qZA(),e._uU(15,"\n      "),e.qZA(),e._uU(16,"\n\n      "),e.TgZ(17,"button",6),e._uU(18,"\n        "),e._UZ(19,"fa-icon",7),e._uU(20,"\n        "),e.TgZ(21,"span",8),e._uU(22," Create a new Question Type "),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n    "),e.qZA(),e._uU(25,"\n  "),e.qZA(),e._uU(26,"\n\n  "),e._UZ(27,"jhi-alert-error"),e._uU(28,"\n\n  "),e._UZ(29,"jhi-alert"),e._uU(30,"\n\n  "),e.YNc(31,z,5,0,"div",9),e._uU(32,"\n\n  "),e.YNc(33,w,48,4,"div",10),e._uU(34,"\n\n  "),e.YNc(35,E,12,11,"div",11),e._uU(36,"\n"),e.qZA(),e._uU(37,"\n")),2&o&&(e.xp6(9),e.Q6J("disabled",n.isLoading),e.xp6(2),e.Q6J("animation","spin"),e.xp6(6),e.Q6J("routerLink",e.DdM(6,D)),e.xp6(14),e.Q6J("ngIf",0===(null==n.questionTypes?null:n.questionTypes.length)),e.xp6(2),e.Q6J("ngIf",n.questionTypes&&n.questionTypes.length>0),e.xp6(2),e.Q6J("ngIf",n.questionTypes&&n.questionTypes.length>0))},dependencies:[m.P,_.BN,c.rH,g.A,f.w,d.O5,J.b,I.T,d.ax,Q.N,Z.N9],encapsulation:2})}return i})();const O=i=>["/question-type",i,"edit"];function Y(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n      "),e.TgZ(2,"h2",3)(3,"span",4),e._uU(4,"Question Type"),e.qZA()(),e._uU(5,"\n\n      "),e._UZ(6,"hr"),e._uU(7,"\n\n      "),e._UZ(8,"jhi-alert-error"),e._uU(9,"\n\n      "),e._UZ(10,"jhi-alert"),e._uU(11,"\n\n      "),e.TgZ(12,"dl",5),e._uU(13,"\n        "),e.TgZ(14,"dt")(15,"span",6),e._uU(16,"ID"),e.qZA()(),e._uU(17,"\n        "),e.TgZ(18,"dd"),e._uU(19,"\n          "),e.TgZ(20,"span"),e._uU(21),e.qZA(),e._uU(22,"\n        "),e.qZA(),e._uU(23,"\n        "),e.TgZ(24,"dt")(25,"span",7),e._uU(26,"Algo Name"),e.qZA()(),e._uU(27,"\n        "),e.TgZ(28,"dd"),e._uU(29,"\n          "),e.TgZ(30,"span"),e._uU(31),e.qZA(),e._uU(32,"\n        "),e.qZA(),e._uU(33,"\n        "),e.TgZ(34,"dt")(35,"span",8),e._uU(36,"Endpoint"),e.qZA()(),e._uU(37,"\n        "),e.TgZ(38,"dd"),e._uU(39,"\n          "),e.TgZ(40,"span"),e._uU(41),e.qZA(),e._uU(42,"\n        "),e.qZA(),e._uU(43,"\n        "),e.TgZ(44,"dt")(45,"span",9),e._uU(46,"Js Function"),e.qZA()(),e._uU(47,"\n        "),e.TgZ(48,"dd"),e._uU(49,"\n          "),e.TgZ(50,"span"),e._uU(51),e.qZA(),e._uU(52,"\n        "),e.qZA(),e._uU(53,"\n      "),e.qZA(),e._uU(54,"\n\n      "),e.TgZ(55,"button",10),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.previousState())}),e._uU(56,"\n        "),e._UZ(57,"fa-icon",11),e._uU(58,"\xa0"),e.TgZ(59,"span",12),e._uU(60,"Back"),e.qZA(),e._uU(61,"\n      "),e.qZA(),e._uU(62,"\n\n      "),e.TgZ(63,"button",13),e._uU(64,"\n        "),e._UZ(65,"fa-icon",14),e._uU(66,"\xa0"),e.TgZ(67,"span",15),e._uU(68,"Edit"),e.qZA(),e._uU(69,"\n      "),e.qZA(),e._uU(70,"\n    "),e.qZA()}if(2&i){const t=e.oxw();e.xp6(21),e.Oqu(t.questionType.id),e.xp6(10),e.Oqu(t.questionType.algoName),e.xp6(10),e.Oqu(t.questionType.endpoint),e.xp6(10),e.Oqu(t.questionType.jsFunction),e.xp6(12),e.Q6J("routerLink",e.VKq(5,O,t.questionType.id))}}let M=(()=>{class i{activatedRoute;questionType=null;constructor(t){this.activatedRoute=t}ngOnInit(){this.activatedRoute.data.subscribe(({questionType:t})=>{this.questionType=t})}previousState(){window.history.back()}static \u0275fac=function(o){return new(o||i)(e.Y36(c.gz))};static \u0275cmp=e.Xpm({type:i,selectors:[["jhi-question-type-detail"]],standalone:!0,features:[e.jDz],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","questionTypeDetailsHeading"],["jhiTranslate","gradeScopeIsticApp.questionType.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","gradeScopeIsticApp.questionType.algoName"],["jhiTranslate","gradeScopeIsticApp.questionType.endpoint"],["jhiTranslate","gradeScopeIsticApp.questionType.jsFunction"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.YNc(4,Y,71,7,"div",2),e._uU(5,"\n  "),e.qZA(),e._uU(6,"\n"),e.qZA(),e._uU(7,"\n")),2&o&&(e.xp6(4),e.Q6J("ngIf",n.questionType))},dependencies:[d.O5,m.P,g.A,f.w,_.BN,c.rH],encapsulation:2})}return i})();var B=s(4716),v=s(2143);function K(i,r){1&i&&(e.TgZ(0,"small",22),e._uU(1,"\n              This field is required.\n            "),e.qZA())}function H(i,r){if(1&i&&(e.TgZ(0,"div"),e._uU(1,"\n            "),e.YNc(2,K,2,0,"small",21),e._uU(3,"\n          "),e.qZA()),2&i){let t;const o=e.oxw();e.xp6(2),e.Q6J("ngIf",null==(t=o.editForm.get("algoName"))||null==t.errors?null:t.errors.required)}}let A=(()=>{class i{questionTypeService;activatedRoute;fb;isSaving=!1;editForm;constructor(t,o,n){this.questionTypeService=t,this.activatedRoute=o,this.fb=n,this.editForm=this.fb.group({id:[],algoName:[null,[u.kI.required]],endpoint:[],jsFunction:[]})}ngOnInit(){this.activatedRoute.data.subscribe(({questionType:t})=>{this.updateForm(t)})}previousState(){window.history.back()}save(){this.isSaving=!0;const t=this.createFromForm();this.subscribeToSaveResponse(void 0!==t.id?this.questionTypeService.update(t):this.questionTypeService.create(t))}subscribeToSaveResponse(t){t.pipe((0,B.x)(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(t){this.editForm.patchValue({id:t.id,algoName:t.algoName,endpoint:t.endpoint,jsFunction:t.jsFunction})}createFromForm(){return{...new v.c,id:this.editForm.get(["id"]).value,algoName:this.editForm.get(["algoName"]).value,endpoint:this.editForm.get(["endpoint"]).value,jsFunction:this.editForm.get(["jsFunction"]).value}}static \u0275fac=function(o){return new(o||i)(e.Y36(T.C),e.Y36(c.gz),e.Y36(u.QS))};static \u0275cmp=e.Xpm({type:i,selectors:[["jhi-question-type-update"]],standalone:!0,features:[e.jDz],decls:70,vars:5,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"ngSubmit","formGroup"],["id","jhi-question-type-heading","data-cy","QuestionTypeCreateUpdateHeading","jhiTranslate","gradeScopeIsticApp.questionType.home.createOrEditLabel"],[1,"row","mb-3",3,"hidden"],["jhiTranslate","global.field.id","for","field_id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],[1,"row","mb-3"],["jhiTranslate","gradeScopeIsticApp.questionType.algoName","for","field_algoName",1,"form-label"],["type","text","name","algoName","id","field_algoName","data-cy","algoName","formControlName","algoName",1,"form-control"],[4,"ngIf"],["jhiTranslate","gradeScopeIsticApp.questionType.endpoint","for","field_endpoint",1,"form-label"],["type","text","name","endpoint","id","field_endpoint","data-cy","endpoint","formControlName","endpoint",1,"form-control"],["jhiTranslate","gradeScopeIsticApp.questionType.jsFunction","for","field_jsFunction",1,"form-label"],["type","text","name","jsFunction","id","field_jsFunction","data-cy","jsFunction","formControlName","jsFunction",1,"form-control"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["class","form-text text-danger","jhiTranslate","entity.validation.required",4,"ngIf"],["jhiTranslate","entity.validation.required",1,"form-text","text-danger"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return n.save()}),e._uU(5,"\n      "),e.TgZ(6,"h2",3),e._uU(7,"\n        Create or edit a Question Type\n      "),e.qZA(),e._uU(8,"\n\n      "),e.TgZ(9,"div"),e._uU(10,"\n        "),e._UZ(11,"jhi-alert-error"),e._uU(12,"\n\n        "),e.TgZ(13,"div",4),e._uU(14,"\n          "),e.TgZ(15,"label",5),e._uU(16,"ID"),e.qZA(),e._uU(17,"\n          "),e._UZ(18,"input",6),e._uU(19,"\n        "),e.qZA(),e._uU(20,"\n\n        "),e.TgZ(21,"div",7),e._uU(22,"\n          "),e.TgZ(23,"label",8),e._uU(24,"Algo Name"),e.qZA(),e._uU(25,"\n          "),e._UZ(26,"input",9),e._uU(27,"\n          "),e.YNc(28,H,4,1,"div",10),e._uU(29,"\n        "),e.qZA(),e._uU(30,"\n\n        "),e.TgZ(31,"div",7),e._uU(32,"\n          "),e.TgZ(33,"label",11),e._uU(34,"Endpoint"),e.qZA(),e._uU(35,"\n          "),e._UZ(36,"input",12),e._uU(37,"\n        "),e.qZA(),e._uU(38,"\n\n        "),e.TgZ(39,"div",7),e._uU(40,"\n          "),e.TgZ(41,"label",13),e._uU(42,"Js Function"),e.qZA(),e._uU(43,"\n          "),e._UZ(44,"input",14),e._uU(45,"\n        "),e.qZA(),e._uU(46,"\n      "),e.qZA(),e._uU(47,"\n\n      "),e.TgZ(48,"div"),e._uU(49,"\n        "),e.TgZ(50,"button",15),e.NdJ("click",function(){return n.previousState()}),e._uU(51,"\n          "),e._UZ(52,"fa-icon",16),e._uU(53,"\xa0"),e.TgZ(54,"span",17),e._uU(55,"Cancel"),e.qZA(),e._uU(56,"\n        "),e.qZA(),e._uU(57,"\n\n        "),e.TgZ(58,"button",18),e._uU(59,"\n          "),e._UZ(60,"fa-icon",19),e._uU(61,"\xa0"),e.TgZ(62,"span",20),e._uU(63,"Save"),e.qZA(),e._uU(64,"\n        "),e.qZA(),e._uU(65,"\n      "),e.qZA(),e._uU(66,"\n    "),e.qZA(),e._uU(67,"\n  "),e.qZA(),e._uU(68,"\n"),e.qZA(),e._uU(69,"\n")),2&o&&(e.xp6(4),e.Q6J("formGroup",n.editForm),e.xp6(9),e.Q6J("hidden",null==n.editForm.get("id").value),e.xp6(5),e.Q6J("readonly",!0),e.xp6(10),e.Q6J("ngIf",n.editForm.get("algoName").invalid&&(n.editForm.get("algoName").dirty||n.editForm.get("algoName").touched)),e.xp6(30),e.Q6J("disabled",n.editForm.invalid||n.isSaving))},dependencies:[u.u5,u._Y,u.Fj,u.wV,u.JJ,u.JL,u.UX,u.sg,u.u,m.P,g.A,d.O5,_.BN],encapsulation:2})}return i})();var b=s(2096),G=s(6232),V=s(1631);let y=(()=>{class i{service;router;zone;constructor(t,o,n){this.service=t,this.router=o,this.zone=n}resolve(t){const o=t.params.id;return o?this.service.find(o).pipe((0,V.z)(n=>n.body?(0,b.of)(n.body):(this.zone.run(()=>{this.router.navigate(["404"])}),G.E))):(0,b.of)(new v.c)}static \u0275fac=function(o){return new(o||i)(e.LFG(T.C),e.LFG(c.F0),e.LFG(e.R0b))};static \u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const X=[{path:"",component:R,data:{defaultSort:"id,asc",authorities:["ROLE_ADMIN"]},canActivate:[l.Z]},{path:":id/view",component:M,resolve:{questionType:y},data:{authorities:["ROLE_ADMIN"]},canActivate:[l.Z]},{path:"new",component:A,resolve:{questionType:y},data:{authorities:["ROLE_ADMIN"]},canActivate:[l.Z]},{path:":id/edit",component:A,resolve:{questionType:y},data:{authorities:["ROLE_ADMIN"]},canActivate:[l.Z]}]}}]);