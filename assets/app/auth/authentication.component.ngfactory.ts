/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './authentication.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './auth.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link_active';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/router/src/directives/router_link';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/router/src/directives/router_outlet';
import * as import16 from '@angular/router/src/router';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/router/src/router_state';
import * as import19 from '@angular/common/src/location/location_strategy';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/router/src/router_outlet_map';
import * as import22 from '@angular/core/src/linker/component_factory_resolver';
import * as import23 from '@angular/core/src/security';
var renderType_AuthenticationComponent_Host:import0.RenderComponentType = (null as any);
class _View_AuthenticationComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AuthenticationComponent_0_4:import3.AuthenticationComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthenticationComponent_Host0,renderType_AuthenticationComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-authentication',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AuthenticationComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AuthenticationComponent_0_4 = new import3.AuthenticationComponent(this.parentInjector.get(import8.AuthService));
    this._appEl_0.initComponent(this._AuthenticationComponent_0_4,[],compView_0);
    compView_0.create(this._AuthenticationComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AuthenticationComponent) && (0 === requestNodeIndex))) { return this._AuthenticationComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AuthenticationComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AuthenticationComponent_Host === (null as any))) { (renderType_AuthenticationComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_AuthenticationComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AuthenticationComponentNgFactory:import10.ComponentFactory<import3.AuthenticationComponent> = new import10.ComponentFactory<import3.AuthenticationComponent>('app-authentication',viewFactory_AuthenticationComponent_Host0,import3.AuthenticationComponent);
const styles_AuthenticationComponent:any[] = [];
var renderType_AuthenticationComponent:import0.RenderComponentType = (null as any);
class _View_AuthenticationComponent0 extends import1.AppView<import3.AuthenticationComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _RouterLinkActive_6_3:import11.RouterLinkActive;
  _query_RouterLink_6_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_6_1:import12.QueryList<any>;
  _el_7:any;
  _RouterLinkWithHref_7_3:import13.RouterLinkWithHref;
  _text_8:any;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _appEl_10:import2.AppElement;
  _TemplateRef_10_5:any;
  _NgIf_10_6:import14.NgIf;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import14.NgIf;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  /*private*/ _appEl_19:import2.AppElement;
  _RouterOutlet_19_5:import15.RouterOutlet;
  _text_20:any;
  /*private*/ _expr_0:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthenticationComponent0,renderType_AuthenticationComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'header',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','row spacing');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'nav',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','col-md-8 col-md-offset-2');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','nav nav-tabs');
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'li',(null as any));
    this.renderer.setElementAttribute(this._el_6,'routerLinkActive','active');
    this._RouterLinkActive_6_3 = new import11.RouterLinkActive(this.parentInjector.get(import16.Router),new import17.ElementRef(this._el_6),this.renderer);
    this._query_RouterLink_6_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_6_1 = new import12.QueryList<any>();
    this._el_7 = this.renderer.createElement(this._el_6,'a',(null as any));
    this._RouterLinkWithHref_7_3 = new import13.RouterLinkWithHref(this.parentInjector.get(import16.Router),this.parentInjector.get(import18.ActivatedRoute),this.parentInjector.get(import19.LocationStrategy));
    this._text_8 = this.renderer.createText(this._el_7,'Signup',(null as any));
    this._text_9 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_10 = new import2.AppElement(10,4,this,this._anchor_10);
    this._TemplateRef_10_5 = new import20.TemplateRef_(this._appEl_10,viewFactory_AuthenticationComponent1);
    this._NgIf_10_6 = new import14.NgIf(this._appEl_10.vcRef,this._TemplateRef_10_5);
    this._text_11 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_12 = new import2.AppElement(12,4,this,this._anchor_12);
    this._TemplateRef_12_5 = new import20.TemplateRef_(this._appEl_12,viewFactory_AuthenticationComponent2);
    this._NgIf_12_6 = new import14.NgIf(this._appEl_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_14 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_16 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_17 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','row spacing');
    this._text_18 = this.renderer.createText(this._el_17,'\n    ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_17,'router-outlet',(null as any));
    this._appEl_19 = new import2.AppElement(19,17,this,this._el_19);
    this._RouterOutlet_19_5 = new import15.RouterOutlet(this.parentInjector.get(import21.RouterOutletMap),this._appEl_19.vcRef,this.parentInjector.get(import22.ComponentFactoryResolver),(null as any));
    this._text_20 = this.renderer.createText(this._el_17,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkWithHref_7_3; }
    if (((token === import11.RouterLinkActive) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkActive_6_3; }
    if (((token === import20.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import14.NgIf) && (10 === requestNodeIndex))) { return this._NgIf_10_6; }
    if (((token === import20.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import14.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6; }
    if (((token === import15.RouterOutlet) && (19 === requestNodeIndex))) { return this._RouterOutlet_19_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._RouterLinkActive_6_3.routerLinkActive = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_6_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_2:any = this._arr_0('signup');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLinkWithHref_7_3.routerLink = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_7_3.ngOnChanges(changes); }
    const currVal_4:boolean = !this.context.isLoggedIn();
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_10_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.isLoggedIn();
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_12_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_6_0.dirty) {
        this._query_RouterLink_6_0.reset([]);
        this._RouterLinkActive_6_3.links = this._query_RouterLink_6_0;
        this._query_RouterLink_6_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_6_1.dirty) {
        this._query_RouterLinkWithHref_6_1.reset([this._RouterLinkWithHref_7_3]);
        this._RouterLinkActive_6_3.linksWithHrefs = this._query_RouterLinkWithHref_6_1;
        this._query_RouterLinkWithHref_6_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_6_3.ngAfterContentInit(); }
    }
    const currVal_3:any = this._RouterLinkWithHref_7_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_7,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_7_3.ngOnDestroy();
    this._RouterLinkActive_6_3.ngOnDestroy();
    this._RouterOutlet_19_5.ngOnDestroy();
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_7_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AuthenticationComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AuthenticationComponent> {
  if ((renderType_AuthenticationComponent === (null as any))) { (renderType_AuthenticationComponent = viewUtils.createRenderComponentType('C:/Users/danmonte/mean/assets/app/auth/authentication.component.html',0,import9.ViewEncapsulation.None,styles_AuthenticationComponent,{})); }
  return new _View_AuthenticationComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_AuthenticationComponent1 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkActive_0_3:import11.RouterLinkActive;
  _query_RouterLink_0_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_0_1:import12.QueryList<any>;
  _el_1:any;
  _RouterLinkWithHref_1_3:import13.RouterLinkWithHref;
  _text_2:any;
  /*private*/ _expr_0:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthenticationComponent1,renderType_AuthenticationComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'routerLinkActive','active');
    this._RouterLinkActive_0_3 = new import11.RouterLinkActive(this.parent.parentInjector.get(import16.Router),new import17.ElementRef(this._el_0),this.renderer);
    this._query_RouterLink_0_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_0_1 = new import12.QueryList<any>();
    this._el_1 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._RouterLinkWithHref_1_3 = new import13.RouterLinkWithHref(this.parent.parentInjector.get(import16.Router),this.parent.parentInjector.get(import18.ActivatedRoute),this.parent.parentInjector.get(import19.LocationStrategy));
    this._text_2 = this.renderer.createText(this._el_1,'Signin',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_1_3; }
    if (((token === import11.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkActive_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._RouterLinkActive_0_3.routerLinkActive = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_0_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_2:any = this._arr_0('signin');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLinkWithHref_1_3.routerLink = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_1_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_0_0.dirty) {
        this._query_RouterLink_0_0.reset([]);
        this._RouterLinkActive_0_3.links = this._query_RouterLink_0_0;
        this._query_RouterLink_0_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_0_1.dirty) {
        this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_1_3]);
        this._RouterLinkActive_0_3.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
        this._query_RouterLinkWithHref_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_0_3.ngAfterContentInit(); }
    }
    const currVal_3:any = this._RouterLinkWithHref_1_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_1,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_1_3.ngOnDestroy();
    this._RouterLinkActive_0_3.ngOnDestroy();
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_1_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_AuthenticationComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_AuthenticationComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_AuthenticationComponent2 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkActive_0_3:import11.RouterLinkActive;
  _query_RouterLink_0_0:import12.QueryList<any>;
  _query_RouterLinkWithHref_0_1:import12.QueryList<any>;
  _el_1:any;
  _RouterLinkWithHref_1_3:import13.RouterLinkWithHref;
  _text_2:any;
  /*private*/ _expr_0:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthenticationComponent2,renderType_AuthenticationComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'routerLinkActive','active');
    this._RouterLinkActive_0_3 = new import11.RouterLinkActive(this.parent.parentInjector.get(import16.Router),new import17.ElementRef(this._el_0),this.renderer);
    this._query_RouterLink_0_0 = new import12.QueryList<any>();
    this._query_RouterLinkWithHref_0_1 = new import12.QueryList<any>();
    this._el_1 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._RouterLinkWithHref_1_3 = new import13.RouterLinkWithHref(this.parent.parentInjector.get(import16.Router),this.parent.parentInjector.get(import18.ActivatedRoute),this.parent.parentInjector.get(import19.LocationStrategy));
    this._text_2 = this.renderer.createText(this._el_1,'Logout',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_1_3; }
    if (((token === import11.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkActive_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._RouterLinkActive_0_3.routerLinkActive = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_0_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_2:any = this._arr_0('logout');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLinkWithHref_1_3.routerLink = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_1_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_0_0.dirty) {
        this._query_RouterLink_0_0.reset([]);
        this._RouterLinkActive_0_3.links = this._query_RouterLink_0_0;
        this._query_RouterLink_0_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_0_1.dirty) {
        this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_1_3]);
        this._RouterLinkActive_0_3.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
        this._query_RouterLinkWithHref_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_0_3.ngAfterContentInit(); }
    }
    const currVal_3:any = this._RouterLinkWithHref_1_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_1,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_1_3.ngOnDestroy();
    this._RouterLinkActive_0_3.ngOnDestroy();
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_1_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_AuthenticationComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_AuthenticationComponent2(viewUtils,parentInjector,declarationEl);
}