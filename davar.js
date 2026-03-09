/* ══════════════════════════════════════════════
   AVAR INTELLIGENCE COMPENDIUM — JAVASCRIPT
   Single shared toggle function for all accordion
   elements (sections, sessions, knowledge blocks).
   Uses HTML details/summary fallback pattern:
   buttons with aria-expanded + sibling .open class.
   ══════════════════════════════════════════════ */

function toggle(btn) {
  const body = btn.nextElementSibling;
  const open = body.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}
