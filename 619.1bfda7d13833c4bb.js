"use strict";(self.webpackChunkgrade_scope_istic=self.webpackChunkgrade_scope_istic||[]).push([[619],{68619:(ne,h,s)=>{s.r(h),s.d(h,{QuestionTypeModule:()=>te});var x=s(94272),c=s(26696),_=s(58059),S=s(39841),p=s(74218),e=s(5e3),g=s(41169),y=s(73357),l=s(69808),r=s(93075),T=s(41995),m=s(486),U=s(49444);const F=function(n){return{id:n}};function N(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"form",1),e.NdJ("ngSubmit",function(){e.CHM(t);const o=e.oxw();return o.confirmDelete(o.questionType.id)}),e._uU(1,"\n  "),e.TgZ(2,"div",2),e._uU(3,"\n    "),e.TgZ(4,"h4",3),e._uU(5,"Confirm delete operation"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"button",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().cancel()}),e._uU(8,"\xd7"),e.qZA(),e._uU(9,"\n  "),e.qZA(),e._uU(10,"\n\n  "),e.TgZ(11,"div",5),e._uU(12,"\n    "),e._UZ(13,"jhi-alert-error"),e._uU(14,"\n\n    "),e.TgZ(15,"p",6),e._uU(16,"\n      Are you sure you want to delete this Question Type?\n    "),e.qZA(),e._uU(17,"\n  "),e.qZA(),e._uU(18,"\n\n  "),e.TgZ(19,"div",7),e._uU(20,"\n    "),e.TgZ(21,"button",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().cancel()}),e._uU(22,"\n      "),e._UZ(23,"fa-icon",9),e._uU(24,"\xa0"),e.TgZ(25,"span",10),e._uU(26,"Cancel"),e.qZA(),e._uU(27,"\n    "),e.qZA(),e._uU(28,"\n\n    "),e.TgZ(29,"button",11),e._uU(30,"\n      "),e._UZ(31,"fa-icon",12),e._uU(32,"\xa0"),e.TgZ(33,"span",13),e._uU(34,"Delete"),e.qZA(),e._uU(35,"\n    "),e.qZA(),e._uU(36,"\n  "),e.qZA(),e._uU(37,"\n"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(15),e.Q6J("translateValues",e.VKq(1,F,t.questionType.id))}}let I=(()=>{class n{constructor(t,i){this.questionTypeService=t,this.activeModal=i}cancel(){this.activeModal.dismiss()}confirmDelete(t){this.questionTypeService.delete(t).subscribe(()=>{this.activeModal.close("deleted")})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.C),e.Y36(y.Kz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","questionTypeDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["id","jhi-delete-questionType-heading","jhiTranslate","gradeScopeIsticApp.questionType.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-questionType","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(t,i){1&t&&(e.YNc(0,N,38,3,"form",0),e._uU(1,"\n")),2&t&&e.Q6J("ngIf",i.questionType)},directives:[l.O5,r._Y,r.JL,r.F,T.P,m.A,U.BN],encapsulation:2}),n})();var f=s(39003),J=s(31427),D=s(1408),P=s(18133);function L(n,a){1&n&&(e.TgZ(0,"div",12),e._uU(1,"\n    "),e.TgZ(2,"span",13),e._uU(3,"No questionTypes found"),e.qZA(),e._uU(4,"\n  "),e.qZA())}const v=function(n){return["/question-type",n,"view"]},w=function(n){return["/question-type",n,"edit"]};function k(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tr",28),e._uU(1,"\n          "),e.TgZ(2,"td"),e._uU(3,"\n            "),e.TgZ(4,"a",29),e._uU(5),e.qZA(),e._uU(6,"\n          "),e.qZA(),e._uU(7,"\n          "),e.TgZ(8,"td"),e._uU(9),e.qZA(),e._uU(10,"\n          "),e.TgZ(11,"td"),e._uU(12),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"td"),e._uU(15),e.qZA(),e._uU(16,"\n          "),e.TgZ(17,"td",30),e._uU(18,"\n            "),e.TgZ(19,"div",31),e._uU(20,"\n              "),e.TgZ(21,"button",32),e._uU(22,"\n                "),e._UZ(23,"fa-icon",33),e._uU(24,"\n                "),e.TgZ(25,"span",34),e._uU(26,"View"),e.qZA(),e._uU(27,"\n              "),e.qZA(),e._uU(28,"\n\n              "),e.TgZ(29,"button",35),e._uU(30,"\n                "),e._UZ(31,"fa-icon",36),e._uU(32,"\n                "),e.TgZ(33,"span",37),e._uU(34,"Edit"),e.qZA(),e._uU(35,"\n              "),e.qZA(),e._uU(36,"\n\n              "),e.TgZ(37,"button",38),e.NdJ("click",function(){const u=e.CHM(t).$implicit;return e.oxw(2).delete(u)}),e._uU(38,"\n                "),e._UZ(39,"fa-icon",39),e._uU(40,"\n                "),e.TgZ(41,"span",40),e._uU(42,"Delete"),e.qZA(),e._uU(43,"\n              "),e.qZA(),e._uU(44,"\n            "),e.qZA(),e._uU(45,"\n          "),e.qZA(),e._uU(46,"\n        "),e.qZA()}if(2&n){const t=a.$implicit;e.xp6(4),e.Q6J("routerLink",e.VKq(7,v,t.id)),e.xp6(1),e.Oqu(t.id),e.xp6(4),e.Oqu(t.algoName),e.xp6(3),e.Oqu(t.endpoint),e.xp6(3),e.Oqu(t.jsFunction),e.xp6(6),e.Q6J("routerLink",e.VKq(9,v,t.id)),e.xp6(8),e.Q6J("routerLink",e.VKq(11,w,t.id))}}function B(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",14),e._uU(1,"\n    "),e.TgZ(2,"table",15),e._uU(3,"\n      "),e.TgZ(4,"thead"),e._uU(5,"\n        "),e.TgZ(6,"tr",16),e.NdJ("predicateChange",function(o){return e.CHM(t),e.oxw().predicate=o})("ascendingChange",function(o){return e.CHM(t),e.oxw().ascending=o})("sortChange",function(){return e.CHM(t),e.oxw().loadPage()}),e._uU(7,"\n          "),e.TgZ(8,"th",17)(9,"span",18),e._uU(10,"ID"),e.qZA(),e._uU(11," "),e._UZ(12,"fa-icon",19),e.qZA(),e._uU(13,"\n          "),e.TgZ(14,"th",20),e._uU(15,"\n            "),e.TgZ(16,"span",21),e._uU(17,"Algo Name"),e.qZA(),e._uU(18," "),e._UZ(19,"fa-icon",19),e._uU(20,"\n          "),e.qZA(),e._uU(21,"\n          "),e.TgZ(22,"th",22),e._uU(23,"\n            "),e.TgZ(24,"span",23),e._uU(25,"Endpoint"),e.qZA(),e._uU(26," "),e._UZ(27,"fa-icon",19),e._uU(28,"\n          "),e.qZA(),e._uU(29,"\n          "),e.TgZ(30,"th",24),e._uU(31,"\n            "),e.TgZ(32,"span",25),e._uU(33,"Js Function"),e.qZA(),e._uU(34," "),e._UZ(35,"fa-icon",19),e._uU(36,"\n          "),e.qZA(),e._uU(37,"\n          "),e._UZ(38,"th",26),e._uU(39,"\n        "),e.qZA(),e._uU(40,"\n      "),e.qZA(),e._uU(41,"\n      "),e.TgZ(42,"tbody"),e._uU(43,"\n        "),e.YNc(44,k,47,13,"tr",27),e._uU(45,"\n      "),e.qZA(),e._uU(46,"\n    "),e.qZA(),e._uU(47,"\n  "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(6),e.Q6J("predicate",t.predicate)("ascending",t.ascending),e.xp6(38),e.Q6J("ngForOf",t.questionTypes)("ngForTrackBy",t.trackId)}}const M=function(n,a,t){return{page:n,totalItems:a,itemsPerPage:t}};function R(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n    "),e.TgZ(2,"div",41),e._uU(3,"\n      "),e._UZ(4,"jhi-item-count",42),e._uU(5,"\n    "),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",41),e._uU(8,"\n      "),e.TgZ(9,"ngb-pagination",43),e.NdJ("pageChange",function(o){return e.CHM(t),e.oxw().ngbPaginationPage=o})("pageChange",function(o){return e.CHM(t),e.oxw().loadPage(o)}),e.qZA(),e._uU(10,"\n    "),e.qZA(),e._uU(11,"\n  "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("params",e.kEZ(7,M,t.page,t.totalItems,t.itemsPerPage)),e.xp6(5),e.Q6J("collectionSize",t.totalItems)("page",t.ngbPaginationPage)("pageSize",t.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}const Y=function(){return["/question-type/new"]};let z=(()=>{class n{constructor(t,i,o,u){this.questionTypeService=t,this.activatedRoute=i,this.router=o,this.modalService=u,this.isLoading=!1,this.totalItems=0,this.itemsPerPage=p.gK,this.ngbPaginationPage=1}loadPage(t,i){var o;this.isLoading=!0;const u=null!==(o=null!=t?t:this.page)&&void 0!==o?o:1;this.questionTypeService.query({page:u-1,size:this.itemsPerPage,sort:this.sort()}).subscribe({next:d=>{this.isLoading=!1,this.onSuccess(d.body,d.headers,u,!i)},error:()=>{this.isLoading=!1,this.onError()}})}ngOnInit(){this.handleNavigation()}trackId(t,i){return i.id}delete(t){const i=this.modalService.open(I,{size:"lg",backdrop:"static"});i.componentInstance.questionType=t,i.closed.subscribe(o=>{"deleted"===o&&this.loadPage()})}sort(){const t=[this.predicate+","+(this.ascending?p.aW:p.jo)];return"id"!==this.predicate&&t.push("id"),t}handleNavigation(){(0,S.a)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([t,i])=>{var o;const u=i.get("page"),d=+(null!=u?u:1),C=(null!==(o=i.get(p._l))&&void 0!==o?o:t.defaultSort).split(","),j=C[0],Q=C[1]===p.aW;(d!==this.page||j!==this.predicate||Q!==this.ascending)&&(this.predicate=j,this.ascending=Q,this.loadPage(d,!0))})}onSuccess(t,i,o,u){this.totalItems=Number(i.get("X-Total-Count")),this.page=o,u&&this.router.navigate(["/question-type"],{queryParams:{page:this.page,size:this.itemsPerPage,sort:this.predicate+","+(this.ascending?p.aW:p.jo)}}),this.questionTypes=null!=t?t:[],this.ngbPaginationPage=this.page}onError(){var t;this.ngbPaginationPage=null!==(t=this.page)&&void 0!==t?t:1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.C),e.Y36(c.gz),e.Y36(c.F0),e.Y36(y.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["jhi-question-type"]],decls:38,vars:7,consts:[["id","page-heading","data-cy","QuestionTypeHeading"],["jhiTranslate","gradeScopeIsticApp.questionType.home.title"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"disabled","click"],["icon","sync",3,"spin"],["jhiTranslate","gradeScopeIsticApp.questionType.home.refreshListLabel"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-question-type",3,"routerLink"],["icon","plus"],["jhiTranslate","gradeScopeIsticApp.questionType.home.createLabel"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],[4,"ngIf"],["id","no-result",1,"alert","alert-warning"],["jhiTranslate","gradeScopeIsticApp.questionType.home.notFound"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col","jhiSortBy","algoName"],["jhiTranslate","gradeScopeIsticApp.questionType.algoName"],["scope","col","jhiSortBy","endpoint"],["jhiTranslate","gradeScopeIsticApp.questionType.endpoint"],["scope","col","jhiSortBy","jsFunction"],["jhiTranslate","gradeScopeIsticApp.questionType.jsFunction"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-end"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"],[1,"d-flex","justify-content-center"],[3,"params"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e._uU(1,"\n  "),e.TgZ(2,"h2",0),e._uU(3,"\n    "),e.TgZ(4,"span",1),e._uU(5,"Question Types"),e.qZA(),e._uU(6,"\n\n    "),e.TgZ(7,"div",2),e._uU(8,"\n      "),e.TgZ(9,"button",3),e.NdJ("click",function(){return i.loadPage()}),e._uU(10,"\n        "),e._UZ(11,"fa-icon",4),e._uU(12,"\n        "),e.TgZ(13,"span",5),e._uU(14,"Refresh List"),e.qZA(),e._uU(15,"\n      "),e.qZA(),e._uU(16,"\n\n      "),e.TgZ(17,"button",6),e._uU(18,"\n        "),e._UZ(19,"fa-icon",7),e._uU(20,"\n        "),e.TgZ(21,"span",8),e._uU(22," Create a new Question Type "),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n    "),e.qZA(),e._uU(25,"\n  "),e.qZA(),e._uU(26,"\n\n  "),e._UZ(27,"jhi-alert-error"),e._uU(28,"\n\n  "),e._UZ(29,"jhi-alert"),e._uU(30,"\n\n  "),e.YNc(31,L,5,0,"div",9),e._uU(32,"\n\n  "),e.YNc(33,B,48,4,"div",10),e._uU(34,"\n\n  "),e.YNc(35,R,12,11,"div",11),e._uU(36,"\n"),e.qZA(),e._uU(37,"\n")),2&t&&(e.xp6(9),e.Q6J("disabled",i.isLoading),e.xp6(2),e.Q6J("spin",i.isLoading),e.xp6(6),e.Q6J("routerLink",e.DdM(6,Y)),e.xp6(14),e.Q6J("ngIf",0===(null==i.questionTypes?null:i.questionTypes.length)),e.xp6(2),e.Q6J("ngIf",i.questionTypes&&i.questionTypes.length>0),e.xp6(2),e.Q6J("ngIf",i.questionTypes&&i.questionTypes.length>0))},directives:[T.P,U.BN,c.rH,m.A,f.w,l.O5,J.b,D.T,l.sg,c.yS,P.N,y.N9],encapsulation:2}),n})();const O=function(n){return["/question-type",n,"edit"]};function E(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n      "),e.TgZ(2,"h2",3)(3,"span",4),e._uU(4,"Question Type"),e.qZA()(),e._uU(5,"\n\n      "),e._UZ(6,"hr"),e._uU(7,"\n\n      "),e._UZ(8,"jhi-alert-error"),e._uU(9,"\n\n      "),e._UZ(10,"jhi-alert"),e._uU(11,"\n\n      "),e.TgZ(12,"dl",5),e._uU(13,"\n        "),e.TgZ(14,"dt")(15,"span",6),e._uU(16,"ID"),e.qZA()(),e._uU(17,"\n        "),e.TgZ(18,"dd"),e._uU(19,"\n          "),e.TgZ(20,"span"),e._uU(21),e.qZA(),e._uU(22,"\n        "),e.qZA(),e._uU(23,"\n        "),e.TgZ(24,"dt")(25,"span",7),e._uU(26,"Algo Name"),e.qZA()(),e._uU(27,"\n        "),e.TgZ(28,"dd"),e._uU(29,"\n          "),e.TgZ(30,"span"),e._uU(31),e.qZA(),e._uU(32,"\n        "),e.qZA(),e._uU(33,"\n        "),e.TgZ(34,"dt")(35,"span",8),e._uU(36,"Endpoint"),e.qZA()(),e._uU(37,"\n        "),e.TgZ(38,"dd"),e._uU(39,"\n          "),e.TgZ(40,"span"),e._uU(41),e.qZA(),e._uU(42,"\n        "),e.qZA(),e._uU(43,"\n        "),e.TgZ(44,"dt")(45,"span",9),e._uU(46,"Js Function"),e.qZA()(),e._uU(47,"\n        "),e.TgZ(48,"dd"),e._uU(49,"\n          "),e.TgZ(50,"span"),e._uU(51),e.qZA(),e._uU(52,"\n        "),e.qZA(),e._uU(53,"\n      "),e.qZA(),e._uU(54,"\n\n      "),e.TgZ(55,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().previousState()}),e._uU(56,"\n        "),e._UZ(57,"fa-icon",11),e._uU(58,"\xa0"),e.TgZ(59,"span",12),e._uU(60,"Back"),e.qZA(),e._uU(61,"\n      "),e.qZA(),e._uU(62,"\n\n      "),e.TgZ(63,"button",13),e._uU(64,"\n        "),e._UZ(65,"fa-icon",14),e._uU(66,"\xa0"),e.TgZ(67,"span",15),e._uU(68,"Edit"),e.qZA(),e._uU(69,"\n      "),e.qZA(),e._uU(70,"\n    "),e.qZA()}if(2&n){const t=e.oxw();e.xp6(21),e.Oqu(t.questionType.id),e.xp6(10),e.Oqu(t.questionType.algoName),e.xp6(10),e.Oqu(t.questionType.endpoint),e.xp6(10),e.Oqu(t.questionType.jsFunction),e.xp6(12),e.Q6J("routerLink",e.VKq(5,O,t.questionType.id))}}let H=(()=>{class n{constructor(t){this.activatedRoute=t,this.questionType=null}ngOnInit(){this.activatedRoute.data.subscribe(({questionType:t})=>{this.questionType=t})}previousState(){window.history.back()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["jhi-question-type-detail"]],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","questionTypeDetailsHeading"],["jhiTranslate","gradeScopeIsticApp.questionType.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","gradeScopeIsticApp.questionType.algoName"],["jhiTranslate","gradeScopeIsticApp.questionType.endpoint"],["jhiTranslate","gradeScopeIsticApp.questionType.jsFunction"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.YNc(4,E,71,7,"div",2),e._uU(5,"\n  "),e.qZA(),e._uU(6,"\n"),e.qZA(),e._uU(7,"\n")),2&t&&(e.xp6(4),e.Q6J("ngIf",i.questionType))},directives:[l.O5,T.P,m.A,f.w,U.BN,c.rH],encapsulation:2}),n})();var V=s(28746),q=s(55042);function K(n,a){1&n&&(e.TgZ(0,"small",22),e._uU(1,"\n              This field is required.\n            "),e.qZA())}function X(n,a){if(1&n&&(e.TgZ(0,"div"),e._uU(1,"\n            "),e.YNc(2,K,2,0,"small",21),e._uU(3,"\n          "),e.qZA()),2&n){const t=e.oxw();let i;e.xp6(2),e.Q6J("ngIf",null==(i=t.editForm.get("algoName"))||null==i.errors?null:i.errors.required)}}let A=(()=>{class n{constructor(t,i,o){this.questionTypeService=t,this.activatedRoute=i,this.fb=o,this.isSaving=!1,this.editForm=this.fb.group({id:[],algoName:[null,[r.kI.required]],endpoint:[],jsFunction:[]})}ngOnInit(){this.activatedRoute.data.subscribe(({questionType:t})=>{this.updateForm(t)})}previousState(){window.history.back()}save(){this.isSaving=!0;const t=this.createFromForm();this.subscribeToSaveResponse(void 0!==t.id?this.questionTypeService.update(t):this.questionTypeService.create(t))}subscribeToSaveResponse(t){t.pipe((0,V.x)(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(t){this.editForm.patchValue({id:t.id,algoName:t.algoName,endpoint:t.endpoint,jsFunction:t.jsFunction})}createFromForm(){return Object.assign(Object.assign({},new q.c),{id:this.editForm.get(["id"]).value,algoName:this.editForm.get(["algoName"]).value,endpoint:this.editForm.get(["endpoint"]).value,jsFunction:this.editForm.get(["jsFunction"]).value})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.C),e.Y36(c.gz),e.Y36(r.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["jhi-question-type-update"]],decls:70,vars:5,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-question-type-heading","data-cy","QuestionTypeCreateUpdateHeading","jhiTranslate","gradeScopeIsticApp.questionType.home.createOrEditLabel"],[1,"row","mb-3",3,"hidden"],["jhiTranslate","global.field.id","for","field_id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],[1,"row","mb-3"],["jhiTranslate","gradeScopeIsticApp.questionType.algoName","for","field_algoName",1,"form-label"],["type","text","name","algoName","id","field_algoName","data-cy","algoName","formControlName","algoName",1,"form-control"],[4,"ngIf"],["jhiTranslate","gradeScopeIsticApp.questionType.endpoint","for","field_endpoint",1,"form-label"],["type","text","name","endpoint","id","field_endpoint","data-cy","endpoint","formControlName","endpoint",1,"form-control"],["jhiTranslate","gradeScopeIsticApp.questionType.jsFunction","for","field_jsFunction",1,"form-label"],["type","text","name","jsFunction","id","field_jsFunction","data-cy","jsFunction","formControlName","jsFunction",1,"form-control"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["class","form-text text-danger","jhiTranslate","entity.validation.required",4,"ngIf"],["jhiTranslate","entity.validation.required",1,"form-text","text-danger"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return i.save()}),e._uU(5,"\n      "),e.TgZ(6,"h2",3),e._uU(7,"\n        Create or edit a Question Type\n      "),e.qZA(),e._uU(8,"\n\n      "),e.TgZ(9,"div"),e._uU(10,"\n        "),e._UZ(11,"jhi-alert-error"),e._uU(12,"\n\n        "),e.TgZ(13,"div",4),e._uU(14,"\n          "),e.TgZ(15,"label",5),e._uU(16,"ID"),e.qZA(),e._uU(17,"\n          "),e._UZ(18,"input",6),e._uU(19,"\n        "),e.qZA(),e._uU(20,"\n\n        "),e.TgZ(21,"div",7),e._uU(22,"\n          "),e.TgZ(23,"label",8),e._uU(24,"Algo Name"),e.qZA(),e._uU(25,"\n          "),e._UZ(26,"input",9),e._uU(27,"\n          "),e.YNc(28,X,4,1,"div",10),e._uU(29,"\n        "),e.qZA(),e._uU(30,"\n\n        "),e.TgZ(31,"div",7),e._uU(32,"\n          "),e.TgZ(33,"label",11),e._uU(34,"Endpoint"),e.qZA(),e._uU(35,"\n          "),e._UZ(36,"input",12),e._uU(37,"\n        "),e.qZA(),e._uU(38,"\n\n        "),e.TgZ(39,"div",7),e._uU(40,"\n          "),e.TgZ(41,"label",13),e._uU(42,"Js Function"),e.qZA(),e._uU(43,"\n          "),e._UZ(44,"input",14),e._uU(45,"\n        "),e.qZA(),e._uU(46,"\n      "),e.qZA(),e._uU(47,"\n\n      "),e.TgZ(48,"div"),e._uU(49,"\n        "),e.TgZ(50,"button",15),e.NdJ("click",function(){return i.previousState()}),e._uU(51,"\n          "),e._UZ(52,"fa-icon",16),e._uU(53,"\xa0"),e.TgZ(54,"span",17),e._uU(55,"Cancel"),e.qZA(),e._uU(56,"\n        "),e.qZA(),e._uU(57,"\n\n        "),e.TgZ(58,"button",18),e._uU(59,"\n          "),e._UZ(60,"fa-icon",19),e._uU(61,"\xa0"),e.TgZ(62,"span",20),e._uU(63,"Save"),e.qZA(),e._uU(64,"\n        "),e.qZA(),e._uU(65,"\n      "),e.qZA(),e._uU(66,"\n    "),e.qZA(),e._uU(67,"\n  "),e.qZA(),e._uU(68,"\n"),e.qZA(),e._uU(69,"\n")),2&t&&(e.xp6(4),e.Q6J("formGroup",i.editForm),e.xp6(9),e.Q6J("hidden",null==i.editForm.get("id").value),e.xp6(5),e.Q6J("readonly",!0),e.xp6(10),e.Q6J("ngIf",i.editForm.get("algoName").invalid&&(i.editForm.get("algoName").dirty||i.editForm.get("algoName").touched)),e.xp6(30),e.Q6J("disabled",i.editForm.invalid||i.isSaving))},directives:[r._Y,r.JL,r.sg,T.P,m.A,r.wV,r.Fj,r.JJ,r.u,l.O5,U.BN],encapsulation:2}),n})();var b=s(39646),G=s(60515),W=s(95577);let Z=(()=>{class n{constructor(t,i){this.service=t,this.router=i}resolve(t){const i=t.params.id;return i?this.service.find(i).pipe((0,W.z)(o=>o.body?(0,b.of)(o.body):(this.router.navigate(["404"]),G.E))):(0,b.of)(new q.c)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(g.C),e.LFG(c.F0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const $=[{path:"",component:z,data:{defaultSort:"id,asc"},canActivate:[_.Z]},{path:":id/view",component:H,resolve:{questionType:Z},canActivate:[_.Z]},{path:"new",component:A,resolve:{questionType:Z},canActivate:[_.Z]},{path:":id/edit",component:A,resolve:{questionType:Z},canActivate:[_.Z]}];let ee=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.Bz.forChild($)],c.Bz]}),n})(),te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[x.m,ee]]}),n})()}}]);