# Duplicate lesson-section bug — fix report

## Root cause

`LessonView.tsx` had exactly one JSX render site each for `UnderstandingCheck`
and `MisconceptionCard` — there was no literal code duplication, no loop
rendering either component, and no stray/backup file (all confirmed by
grep before making any change).

The actual bug was a **React key collision** between two always-present
sibling elements added in the previous (design-pass) session:

```tsx
<details key={lesson.id} className="collapsible-section">   {/* Understanding check */}
  ...
</details>

<details key={lesson.id} className="collapsible-section">   {/* Transfer question */}
  ...
</details>
```

Both collapsible `<details>` wrappers were given the **identical key**,
`lesson.id`. React requires unique keys among siblings whenever a key is
supplied on any of them. When two siblings share one, React's reconciler
builds an internal `key → old fiber` map; the second element with the same
key finds nothing left to match once the first has claimed it. On every
re-render that changes `lesson.id` (i.e. every lesson navigation), React
can no longer reliably tell which old DOM subtree belongs to which of the
two `<details>` positions. Instead of cleanly unmounting the old pair and
mounting a fresh one, it can leave an orphaned fiber/DOM node behind while
also inserting a new one.

This explains both reported symptoms:

- **The count grows and differs by lesson** (2 on Lesson 1, 4 on Lesson 2)
  because the corruption *accumulates* with each navigation rather than
  resetting — it is not a fixed per-lesson multiplier.
- **Some duplicates show expanded** — those are stale leftover fibers that
  kept whatever `open` state a previous, incorrectly-reconciled render
  left them in, while the correctly-reconciled copy is freshly collapsed.

This is a **client-side reconciliation bug**: it only manifests across
re-renders (state updates / navigation) that diff against a previous tree.
Server-side rendering (`renderToStaticMarkup`) is always a single fresh
pass with nothing to diff against, which is why the prior session's SSR
smoke tests all passed despite the bug being real in the browser.

## Audit for the same class of bug

Grepped every `key={...}` usage across `components/learning/**/*.tsx`.
Five interactive widgets (`DiscretizedStringDemo`, `VariationBumpDemo`,
`FourierModesDemo`, `GaugeComparisonDemo`, `NaturalUnitsToggle`) also use
`key={lesson.id}`, but each is safe: the first four are mutually exclusive
siblings (only one `lesson.interactive.kind` is ever truthy per lesson, so
at most one of the four is ever actually rendered), and `NaturalUnitsToggle`
sits alone in a separate depth branch that is never a sibling of the other
four. No two elements with the same key are ever simultaneously present in
the same reconciliation pass for these. `MisconceptionCard`,
`next-question-banner`, and `SourceNotes` have no `key` prop and a single,
stable render site each — not affected by this bug class.

**Conclusion: the two `<details>` wrappers were the only instance of this bug.**

## Fix

Disambiguated the two keys while keeping them tied to `lesson.id` (so the
reset-on-navigation behavior is preserved):

```tsx
<details key={`${lesson.id}-understanding-check`} className="collapsible-section">
<details key={`${lesson.id}-transfer-question`} className="collapsible-section">
```

## Files changed

- `frontend/src/components/learning/LessonView.tsx` — the fix above (2 lines).

No other files were touched. `frontend/src/physics/model.ts` and
`frontend/src/data/academicLearningPath.ts` (lesson content) both show an
empty `git diff --stat` — confirmed untouched.

## Automated per-lesson count check

SSR-rendered all 21 lessons × 3 depth levels (63 combinations) and asserted
each render contains exactly one `<summary>Understanding check</summary>`,
one `<summary>Transfer question</summary>`, one `.misconception-card`, one
`.next-question-banner`, and one `.source-notes` drawer, plus that neither
collapsible `<details>` carries an `open` attribute at initial render.

**Result: 63/63 combinations pass. 0 failing.**

