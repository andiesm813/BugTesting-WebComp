import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent);

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
    .group {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .card {
      height: max-content;
      min-width: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      background-color: hsla(var(--ig-secondary-800));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .image {
      object-fit: cover;
      width: 149px;
      height: 100px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: hsla(var(--ig-success-500));
      height: max-content;
      min-width: min-content;
    }
    .content_1 {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <igc-card class="card">
          <igc-card-header>
            <h3 slot="title">
            </h3>
            <h5 slot="subtitle">
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content">
            <div class="column-layout group_1">
              <img src="/src/assets/Logo.svg" class="image" />
              <p class="typography__subtitle-1 content">
                Products
              </p>
              <h4 class="content">
                1,236
              </h4>
              <p class="typography__subtitle-2 text">
                Increased 75%
              </p>
            </div>
          </igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="outlined" class="button">
              VIEW REPORT
              <igc-ripple></igc-ripple>
            </igc-button>
          </igc-card-actions>
        </igc-card>
        <igc-card class="card">
          <igc-card-header>
            <h3 slot="title">
            </h3>
            <h5 slot="subtitle">
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content">
            <div class="column-layout group_1">
              <img src="/src/assets/Logo.svg" class="image" />
              <p class="typography__subtitle-1 content">
                Products
              </p>
              <h4 class="content">
                1,236
              </h4>
              <p class="typography__subtitle-2 text">
                Increased 75%
              </p>
            </div>
          </igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="outlined" class="button">
              VIEW REPORT
              <igc-ripple></igc-ripple>
            </igc-button>
          </igc-card-actions>
        </igc-card>
        <igc-card class="card">
          <igc-card-header>
            <h3 slot="title">
            </h3>
            <h5 slot="subtitle">
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content">
            <div class="column-layout group_1">
              <img src="/src/assets/Logo.svg" class="image" />
              <p class="typography__subtitle-1 content">
                Products
              </p>
              <h4 class="content">
                1,236
              </h4>
              <p class="typography__subtitle-2 text">
                Increased 75%
              </p>
            </div>
          </igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="outlined" class="button">
              VIEW REPORT
              <igc-ripple></igc-ripple>
            </igc-button>
          </igc-card-actions>
        </igc-card>
        <igc-card class="card">
          <igc-card-header>
            <h3 slot="title">
            </h3>
            <h5 slot="subtitle">
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content">
            <div class="column-layout group_1">
              <img src="/src/assets/Logo.svg" class="image" />
              <p class="typography__subtitle-1 content">
                Products
              </p>
              <h4 class="content">
                1,236
              </h4>
              <p class="typography__subtitle-2 text">
                Increased 75%
              </p>
            </div>
          </igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="outlined" class="button">
              VIEW REPORT
              <igc-ripple></igc-ripple>
            </igc-button>
          </igc-card-actions>
        </igc-card>
      </div>
      <div class="column-layout group_2">
        <h6 class="content_1">
          Issue REPRODUCED IN: Blazor and Web Components generated apps
        </h6>
        <div class="row-layout group_3">
          <p class="typography__subtitle-1 content_1">
            Cards have an opacity issue. They look disabled.
          </p>
          <h6 class="content_1">
            REPRODUCED IN: Blazor and WebComponents generated apps
          </h6>
        </div>
      </div>
    `;
  }
}
