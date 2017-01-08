import '../reset-console.js'

const mockHTML = `<div id="console"></div>`;


/**
 * Tests a console function
 */
function testConsoleFunction(func, expectedClassName) {
  const mockMessage = "I'm a message!"
  func(mockMessage)
  let className = document.getElementById('console').firstChild.className;
  expect(document.getElementById('console').hasChildNodes());

  let reg = new RegExp(`\\b${expectedClassName}\\b`);
  expect(className.match(reg)).toBeTruthy();
}

describe("The reset-console snippet", () => {

  /**
   * Clear the console before each test
   */
  beforeEach(() => {
    document.body.innerHTML = mockHTML;
  })

  /**
   * Log
   */
  it('adds a log to the DOM console', () => {
    testConsoleFunction(console.log, 'log')
  })

  /**
   * debug
   */
  it('adds an debug-log to the DOM console', () => {
    testConsoleFunction(console.debug, 'log')
  })

  /**
   * info
   */
  it('adds an info-log to the DOM console', () => {
    testConsoleFunction(console.info, 'log')
  })

  /**
   * Warn
   */
  it('adds a warn to the DOM console', () => {
    testConsoleFunction(console.warn, 'warn')
  })

  /**
   * error
   */
  it('adds an error to the DOM console', () => {
    testConsoleFunction(console.error, 'error')
  })

  /**
   * exception
   */
  it('adds an exception-error to the DOM console', () => {
    testConsoleFunction(console.exception, 'error')
  })

})
