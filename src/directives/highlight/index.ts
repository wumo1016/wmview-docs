import { ObjectDirective, DirectiveBinding } from 'vue'
import hljs from 'highlight.js/lib/core'

// import 'highlight.js/styles/base16/mexico-light.css'
import 'highlight.js/styles/base16/google-light.css'

hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

const highlight: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((el: HTMLElement) => {
      hljs.highlightElement(el)
    })
  }
}

export default highlight
