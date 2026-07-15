import type {
  ChapterMeta,
  Lesson,
  LessonNode,
  SourceCatalogEntry,
} from "../types/learning";

// ---------------------------------------------------------------------------
// Chapters
// ---------------------------------------------------------------------------
//
// Chapters A and B are fully authored (Lessons 1-6). Chapters C, D and E are
// intentionally represented with nothing more than their status and the one
// guiding question that motivates them — Phase 2 and Phase 3 add Lesson
// objects for those ranges without touching this shape.

export const CHAPTERS: ChapterMeta[] = [
  {
    id: "A",
    order: 1,
    title: "Why fields?",
    status: "available",
    guidingQuestion: "Why does modern physics need fields?",
    lessonRange: [1, 2],
  },
  {
    id: "B",
    order: 2,
    title: "Action and field equations",
    status: "available",
    guidingQuestion:
      "How does a variational principle turn into a local equation of motion — for a particle, and then for a field?",
    lessonRange: [3, 6],
  },
  {
    id: "C",
    order: 3,
    title: "Quantization and particles",
    status: "in-development",
    guidingQuestion: "How does this continuous field become discrete particles?",
    lessonRange: [7, 9],
  },
  {
    id: "D",
    order: 4,
    title: "Global symmetry breaking",
    status: "in-development",
    guidingQuestion:
      "Why does breaking a global symmetry produce a massless mode?",
    lessonRange: [10, 16],
  },
  {
    id: "E",
    order: 5,
    title: "The Higgs mechanism",
    status: "in-development",
    guidingQuestion:
      "What changes when the spontaneously broken symmetry is a local (gauge) symmetry rather than a global one?",
    lessonRange: [17, 21],
  },
];

// ---------------------------------------------------------------------------
// Sources
// ---------------------------------------------------------------------------

export const SOURCE_CATALOG: SourceCatalogEntry[] = [
  {
    id: "tong-qft",
    title: "Quantum Field Theory",
    author: "David Tong",
    url: "https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf",
  },
  {
    id: "mit-8323",
    title: "8.323 Relativistic Quantum Field Theory I",
    author: "MIT OpenCourseWare",
    url: "https://ocw.mit.edu/courses/8-323-relativistic-quantum-field-theory-i-spring-2023/pages/syllabus/",
  },
  {
    id: "pdg-higgs",
    title: "Status of Higgs Boson Physics",
    author: "Particle Data Group",
    url: "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-higgs-boson.pdf",
  },
  {
    id: "beekman-ssb",
    title: "An Introduction to Spontaneous Symmetry Breaking",
    author: "Beekman, Rademaker & van Wezel",
    url: "https://arxiv.org/abs/1909.01820",
  },
];

// ---------------------------------------------------------------------------
// Lessons 1-6 (Phase 1). Lessons 7-21 are intentionally absent — see
// LESSON_NODES below for how they are represented as locked stubs.
// ---------------------------------------------------------------------------

