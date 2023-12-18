import { buttonMapping, aLinkMapping } from './navigationalSections/navMapping'
import modalRendering from './modalRendering'
import { zoomLinks, navButtons, navLinks, modalLinks } from './utils/links'
import { getElementById } from './utils/queryElementbyId'

const show = false
let dialogElement = getElementById('accessibleDialog')
const rerender = () => {
  modalRendering(dialogElement, modalLinks, useState[0])
}

const useState = [show, rerender]

const callBackToggle = () => {
  useState[0] = !useState[0]
  useState[1]()
}

let links = zoomLinks

links = {
  navButtons: navButtons,
  navLinks: navLinks,
}

const navElement = getElementById('toggleSmall')
aLinkMapping(
  [],
  navElement,
  'isSmallScreen' === 'isSmallScreen',
  callBackToggle
)
