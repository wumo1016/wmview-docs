import { ObjectDirective, DirectiveBinding } from 'vue'
import hljs from 'highlight.js/lib/core'

// import 'highlight.js/styles/base16/mexico-light.css'
import 'highlight.js/styles/base16/google-light.css'

hljs.registerLanguage(
  'xml',
  require('highlight.js/lib/languages/xml')
)

const highlight: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: any) => {
      hljs.highlightBlock(block)
    })
  }
}

export default highlight
