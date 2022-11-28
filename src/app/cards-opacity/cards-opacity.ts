import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import TravelAppService from '../service/travel-app-service';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent);

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
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
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
    .icon-button::part(base) {
      color: hsla(var(--ig-secondary-500));
    }
    .image {
      object-fit: cover;
      height: 120px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .content {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
  `;

  constructor() {
    super();
    const travelAppService: TravelAppService = new TravelAppService();
    this.travelAppSelectedArticles = travelAppService.getData('SelectedArticles');
  }

  @property()
  private travelAppSelectedArticles?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        ${this.travelAppSelectedArticles?.map((item: any) => html`
          <igc-card class="card">
            <igc-card-header>
              <h3 slot="title">
                Product Name
              </h3>
              <h5 slot="subtitle">
                Department
              </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <div class="column-layout group_1">
                <img src="${item.image_url}" class="image" />
                <p class="typography__body-1 text">
                  Here you can add some description of the product in more details
                </p>
                <igc-button variant="outlined" class="button">
                  Button in Content
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="outlined" class="button">
                Action Btn
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
        `)}
      </div>
      <div class="column-layout group_2">
        <h6 class="content">
          Issue REPRODUCED IN: Blazor and Web Components generated apps
        </h6>
        <div class="row-layout group_3">
          <p class="typography__subtitle-1 content">
            Cards have an opacity issue. They look disabled.
          </p>
          <h6 class="content">
            REPRODUCED IN: Blazor and WebComponents generated apps
          </h6>
        </div>
      </div>
    `;
  }
}
