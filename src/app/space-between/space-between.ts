import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcDropdownComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcDropdownComponent);

@customElement('app-space-between')
export default class SpaceBetween extends LitElement {
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
      justify-content: center;
      align-items: stretch;
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
    .group_1 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
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
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .dropdown {
      min-width: min-content;
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

  @query('#button-1')
  public button1?: IgcButtonComponent;

  @query('#dropdown-1')
  public dropdown1?: IgcDropdownComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <igc-button class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" @click=${() => this.dropdown1?.toggle(this.button1)} id="button-1" class="button">
            <span>With dropdown</span>
            <span class="material-icons">
              keyboard_arrow_down
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-dropdown id="dropdown-1" class="dropdown">
            <igc-dropdown-item>
              Option
            </igc-dropdown-item>
            <igc-dropdown-item>
              Option
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
        <div class="row-layout group_1">
          <igc-button class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            <span>Without dropdown</span>
            <span class="material-icons">
              keyboard_arrow_down
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
      <div class="column-layout group_2">
        <h6 class="content">
          ISSUES
        </h6>
        <div class="row-layout group_3">
          <p class="typography__subtitle-1 content">
            If a container, with 2 inner elements, has horizontal alignment set to space between, if one of the elements has a dropdown, the space between is altered, since it's considering the dropdown as a 3rd item.
          </p>
          <h6 class="content">
            REPRODUCED IN: AppBuilder Edit &amp; Preview, Blazor
          </h6>
        </div>
      </div>
    `;
  }
}
