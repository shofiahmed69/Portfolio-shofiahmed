# Product Requirements Document (PRD)
## Portfolio: 3D Animation & Mobile/PC Optimization

**Project:** [Portfolio-shofiahmed](https://github.com/shofiahmed69/Portfolio-shofiahmed)  
**Version:** 1.0  
**Date:** February 26, 2025  
**Status:** Draft

---

## 1. Executive Summary

Transform the existing Next.js portfolio (Kazi Shofi Ahmed) from 2D Framer Motion animations into a **3D-enhanced experience** while ensuring **full optimization for both mobile and desktop**. The site will retain its current structure (Hero, Skills, Projects, Footer) and add selective 3D elements and performance-conscious responsive behavior.

---

## 2. Current State

| Area | Current Implementation |
|------|------------------------|
| **Stack** | Next.js 16 (App Router), React 19, Framer Motion, Lucide React, Firebase |
| **Animations** | 2D: stagger children, fade/slide, floating hero image, gradient pulse, blob background |
| **Layout** | 12-column grid, breakpoints at 1024px, 768px, 480px |
| **Theme** | Dark (slate/blue), glassmorphism, neon accents |
| **Sections** | Navbar, Hero (profile + CTA), Skills (grid), Projects (GitHub API), Footer |

---

## 3. Goals & Success Criteria

### 3.1 3D Animation
- Introduce **meaningful 3D** (not decorative-only): hero scene, section transitions, or interactive elements.
- **Performance first:** 60fps on mid-range devices; graceful fallback when WebGL is unavailable or slow.
- **Accessibility:** respect `prefers-reduced-motion`; provide skip/static option for 3D.

### 3.2 Mobile & PC Optimization
- **Mobile:** touch-friendly UI, readable text, no horizontal scroll, fast LCP/CLS, optional reduced 3D or image fallback.
- **PC:** full 3D where beneficial, hover states, keyboard navigation.
- **Core Web Vitals:** LCP < 2.5s, FID/INP < 100ms, CLS < 0.1 on key viewports.

---

## 4. Functional Requirements

### 4.1 3D Animation

| ID | Requirement | Priority | Notes |
|----|-------------|----------|--------|
| 3D-1 | **Hero 3D scene** — Replace or augment hero background with a lightweight 3D scene (e.g. floating particles, subtle mesh, or abstract shapes) using React Three Fiber (@react-three/fiber) + Three.js. | P0 | Canvas behind content; no blocking of text/CTA. |
| 3D-2 | **Lazy-load 3D** — Load Three/R3F and 3D assets only when Hero (or 3D section) is in view or after FCP, to protect LCP. | P0 | Use dynamic import + intersection observer or next/dynamic. |
| 3D-3 | **Reduced motion** — If `prefers-reduced-motion: reduce`, disable or simplify 3D (e.g. static frame or CSS-only background). | P0 | Required for a11y. |
| 3D-4 | **Device tier** — On low-end/mobile: reduce 3D complexity (fewer particles, lower resolution, or switch to 2D/CSS fallback). | P0 | Detect via framerate heuristic or user agent / capabilities. |
| 3D-5 | **Optional: 3D section transitions** — Parallax or simple 3D flip between sections (e.g. Skills ↔ Projects). | P1 | Only if performance budget allows. |
| 3D-6 | **Optional: Interactive 3D object** — e.g. rotatable skill orb or project cube on hover/click (desktop) or tap (mobile). | P2 | Clearly optional; can be Phase 2. |

### 4.2 Mobile Optimization

| ID | Requirement | Priority | Notes |
|----|-------------|----------|--------|
| M-1 | **Viewport & tap targets** — Correct viewport meta; all interactive elements ≥ 44×44px. | P0 | Already partially there; audit Navbar, buttons, links. |
| M-2 | **Touch-friendly nav** — Navbar usable on small screens (existing pill); consider hamburger if links overflow. | P0 | Test on 320px–428px. |
| M-3 | **No horizontal overflow** — No scroll-x on any viewport; constrain images and grids. | P0 | Audit hero image, grids, long words. |
| M-4 | **Responsive images** — Hero profile image: srcset/sizes; consider WebP/AVIF; lazy below fold. | P0 | Hero image is above fold → prioritize. |
| M-5 | **Font & spacing** — Readable base font (≥16px where possible); adequate line-height and section padding on small screens. | P0 | Already using clamp(); verify on real devices. |
| M-6 | **3D on mobile** — Reduce or disable 3D on small screens or when `prefers-reduced-motion`; optional “Low quality” toggle in settings. | P0 | E.g. no particles, or static gradient. |

### 4.3 PC / Desktop Optimization

| ID | Requirement | Priority | Notes |
|----|-------------|----------|--------|
| D-1 | **Layout** — Preserve current 12-column grid and hero two-column layout on large screens. | P0 | No regression. |
| D-2 | **Hover states** — All cards, buttons, nav links have clear hover feedback (already partially done). | P0 | Ensure 3D layers don’t block hover. |
| D-3 | **Keyboard** — Focus visible; tab order logical; skip link to main content. | P0 | A11y baseline. |
| D-4 | **Performance** — 3D runs at 60fps on 1920×1080; no unnecessary re-renders (React.memo, stable refs for R3F). | P1 | Use frame budget or quality slider if needed. |

### 4.4 Cross-Cutting (Performance & UX)

| ID | Requirement | Priority | Notes |
|----|-------------|----------|--------|
| P-1 | **Bundle size** — Three.js + R3F loaded only for 3D route/section; code-split. | P0 | next/dynamic with ssr: false for canvas. |
| P-2 | **LCP** — LCP element (hero text or image) not blocked by 3D; 3D canvas behind or loading after. | P0 | Measure before/after. |
| P-3 | **CLS** — Reserve space for 3D canvas (e.g. aspect-ratio wrapper) so layout doesn’t shift. | P0 | No CLS from 3D mount. |
| P-4 | **Loading state** — Optional subtle loader or skeleton for 3D (e.g. hero) so users know content is coming. | P1 | Don’t block content. |

---

## 5. Non-Functional Requirements

- **Browser support:** Modern evergreen (Chrome, Firefox, Safari, Edge); graceful degradation for no WebGL.
- **Frameworks:** Stay on Next.js 16 App Router; add React Three Fiber + Three.js (and optionally Drei for helpers).
- **No breaking changes:** Existing Firebase deploy, existing sections, and metadata remain functional.

---

## 6. Technical Approach (Recommendations)

### 6.1 3D Stack
- **React Three Fiber** (@react-three/fiber) + **Three.js** for 3D.
- **@react-three/drei** for helpers (OrbitControls, Environment, etc.).
- **Dynamic import** for R3F canvas so it’s not in the critical path:
  ```js
  const Scene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false })
  ```
- Render 3D in a **fixed full-viewport or hero-sized** div; position behind content (z-index).

### 6.2 Device / Quality Tiers
- **High (desktop, good GPU):** Full 3D scene (e.g. particles + mesh).
- **Medium (desktop low-end / tablet):** Simplified 3D (fewer particles, lower resolution).
- **Low (mobile or reduced-motion):** CSS-only background (e.g. existing blob gradient) or single static 3D frame.

Detection: combine `window.matchMedia('(prefers-reduced-motion: reduce)')`, viewport width, and optionally a simple FPS check after first frame to downgrade.

### 6.3 Responsive & A11y
- Use **container queries** or existing breakpoints for layout; keep 3D container size predictable (e.g. 100vw × 100vh for hero).
- **Reserve space:** e.g. `min-height: 100vh` and `aspect-ratio` or fixed height for canvas wrapper to avoid CLS.
- **Reduced motion:** Media query + JS check; when true, don’t mount 3D or mount a “static” version.

---

## 7. Out of Scope (This PRD)

- Full 3D portfolio “room” or game-like navigation.
- Backend changes (Firebase usage unchanged).
- Content changes (copy, projects, skills list) unless needed for 3D/UX.

---

## 8. Phases & Milestones

| Phase | Scope | Deliverables |
|-------|--------|--------------|
| **Phase 1** | Foundation & hero 3D | Device tier detection, R3F setup, hero 3D scene (simple), reduced-motion + mobile fallback, LCP/CLS verified. |
| **Phase 2** | Mobile/PC polish | Responsive audit (tap targets, overflow, images), optional 3D section transition or interactive element. |
| **Phase 3** | Optional enhancements | Quality toggle, extra 3D micro-interactions, performance tuning. |

---

## 9. Acceptance Criteria (Summary)

- [ ] Hero has a 3D scene (or clear 2D fallback) that does not block LCP or cause CLS.
- [ ] On `prefers-reduced-motion: reduce`, 3D is disabled or minimal.
- [ ] On mobile (e.g. width &lt; 768px), 3D is reduced or replaced by non-3D background.
- [ ] No horizontal scroll on viewports 320px–2560px.
- [ ] All interactive elements are at least 44×44px and keyboard accessible.
- [ ] Three.js/R3F are code-split and not in the initial bundle for above-the-fold content.
- [ ] Core Web Vitals (LCP, INP, CLS) meet targets on representative mobile and desktop profiles.

---

## 10. References

- [Portfolio-shofiahmed](https://github.com/shofiahmed69/Portfolio-shofiahmed) — current repo.
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — R3F docs.
- [Next.js Dynamic Import](https://nextjs.org/docs/advanced-features/dynamic-import) — for code-splitting 3D.
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — MDN.
- [Core Web Vitals](https://web.dev/vitals/) — targets and measurement.

---

*This PRD can be used for estimation, sprint planning, and implementation. Adjust priorities (P0/P1/P2) and phases based on team capacity and timeline.*
