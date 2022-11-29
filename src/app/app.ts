import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      background-color: hsla(var(--ig-surface-500));
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
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
    .icon-button::part(base) {
      color: hsla(var(--ig-gray-700));
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-secondary-600));
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  @query('#nav-drawer')
  public navDrawer?: IgcNavDrawerComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <div slot="start">
          <igc-icon-button variant="flat" @click=${() => this.navDrawer?.toggle()} class="icon-button">
            <span class="material-icons">
              menu
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
        <div>
          <p class="typography__subtitle-2 text">
            BUGS IN SAMPLES
          </p>
        </div>
      </igc-navbar>
      <div class="row-layout group">
        <igc-nav-drawer ?open="${true}" position="relative" id="nav-drawer" class="nav-drawer">
          <igc-nav-drawer-item @click="${() => Router.go('/buttons')}">
            <span slot="icon">
              <span class="material-icons icon">
                bug_report
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Buttons</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('/space-between')}">
            <span slot="icon">
              <span class="material-icons icon">
                bug_report
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Space Between</div>
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
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
