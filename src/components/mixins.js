import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default {
  directives: {
    clickOutsideModal: {
      bind (el, binding, vnode) {
        el.clickOutsideEvent = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event)
          }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    },
    scrollLock: {
      inserted (el, binding) {
        if (binding) {
          disableBodyScroll(el, {})
        }
      },
      componentUpdated (el, binding) {
        if (binding) {
          disableBodyScroll(el, {})
        } else {
          enableBodyScroll(el)
        }
      },
      unbind (el) {
        enableBodyScroll(el)
      }
    }
  }
}
