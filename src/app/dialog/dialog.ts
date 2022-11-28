import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcDialogComponent, IgcIconButtonComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcDialogComponent, IgcInputComponent);

@customElement('app-dialog')
export default class Dialog extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      gap: 24px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .cards {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .card {
      width: 240px;
      height: max-content;
      min-width: 240px;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 400px;
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
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .input {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .media-content {
      height: 120px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .image {
      height: 100%;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .content_1 {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
  `;

  @query('#dialog-min-width')
  public dialogMinWidth?: IgcDialogComponent;

  @query('#simple-dialog')
  public simpleDialog?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-button @click=${() => this.simpleDialog?.toggle()} class="user-input">
          DIALOG JUST BUTTONS
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button @click=${() => this.dialogMinWidth?.toggle()} class="user-input">
          DIALOG WITH MIN WIDTH
          <igc-ripple></igc-ripple>
        </igc-button>
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
              <igc-button variant="flat" class="user-input">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat">
                <span class="material-icons">
                  favorite
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat">
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
              <igc-button variant="flat" class="user-input">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat">
                <span class="material-icons">
                  favorite
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat">
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
              <igc-button variant="flat" class="user-input">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button variant="flat">
                <span class="material-icons">
                  favorite
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button variant="flat">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
        </div>
      </div>
      <igc-dialog ?closeOnOutsideSelect="${true}" ?closeOnEscape="${true}" id="dialog-min-width">
        <h3 slot="title">
          <h5>
            Custom Dialog with Min Width
          </h5>
        </h3>
        <div class="column-layout group_1">
          <h5 class="content"></h5>
          <igc-input label="Label/Placeholder" ?outlined="${false}" class="user-input"></igc-input>
          <igc-input label="Label/Placeholder" ?outlined="${false}" class="user-input"></igc-input>
          <div class="row-layout cards">
            <igc-input label="Label/Placeholder" ?outlined="${false}" class="input"></igc-input>
            <igc-input label="Label/Placeholder" ?outlined="${false}" class="input"></igc-input>
            <igc-input label="Label/Placeholder" ?outlined="${false}" class="input"></igc-input>
          </div>
        </div>
        <div slot="footer">
          <igc-button class="user-input">
            Add Product
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="user-input">
            Cancel
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
      <igc-dialog ?closeOnOutsideSelect="${true}" ?closeOnEscape="${true}" id="simple-dialog">
        <h3 slot="title">
          <h5>
            Confirmation
          </h5>
        </h3>
        <p class="typography__body-1 content"></p>
        <div slot="footer">
          <igc-button class="user-input">
            ADD PRODUCT
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="user-input">
            CANCEL
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
      <div class="column-layout group_2">
        <h6 class="content_1">
          ISSUES
        </h6>
        <div class="row-layout group_3">
          <p class="typography__subtitle-1 content_1">
            The top-left padding of the dialog doesnt match the bottom-right padding.
          </p>
          <h6 class="content_1">
            REPRODUCED IN: AppBuilder Edit &amp; Preview and Angular generated app
          </h6>
        </div>
        <div class="row-layout group_3">
          <p class="typography__subtitle-1 content_1">
            The font of the title shown in AppBuilder preview doesnt match the generated font 
          </p>
          <h6 class="content_1">
            REPRODUCED IN: Angular and Web Components generated apps
          </h6>
        </div>
        <div class="row-layout group_3">
          <p class="typography__subtitle-1 content_1">
            Action buttons dont have spacing between them
          </p>
          <h6 class="content_1">
            REPRODUCED IN: AppBuilder Edit &amp; Preview
          </h6>
        </div>
        <div class="row-layout group_3">
          <p class="typography__subtitle-1 content_1">
            Dialog is cropped
          </p>
          <h6 class="content_1">
            REPRODUCED IN: Web Components generated app
          </h6>
        </div>
      </div>
    `;
  }
}
