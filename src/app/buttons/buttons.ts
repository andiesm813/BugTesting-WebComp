import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcBadgeComponent, IgcButtonComponent, IgcCardComponent, IgcDialogComponent, IgcDropdownComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcDropdownComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcCardComponent, IgcDialogComponent, IgcBadgeComponent);

@customElement('app-buttons')
export default class Buttons extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
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
    .buttons {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_1 {
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
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
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
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .dropdown {
      min-width: min-content;
    }
    .button_1 {
      height: max-content;
      min-width: min-content;
    }
    .button::part(base) {
      color: hsla(var(--ig-success-500));
    }
    .dropdown::part(base) {
      height: max-content;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .avatar {
      --background: none;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
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
    .list {
      height: max-content;
      flex-shrink: 0;
    }
    .badge {
      width: max-content;
      height: max-content;
    }
  `;

  @query('#button')
  public button?: IgcButtonComponent;

  @query('#dropdown')
  public dropdown?: IgcDropdownComponent;

  @query('#custom-dialog')
  public customDialog?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout buttons">
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
        <div class="row-layout group_1">
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
              <div class="column-layout group_2">
                <igc-button class="button_1">
                  Button in content
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="outlined" class="button_1">
                  Button in content
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button_1">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button class="button_1">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
            </igc-card-actions>
          </igc-card>
          <div class="column-layout group_2">
            <igc-button @click=${() => this.customDialog?.toggle()} class="button_1">
              Custom dialog
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
      </div>
      <igc-dialog ?closeOnOutsideSelect="${true}" ?closeOnEscape="${true}" id="custom-dialog">
        <h3 slot="title">
          <h5>
            Confirmation
          </h5>
        </h3>
        <div class="column-layout group_2">
          <igc-button class="button_1">
            Button in content
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="button_1">
            Button in content
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
      <div class="column-layout group_3">
        <h6 class="h6">
          ISSUES
        </h6>
        <div class="row-layout group_4">
          <p class="typography__subtitle-1 text">
            When a button with RAISED or FLAT type has the icon switched turned on, it grows 2px in height
          </p>
          <h6 class="h6">
            REPRODUCED IN: AppBuilder Edit/Preview and Angular app
          </h6>
          <igc-badge variant="success" class="badge">
            BUG CREATED
          </igc-badge>
        </div>
        <div class="row-layout group_4">
          <p class="typography__subtitle-1 text">
            Button's INNER PADDING in the generated apps is lacking, so they look smaller than Angular
          </p>
          <h6 class="h6">
            REPRODUCED IN: Blazor and Web Components apps
          </h6>
          <igc-badge variant="success" class="badge">
            BUG CREATED
          </igc-badge>
        </div>
        <div class="row-layout group_4">
          <p class="typography__subtitle-1 text">
            When i change the foreground color of just ONE button, all the buttons get changed their foregrounds, except if they are part of a component. With the exception of buttons placed in custom dialog window content
          </p>
          <h6 class="h6">
            REPRODUCED IN: Blazor and Web Components apps
          </h6>
          <igc-badge variant="success" class="badge">
            BUG CREATED
          </igc-badge>
        </div>
      </div>
    `;
  }
}
