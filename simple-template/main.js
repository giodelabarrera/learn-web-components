
class MyParagraph extends HTMLElement {
  constructor() {
    super();

    // const template = document.getElementById('my-paragraph')
    // const templateContent = template.content

    const template = document.createElement('template')
    template.innerHTML = this.getTemplateString()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    // shadowRoot.appendChild(templateContent.cloneNode(true))
    shadowRoot.appendChild(document.importNode(template.content, true))
  }

  getTemplateString() {
    return `
      <style>
        p {
          color: gray
        }
      </style>
      <p>
        <slot name="my-text"></slot>
      </p>
    `
  }
}

customElements.define('my-paragraph', MyParagraph)