import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcDropdownComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcDropdownComponent);

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
    .row-layout {
      display: flex;
    }
    .group {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      gap: 8px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
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
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .group_3 {
      background-color: hsla(var(--ig-warn-500));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .dropdown {
      min-width: min-content;
    }
    .button::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .dropdown::part(base) {
      height: max-content;
    }
    .content {
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
  `;

  @query('#button')
  public button?: IgcButtonComponent;

  @query('#dropdown')
  public dropdown?: IgcDropdownComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
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
      <div class="column-layout group_1">
        <h6 class="content">
          ISSUES
        </h6>
        <div class="row-layout group_2">
          <p class="typography__subtitle-1 content">
            When a button with RAISED type has the icon switched turned on, it grows 2px in height
          </p>
          <h6 class="content">
            REPRODUCED IN: AppBuilder Edit &amp; Preview and Angular generated app
          </h6>
        </div>
        <div class="row-layout group_2">
          <p class="typography__subtitle-1 content">
            Button's INNER PADDING in the generated apps is lacking, so they look smaller than Angular.
          </p>
          <h6 class="content">
            REPRODUCED IN: Blazor and Web Components generated apps
          </h6>
        </div>
      </div>
      <div class="column-layout group_3">
        <div class="row-layout group_2">
          <p class="typography__subtitle-1 content">
            Outline and flat buttons have white text in Blazor and WebComponents
          </p>
          <h6 class="content">
            NOT HAPPENING!!! (sample app issue?) 
          </h6>
        </div>
      </div>
    `;
  }
}
