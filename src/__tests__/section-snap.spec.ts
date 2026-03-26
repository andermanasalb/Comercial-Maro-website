import { test, expect } from '@playwright/test'

const SECTION_IDS = ['hero', 'productos', 'nosotros', 'sectores', 'galeria', 'faq', 'blog', 'cta']
const NAVBAR_H   = 96   // h-8 (32px) + h-16 (64px), always in layout
const TOLERANCE  = 4    // px tolerance for sub-pixel rounding

test.use({ viewport: { width: 1280, height: 800 } })

test('each homepage section fills the viewport exactly below the navbar', async ({ page }) => {
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' })

  const viewportHeight = 800

  for (const id of SECTION_IDS) {
    // Scroll the section into view with instant behavior to skip animation
    await page.evaluate((sectionId) => {
      const el = document.getElementById(sectionId)
      if (!el) throw new Error(`Section #${sectionId} not found in DOM`)
      el.scrollIntoView({ behavior: 'instant' })
    }, id)

    // Wait for snap to settle
    await page.waitForTimeout(400)

    // Get viewport-relative bounding rect (getBoundingClientRect)
    const rect = await page.evaluate((sectionId) => {
      const el = document.getElementById(sectionId)
      if (!el) throw new Error(`#${sectionId} missing`)
      return el.getBoundingClientRect().toJSON()
    }, id)

    // top should be at NAVBAR_H (96px) — content starts just below the navbar
    expect(
      Math.abs(rect.top - NAVBAR_H),
      `#${id} top=${rect.top.toFixed(1)} expected ~${NAVBAR_H}`
    ).toBeLessThanOrEqual(TOLERANCE)

    // bottom should be at viewport height — section fills to the bottom edge
    expect(
      Math.abs(rect.bottom - viewportHeight),
      `#${id} bottom=${rect.bottom.toFixed(1)} expected ~${viewportHeight}`
    ).toBeLessThanOrEqual(TOLERANCE)

    // height should equal viewportHeight - NAVBAR_H
    const expectedH = viewportHeight - NAVBAR_H
    expect(
      Math.abs(rect.height - expectedH),
      `#${id} height=${rect.height.toFixed(1)} expected ~${expectedH}`
    ).toBeLessThanOrEqual(TOLERANCE)
  }
})
