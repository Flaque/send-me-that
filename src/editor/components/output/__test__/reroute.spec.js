import {reroute} from '../reroute.js'

const mockHTML = `<div id="console"></div>`;


function resetConsoleDOM() {
  document.body.innerHTML = mockHTML;
}

/**
 * Returns true if the console has children
 */
function consoleHasChildren() {
  return document.getElementById('console').hasChildNodes()
}

/**
 * Returns true if class name matches
 */
function consoleItemHasClassName(expectedClassName) {
  let domConsole = document.getElementById('console')
  if (!domConsole.firstChild) return false
  let className = domConsole.firstChild.className;
  let reg = new RegExp(`\\b${expectedClassName}\\b`);
  return className.match(reg)
}

function consoleItemHasContent() {
  let domConsole = document.getElementById('console')
  if (!domConsole.firstChild) return false
  return (domConsole.firstChild.innerHTML.length > 0)
}

/**
 * Tests function without a reroute to make sure it has no effect.
 */
function testOriginalFunctionNotEffected(func, expectedClassName) {
  resetConsoleDOM();

  const mockMessage = "This is the real console!"
  func(mockMessage) // Test function without reroute

  expect(consoleHasChildren()).toBeFalsy()
  expect(consoleItemHasClassName(expectedClassName)).toBeFalsy()
}

/**
 * Tests a function passed with reroute
 */
function testFunction(func, expectedClassName) {
  reroute(func) // Try console function with reroute

  expect(consoleHasChildren()).toBeTruthy()
  expect(consoleItemHasClassName(expectedClassName)).toBeTruthy()
  expect(consoleItemHasContent()).toBeTruthy()
}

describe("The reroute console function", () => {

  /**
   * Clear the console before each test
   */
  beforeEach(() => {
    resetConsoleDOM();
  })

  /**
   * Log
   */
  it('adds a log to the DOM console', () => {
    let mock = () => { console.log('log') }
    testFunction(mock, 'log')
    testOriginalFunctionNotEffected(mock, 'log')
  })

  /**
   * debug
   */
  it('adds an error to the DOM console', () => {
    let mock = () => { console.error('error') }
    testFunction(mock, 'error')
    testOriginalFunctionNotEffected(mock, 'error')
  })

  /**
   * debug
   */
  it('adds a warn to the DOM console', () => {
    let mock = () => { console.warn('warn') }
    testFunction(mock, 'warn')
    testOriginalFunctionNotEffected(mock, 'warn')
  })

})
