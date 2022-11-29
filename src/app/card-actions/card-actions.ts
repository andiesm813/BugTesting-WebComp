import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcBadgeComponent, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent, IgcBadgeComponent);

@customElement('app-card-actions')
export default class CardActions extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
    }
    .row-layout {
      display: flex;
    }
    .cards {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .card {
      width: 240px;
      height: max-content;
      min-width: 240px;
      flex-shrink: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: #24272B;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .media-content {
      height: 120px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-secondary-500));
    }
    .image {
      height: 100%;
    }
    .h6 {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: hsla(var(--ig-gray-300));
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
    .badge {
      width: max-content;
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout cards">
        <igc-card class="card">
          <igc-card-media class="media-content">
            <img src="/src/assets/theme-light.svg" class="image" />
          </igc-card-media>
          <igc-card-header>
            <h3 slot="title">
              Card Title
            </h3>
            <h5 slot="subtitle">
              This is the card subtitle
            </h5>
          </igc-card-header>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
        <igc-card class="card">
          <igc-card-media class="media-content">
            <img src="/src/assets/theme-dark.svg" class="image" />
          </igc-card-media>
          <igc-card-header>
            <h3 slot="title">
              Card Title
            </h3>
            <h5 slot="subtitle">
              This is the card subtitle
            </h5>
          </igc-card-header>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
        <igc-card class="card">
          <igc-card-media class="media-content">
            <img src="/src/assets/design system.png" class="image" />
          </igc-card-media>
          <igc-card-header>
            <h3 slot="title">
              Card Title
            </h3>
            <h5 slot="subtitle">
              This is the card subtitle
            </h5>
          </igc-card-header>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
      </div>
      <div class="column-layout group">
        <h6 class="h6">
          Both issues REPRODUCED IN: Blazor and Web Components generated apps
        </h6>
        <div class="row-layout group_1">
          <p class="typography__subtitle-1 text">
            If the positioning of the actions is reversed, when generated, Web Comp. and Blazor reverses them back to the original place.
          </p>
          <igc-badge variant="success" class="badge">
            BUG CREATED
          </igc-badge>
        </div>
        <div class="row-layout group_1">
          <p class="typography__subtitle-1 text">
            Action icons look justified, instead of being aligned to the left or right
          </p>
          <igc-badge variant="success" class="badge">
            BUG CREATED
          </igc-badge>
        </div>
      </div>
    `;
  }
}
