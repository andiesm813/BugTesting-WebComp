import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent, IgcIconComponent, IgcRippleComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      flex-shrink: 0;
    }
    .view-container {
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
    .nav-drawer::part(main) {
      width: 240px;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-secondary-600));
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-nav-drawer ?open="${true}" position="relative" class="nav-drawer">
        <igc-nav-drawer-item @click="${() => Router.go('/buttons')}">
          <span slot="icon">
            <span class="material-icons icon">
              bug_report
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Buttons</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item @click="${() => Router.go('/cards-opacity')}">
          <span slot="icon">
            <span class="material-icons icon">
              bug_report
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Cards Opacity</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item @click="${() => Router.go('/card-actions')}">
          <span slot="icon">
            <span class="material-icons icon">
              bug_report
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Card Action Buttons</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item @click="${() => Router.go('/dialog')}">
          <span slot="icon">
            <span class="material-icons icon">
              bug_report
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Dialogs</div>
        </igc-nav-drawer-item>
      </igc-nav-drawer>
      <router-outlet class="view-container"></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
