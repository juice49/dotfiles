/**
 * Centre the focused window
 */
Key.on('c', [ 'cmd', 'alt' ], () => {
  const screen = Screen.main().flippedVisibleFrame()
  const window = Window.focused()

  if (!window) {
    return
  }

  window.setTopLeft({
    x: screen.x + (screen.width / 2) - (window.frame().width / 2),
    y: screen.y + (screen.height / 2) - (window.frame().height / 2)
  })
})

/**
 * Set the focused window to the screen size
 */
Key.on('f', [ 'cmd', 'alt' ], () => {
  const screen = Screen.main().flippedVisibleFrame()
  const window = Window.focused()

  if (!window) {
    return
  }

  window.setTopLeft({
    x: screen.x,
    y: screen.y
  })

  window.setSize({
    width: screen.width,
    height: screen.height
  })
})

