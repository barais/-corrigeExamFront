"use strict";(self.webpackChunkgrade_scope_istic=self.webpackChunkgrade_scope_istic||[]).push([[765],{40765:(nn,T,r)=>{r.r(T),r.d(T,{ZoneModule:()=>$});var C=r(94272),c=r(64035),_=r(58059),S=r(39841),d=r(74218),n=r(5e3),p=r(77553),h=r(86827),g=r(69808),s=r(93075),Z=r(41995),U=r(486),m=r(49444);const j=function(t){return{id:t}};function N(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){n.CHM(e);const o=n.oxw();return o.confirmDelete(o.zone.id)}),n._uU(1,"\n  "),n.TgZ(2,"div",2),n._uU(3,"\n    "),n.TgZ(4,"h4",3),n._uU(5,"Confirm delete operation"),n.qZA(),n._uU(6,"\n\n    "),n.TgZ(7,"button",4),n.NdJ("click",function(){return n.CHM(e),n.oxw().cancel()}),n._uU(8,"\xd7"),n.qZA(),n._uU(9,"\n  "),n.qZA(),n._uU(10,"\n\n  "),n.TgZ(11,"div",5),n._uU(12,"\n    "),n._UZ(13,"jhi-alert-error"),n._uU(14,"\n\n    "),n.TgZ(15,"p",6),n._uU(16,"\n      Are you sure you want to delete this Zone?\n    "),n.qZA(),n._uU(17,"\n  "),n.qZA(),n._uU(18,"\n\n  "),n.TgZ(19,"div",7),n._uU(20,"\n    "),n.TgZ(21,"button",8),n.NdJ("click",function(){return n.CHM(e),n.oxw().cancel()}),n._uU(22,"\n      "),n._UZ(23,"fa-icon",9),n._uU(24,"\xa0"),n.TgZ(25,"span",10),n._uU(26,"Cancel"),n.qZA(),n._uU(27,"\n    "),n.qZA(),n._uU(28,"\n\n    "),n.TgZ(29,"button",11),n._uU(30,"\n      "),n._UZ(31,"fa-icon",12),n._uU(32,"\xa0"),n.TgZ(33,"span",13),n._uU(34,"Delete"),n.qZA(),n._uU(35,"\n    "),n.qZA(),n._uU(36,"\n  "),n.qZA(),n._uU(37,"\n"),n.qZA()}if(2&t){const e=n.oxw();n.xp6(15),n.Q6J("translateValues",n.VKq(1,j,e.zone.id))}}let F=(()=>{class t{constructor(e,i){this.zoneService=e,this.activeModal=i}cancel(){this.activeModal.dismiss()}confirmDelete(e){this.zoneService.delete(e).subscribe(()=>{this.activeModal.close("deleted")})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.b),n.Y36(h.Kz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","zoneDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["id","jhi-delete-zone-heading","jhiTranslate","gradeScopeIsticApp.zone.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-zone","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(e,i){1&e&&(n.YNc(0,N,38,3,"form",0),n._uU(1,"\n")),2&e&&n.Q6J("ngIf",i.zone)},directives:[g.O5,s._Y,s.JL,s.F,Z.P,U.A,m.BN],encapsulation:2}),t})();var v=r(39003),w=r(31427),D=r(1408),J=r(18133);function P(t,a){1&t&&(n.TgZ(0,"div",12),n._uU(1,"\n    "),n.TgZ(2,"span",13),n._uU(3,"No zones found"),n.qZA(),n._uU(4,"\n  "),n.qZA())}const b=function(t){return["/zone",t,"view"]},L=function(t){return["/zone",t,"edit"]};function B(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"tr",32),n._uU(1,"\n          "),n.TgZ(2,"td"),n._uU(3,"\n            "),n.TgZ(4,"a",33),n._uU(5),n.qZA(),n._uU(6,"\n          "),n.qZA(),n._uU(7,"\n          "),n.TgZ(8,"td"),n._uU(9),n.qZA(),n._uU(10,"\n          "),n.TgZ(11,"td"),n._uU(12),n.qZA(),n._uU(13,"\n          "),n.TgZ(14,"td"),n._uU(15),n.qZA(),n._uU(16,"\n          "),n.TgZ(17,"td"),n._uU(18),n.qZA(),n._uU(19,"\n          "),n.TgZ(20,"td"),n._uU(21),n.qZA(),n._uU(22,"\n          "),n.TgZ(23,"td",34),n._uU(24,"\n            "),n.TgZ(25,"div",35),n._uU(26,"\n              "),n.TgZ(27,"button",36),n._uU(28,"\n                "),n._UZ(29,"fa-icon",37),n._uU(30,"\n                "),n.TgZ(31,"span",38),n._uU(32,"View"),n.qZA(),n._uU(33,"\n              "),n.qZA(),n._uU(34,"\n\n              "),n.TgZ(35,"button",39),n._uU(36,"\n                "),n._UZ(37,"fa-icon",40),n._uU(38,"\n                "),n.TgZ(39,"span",41),n._uU(40,"Edit"),n.qZA(),n._uU(41,"\n              "),n.qZA(),n._uU(42,"\n\n              "),n.TgZ(43,"button",42),n.NdJ("click",function(){const u=n.CHM(e).$implicit;return n.oxw(2).delete(u)}),n._uU(44,"\n                "),n._UZ(45,"fa-icon",43),n._uU(46,"\n                "),n.TgZ(47,"span",44),n._uU(48,"Delete"),n.qZA(),n._uU(49,"\n              "),n.qZA(),n._uU(50,"\n            "),n.qZA(),n._uU(51,"\n          "),n.qZA(),n._uU(52,"\n        "),n.qZA()}if(2&t){const e=a.$implicit;n.xp6(4),n.Q6J("routerLink",n.VKq(9,b,e.id)),n.xp6(1),n.Oqu(e.id),n.xp6(4),n.Oqu(e.pageNumber),n.xp6(3),n.Oqu(e.xInit),n.xp6(3),n.Oqu(e.yInit),n.xp6(3),n.Oqu(e.width),n.xp6(3),n.Oqu(e.height),n.xp6(6),n.Q6J("routerLink",n.VKq(11,b,e.id)),n.xp6(8),n.Q6J("routerLink",n.VKq(13,L,e.id))}}function k(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",14),n._uU(1,"\n    "),n.TgZ(2,"table",15),n._uU(3,"\n      "),n.TgZ(4,"thead"),n._uU(5,"\n        "),n.TgZ(6,"tr",16),n.NdJ("predicateChange",function(o){return n.CHM(e),n.oxw().predicate=o})("ascendingChange",function(o){return n.CHM(e),n.oxw().ascending=o})("sortChange",function(){return n.CHM(e),n.oxw().loadPage()}),n._uU(7,"\n          "),n.TgZ(8,"th",17)(9,"span",18),n._uU(10,"ID"),n.qZA(),n._uU(11," "),n._UZ(12,"fa-icon",19),n.qZA(),n._uU(13,"\n          "),n.TgZ(14,"th",20),n._uU(15,"\n            "),n.TgZ(16,"span",21),n._uU(17,"Page Number"),n.qZA(),n._uU(18," "),n._UZ(19,"fa-icon",19),n._uU(20,"\n          "),n.qZA(),n._uU(21,"\n          "),n.TgZ(22,"th",22),n._uU(23,"\n            "),n.TgZ(24,"span",23),n._uU(25,"X Init"),n.qZA(),n._uU(26," "),n._UZ(27,"fa-icon",19),n._uU(28,"\n          "),n.qZA(),n._uU(29,"\n          "),n.TgZ(30,"th",24),n._uU(31,"\n            "),n.TgZ(32,"span",25),n._uU(33,"Y Init"),n.qZA(),n._uU(34," "),n._UZ(35,"fa-icon",19),n._uU(36,"\n          "),n.qZA(),n._uU(37,"\n          "),n.TgZ(38,"th",26),n._uU(39,"\n            "),n.TgZ(40,"span",27),n._uU(41,"Width"),n.qZA(),n._uU(42," "),n._UZ(43,"fa-icon",19),n._uU(44,"\n          "),n.qZA(),n._uU(45,"\n          "),n.TgZ(46,"th",28),n._uU(47,"\n            "),n.TgZ(48,"span",29),n._uU(49,"Height"),n.qZA(),n._uU(50," "),n._UZ(51,"fa-icon",19),n._uU(52,"\n          "),n.qZA(),n._uU(53,"\n          "),n._UZ(54,"th",30),n._uU(55,"\n        "),n.qZA(),n._uU(56,"\n      "),n.qZA(),n._uU(57,"\n      "),n.TgZ(58,"tbody"),n._uU(59,"\n        "),n.YNc(60,B,53,15,"tr",31),n._uU(61,"\n      "),n.qZA(),n._uU(62,"\n    "),n.qZA(),n._uU(63,"\n  "),n.qZA()}if(2&t){const e=n.oxw();n.xp6(6),n.Q6J("predicate",e.predicate)("ascending",e.ascending),n.xp6(54),n.Q6J("ngForOf",e.zones)("ngForTrackBy",e.trackId)}}const M=function(t,a,e){return{page:t,totalItems:a,itemsPerPage:e}};function O(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div"),n._uU(1,"\n    "),n.TgZ(2,"div",45),n._uU(3,"\n      "),n._UZ(4,"jhi-item-count",46),n._uU(5,"\n    "),n.qZA(),n._uU(6,"\n\n    "),n.TgZ(7,"div",45),n._uU(8,"\n      "),n.TgZ(9,"ngb-pagination",47),n.NdJ("pageChange",function(o){return n.CHM(e),n.oxw().ngbPaginationPage=o})("pageChange",function(o){return n.CHM(e),n.oxw().loadPage(o)}),n.qZA(),n._uU(10,"\n    "),n.qZA(),n._uU(11,"\n  "),n.qZA()}if(2&t){const e=n.oxw();n.xp6(4),n.Q6J("params",n.kEZ(7,M,e.page,e.totalItems,e.itemsPerPage)),n.xp6(5),n.Q6J("collectionSize",e.totalItems)("page",e.ngbPaginationPage)("pageSize",e.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}const R=function(){return["/zone/new"]};let Y=(()=>{class t{constructor(e,i,o,u){this.zoneService=e,this.activatedRoute=i,this.router=o,this.modalService=u,this.isLoading=!1,this.totalItems=0,this.itemsPerPage=d.gK,this.ngbPaginationPage=1}loadPage(e,i){var o;this.isLoading=!0;const u=null!==(o=null!=e?e:this.page)&&void 0!==o?o:1;this.zoneService.query({page:u-1,size:this.itemsPerPage,sort:this.sort()}).subscribe({next:l=>{this.isLoading=!1,this.onSuccess(l.body,l.headers,u,!i)},error:()=>{this.isLoading=!1,this.onError()}})}ngOnInit(){this.handleNavigation()}trackId(e,i){return i.id}delete(e){const i=this.modalService.open(F,{size:"lg",backdrop:"static"});i.componentInstance.zone=e,i.closed.subscribe(o=>{"deleted"===o&&this.loadPage()})}sort(){const e=[this.predicate+","+(this.ascending?d.aW:d.jo)];return"id"!==this.predicate&&e.push("id"),e}handleNavigation(){(0,S.a)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([e,i])=>{var o;const u=i.get("page"),l=+(null!=u?u:1),z=(null!==(o=i.get(d._l))&&void 0!==o?o:e.defaultSort).split(","),x=z[0],I=z[1]===d.aW;(l!==this.page||x!==this.predicate||I!==this.ascending)&&(this.predicate=x,this.ascending=I,this.loadPage(l,!0))})}onSuccess(e,i,o,u){this.totalItems=Number(i.get("X-Total-Count")),this.page=o,u&&this.router.navigate(["/zone"],{queryParams:{page:this.page,size:this.itemsPerPage,sort:this.predicate+","+(this.ascending?d.aW:d.jo)}}),this.zones=null!=e?e:[],this.ngbPaginationPage=this.page}onError(){var e;this.ngbPaginationPage=null!==(e=this.page)&&void 0!==e?e:1}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.b),n.Y36(c.gz),n.Y36(c.F0),n.Y36(h.FF))},t.\u0275cmp=n.Xpm({type:t,selectors:[["jhi-zone"]],decls:38,vars:7,consts:[["id","page-heading","data-cy","ZoneHeading"],["jhiTranslate","gradeScopeIsticApp.zone.home.title"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"disabled","click"],["icon","sync",3,"spin"],["jhiTranslate","gradeScopeIsticApp.zone.home.refreshListLabel"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-zone",3,"routerLink"],["icon","plus"],["jhiTranslate","gradeScopeIsticApp.zone.home.createLabel"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],[4,"ngIf"],["id","no-result",1,"alert","alert-warning"],["jhiTranslate","gradeScopeIsticApp.zone.home.notFound"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col","jhiSortBy","pageNumber"],["jhiTranslate","gradeScopeIsticApp.zone.pageNumber"],["scope","col","jhiSortBy","xInit"],["jhiTranslate","gradeScopeIsticApp.zone.xInit"],["scope","col","jhiSortBy","yInit"],["jhiTranslate","gradeScopeIsticApp.zone.yInit"],["scope","col","jhiSortBy","width"],["jhiTranslate","gradeScopeIsticApp.zone.width"],["scope","col","jhiSortBy","height"],["jhiTranslate","gradeScopeIsticApp.zone.height"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-end"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"],[1,"d-flex","justify-content-center"],[3,"params"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"]],template:function(e,i){1&e&&(n.TgZ(0,"div"),n._uU(1,"\n  "),n.TgZ(2,"h2",0),n._uU(3,"\n    "),n.TgZ(4,"span",1),n._uU(5,"Zones"),n.qZA(),n._uU(6,"\n\n    "),n.TgZ(7,"div",2),n._uU(8,"\n      "),n.TgZ(9,"button",3),n.NdJ("click",function(){return i.loadPage()}),n._uU(10,"\n        "),n._UZ(11,"fa-icon",4),n._uU(12,"\n        "),n.TgZ(13,"span",5),n._uU(14,"Refresh List"),n.qZA(),n._uU(15,"\n      "),n.qZA(),n._uU(16,"\n\n      "),n.TgZ(17,"button",6),n._uU(18,"\n        "),n._UZ(19,"fa-icon",7),n._uU(20,"\n        "),n.TgZ(21,"span",8),n._uU(22," Create a new Zone "),n.qZA(),n._uU(23,"\n      "),n.qZA(),n._uU(24,"\n    "),n.qZA(),n._uU(25,"\n  "),n.qZA(),n._uU(26,"\n\n  "),n._UZ(27,"jhi-alert-error"),n._uU(28,"\n\n  "),n._UZ(29,"jhi-alert"),n._uU(30,"\n\n  "),n.YNc(31,P,5,0,"div",9),n._uU(32,"\n\n  "),n.YNc(33,k,64,4,"div",10),n._uU(34,"\n\n  "),n.YNc(35,O,12,11,"div",11),n._uU(36,"\n"),n.qZA(),n._uU(37,"\n")),2&e&&(n.xp6(9),n.Q6J("disabled",i.isLoading),n.xp6(2),n.Q6J("spin",i.isLoading),n.xp6(6),n.Q6J("routerLink",n.DdM(6,R)),n.xp6(14),n.Q6J("ngIf",0===(null==i.zones?null:i.zones.length)),n.xp6(2),n.Q6J("ngIf",i.zones&&i.zones.length>0),n.xp6(2),n.Q6J("ngIf",i.zones&&i.zones.length>0))},directives:[Z.P,m.BN,c.rH,U.A,v.w,g.O5,w.b,D.T,g.sg,c.yS,J.N,h.N9],encapsulation:2}),t})();const Q=function(t){return["/zone",t,"edit"]};function H(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div"),n._uU(1,"\n      "),n.TgZ(2,"h2",3)(3,"span",4),n._uU(4,"Zone"),n.qZA()(),n._uU(5,"\n\n      "),n._UZ(6,"hr"),n._uU(7,"\n\n      "),n._UZ(8,"jhi-alert-error"),n._uU(9,"\n\n      "),n._UZ(10,"jhi-alert"),n._uU(11,"\n\n      "),n.TgZ(12,"dl",5),n._uU(13,"\n        "),n.TgZ(14,"dt")(15,"span",6),n._uU(16,"ID"),n.qZA()(),n._uU(17,"\n        "),n.TgZ(18,"dd"),n._uU(19,"\n          "),n.TgZ(20,"span"),n._uU(21),n.qZA(),n._uU(22,"\n        "),n.qZA(),n._uU(23,"\n        "),n.TgZ(24,"dt")(25,"span",7),n._uU(26,"Page Number"),n.qZA()(),n._uU(27,"\n        "),n.TgZ(28,"dd"),n._uU(29,"\n          "),n.TgZ(30,"span"),n._uU(31),n.qZA(),n._uU(32,"\n        "),n.qZA(),n._uU(33,"\n        "),n.TgZ(34,"dt")(35,"span",8),n._uU(36,"X Init"),n.qZA()(),n._uU(37,"\n        "),n.TgZ(38,"dd"),n._uU(39,"\n          "),n.TgZ(40,"span"),n._uU(41),n.qZA(),n._uU(42,"\n        "),n.qZA(),n._uU(43,"\n        "),n.TgZ(44,"dt")(45,"span",9),n._uU(46,"Y Init"),n.qZA()(),n._uU(47,"\n        "),n.TgZ(48,"dd"),n._uU(49,"\n          "),n.TgZ(50,"span"),n._uU(51),n.qZA(),n._uU(52,"\n        "),n.qZA(),n._uU(53,"\n        "),n.TgZ(54,"dt")(55,"span",10),n._uU(56,"Width"),n.qZA()(),n._uU(57,"\n        "),n.TgZ(58,"dd"),n._uU(59,"\n          "),n.TgZ(60,"span"),n._uU(61),n.qZA(),n._uU(62,"\n        "),n.qZA(),n._uU(63,"\n        "),n.TgZ(64,"dt")(65,"span",11),n._uU(66,"Height"),n.qZA()(),n._uU(67,"\n        "),n.TgZ(68,"dd"),n._uU(69,"\n          "),n.TgZ(70,"span"),n._uU(71),n.qZA(),n._uU(72,"\n        "),n.qZA(),n._uU(73,"\n      "),n.qZA(),n._uU(74,"\n\n      "),n.TgZ(75,"button",12),n.NdJ("click",function(){return n.CHM(e),n.oxw().previousState()}),n._uU(76,"\n        "),n._UZ(77,"fa-icon",13),n._uU(78,"\xa0"),n.TgZ(79,"span",14),n._uU(80,"Back"),n.qZA(),n._uU(81,"\n      "),n.qZA(),n._uU(82,"\n\n      "),n.TgZ(83,"button",15),n._uU(84,"\n        "),n._UZ(85,"fa-icon",16),n._uU(86,"\xa0"),n.TgZ(87,"span",17),n._uU(88,"Edit"),n.qZA(),n._uU(89,"\n      "),n.qZA(),n._uU(90,"\n    "),n.qZA()}if(2&t){const e=n.oxw();n.xp6(21),n.Oqu(e.zone.id),n.xp6(10),n.Oqu(e.zone.pageNumber),n.xp6(10),n.Oqu(e.zone.xInit),n.xp6(10),n.Oqu(e.zone.yInit),n.xp6(10),n.Oqu(e.zone.width),n.xp6(10),n.Oqu(e.zone.height),n.xp6(12),n.Q6J("routerLink",n.VKq(7,Q,e.zone.id))}}let E=(()=>{class t{constructor(e){this.activatedRoute=e,this.zone=null}ngOnInit(){this.activatedRoute.data.subscribe(({zone:e})=>{this.zone=e})}previousState(){window.history.back()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(c.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["jhi-zone-detail"]],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","zoneDetailsHeading"],["jhiTranslate","gradeScopeIsticApp.zone.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","gradeScopeIsticApp.zone.pageNumber"],["jhiTranslate","gradeScopeIsticApp.zone.xInit"],["jhiTranslate","gradeScopeIsticApp.zone.yInit"],["jhiTranslate","gradeScopeIsticApp.zone.width"],["jhiTranslate","gradeScopeIsticApp.zone.height"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n._uU(1,"\n  "),n.TgZ(2,"div",1),n._uU(3,"\n    "),n.YNc(4,H,91,9,"div",2),n._uU(5,"\n  "),n.qZA(),n._uU(6,"\n"),n.qZA(),n._uU(7,"\n")),2&e&&(n.xp6(4),n.Q6J("ngIf",i.zone))},directives:[g.O5,Z.P,U.A,v.w,m.BN,c.rH],encapsulation:2}),t})();var V=r(28746),A=r(56073);let y=(()=>{class t{constructor(e,i,o){this.zoneService=e,this.activatedRoute=i,this.fb=o,this.isSaving=!1,this.editForm=this.fb.group({id:[],pageNumber:[],xInit:[],yInit:[],width:[],height:[]})}ngOnInit(){this.activatedRoute.data.subscribe(({zone:e})=>{this.updateForm(e)})}previousState(){window.history.back()}save(){this.isSaving=!0;const e=this.createFromForm();this.subscribeToSaveResponse(void 0!==e.id?this.zoneService.update(e):this.zoneService.create(e))}subscribeToSaveResponse(e){e.pipe((0,V.x)(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(e){this.editForm.patchValue({id:e.id,pageNumber:e.pageNumber,xInit:e.xInit,yInit:e.yInit,width:e.width,height:e.height})}createFromForm(){return Object.assign(Object.assign({},new A.l),{id:this.editForm.get(["id"]).value,pageNumber:this.editForm.get(["pageNumber"]).value,xInit:this.editForm.get(["xInit"]).value,yInit:this.editForm.get(["yInit"]).value,width:this.editForm.get(["width"]).value,height:this.editForm.get(["height"]).value})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.b),n.Y36(c.gz),n.Y36(s.qu))},t.\u0275cmp=n.Xpm({type:t,selectors:[["jhi-zone-update"]],decls:84,vars:4,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-zone-heading","data-cy","ZoneCreateUpdateHeading","jhiTranslate","gradeScopeIsticApp.zone.home.createOrEditLabel"],[1,"row","mb-3",3,"hidden"],["jhiTranslate","global.field.id","for","field_id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],[1,"row","mb-3"],["for","field_page",1,"form-label"],["type","number","name","pageNumber","id","field_pageNumber","data-cy","pageNumber","formControlName","pageNumber",1,"form-control"],["jhiTranslate","gradeScopeIsticApp.zone.xInit","for","field_xInit",1,"form-label"],["type","number","name","xInit","id","field_xInit","data-cy","xInit","formControlName","xInit",1,"form-control"],["jhiTranslate","gradeScopeIsticApp.zone.yInit","for","field_yInit",1,"form-label"],["type","number","name","yInit","id","field_yInit","data-cy","yInit","formControlName","yInit",1,"form-control"],["jhiTranslate","gradeScopeIsticApp.zone.width","for","field_width",1,"form-label"],["type","number","name","width","id","field_width","data-cy","width","formControlName","width",1,"form-control"],["jhiTranslate","gradeScopeIsticApp.zone.height","for","field_height",1,"form-label"],["type","number","name","height","id","field_height","data-cy","height","formControlName","height",1,"form-control"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n._uU(1,"\n  "),n.TgZ(2,"div",1),n._uU(3,"\n    "),n.TgZ(4,"form",2),n.NdJ("ngSubmit",function(){return i.save()}),n._uU(5,"\n      "),n.TgZ(6,"h2",3),n._uU(7,"\n        Create or edit a Zone\n      "),n.qZA(),n._uU(8,"\n\n      "),n.TgZ(9,"div"),n._uU(10,"\n        "),n._UZ(11,"jhi-alert-error"),n._uU(12,"\n\n        "),n.TgZ(13,"div",4),n._uU(14,"\n          "),n.TgZ(15,"label",5),n._uU(16,"ID"),n.qZA(),n._uU(17,"\n          "),n._UZ(18,"input",6),n._uU(19,"\n        "),n.qZA(),n._uU(20,"\n\n        "),n.TgZ(21,"div",7),n._uU(22,"\n          "),n.TgZ(23,"label",8),n._uU(24,"Page"),n.qZA(),n._uU(25,"\n          "),n._UZ(26,"input",9),n._uU(27,"\n        "),n.qZA(),n._uU(28,"\n\n        "),n.TgZ(29,"div",7),n._uU(30,"\n          "),n.TgZ(31,"label",10),n._uU(32,"X Init"),n.qZA(),n._uU(33,"\n          "),n._UZ(34,"input",11),n._uU(35,"\n        "),n.qZA(),n._uU(36,"\n\n        "),n.TgZ(37,"div",7),n._uU(38,"\n          "),n.TgZ(39,"label",12),n._uU(40,"Y Init"),n.qZA(),n._uU(41,"\n          "),n._UZ(42,"input",13),n._uU(43,"\n        "),n.qZA(),n._uU(44,"\n\n        "),n.TgZ(45,"div",7),n._uU(46,"\n          "),n.TgZ(47,"label",14),n._uU(48,"Width"),n.qZA(),n._uU(49,"\n          "),n._UZ(50,"input",15),n._uU(51,"\n        "),n.qZA(),n._uU(52,"\n\n        "),n.TgZ(53,"div",7),n._uU(54,"\n          "),n.TgZ(55,"label",16),n._uU(56,"Height"),n.qZA(),n._uU(57,"\n          "),n._UZ(58,"input",17),n._uU(59,"\n        "),n.qZA(),n._uU(60,"\n      "),n.qZA(),n._uU(61,"\n\n      "),n.TgZ(62,"div"),n._uU(63,"\n        "),n.TgZ(64,"button",18),n.NdJ("click",function(){return i.previousState()}),n._uU(65,"\n          "),n._UZ(66,"fa-icon",19),n._uU(67,"\xa0"),n.TgZ(68,"span",20),n._uU(69,"Cancel"),n.qZA(),n._uU(70,"\n        "),n.qZA(),n._uU(71,"\n\n        "),n.TgZ(72,"button",21),n._uU(73,"\n          "),n._UZ(74,"fa-icon",22),n._uU(75,"\xa0"),n.TgZ(76,"span",23),n._uU(77,"Save"),n.qZA(),n._uU(78,"\n        "),n.qZA(),n._uU(79,"\n      "),n.qZA(),n._uU(80,"\n    "),n.qZA(),n._uU(81,"\n  "),n.qZA(),n._uU(82,"\n"),n.qZA(),n._uU(83,"\n")),2&e&&(n.xp6(4),n.Q6J("formGroup",i.editForm),n.xp6(9),n.Q6J("hidden",null==i.editForm.get("id").value),n.xp6(5),n.Q6J("readonly",!0),n.xp6(54),n.Q6J("disabled",i.editForm.invalid||i.isSaving))},directives:[s._Y,s.JL,s.sg,Z.P,U.A,s.wV,s.Fj,s.JJ,s.u,m.BN],encapsulation:2}),t})();var q=r(39646),X=r(60515),K=r(95577);let f=(()=>{class t{constructor(e,i){this.service=e,this.router=i}resolve(e){const i=e.params.id;return i?this.service.find(i).pipe((0,K.z)(o=>o.body?(0,q.of)(o.body):(this.router.navigate(["404"]),X.E))):(0,q.of)(new A.l)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(p.b),n.LFG(c.F0))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const W=[{path:"",component:Y,data:{defaultSort:"id,asc"},canActivate:[_.Z]},{path:":id/view",component:E,resolve:{zone:f},canActivate:[_.Z]},{path:"new",component:y,resolve:{zone:f},canActivate:[_.Z]},{path:":id/edit",component:y,resolve:{zone:f},canActivate:[_.Z]}];let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.Bz.forChild(W)],c.Bz]}),t})(),$=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[C.m,G]]}),t})()}}]);