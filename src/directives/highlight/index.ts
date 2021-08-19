import { ObjectDirective, DirectiveBinding } from 'vue'
import hl from 'highlight.js'

// import 'highlight.js/styles/base16/mexico-light.css'
import 'highlight.js/styles/base16/google-light.css'

const highlight: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: any) => {
      hl.highlightBlock(block)
    })
  }
}

export default highlight