```
Lesson Depth      UC  TQ  MC  NQ  SRC  OpenByDefault  Status
 1     intuition  1   1   1   1   1    false         OK
 1     bridge     1   1   1   1   1    false         OK
 1     academic   1   1   1   1   1    false         OK
 2     intuition  1   1   1   1   1    false         OK
 2     bridge     1   1   1   1   1    false         OK
 2     academic   1   1   1   1   1    false         OK
 3     intuition  1   1   1   1   1    false         OK
 3     bridge     1   1   1   1   1    false         OK
 3     academic   1   1   1   1   1    false         OK
 4     intuition  1   1   1   1   1    false         OK
 4     bridge     1   1   1   1   1    false         OK
 4     academic   1   1   1   1   1    false         OK
 5     intuition  1   1   1   1   1    false         OK
 5     bridge     1   1   1   1   1    false         OK
 5     academic   1   1   1   1   1    false         OK
 6     intuition  1   1   1   1   1    false         OK
 6     bridge     1   1   1   1   1    false         OK
 6     academic   1   1   1   1   1    false         OK
 7     intuition  1   1   1   1   1    false         OK
 7     bridge     1   1   1   1   1    false         OK
 7     academic   1   1   1   1   1    false         OK
 8     intuition  1   1   1   1   1    false         OK
 8     bridge     1   1   1   1   1    false         OK
 8     academic   1   1   1   1   1    false         OK
 9     intuition  1   1   1   1   1    false         OK
 9     bridge     1   1   1   1   1    false         OK
 9     academic   1   1   1   1   1    false         OK
10     intuition  1   1   1   1   1    false         OK
10     bridge     1   1   1   1   1    false         OK
10     academic   1   1   1   1   1    false         OK
11     intuition  1   1   1   1   1    false         OK
11     bridge     1   1   1   1   1    false         OK
11     academic   1   1   1   1   1    false         OK
12     intuition  1   1   1   1   1    false         OK
12     bridge     1   1   1   1   1    false         OK
12     academic   1   1   1   1   1    false         OK
13     intuition  1   1   1   1   1    false         OK
13     bridge     1   1   1   1   1    false         OK
13     academic   1   1   1   1   1    false         OK
14     intuition  1   1   1   1   1    false         OK
14     bridge     1   1   1   1   1    false         OK
14     academic   1   1   1   1   1    false         OK
15     intuition  1   1   1   1   1    false         OK
15     bridge     1   1   1   1   1    false         OK
15     academic   1   1   1   1   1    false         OK
16     intuition  1   1   1   1   1    false         OK
16     bridge     1   1   1   1   1    false         OK
16     academic   1   1   1   1   1    false         OK
17     intuition  1   1   1   1   1    false         OK
17     bridge     1   1   1   1   1    false         OK
17     academic   1   1   1   1   1    false         OK
18     intuition  1   1   1   1   1    false         OK
18     bridge     1   1   1   1   1    false         OK
18     academic   1   1   1   1   1    false         OK
19     intuition  1   1   1   1   1    false         OK
19     bridge     1   1   1   1   1    false         OK
19     academic   1   1   1   1   1    false         OK
20     intuition  1   1   1   1   1    false         OK
20     bridge     1   1   1   1   1    false         OK
20     academic   1   1   1   1   1    false         OK
21     intuition  1   1   1   1   1    false         OK
21     bridge     1   1   1   1   1    false         OK
21     academic   1   1   1   1   1    false         OK

63 lesson/depth combinations checked. 0 failing.
```

(Temporary SSR harness files used for this check were deleted after running.)

## Lint result

`npm run lint` (oxlint) — clean, 0 errors.

## Build result

`npm run build` (`tsc -b && vite build`) — clean, 0 errors.

## What still needs manual browser verification

The count check above proves the *structural* fix — SSR confirms exactly
one of each section renders and neither collapsible section carries `open`
by default. It does **not** prove the *reconciliation* fix, because SSR
never re-renders against a previous tree, which is exactly the code path
the original bug lived in. This session had no browser-automation tool
available (same limitation as prior sessions), so the following needs a
real interactive check before this is considered fully verified:

- Open Lesson 1, then click through to Lesson 2, Lesson 3, etc. several
  times in a row (the original repro path) and confirm the Understanding
  check and Transfer question sections stay at exactly one each — no
  growth with repeated navigation.
- Expand the Understanding check on one lesson, navigate away and back,
  confirm it's collapsed again (state resets, per the existing
  `key={lesson.id}`-based convention, now `key={`${lesson.id}-...`}`).
- Switch depth level (Intuition → Bridge → Academic) and confirm depth
  selection persists across lesson navigation and that this does not
  itself trigger any duplication (the two `<details>` sit outside
  `.depth-panels`, so they shouldn't remount on depth change, but worth a
  direct look).
- General keyboard check: both collapsible sections still open/close via
  Enter/Space when focused, with visible focus rings, now that their keys
  changed.
