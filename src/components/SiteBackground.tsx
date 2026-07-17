/**
 * Fixed full-viewport background painted with composited layers.
 * Avoids iOS Safari bugs with background-attachment:fixed and
 * keeps overscroll/rubber-band color matching via html/body fills.
 */
export function SiteBackground() {
  return (
    <div className="site-bg" aria-hidden>
      <div className="site-bg__glow site-bg__glow--a" />
      <div className="site-bg__glow site-bg__glow--b" />
      <div className="site-bg__glow site-bg__glow--c" />
      <div className="site-bg__grain" />
    </div>
  )
}
