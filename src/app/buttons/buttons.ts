import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcDialogComponent, IgcDropdownComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcDialogComponent, IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcDropdownComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcCardComponent, IgcIconButtonComponent);

@customElement('app-buttons')
export default class Buttons extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --background: none;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .content {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      color: hsla(var(--ig-surface-500));
      width: 811px;
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button_1 {
      height: max-content;
      min-width: min-content;
    }
    .dropdown {
      min-width: min-content;
    }
    .button::part(base) {
      color: hsla(var(--ig-info-500));
    }
    .dropdown::part(base) {
      height: max-content;
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
    }
    .group_1 {
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
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
    }
    .group_3 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .card {
      width: 320px;
      height: max-content;
      min-width: 320px;
      flex-shrink: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
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
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .list {
      height: max-content;
      flex-shrink: 0;
    }
  `;

  @query('#default-dialog')
  public defaultDialog?: IgcDialogComponent;

  @query('#custom-dialog')
  public customDialog?: IgcDialogComponent;

  @query('#button')
  public button?: IgcButtonComponent;

  @query('#dropdown')
  public dropdown?: IgcDropdownComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-dialog ?closeOnOutsideSelect="${true}" ?closeOnEscape="${true}" id="default-dialog">
        <h3 slot="title">
          <h5>
            Confirmation
          </h5>
        </h3>
        <p>Are you sure you want to do this?</p>
        <div slot="footer">
          <igc-button variant="flat" @click=${() => this.defaultDialog?.toggle()}>Cancel</igc-button>
          <igc-button variant="flat" @click=${() => this.defaultDialog?.toggle()}>OK</igc-button>
        </div>
      </igc-dialog>
      <igc-dialog ?closeOnOutsideSelect="${true}" ?closeOnEscape="${true}" id="custom-dialog">
        <h3 slot="title">
          <h5>
            Confirmation
          </h5>
        </h3>
        <div class="row-layout group">
          <p class="typography__body-1 text"></p>
          <igc-button class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div slot="footer">
          <igc-button variant="flat" class="button_1">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button class="button_1">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
      <div class="row-layout group_1">
        <div class="row-layout group_2">
          <igc-button class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" @click=${() => this.dropdown?.toggle(this.button)} id="button" class="button">
            <span>With dropdown</span>
            <span class="material-icons">
              keyboard_arrow_down
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-dropdown id="dropdown" class="dropdown">
            <igc-dropdown-item>
              Option
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
        <div class="row-layout group_3">
          <igc-list class="list">
            <igc-list-item>
              <div slot="start">
                <igc-avatar size="small" shape="circle" class="avatar">
                  <span class="material-icons">person</span>
                </igc-avatar>
              </div>
              <div slot="title">Title goes here</div>
              <div slot="subtitle">Subtitle...</div>
              <div>
                <igc-button class="button_1">
                  Button
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
              <div slot="end">
                <span class="material-icons icon">
                  star
                </span>
              </div>
            </igc-list-item>
          </igc-list>
          <igc-card class="card">
            <igc-card-header>
              <h3 slot="title">
                Title goes here...
              </h3>
              <h5 slot="subtitle">
                Subtitle goes here...
              </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <div class="row-layout group">
                <igc-button variant="outlined" class="button">
                  Button
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button_1">
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
                  bookmark
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
          <div class="column-layout group_4">
            <igc-button @click=${() => this.defaultDialog?.toggle()} class="button_1">
              Default dialog
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button @click=${() => this.customDialog?.toggle()} class="button_1">
              Custom Dialog
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
      </div>
      <div class="column-layout group_5">
        <h6 class="content">
          ISSUES
        </h6>
        <div class="row-layout group_6">
          <p class="typography__subtitle-1 content">
            When a button with RAISED type has the icon switched turned on, it grows 2px in height
          </p>
          <h6 class="content">
            REPRODUCED IN: AppBuilder Edit &amp; Preview and Angular app
          </h6>
        </div>
        <div class="row-layout group_6">
          <p class="typography__subtitle-1 content">
            Button's INNER PADDING in the generated apps is lacking, so they look smaller than Angular.
          </p>
          <h6 class="content">
            REPRODUCED IN: Blazor and Web Components apps
          </h6>
        </div>
        <div class="row-layout group_6">
          <p class="typography__subtitle-1 text_1">
            When i change the foreground color of just ONE button, all the buttons get changed their foregrounds, except if they are part of a component. The only exception to this is if the button is inside the content of a card.
          </p>
          <h6 class="content">
            REPRODUCED IN: Blazor and Web Components apps
          </h6>
        </div>
      </div>
    `;
  }
}
