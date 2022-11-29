import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcBadgeComponent, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent, IgcBadgeComponent);

@customElement('app-cards-opacity')
export default class CardsOpacity extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: hidden;
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
    .custom-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
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
      height: 148px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
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
    .image_1 {
      object-fit: cover;
      height: 130px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .h6 {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: hsla(var(--ig-gray-300));
      width: 733px;
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
          <igc-card-content class="body-content">
            <div class="column-layout custom-content">
              <img src="/src/assets/theme-light.svg" class="image_1" />
              <igc-button class="button">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </igc-card-content>
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
          <igc-card-content class="body-content">
            <div class="column-layout custom-content">
              <img src="/src/assets/theme-dark.svg" class="image_1" />
              <igc-button class="button">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </igc-card-content>
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
          <igc-card-content class="body-content">
            <div class="column-layout custom-content">
              <img src="/src/assets/design system.png" class="image_1" />
              <igc-button class="button">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </igc-card-content>
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
          Issue REPRODUCED IN: Blazor and Web Components generated apps with Material and Fluent Themes
        </h6>
        <div class="row-layout group_1">
          <p class="typography__subtitle-1 text">
            The content placed inside the CARD SLOT looks like it's disabled. Some CSS class is applying a 0.6 opacity to the content of slots. I dont know if this affects other components with slots. 
          </p>
          <h6 class="h6">
            REPRODUCED IN: Blazor and WebComponents generated apps
          </h6>
          <igc-badge variant="success" class="badge">
            BUG CREATED
          </igc-badge>
        </div>
      </div>
    `;
  }
}
