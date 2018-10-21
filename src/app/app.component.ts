import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'gtx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  menu = [{
    name: 'Compliance',
    subMenu: [{
      name: 'Cadastro de cliente',
      routerLink: '/customer-form/add'
    }]
  }, {
    name: 'Backoffice',
    subMenu: [{
      name: 'Análise de contratos',
      routerLink: '/contract-form'
    }, {
      name: 'Lista de histórias',
      routerLink: '/story-form'
    }, {
      name: 'Cadastro de história',
      routerLink: '/story-form/add'
    }, {
      name: 'Cadastro de canal bancário',
      routerLink: '/story-form/banking-channel/add'
    }, {
      name: 'Pré-Boletos',
      routerLink: '/pretrade-form'
    }]
  }, {
    name: 'Frontoffice',
    subMenu: [{
      name: 'Criar boleto',
      routerLink: '/blotter-form/add'
    }, {
      name: 'Boletos gerados',
      routerLink: '/blotter-form'
    }]
  }];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private mediaMatcher: MediaMatcher
  ) {
    this.mobileDetect();
  }
  mobileDetect() {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
