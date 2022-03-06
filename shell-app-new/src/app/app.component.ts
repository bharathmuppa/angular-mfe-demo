import { Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { loadRemoteModule } from './utils/federation-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell-app';
  @ViewChild('header', { read: ViewContainerRef, static: true })
  headerContainer!: ViewContainerRef;

  @ViewChild('footer', { read: ViewContainerRef, static: true })
  footerContainer!: ViewContainerRef;

  constructor(private injector: Injector,
    private resolver: ComponentFactoryResolver
    ) {}

  ngAfterViewInit(): void {
    // load header
    loadRemoteModule({
      ...environment.microfrontends.layout,
      exposedModule: environment.microfrontends.layout.exposedModule[0],
    })
      .then(module => {
        const factory = this.resolver.resolveComponentFactory(module.HeaderComponent);
        this.headerContainer?.createComponent(factory, undefined, this.injector);
      });

    // load footer
    loadRemoteModule({
      ...environment.microfrontends.layout,
      exposedModule: environment.microfrontends.layout.exposedModule[1],
    })
      .then(module => {
        const factory = this.resolver.resolveComponentFactory(module.FooterComponent);
        this.footerContainer?.createComponent(factory, undefined, this.injector);
      });
  }
}
