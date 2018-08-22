
const templateString = () => {
  return `
    <article>
      <div>
        <slot name="summary__list"></slot>
      </div>
      <div>
        <slot name="summary__description"></slot>
      </div>
    </article>
    `
}

HTMLDListElement

class SummaryDisplay extends HTMLElement {

  constructor() {
    super()

    const template = document.createElement('template')
    template.innerHTML = templateString()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(document.importNode(template.content, true))
  }

}

customElements.define('summary-display', SummaryDisplay)