export const LESSONS: Lesson[] = [
  {
    id: "lesson-1",
    number: 1,
    chapterId: "A",
    title: "Why is particle mechanics not enough?",
    scope: "Classical",
    guidingQuestion: "Why does modern physics need fields?",
    bigIdea:
      "Local interactions and relativistic particle creation cannot be described consistently by a fixed number of permanent particles.",
    whyWeNeedThis:
      "Everything that follows in this course — fields, actions, field equations, quantization — is a response to two cracks in particle mechanics that appear once we take special relativity seriously: interactions that act across distance without delay, and processes in which the number of particles itself changes. Seeing why these are real problems, not just formal complaints, motivates every construction that comes after.",
    intuition: {
      paragraphs: [
        "In ordinary Newtonian mechanics, two bodies exert a force on each other that depends on both of their positions at the same instant. If one body moves, the force on the other updates immediately — there is no delay. That is called action at a distance.",
        "Special relativity forbids exactly this kind of instant update. No influence, including whatever carries a force, can propagate faster than light, and 'at the same instant' is not even a frame-independent idea once different observers disagree about simultaneity. A theory built on strictly instantaneous forces cannot be made consistent with relativity.",
        "The fix that has proved successful is to stop making particles push on each other directly. Instead, a charge disturbs something that exists at every point of space — a field — and that disturbance spreads outward at a finite speed, updating its neighbors locally. Nothing ever needs to know about a distant particle's position right now; it only needs to know the field value right where it is.",
        "A second, independent crack appears at high energy. A single photon striking a nucleus can produce an electron and a positron that did not exist a moment before; particle colliders routinely turn a handful of incoming particles into dozens of outgoing ones. Ordinary quantum mechanics, as usually formulated, describes a fixed number of particles — its wavefunction lives on the configuration space of exactly N particles, and there is no built-in way for N to change mid-calculation.",
        "Fields resolve this too, though the full resolution is not finished in this lesson. A field has infinitely many degrees of freedom spread across space, and — once we know how to quantize it, starting in Chapter C — its excitations behave like particles that can be created and destroyed. Lesson 1 only plants that seed: a classical field is the right kind of object to eventually carry a theory where particle number is not fixed.",
      ],
    },
    mathematicalBridge: {
      intro:
        "We are not deriving an equation of motion yet — Lesson 1 is motivation. But the two cracks above have a precise mathematical signature worth seeing directly.",
      steps: [
        {
          statement:
            "Newtonian gravity between two bodies depends on both positions evaluated at the same time t — there is no time delay built into the law.",
          equation: "F₁₂(t) = −G m₁m₂ [r₁(t) − r₂(t)] / |r₁(t) − r₂(t)|³",
        },
        {
          statement:
            "A causal, field-mediated interaction instead links a source at (x′, t′) to an effect at (x, t) only along the light cone — the effect at x cannot depend on the source before enough time has passed for a signal to cross the distance.",
          equation: "effect at (x, t) depends only on source data with t − t′ ≥ |x − x′| / c",
        },
        {
          statement:
            "Separately, the relativistic energy–momentum relation permits pair production whenever enough energy is available, which is incompatible with a state space built for a fixed particle count.",
          equation: "E² = p²c² + m²c⁴  ⇒  pair creation possible once E ≳ 2mc²",
        },
      ],
      result: {
        expression:
          "instantaneous F(r₁, r₂, …) is not Lorentz-invariant ⇒ replace it with a local dynamical variable φ(x, t)",
        note: "This is the structural conclusion Lesson 1 argues for, not yet a specific physical equation.",
      },
    },
    academicDepth: {
      assumptions: [
        "Classical N-body mechanics assumes deterministic trajectories rᵢ(t) for a fixed, labeled set of particles i = 1…N.",
        "Forces are derived from the instantaneous configuration {rᵢ(t)}, typically via a potential V(r₁, …, r_N).",
      ],
      notation: [
        "rᵢ(t): trajectory of particle i.",
        "F_ij: force exerted on particle i by particle j.",
        "c: speed of light, the invariant causal speed limit of special relativity.",
      ],
      derivation: [
        {
          statement:
            "State the N-body structure explicitly: each Fᵢⱼ is a function of {rₖ(t)} evaluated at a single common time t, for every observer's time coordinate.",
        },
        {
          statement:
            "Special relativity makes simultaneity frame-dependent: two events simultaneous in one inertial frame are generally not simultaneous in another. A force law that depends on 'the other particle's position right now' therefore cannot be written in a form that all inertial observers agree on.",
        },
        {
          statement:
            "Attempts to patch this by writing relativistic wave equations for a single particle (rather than a field) run into their own problems — most notably solutions that admit negative-energy branches, which are not artifacts but a sign that a fixed-particle-number description is the wrong structure at relativistic energies. Making sense of those branches is what leads, in Chapter C, to reinterpreting field excitations as particles and antiparticles.",
        },
        {
          statement:
            "The resolution adopted going forward: postulate dynamical variables φ(xᵘ) defined at every spacetime point, with equations of motion sourced only by data in the causal past of each point. Multi-particle behavior, including changing particle number, is then obtained by quantizing this field (Chapter C), not by extending single-particle quantum mechanics.",
        },
      ],
      formalStatement: {
        label: "Structural principle motivating field variables",
        expression:
          "A relativistically causal, local theory requires dynamical variables φ(xᵘ) at every spacetime point, evolving under equations sourced only by the causal past of x.",
        note: "This is stated as a guiding principle here; it is not yet derived from an action — that begins in Lesson 3 and is applied to fields in Lesson 5.",
      },
      limitations: [
        "This lesson argues that fixed-particle-number, instantaneous-force mechanics breaks down in specific regimes — it does not claim ordinary non-relativistic quantum mechanics is wrong. For atomic, molecular and condensed-matter physics at everyday energies, fixed-N quantum mechanics remains extremely accurate.",
        "The claim that fields resolve particle creation is only sketched here. The actual mechanism — creation and annihilation operators acting on a Fock space — is introduced starting in Chapter C and is not yet available.",
        "Causality here is discussed qualitatively; the precise light-cone structure of field propagators is a later, more technical topic outside Phase 1's scope.",
      ],
    },
    misconception: {
      claim:
        "This means ordinary quantum mechanics is wrong or useless, and everything has to be redone with fields.",
      correction:
        "Non-relativistic, fixed-particle quantum mechanics is extremely accurate for atomic and low-energy phenomena — it is not being discarded. The motivation for fields is specific: regimes where particle number changes, or where strict relativistic locality matters. Outside those regimes, ordinary quantum mechanics keeps working exactly as well as it always has.",
    },
    understandingCheck: {
      prompt:
        "A student says: 'We can't use fixed-particle quantum mechanics anymore, because it doesn't work for the double-slit experiment.' What's wrong with this reasoning?",
      options: [
        {
          id: "a",
          label:
            "Fixed-particle quantum mechanics handles the double-slit experiment perfectly well; the actual motivation for fields is causality and particle creation, not interference.",
          correct: true,
          feedback:
            "Correct. The double-slit experiment is squarely inside the domain where ordinary quantum mechanics succeeds. Fields become necessary when particle number can change or when strict relativistic locality is required — not because interference is somehow broken.",
        },
        {
          id: "b",
          label: "The double-slit experiment cannot be explained by any quantum theory.",
          correct: false,
          feedback:
            "Not correct — single- and few-particle interference is one of the best-established successes of ordinary quantum mechanics.",
        },
        {
          id: "c",
          label: "Fields are only needed once gravity is included.",
          correct: false,
          feedback:
            "Gravity isn't the trigger discussed in this lesson. The two issues motivating fields here are locality/causality and relativistic particle creation.",
        },
        {
          id: "d",
          label: "Quantum mechanics stops being self-consistent once there are more than a few particles.",
          correct: false,
          feedback:
            "Ordinary quantum mechanics for many fixed particles (e.g. a solid with 10²³ atoms) is used successfully all the time. The issue in this lesson is changing particle number, not large particle number.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Cosmic-ray protons striking the atmosphere often produce dozens of new particles (pions, kaons, and others) that did not exist before the collision. In one or two sentences, explain why a framework built around a fixed number of permanent particles cannot describe this process, and what kind of framework can.",
      answer:
        "A fixed-N formalism has no mechanism for N to change, so the outgoing multi-particle state literally lies outside its state space. A field-based framework, whose quanta are created and destroyed by the field's own dynamics (developed starting in Chapter C), accommodates a changing particle number naturally.",
    },
    nextQuestion:
      "What actually is a classical field, and how is it different from the coordinates q(t) used in particle mechanics?",
    references: [
      {
        id: "tong-qft",
        note: "Opens by motivating quantum field theory from the need to reconcile quantum mechanics with special relativity.",
      },
      { id: "mit-8323" },
    ],
    prerequisites: [],
  },
  {
    id: "lesson-2",
    number: 2,
    chapterId: "A",
    title: "What is a classical field?",
    scope: "Classical",
    guidingQuestion: "What changes when every point in space has a dynamical value?",
    bigIdea: "A field is a system with infinitely many coupled degrees of freedom.",
    whyWeNeedThis:
      "Lesson 1 argued, in general terms, that we need dynamical variables that live at every point of space. Before we can write down any equations of motion for such an object, we need a precise picture of what it is — how it differs from the single coordinate q(t) of particle mechanics, and in what sense 'a value at every point' is a sensible dynamical system at all.",
    intuition: {
      paragraphs: [
        "In particle mechanics, the dynamical variable is a single coordinate q(t): one number that changes with time. A field instead assigns a value to every point in space, at every time: φ(x, t). The key shift is this — q(t) → φ(x, t). The position x is no longer something that moves; it becomes a label picking out which degree of freedom you mean, and φ is the quantity that actually evolves.",
        "A concrete picture: a guitar string at rest is a straight line. Plucked, its height above the rest position is a different number at each point along the string, and that height changes with time — y(x, t). Nothing about x itself moves; x just tells you which point of the string you're asking about. The field is the height, not the position.",
        "It helps to build this up from something more familiar: a chain of beads connected by springs. Each bead has its own ordinary coordinate q₁(t), q₂(t), …, q_N(t) — this is just ordinary coupled-oscillator particle mechanics, nothing new. But as you pack in more beads over the same length, spaced more closely together, the discrete list of coordinates starts to look like a smooth curve. In the limit of infinitely many, infinitesimally spaced beads, the discrete set {qₙ(t)} becomes a continuous function φ(x, t) — a field.",
        "Use the slider below to see this convergence directly: as the number of coupled points N increases, the piecewise-straight approximation increasingly resembles a smooth curve.",
      ],
      analogy: {
        title: "From beads to a string",
        body: "A finite chain of coupled beads is ordinary particle mechanics with many coordinates. A field is what that chain becomes when you let the number of beads go to infinity while keeping the total length fixed — an idealization of 'infinitely finely divided' matter, not literally an infinite number of physical objects.",
      },
    },
    mathematicalBridge: {
      intro:
        "The bead-chain analogy can be made precise. This also previews the Lagrangian density formalism that Lesson 5 introduces properly — here it's just a limit-taking exercise.",
      steps: [
        {
          statement:
            "Write the Lagrangian of N beads of mass m, spacing a, connected by springs of stiffness k, with nearest-neighbor coupling only.",
          equation: "L = Σₙ [ ½m q̇ₙ² − ½k(qₙ₊₁ − qₙ)² ]",
        },
        {
          statement:
            "Take the continuum limit a → 0 with N → ∞, holding the total length Na fixed. Introduce a mass density ρ = m/a and an elastic constant Y = ka, and let qₙ(t) → φ(x, t) with x = na.",
          equation: "(qₙ₊₁ − qₙ)/a → ∂φ/∂x,   Σₙ (…) a → ∫ dx (…)",
        },
        {
          statement:
            "Substituting these limits turns the discrete sum into a spatial integral of a locally-defined quantity.",
          equation: "L → ∫ dx [ ½ρ φ̇² − ½Y (∂φ/∂x)² ]",
        },
      ],
      result: {
        expression: "L = ∫ dx 𝓛(φ, ∂φ/∂x, φ̇),  with 𝓛 = ½ρ φ̇² − ½Y (∂φ/∂x)²",
        note: "𝓛 here is a Lagrangian density — a quantity defined at each point x. Lesson 5 makes this object and its role precise for genuinely relativistic fields.",
      },
    },
    academicDepth: {
      assumptions: [
        "The field configuration φ(x, t) is assumed smooth enough to differentiate to whatever order the dynamics requires.",
        "The discretized model assumes nearest-neighbor coupling only; more general couplings are possible but are not needed for this construction.",
      ],
      notation: [
        "φ: a map from a spatial slice (here, an interval of ℝ) × time to ℝ; more generally φ: ℝ³ × ℝ → ℝ, or to some other target space for multi-component fields.",
        "x: a continuous spatial label, not a dynamical variable.",
        "ρ, Y: mass density and elastic modulus of the continuum limit, replacing the discrete m, k, a.",
      ],
      derivation: [
        {
          statement:
            "The discretized chain has a phase space of dimension 2N (positions and momenta of N beads) — an ordinary, finite-dimensional mechanical system.",
        },
        {
          statement:
            "Taking N → ∞ at fixed total length L = Na produces, in the limit, a system with an uncountably infinite number of degrees of freedom: one, in principle, for every point x in the interval.",
        },
        {
          statement:
            "This is a limit of a sequence of finite-dimensional systems, not a claim that continuous matter is 'really' infinitely many discrete beads. Whether — and how — this limit is well defined once the system is quantized (rather than classical) is a separate and technical question, touched on only informally in Chapter C.",
        },
      ],
      formalStatement: {
        label: "Field configuration space",
        expression:
          "A classical field theory specifies dynamics on the (infinite-dimensional) space of maps φ: Σ → target space, where Σ is a spatial slice, via a variational principle.",
        note: "The variational principle itself is the subject of Lessons 3-5.",
      },
      limitations: [
        "The bead-chain construction is a pedagogical device for taking a continuum limit, not a physical claim that fields are made of discrete beads at some hidden scale. (Discretizing spacetime is a genuine technique — lattice field theory — but that is a distinct, computational topic not covered here.)",
        "Everything in this lesson is classical. No quantization or particle interpretation is implied by writing down φ(x, t).",
      ],
    },
    misconception: {
      claim: "A classical field is already a quantum field — writing φ(x, t) means we're talking about particles.",
      correction:
        "This lesson introduces φ(x, t) purely as a classical dynamical variable, the direct generalization of a classical coordinate q(t) to a continuum of components. Quantization — where excitations of the field are reinterpreted as particles — is a distinct step introduced starting in Chapter C.",
    },
    understandingCheck: {
      prompt:
        "In the bead-chain model approximating a string, what happens to the number of dynamical degrees of freedom as N → ∞ at fixed total length?",
      options: [
        {
          id: "a",
          label: "It stays finite, because the string's total length is fixed.",
          correct: false,
          feedback:
            "Fixed total length constrains the spacing, not the count. As spacing shrinks toward zero, the number of beads grows without bound.",
        },
        {
          id: "b",
          label: "It diverges — a continuous field has infinitely many degrees of freedom, in principle one per point x.",
          correct: true,
          feedback:
            "Correct. The continuum limit trades a large-but-finite number of coordinates for an infinite collection labeled by the continuous variable x.",
        },
        {
          id: "c",
          label: "It goes to zero, because the beads merge into a single continuous line.",
          correct: false,
          feedback:
            "The beads becoming densely packed doesn't remove degrees of freedom — each point still has its own independent value of φ.",
        },
        {
          id: "d",
          label: "It depends only on the spring tension, not on N.",
          correct: false,
          feedback:
            "Tension-like parameters (Y in the continuum limit) affect the dynamics — e.g. wave speed — not the count of degrees of freedom.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "A drum's surface height above its rest position at location (x, y) and time t is written h(x, y, t). Explain why (x, y) are labels rather than dynamical variables here, and identify what plays the role of φ.",
      answer:
        "(x, y) are fixed coordinates on the drumhead that only pick out which point is being described — they don't themselves evolve. The dynamical variable is the height at that point, so φ(x, y, t) = h(x, y, t) is a two-dimensional field defined on the membrane.",
    },
    nextQuestion:
      "Given a dynamical variable at every point, what deeper principle actually determines how any dynamical variable — a particle's position or a field's value — evolves in time?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [1],
    interactive: { kind: "discretized-string" },
  },
  {
    id: "lesson-3",
    number: 3,
    chapterId: "B",
    title: "What is action?",
    scope: "Classical",
    guidingQuestion: "What condition singles out the physical trajectory?",
    bigIdea: "The physical trajectory is stationary under sufficiently small allowed variations.",
    whyWeNeedThis:
      "We now have a general question left over from Lesson 2: given a dynamical variable — a coordinate or, eventually, a field — what determines how it evolves? Newton's second law answers this for simple particles, but it doesn't generalize cleanly to constrained systems, to fields, or to quantum mechanics. We need a single scalar principle whose stationarity reproduces the equations of motion and that generalizes directly to fields in Lesson 5.",
    intuition: {
      paragraphs: [
        "For a trajectory q(t) running from time t₁ to t₂, define a number called the action, built by integrating a quantity L — the Lagrangian — computed at each instant from the position, velocity, and time.",
        "For many simple mechanical systems, L is kinetic energy minus potential energy: L = ½m q̇² − V(q).",
        "Among all the smooth paths you could imagine connecting the same fixed start and end points, the actual physical path is the one where the action is stationary: nudging the path slightly, in any of the allowed ways, does not change the action to first order.",
        "This needs careful phrasing. It is tempting to say 'nature tries every path and picks the cheapest one' — but that is not what is being claimed, and it isn't even always true. Stationary means the action doesn't change to first order under a small variation, the way a function's derivative vanishes at a flat point. That flat point can be a minimum, but it can also be a saddle point. The correct statement is a mathematical selection condition, not a physical search process.",
        "A simple case builds intuition: for a free particle (V = 0), the stationary path between two fixed spacetime points turns out to be the straight line at constant velocity — the same trajectory Newton's first law already gives you, now obtained from a different starting principle.",
      ],
    },
    mathematicalBridge: {
      intro:
        "This lesson only needs to state the principle precisely — the derivation of what δS = 0 implies pointwise is the whole subject of Lesson 4.",
      steps: [
        {
          statement: "Define the action as a functional of the whole trajectory q(t).",
          equation: "S[q] = ∫ₜ₁ᵗ² L(q, q̇, t) dt",
        },
        {
          statement:
            "Stationarity means: for a small variation of the path, the first-order change in S vanishes.",
          equation: "S[q + εη] ≈ S[q] + ε δS + O(ε²),  δS = 0 at the physical q",
        },
        {
          statement:
            "For L = ½m q̇² − V(q), it will turn out (Lesson 4) that δS = 0 reproduces Newton's second law — stated here without derivation, as the target we're building toward.",
          equation: "δS = 0  ⇒  m q̈ = −dV/dq",
        },
      ],
      result: {
        expression: "δS = 0",
        note: "The defining condition of the physical trajectory, holding the endpoints fixed.",
      },
    },
    academicDepth: {
      assumptions: [
        "L is a smooth (at least C²) function of q, q̇, and t.",
        "The endpoints q(t₁) and q(t₂) are held fixed (Dirichlet boundary conditions); allowed variations η(t) satisfy η(t₁) = η(t₂) = 0.",
        "The space of admissible trajectories is taken smooth enough (e.g. C²) for the manipulations used here to be valid; deeper function-space technicalities are outside this course's scope.",
      ],
      notation: [
        "q(t): ℝ → configuration space.",
        "L: configuration space × tangent space × ℝ → ℝ.",
        "S: (path space) → ℝ, a functional (a function whose input is itself a function).",
      ],
      derivation: [
        {
          statement:
            "q is a stationary point of S if, for every admissible smooth variation η (vanishing at the endpoints), the first-order change in S vanishes: d/dε S[q + εη]|_{ε=0} = 0. This is the functional-derivative analogue of df = 0 at a critical point of an ordinary function.",
        },
        {
          statement:
            "'Stationary' is not synonymous with 'globally minimal.' Whether the true trajectory minimizes S, or is instead a saddle point of S, depends on the length of the time interval and the details of L — a subtlety studied via conjugate points and Jacobi's criterion in the calculus of variations. The classical example is the harmonic oscillator: over sufficiently long time intervals, the true trajectory is a saddle point of the action, not a minimum.",
        },
      ],
      formalStatement: {
        label: "Hamilton's principle",
        expression:
          "The physical trajectory q(t) between fixed endpoints (t₁, q₁) and (t₂, q₂) is a stationary point of S[q] = ∫ₜ₁ᵗ² L(q, q̇, t) dt among trajectories sharing those endpoints: δS[q] = 0.",
      },
      limitations: [
        "Stationary, not necessarily minimal — the min-vs-saddle distinction is a genuine subtlety, not a simplification we're glossing over.",
        "This formulation assumes fixed endpoints. Free or constrained endpoints modify the boundary terms and introduce additional 'natural' boundary conditions.",
        "This is the classical action principle. The path-integral formulation of quantum mechanics reinterprets 'summing over paths' with a complex weight e^{iS/ħ}; that is a distinct and later topic, not implied by anything in this lesson.",
      ],
    },
    misconception: {
      claim:
        "Nature literally tries every possible path and picks the one with the least action, as if searching through all the options.",
      correction:
        "The action principle is a mathematical selection condition, δS = 0 — not a description of a physical search process. It singles out trajectories that are stationary points of S, and as noted above, that stationary point need not even be a minimum.",
    },
    understandingCheck: {
      prompt: "Which statement correctly describes Hamilton's principle?",
      options: [
        {
          id: "a",
          label: "The physical path is always the one with the smallest possible action among all conceivable paths.",
          correct: false,
          feedback:
            "This overclaims 'smallest.' The correct condition is stationarity — a vanishing first-order change — which is not always a global minimum.",
        },
        {
          id: "b",
          label:
            "The physical path is a stationary point of the action functional among paths sharing the same fixed endpoints.",
          correct: true,
          feedback: "Correct — this is exactly Hamilton's principle, δS = 0.",
        },
        {
          id: "c",
          label: "The physical path is chosen by nature after comparing the action of every possible path in real time.",
          correct: false,
          feedback:
            "This is the teleological misreading the lesson explicitly warns against. δS = 0 is a mathematical condition, not a physical search process.",
        },
        {
          id: "d",
          label: "The action principle only applies to free particles with no potential.",
          correct: false,
          feedback: "The action principle applies generally; L = ½m q̇² − V(q) explicitly includes a potential.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "For a simple harmonic oscillator, L = ½m q̇² − ½k q². Write the action S[q] as an integral, and state in your own words what δS = 0 means for the physical trajectory (without computing the equation of motion — that comes in Lesson 4).",
      answer:
        "S[q] = ∫ₜ₁ᵗ² (½m q̇² − ½k q²) dt. δS = 0 means that, among all smooth trajectories sharing the same fixed values at t₁ and t₂, the true physical trajectory is the one for which a small variation of the path produces no first-order change in S.",
    },
    nextQuestion:
      "The condition δS = 0 is a statement about the entire path at once — how does that turn into an equation that must hold at each individual instant of time?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [],
  },
  {
    id: "lesson-4",
    number: 4,
    chapterId: "B",
    title: "Why does arbitrary variation give a local equation?",
    scope: "Classical",
    guidingQuestion: "How can a statement about a whole path become an equation at every time?",
    bigIdea:
      "A global stationarity condition tested against arbitrary local variations forces the integrand's coefficient to vanish at every instant — the fundamental lemma of the calculus of variations.",
    whyWeNeedThis:
      "Lesson 3 defined δS = 0 but left it as a statement about an integral over the whole path. To get a usable equation of motion, we need to show precisely how an integral condition that holds for every allowed variation forces a condition at each single instant of time.",
    intuition: {
      paragraphs: [
        "Consider a small variation of the path, q(t) → q(t) + εη(t), where η is an arbitrary smooth 'bump' function that vanishes at the fixed endpoints but is otherwise free to have any shape.",
        "The first-order change in the action takes the form δS = ∫ F(t) η(t) dt, for some function F(t) built from L and its derivatives (found explicitly below).",
        "Here is the key move. δS = 0 must hold not just for one choice of η, but for every admissible η. In particular, it must hold when η is a narrow bump concentrated near any instant t₀ you like. If F(t₀) were nonzero, you could choose a bump peaked exactly at t₀, with the same sign as F(t₀), and get a nonzero integral — contradicting δS = 0. So F(t) must vanish at every single t. This is the fundamental lemma of the calculus of variations: an integral condition against arbitrary test functions becomes a pointwise condition.",
        "Use the control below to drag the bump's location along the time axis and watch the integral ∫F(t)η(t) dt update. Because F(t) is nonzero somewhere in the example shown, moving the bump there produces a nonzero integral — which is exactly why F must vanish everywhere for the true stationary path.",
      ],
    },
    mathematicalBridge: {
      intro: "Carrying out the variation of S[q] explicitly produces the Euler–Lagrange equation.",
      steps: [
        { statement: "Vary the path.", equation: "q(t) → q(t) + εη(t),  η(t₁) = η(t₂) = 0" },
        {
          statement: "Differentiate S with respect to ε at ε = 0, using the chain rule.",
          equation: "δS = ∫ₜ₁ᵗ² [ (∂L/∂q) η + (∂L/∂q̇) η̇ ] dt",
        },
        {
          statement:
            "Integrate the second term by parts; the boundary term vanishes because η(t₁) = η(t₂) = 0.",
          equation:
            "∫ (∂L/∂q̇) η̇ dt = [ (∂L/∂q̇) η ]ₜ₁ᵗ² − ∫ d/dt(∂L/∂q̇) η dt  =  − ∫ d/dt(∂L/∂q̇) η dt",
        },
        {
          statement: "Collect both terms under a single integral.",
          equation: "δS = ∫ [ ∂L/∂q − d/dt(∂L/∂q̇) ] η dt = ∫ F(t) η(t) dt",
        },
        {
          statement:
            "Since η is arbitrary (subject only to vanishing at the endpoints), the fundamental lemma forces F(t) = 0 for every t.",
          equation: "F(t) = ∂L/∂q − d/dt(∂L/∂q̇) = 0",
        },
        {
          statement: "For L = ½m q̇² − V(q): ∂L/∂q = −V′(q) and ∂L/∂q̇ = m q̇, so d/dt(∂L/∂q̇) = m q̈.",
          equation: "−V′(q) − m q̈ = 0  ⇒  m q̈ = −dV/dq",
        },
      ],
      result: {
        label: "Euler–Lagrange equation",
        expression: "d/dt(∂L/∂q̇) − ∂L/∂q = 0,  equivalently  m q̈ = −dV/dq for L = ½m q̇² − V(q)",
        note: "Newton's second law, recovered as a consequence of δS = 0.",
      },
    },
    academicDepth: {
      assumptions: [
        "L is C² in its arguments.",
        "η ranges over smooth functions vanishing at the endpoints (compactly supported in the open interval is sufficient) — enough regularity to justify integration by parts.",
      ],
      notation: [
        "δS/δq(t) := ∂L/∂q − d/dt(∂L/∂q̇), the functional (Euler–Lagrange) derivative of S with respect to q at time t.",
      ],
      derivation: [
        {
          statement:
            "Fundamental lemma of the calculus of variations: if F is continuous on [t₁, t₂] and ∫ F(t) η(t) dt = 0 for every smooth η vanishing at the endpoints, then F ≡ 0 on [t₁, t₂].",
        },
        {
          statement:
            "Proof sketch: suppose F(t₀) ≠ 0 for some t₀; without loss of generality F(t₀) > 0. By continuity, F > 0 on some neighborhood (t₀ − δ, t₀ + δ). Choose η to be a smooth, non-negative bump supported in that neighborhood with η(t₀) > 0. Then ∫ F η dt > 0, contradicting the hypothesis. Hence F must vanish everywhere.",
        },
        {
          statement:
            "Applying the lemma to F(t) = ∂L/∂q − d/dt(∂L/∂q̇) converts the single global condition δS = 0 into the Euler–Lagrange equation holding at every instant t.",
        },
      ],
      formalStatement: {
        label: "Euler–Lagrange equation",
        expression: "d/dt(∂L/∂q̇) − ∂L/∂q = 0",
      },
      limitations: [
        "This derivation assumes fixed endpoints (Dirichlet boundary conditions). Free endpoints leave a surviving boundary term, which instead yields 'natural boundary conditions' on the momentum ∂L/∂q̇ at the free end.",
        "L is assumed to depend only on q, q̇, and t — first order in time derivatives. Lagrangians with higher derivatives require an extended (Ostrogradsky) treatment, not covered here.",
      ],
    },
    misconception: {
      claim: "The Euler–Lagrange equation is a separate law you have to additionally assume on top of δS = 0.",
      correction:
        "It is not a separate postulate. It is the direct algebraic consequence of requiring δS = 0 for arbitrary variations, obtained purely by integration by parts and the fundamental lemma of the calculus of variations, as derived step by step above.",
    },
    understandingCheck: {
      prompt: "In this derivation, why must η(t) vanish at the endpoints t₁ and t₂?",
      options: [
        {
          id: "a",
          label: "So that the boundary term from integration by parts drops out, leaving a pure bulk integral condition.",
          correct: true,
          feedback:
            "Correct. Without η(t₁) = η(t₂) = 0, the term [(∂L/∂q̇) η] evaluated at the endpoints would survive and the clean Euler–Lagrange equation would not follow directly.",
        },
        {
          id: "b",
          label: "Because the fundamental lemma only applies to functions that are zero everywhere.",
          correct: false,
          feedback:
            "The fundamental lemma applies to F, the coefficient function — not to η itself being zero everywhere. η only needs to vanish at the two endpoints.",
        },
        {
          id: "c",
          label: "Because L is not allowed to depend on time explicitly.",
          correct: false,
          feedback: "This is unrelated — L can depend on t explicitly; that isn't why endpoint vanishing matters here.",
        },
        {
          id: "d",
          label: "Because otherwise q̇ would not exist.",
          correct: false,
          feedback: "q̇ exists regardless of the endpoint behavior of η; this isn't the reason.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Suppose, hypothetically, we allowed variations η that do not vanish at the endpoints. What extra term would appear in δS, and what would it mean physically?",
      answer:
        "An extra boundary term, [(∂L/∂q̇) η] evaluated between t₁ and t₂, would survive the integration by parts. Physically this corresponds to letting the endpoints themselves move; setting this term to zero independently gives 'natural boundary conditions' — for example, constraining the momentum ∂L/∂q̇ at a free endpoint instead of fixing q there.",
    },
    nextQuestion:
      "We derived a local equation of motion for a single coordinate q(t). How does this same variational logic generalize when the dynamical variable is a field defined at every point of spacetime, φ(x, t)?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [3],
    interactive: { kind: "variation-bump" },
  },
  {
    id: "lesson-5",
    number: 5,
    chapterId: "B",
    title: "How does the action principle generalize to fields?",
    scope: "Classical",
    guidingQuestion: "What replaces the particle Lagrangian?",
    bigIdea: "A Lagrangian density assigns dynamics locally across spacetime.",
    whyWeNeedThis:
      "Lesson 4 showed how to get a local equation of motion for a single coordinate q(t) from an action principle. Lesson 2 introduced φ(x, t) as a dynamical variable with a continuum of components labeled by x. To combine these, and to build in the locality that Lesson 1 argued relativity requires, we need the field-theoretic version of the action principle.",
    intuition: {
      paragraphs: [
        "For a particle, L is a single number computed at each time from q, q̇ and t; the action integrates L over time alone.",
        "For a field, writing a single global 'L(φ, φ̇)' depending on the entire spatial profile all at once would reintroduce exactly the non-locality Lesson 1 argued against — a point's contribution to the dynamics shouldn't depend on the field far away. Instead we introduce a Lagrangian density 𝓛(φ, ∂ᵤφ): a function of the field and its spacetime derivatives evaluated at a single spacetime point.",
        "The action is then built by integrating 𝓛 over all of spacetime, not just over time. The ordinary Lagrangian is recovered by integrating 𝓛 over space alone at a fixed time — L(t) = ∫ d³x 𝓛.",
      ],
    },
    mathematicalBridge: {
      intro:
        "The same variation-and-integrate-by-parts logic from Lesson 4 applies, now in four dimensions.",
      steps: [
        { statement: "The field action, built from a Lagrangian density.", equation: "S[φ] = ∫ d⁴x 𝓛(φ, ∂ᵤφ)" },
        {
          statement: "Vary the field, with η vanishing on the boundary of the spacetime region (spatial boundary and initial/final time slices).",
          equation: "φ(x) → φ(x) + εη(x)",
        },
        {
          statement: "Differentiate S with respect to ε at ε = 0.",
          equation: "δS = ∫ d⁴x [ (∂𝓛/∂φ) η + (∂𝓛/∂(∂ᵤφ)) ∂ᵤη ]",
        },
        {
          statement:
            "Integrate the second term by parts (the four-dimensional divergence theorem); the boundary term vanishes because η = 0 on the boundary.",
          equation:
            "∫ d⁴x (∂𝓛/∂(∂ᵤφ)) ∂ᵤη = [boundary flux, = 0] − ∫ d⁴x ∂ᵤ[∂𝓛/∂(∂ᵤφ)] η",
        },
        {
          statement: "Collect terms; since η is arbitrary, the same fundamental lemma used in Lesson 4 applies pointwise in spacetime.",
          equation: "∂𝓛/∂φ − ∂ᵤ[∂𝓛/∂(∂ᵤφ)] = 0",
        },
      ],
      result: {
        label: "Euler–Lagrange field equation",
        expression: "∂𝓛/∂φ − ∂ᵤ[∂𝓛/∂(∂ᵤφ)] = 0",
      },
    },
    academicDepth: {
      assumptions: [
        "𝓛 depends only on φ and its first derivatives ∂ᵤφ — a physically motivated restriction (higher-derivative Lagrangians generally introduce Ostrogradsky instabilities), not a logical necessity.",
        "φ and the variation η are smooth enough for the manipulations used here.",
        "η vanishes on the entire boundary ∂Ω of the spacetime region Ω under consideration: at spatial infinity (or the edges of a finite box) and on the initial and final time slices.",
      ],
      notation: [
        "xᵘ = (x⁰, x¹, x², x³) = (t, x, y, z), using natural units c = 1 (see Lesson 6 for the explicit toggle).",
        "∂ᵤ = ∂/∂xᵘ.",
        "Einstein summation convention: a repeated index, one upper and one lower, is summed over μ = 0, 1, 2, 3.",
        "𝓛(φ, ∂ᵤφ): the Lagrangian density, defined at a single spacetime point.",
      ],
      derivation: [
        {
          statement:
            "L(t) = ∫ d³x 𝓛(x, t) is the ordinary, instantaneous Lagrangian, obtained by integrating the density over space at fixed time. 𝓛 itself is the more fundamental, pointwise object — the one that makes locality manifest.",
        },
        {
          statement:
            "In the particle case (Lesson 4) we used a total derivative d/dt because q depended on only one variable, t. Here φ depends on four independent coordinates xᵘ, so partial derivatives ∂ᵤ are used, and the term ∂ᵤ[∂𝓛/∂(∂ᵤφ)] is really a four-divergence — a sum over all four spacetime directions, Σᵤ ∂/∂xᵘ [∂𝓛/∂(∂ᵤφ)].",
        },
        {
          statement:
            "The boundary term dropped above is a flux integral over ∂Ω via the four-dimensional divergence theorem, ∫_Ω d⁴x ∂ᵤVᵘ = ∮_{∂Ω} dΣᵤ Vᵘ; it vanishes because η is required to vanish on ∂Ω — this covers both the spatial boundary and the initial/final time slices simultaneously.",
        },
      ],
      formalStatement: {
        label: "Euler–Lagrange field equation",
        expression:
          "For S[φ] = ∫ d⁴x 𝓛(φ, ∂ᵤφ), stationary under variations φ → φ + εη vanishing on ∂Ω: ∂𝓛/∂φ − ∂ᵤ[∂𝓛/∂(∂ᵤφ)] = 0.",
      },
      limitations: [
        "Stated here for a single real scalar field. A theory with several independent field components φ_a gives one such equation per component: ∂𝓛/∂φ_a − ∂ᵤ[∂𝓛/∂(∂ᵤφ_a)] = 0.",
        "Gauge fields (Chapter E) introduce redundant, unphysical degrees of freedom that require additional care not treated here.",
      ],
    },
    misconception: {
      claim: "L and 𝓛 are just two notations for the same thing.",
      correction:
        "L is the ordinary, instantaneous Lagrangian — a single number at each time, obtained by integrating over all of space. 𝓛 is the Lagrangian density, defined at each individual spacetime point, whose spatial integral gives L. Treating them as interchangeable hides exactly the locality that motivated introducing 𝓛 in the first place.",
    },
    understandingCheck: {
      prompt:
        "Why do we integrate 𝓛 over all four spacetime coordinates (d⁴x) instead of just over time, as we did for the particle action?",
      options: [
        {
          id: "a",
          label:
            "Because a field has independent degrees of freedom at every spatial point, so the action must sum over both time and every point in space where the field lives.",
          correct: true,
          feedback:
            "Correct. Each spatial point contributes its own degree of freedom φ(x, t); the action has to account for all of them, which means integrating over space as well as time.",
        },
        {
          id: "b",
          label: "Because relativity requires that time always be treated exactly like a spatial coordinate in every formula.",
          correct: false,
          feedback:
            "This overclaims. Time and space appear together in 𝓛 here because the field has degrees of freedom spread across space — not because every formula in relativity treats t and x identically.",
        },
        {
          id: "c",
          label: "Because 𝓛 has no time dependence.",
          correct: false,
          feedback: "𝓛 generally does depend on time through φ(x, t) — this isn't the reason for the spatial integral.",
        },
        {
          id: "d",
          label: "Because L was already computed by integrating over space, so 𝓛 must integrate again over the same space to cancel it out.",
          correct: false,
          feedback: "This isn't how the relationship works — L is obtained from 𝓛 by integrating over space, not the reverse.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "A student writes the field Euler–Lagrange equation as ∂𝓛/∂φ − d/dt[∂𝓛/∂(∂ₜφ)] = 0, using a total time derivative instead of ∂ᵤ[…]. What is missing?",
      answer:
        "This keeps only the time-derivative piece of the four-divergence and drops the spatial-derivative contributions ∂ᵢ[∂𝓛/∂(∂ᵢφ)] for i = x, y, z. Because 𝓛 generally depends on spatial derivatives of φ too, the correct equation needs the full four-divergence ∂ᵤ[∂𝓛/∂(∂ᵤφ)], summed over all four spacetime indices, not just the time part.",
    },
    nextQuestion:
      "What is the simplest Lagrangian density we can write down for a single relativistic field, and what equation of motion does it produce?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [2, 4],
  },
  {
    id: "lesson-6",
    number: 6,
    chapterId: "B",
    title: "What is the simplest relativistic field?",
    scope: "Classical",
    guidingQuestion: "What equation describes a free scalar field?",
    bigIdea:
      "The simplest Lorentz-invariant Lagrangian density for a single real scalar field yields a linear wave equation whose plane-wave solutions reproduce the relativistic energy–momentum relation.",
    whyWeNeedThis:
      "Lesson 5 gave the general machine: any 𝓛(φ, ∂ᵤφ) produces a field equation via ∂𝓛/∂φ − ∂ᵤ[∂𝓛/∂(∂ᵤφ)] = 0. To connect this to anything physical, we need the simplest choice of 𝓛 consistent with special relativity, and to see explicitly what equation and what solutions it produces.",
    intuition: {
      paragraphs: [
        "The simplest Lorentz-invariant way to penalize a field for changing through spacetime is a kinetic term built from ∂ᵤφ∂ᵘφ — a four-dimensional relativistic analogue of the particle kinetic term ½q̇², combining time and space derivatives with the relative sign fixed by the spacetime metric.",
        "Alongside it, a term ½m²φ² penalizes the field for being displaced away from zero, exactly analogous to a harmonic oscillator's restoring potential ½kq², with the 'spring constant' written as m² by convention.",
        "Solving the resulting equation of motion with plane-wave solutions — φ ~ eⁱ⁽ᵏ·ˣ⁻ʷᵗ⁾ — forces a specific relation between the wave's frequency ω, its wavenumber k, and the parameter m. That relation turns out to be exactly the relativistic relation between energy, momentum and mass. In other words: this purely classical field, before any quantization at all, already encodes the relativistic energy–momentum relation that a single quantum of the field will eventually carry.",
      ],
    },
    mathematicalBridge: {
      intro:
        "We fix a metric signature (+, −, −, −), i.e. η_μν = diag(1, −1, −1, −1), so that ∂ᵤφ∂ᵘφ = φ̇² − (∇φ)². This is a choice of convention, stated explicitly so every equation that follows is unambiguous.",
      steps: [
        { statement: "The Lagrangian density for a free real scalar field.", equation: "𝓛 = ½ ∂ᵤφ ∂ᵘφ − ½ m²φ²  =  ½[φ̇² − (∇φ)²] − ½ m²φ²" },
        { statement: "Compute the two pieces needed for the Euler–Lagrange field equation.", equation: "∂𝓛/∂φ = −m²φ,    ∂𝓛/∂(∂ᵤφ) = ∂ᵘφ" },
        {
          statement: "The four-divergence of the second piece is the d'Alembertian, □ ≡ ∂ᵤ∂ᵘ = ∂ₜ² − ∇².",
          equation: "∂ᵤ[∂𝓛/∂(∂ᵤφ)] = ∂ᵤ∂ᵘφ = □φ",
        },
        {
          statement: "Substitute into the Euler–Lagrange field equation from Lesson 5.",
          equation: "∂𝓛/∂φ − ∂ᵤ[∂𝓛/∂(∂ᵤφ)] = −m²φ − □φ = 0  ⇒  (□ + m²) φ = 0",
        },
        {
          statement: "Try a plane-wave solution and substitute.",
          equation: "φ = A eⁱ⁽ᵏ·ˣ⁻ʷᵗ⁾  ⇒  ∂ₜ²φ = −ω²φ,  ∇²φ = −|k|²φ  ⇒  □φ = (−ω² + |k|²)φ",
        },
        {
          statement:
            "Requiring (□ + m²)φ = 0 for this plane wave fixes ω and k in terms of m. With E = ω and p = k in natural units, this is the relativistic energy–momentum relation.",
          equation: "−ω² + |k|² + m² = 0  ⇒  ω² = |k|² + m²  ⇒  E² = p² + m²",
        },
      ],
      result: {
        label: "Klein–Gordon equation",
        expression: "(□ + m²) φ = 0",
        note: "Its plane-wave solutions exist exactly when E² = p² + m², the relativistic energy–momentum relation.",
      },
    },
    academicDepth: {
      assumptions: [
        "A single real scalar field on flat Minkowski spacetime, signature (+, −, −, −).",
        "Natural units, c = ħ = 1 (toggle available below to restore ordinary units).",
        "𝓛 depends only on φ and ∂ᵤφ, is Lorentz-invariant, and is quadratic in the fields — i.e. this is the free theory, with no self-interaction terms such as φ³ or φ⁴.",
      ],
      notation: [
        "η_μν = diag(1, −1, −1, −1); ∂ᵘ = η^{μν} ∂_ν.",
        "□ ≡ ∂ᵤ∂ᵘ = ∂ₜ² − ∇², the d'Alembertian.",
        "m: a real parameter with dimensions of mass in natural units.",
      ],
      derivation: [
        {
          statement:
            "The full derivation from 𝓛 to the Klein–Gordon equation is the sequence of steps shown in the Mathematical Bridge above, applying the general result of Lesson 5 to this specific 𝓛.",
        },
        {
          statement:
            "The plane-wave dispersion relation ω² = |k|² + m² follows by direct substitution, and matches E² = p² + m² once E = ħω and p = ħk are restored (here ħ = 1).",
        },
      ],
      formalStatement: {
        label: "Klein–Gordon equation and dispersion relation",
        expression: "(□ + m²) φ(x) = 0,  with plane-wave solutions requiring E² = p² + m².",
      },
      limitations: [
        "This is a classical field equation: φ(x) here is a classical (c-number) function, not a quantum operator. The 'particle' interpretation of E and p is only made precise after quantization, starting in Chapter C.",
        "The equation is free and linear — there is no self-interaction or coupling to any other field.",
        "Historically, the Klein–Gordon equation was first explored as a single-particle relativistic wave equation, in analogy with the Schrödinger equation. That interpretation runs into difficulties (including the negative-energy branches flagged in Lesson 1) that are not resolved by reinterpreting φ as a wavefunction — they are resolved by quantizing φ as a field, a step not yet taken in this lesson.",
      ],
    },
    misconception: {
      claim: "This classical field φ(x, t), obeying the Klein–Gordon equation, is already a quantum field, and already describes particles.",
      correction:
        "φ here is still a classical dynamical variable — the direct generalization of q(t) — obeying a classical wave equation. It becomes meaningful to talk about 'particles' as quantized excitations of φ only after the quantization procedure introduced starting in Chapter C.",
    },
    understandingCheck: {
      prompt:
        "A free classical scalar plane wave requires ω² = |k|² + m². What does this become in natural units (c = ħ = 1), and what is it the classical-field analogue of?",
      options: [
        {
          id: "a",
          label: "E² = p² + m² — the relativistic energy–momentum relation.",
          correct: true,
          feedback:
            "Correct. With E = ω and p = k in natural units, the plane-wave condition for the Klein–Gordon equation is exactly the relativistic dispersion relation.",
        },
        {
          id: "b",
          label: "E = mc², with no momentum dependence.",
          correct: false,
          feedback: "This drops the momentum dependence entirely, and reintroduces c despite the natural-units convention.",
        },
        {
          id: "c",
          label: "E = ħω only, unrelated to momentum.",
          correct: false,
          feedback: "This is just the definition of E in terms of ω — it doesn't capture the constraint relating ω and k that the equation imposes.",
        },
        {
          id: "d",
          label: "F = ma, Newton's second law in disguise.",
          correct: false,
          feedback: "The dispersion relation of a relativistic wave equation is not Newton's second law.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Using (□ + m²)φ = 0 and the same plane-wave method used in this lesson, what changes about the allowed relation between ω and k if m = 0? Give the resulting dispersion relation and identify the kind of wave it describes.",
      answer:
        "Setting m = 0 gives ω² = |k|², i.e. ω = |k| — a dispersionless relation, meaning the wave propagates at a single fixed speed (set to 1 in natural units) regardless of wavelength. This is the same kind of dispersion relation satisfied by electromagnetic waves in vacuum.",
    },
    nextQuestion:
      "This equation and its solutions are still entirely classical. How does this continuous field become discrete particles?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [5],
    interactive: { kind: "natural-units-toggle" },
  },
];

// ---------------------------------------------------------------------------
// Full 21-lesson dependency graph. Lessons 7-21 are locked stubs: only the
// navigational skeleton (number, chapter, sequential prerequisite) is
// present, with no fabricated titles or content. Phase 2 and 3 replace each
// stub's chapter range with real Lesson objects in LESSONS above; this
// array can then be regenerated the same way without changing its shape.
// ---------------------------------------------------------------------------

function chapterForLesson(number: number): (typeof CHAPTERS)[number] {
  const chapter = CHAPTERS.find(
    (c) => number >= c.lessonRange[0] && number <= c.lessonRange[1]
  );

  if (!chapter) {
    throw new Error(`No chapter defined for lesson ${number}`);
  }

  return chapter;
}

const TOTAL_LESSON_COUNT = 21;

export const LESSON_NODES: LessonNode[] = Array.from(
  { length: TOTAL_LESSON_COUNT },
  (_, index) => {
    const number = index + 1;
    const chapter = chapterForLesson(number);
    const authored = LESSONS.find((lesson) => lesson.number === number);

    return {
      number,
      chapterId: chapter.id,
      title: authored ? authored.title : `Lesson ${number}`,
      status: chapter.status,
      prerequisites: authored ? authored.prerequisites : number > 1 ? [number - 1] : [],
    };
  }
);

export function getLessonByNumber(number: number): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.number === number);
}

export function getChapter(id: string): ChapterMeta | undefined {
  return CHAPTERS.find((chapter) => chapter.id === id);
}
