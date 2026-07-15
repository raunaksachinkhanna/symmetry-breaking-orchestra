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
// All five chapters (Lessons 1-21) are fully authored as of Phase 3.

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
    status: "available",
    guidingQuestion: "How does this continuous field become discrete particles?",
    lessonRange: [7, 9],
  },
  {
    id: "D",
    order: 4,
    title: "Global symmetry breaking",
    status: "available",
    guidingQuestion:
      "Why does breaking a global symmetry produce a massless mode?",
    lessonRange: [10, 16],
  },
  {
    id: "E",
    order: 5,
    title: "The Higgs mechanism",
    status: "available",
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
// Lessons 1-6 (Phase 1), 7-16 (Phase 2), and 17-21 (Phase 3).
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

  // -------------------------------------------------------------------------
  // Chapter C — How fields become particles (Lessons 7-9, Phase 2)
  // -------------------------------------------------------------------------
  {
    id: "lesson-7",
    number: 7,
    chapterId: "C",
    title: "Why is a field a collection of oscillators?",
    scope: "Quantum",
    guidingQuestion: "How can one continuous field be decomposed into simpler motions?",
    bigIdea:
      "Any field configuration can be decomposed into independent Fourier modes, each of which evolves exactly like a single harmonic oscillator.",
    whyWeNeedThis:
      "Chapter B gave us a classical field equation. To turn a classical field into a theory of particles, we need a way to organize the field's infinitely many coupled degrees of freedom into independent pieces we already know how to handle. Fourier decomposition does exactly this — and each piece turns out to obey the same equation as a single harmonic oscillator, a system whose quantization (the next lesson) is already completely understood from ordinary quantum mechanics.",
    intuition: {
      paragraphs: [
        "A field configuration φ(x, t) at a fixed time can be built up as a sum of simple wave shapes — sine and cosine waves of different wavelengths — each with its own amplitude, much like a musical chord is built from a sum of pure tones.",
        "Use the interactive widget below: adjusting the amplitude of each mode changes how the individual wave shapes add up to build the total field profile.",
        "Here is the key simplification. Follow how one single mode's amplitude evolves in time by substituting it into the Klein–Gordon equation, and it turns out to obey exactly the same equation as a mass on a spring — a harmonic oscillator — with a frequency set by that mode's wavenumber (and the field's mass). Instead of one impossibly complicated system of coupled points, a free field is secretly a large collection of completely independent, uncoupled oscillators, one per mode.",
      ],
    },
    mathematicalBridge: {
      intro:
        "Expand the classical Klein–Gordon field in spatial Fourier modes over a box of volume V with periodic boundary conditions (a standard calculational device), and substitute into (□ + m²)φ = 0.",
      steps: [
        {
          statement: "Fourier-expand the field in spatial modes labeled by wavevector k.",
          equation: "φ(x, t) = (1/√V) Σₖ qₖ(t) eⁱᵏ·ˣ",
        },
        {
          statement:
            "Substitute into the field equation. Each spatial derivative brings down a factor of ik, so ∇²φ contributes −|k|²qₖ for mode k.",
          equation: "(1/√V) Σₖ [ q̈ₖ + |k|²qₖ + m²qₖ ] eⁱᵏ·ˣ = 0",
        },
        {
          statement:
            "Since the functions eⁱᵏ·ˣ are linearly independent, the coefficient of each one must vanish separately.",
          equation: "q̈ₖ + (|k|² + m²) qₖ = 0",
        },
        {
          statement:
            "Writing ωₖ² = |k|² + m² (exactly Lesson 6's dispersion relation), this is precisely the equation of a harmonic oscillator of frequency ωₖ — one independent oscillator for every mode k.",
          equation: "q̈ₖ + ωₖ² qₖ = 0,  ωₖ = √(|k|² + m²)",
        },
      ],
      result: {
        label: "Mode decomposition of the free field",
        expression: "q̈ₖ + ωₖ² qₖ = 0 for every k, independently",
        note: "The field's equation of motion becomes a decoupled set of harmonic-oscillator equations, one per Fourier mode.",
      },
    },
    academicDepth: {
      assumptions: [
        "Periodic boundary conditions on a box of volume V — a standard device to get a discrete, countable set of modes k; physical results are recovered in the infinite-volume limit V → ∞.",
        "The field equation is linear (the free theory). An interaction term would couple different k modes and this clean decomposition would no longer hold exactly.",
      ],
      notation: [
        "k: wavevector labeling a mode (discrete, set by the box's periodic boundary conditions).",
        "qₖ(t): the (generally complex) amplitude of mode k — a position-like coordinate for that mode's oscillator.",
        "ωₖ = √(|k|² + m²): the mode's frequency, matching Lesson 6's dispersion relation exactly.",
      ],
      derivation: [
        {
          statement:
            "Because φ(x, t) is real, the Fourier coefficients must satisfy a reality condition linking mode k to mode −k: q₋ₖ(t) = qₖ(t)*. This means the independent physical degrees of freedom amount to one real oscillator per independent wavevector direction, not one full complex oscillator per k — a bookkeeping point that matters for counting degrees of freedom correctly but does not change the oscillator equation itself.",
        },
        {
          statement:
            "The full derivation is the sequence of steps shown in the Mathematical Bridge above: substitute the mode expansion into (□ + m²)φ = 0 and use linear independence of the basis functions eⁱᵏ·ˣ to isolate one equation per mode.",
        },
      ],
      formalStatement: {
        label: "Mode decomposition",
        expression:
          "Decomposing a free scalar field obeying (□ + m²)φ = 0 as φ(x,t) = (1/√V) Σₖ qₖ(t) eⁱᵏ·ˣ converts its equation of motion into decoupled oscillator equations q̈ₖ + ωₖ²qₖ = 0, ωₖ² = |k|² + m².",
      },
      limitations: [
        "This decomposition into independent oscillators is exact only for the free (non-interacting) field. An interaction term such as λφ⁴ in the Lagrangian couples different k modes together, and the clean independence shown here no longer holds exactly.",
        "Box quantization (periodic boundary conditions) is a calculational device, not a physical claim that space is a box; physical, infinite-space results are recovered as V → ∞.",
      ],
    },
    misconception: {
      claim: "Turning a field into a set of oscillators is a mathematical trick specific to quantum mechanics.",
      correction:
        "This decomposition is entirely classical — it follows directly from the linearity of the free Klein–Gordon equation and involves no quantization at all. Quantization, which is what actually introduces particles, is the subject of the next lesson; it acts on the classical oscillators already identified here.",
    },
    understandingCheck: {
      prompt: "Why does decomposing φ(x, t) into Fourier modes turn one complicated field equation into many simple ones?",
      options: [
        {
          id: "a",
          label:
            "Because each plane wave eⁱᵏ·ˣ is an eigenfunction of the spatial derivatives in the field equation, so the equation becomes an independent condition on each mode's amplitude.",
          correct: true,
          feedback:
            "Correct. Spatial derivatives act on eⁱᵏ·ˣ by multiplication by factors of ik, which is exactly why substituting the mode expansion turns a differential equation in x into an independent ordinary differential equation for each qₖ(t).",
        },
        {
          id: "b",
          label: "Because Fourier modes are inherently quantum mechanical.",
          correct: false,
          feedback: "Fourier decomposition is a purely classical mathematical technique — nothing here has been quantized yet.",
        },
        {
          id: "c",
          label: "Because there is only one Fourier mode for a real field.",
          correct: false,
          feedback: "A real field generally requires infinitely many modes k to represent; reality only links qₖ to q₋ₖ, it doesn't reduce the mode count to one.",
        },
        {
          id: "d",
          label: "Because the field equation is nonlinear.",
          correct: false,
          feedback: "The opposite is true — the field equation here is linear, and it's exactly that linearity that allows modes to decouple.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "The equation for each mode is q̈ₖ + ωₖ²qₖ = 0. Write its general real solution, and identify which parameter plays the role of 'spring constant divided by mass' compared to an ordinary oscillator q̈ + (k_spring/m)q = 0.",
      answer:
        "qₖ(t) = A cos(ωₖt) + B sin(ωₖt). Comparing to q̈ + (k_spring/m)q = 0, the role of k_spring/m is played by ωₖ² = |k|² + m² — the mode's own wavenumber- and mass-dependent frequency squared.",
    },
    nextQuestion: "Where do particles enter the theory?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [6],
    interactive: { kind: "fourier-modes" },
  },
  {
    id: "lesson-8",
    number: 8,
    chapterId: "C",
    title: "What does quantization change?",
    scope: "Quantum",
    guidingQuestion: "Where do particles enter the theory?",
    bigIdea: "Quantizing each field mode makes its excitation energy discrete.",
    whyWeNeedThis:
      "Lesson 7 showed that a free field is a large collection of independent classical harmonic oscillators. Ordinary quantum mechanics already tells us exactly what happens when a harmonic oscillator is quantized — this lesson applies that familiar result to every mode simultaneously, and this is precisely the step that makes 'particles' appear as a mathematical consequence rather than an added assumption.",
    intuition: {
      paragraphs: [
        "A single quantum harmonic oscillator has evenly spaced energy levels above a lowest possible energy, and raising or lowering the energy level by one step is described by 'creation' and 'annihilation' operators acting on those levels.",
        "Apply this to every field mode from Lesson 7: each mode k, being a harmonic oscillator of frequency ωₖ, gets its own ladder of energy levels and its own creation and annihilation operators.",
        "The lowest level of every mode simultaneously is called the vacuum state. This is worth pausing on, because it is a genuinely different notion of 'vacuum' from the classical field configuration discussed loosely so far — it specifically means the quantum state with zero excitation in every mode. To keep this distinction sharp, this course calls the earlier field-configuration idea the classical vacuum, and reserves plain 'vacuum state' (or 'quantum vacuum') for this new quantized notion, introduced here for the first time.",
        "Raising the excitation number of mode k by one is what we call adding one particle of momentum k. A state with n excitations in mode k is not n little classical bumps of field literally travelling inside some substance — it is a specific quantum state of that mode's oscillator, labeled by an integer n, carrying momentum k and energy ωₖ (in natural units) purely because that is how the raising operator is defined to act.",
      ],
    },
    mathematicalBridge: {
      intro: "Apply the single-oscillator quantization result, familiar from ordinary quantum mechanics, to every mode independently.",
      steps: [
        {
          statement: "Recall the single-oscillator spectrum: energy eigenstates |n⟩ of one oscillator of frequency ω have evenly spaced energies.",
          equation: "E_n = ħω(n + ½),  n = 0, 1, 2, …",
        },
        {
          statement: "Creation and annihilation operators raise and lower the excitation number, with the lowest state annihilated by a.",
          equation: "a†|n⟩ = √(n+1) |n+1⟩,  a|n⟩ = √n |n−1⟩,  a|0⟩ = 0",
        },
        {
          statement:
            "Promote every mode's classical oscillator amplitude qₖ (Lesson 7) to an operator with its own aₖ, aₖ†, one independent oscillator system per mode.",
          equation: "[aₖ, a_k'†] = δ_{kk'}",
        },
        {
          statement: "The vacuum state is the state annihilated by every mode's lowering operator.",
          equation: "aₖ|0⟩ = 0 for all k",
        },
        {
          statement: "A one-particle state of momentum k is built by acting with that mode's raising operator on the vacuum.",
          equation: "a†|0⟩ = |1⟩",
        },
      ],
      result: {
        expression: "a†|0⟩ = |1⟩,  E_n = ħω(n + ½)",
        note: "Applied mode-by-mode, this is exactly how discrete particle number and energy quanta appear.",
      },
    },
    academicDepth: {
      assumptions: [
        "Canonical quantization of each decoupled mode oscillator from Lesson 7: promote qₖ and its conjugate momentum to operators satisfying canonical commutation relations.",
        "The free (non-interacting) theory, so the modes remain independent after quantization too.",
      ],
      notation: [
        "aₖ, aₖ†: annihilation and creation operators for mode k, with [aₖ, a_k'†] = δ_{kk'} and [aₖ, a_k'] = [aₖ†, a_k'†] = 0.",
        "|0⟩: the vacuum state, aₖ|0⟩ = 0 for every k.",
        "Nₖ = aₖ†aₖ: the number operator for mode k, with eigenvalues nₖ = 0, 1, 2, ….",
        "aₖ†|0⟩: the one-particle state of momentum k.",
      ],
      derivation: [
        {
          statement:
            "Canonical quantization promotes each classical oscillator mode from Lesson 7 to an operator obeying canonical commutation relations, exactly as for a single quantum harmonic oscillator.",
        },
        {
          statement:
            "Because the modes are independent (Lesson 7), the full field Hamiltonian is a direct sum of independent oscillator Hamiltonians, one per mode.",
          equation: "H = Σₖ ħωₖ (aₖ†aₖ + ½)",
        },
        {
          statement:
            "The total zero-point energy Σₖ ½ħωₖ, summed over infinitely many modes, is formally divergent. This is a known feature of the free quantized field, usually handled by normal ordering or renormalization — a topic outside this course's scope, flagged here rather than resolved.",
        },
        {
          statement:
            "A general multi-particle state is built by acting with several creation operators on |0⟩, e.g. a two-particle state a_{k1}†a_{k2}†|0⟩.",
        },
      ],
      formalStatement: {
        label: "Quantized free-field spectrum",
        expression:
          "H = Σₖ ħωₖ(aₖ†aₖ + ½), with [aₖ, a_k'†] = δ_{kk'}; the eigenstates of Nₖ = aₖ†aₖ label the particle number nₖ in mode k.",
      },
      limitations: [
        "The zero-point energy sum Σₖ ½ħωₖ is formally divergent; making rigorous sense of it (normal ordering, renormalization, its role in the cosmological constant problem) is beyond this course's scope.",
        "This is the free-field spectrum only. Interactions mix modes, and the clean particle-number eigenbasis used here is generally no longer exactly conserved once interactions are switched on (foreshadowed further in Lesson 9).",
      ],
    },
    misconception: {
      claim: "A particle is a small classical clump of the field, literally travelling through a physical medium the way a wave travels through water.",
      correction:
        "A particle here is a specific quantum excitation number of one oscillator mode of the field, created by a raising operator acting on the vacuum. It is not a literal lump of some background substance — the field is not a medium, and there is no separate substance 'underneath' it for the particle to be made of.",
    },
    understandingCheck: {
      prompt: "What distinguishes the classical vacuum discussed in earlier chapters from the vacuum state |0⟩ introduced in this lesson?",
      options: [
        {
          id: "a",
          label:
            "The classical vacuum is a field configuration that minimizes classical potential energy; the vacuum state |0⟩ is the quantum state with zero excitation in every field mode — a different kind of object entirely.",
          correct: true,
          feedback:
            "Correct. One is a classical field configuration (a number, or set of numbers, at every point); the other is a specific quantum state of the fully quantized theory. Keeping the names distinct avoids conflating the two.",
        },
        {
          id: "b",
          label: "They are exactly the same concept, just with different names.",
          correct: false,
          feedback: "They are genuinely different kinds of objects — one classical, one a quantum state — which is exactly why this course uses different names for them.",
        },
        {
          id: "c",
          label: "The classical vacuum only exists starting in Chapter D, so it can't be compared to |0⟩ at all.",
          correct: false,
          feedback: "The comparison is exactly the point of this lesson, regardless of which chapter each concept is most fully developed in.",
        },
        {
          id: "d",
          label: "|0⟩ refers to the field value being zero at every spacetime point.",
          correct: false,
          feedback: "That description is closer to the classical notion (φ = 0) than to |0⟩, which is a quantum state of definite excitation number, not a statement about a field's numerical value.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "A state is built by acting twice with the same mode's raising operator: (aₖ†)²|0⟩ (up to normalization). In terms of particle number, what does this state represent, and what is its energy above the vacuum?",
      answer:
        "It represents two particles occupying the same mode k (nₖ = 2), with energy 2ħωₖ above that mode's vacuum energy — since E_n = ħωₖ(n + ½), the difference between n = 2 and n = 0 is 2ħωₖ.",
    },
    nextQuestion: "How does a momentum excitation become a localized detection event?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [7],
  },
  {
    id: "lesson-9",
    number: 9,
    chapterId: "C",
    title: "Are particles always perfectly localized?",
    scope: "Quantum",
    guidingQuestion: "How does a momentum excitation become a localized detection event?",
    bigIdea:
      "A definite-momentum one-particle state is completely delocalized in space; a spatially localized particle requires superposing many momentum modes into a wave packet.",
    whyWeNeedThis:
      "Lesson 8 built one-particle states labeled by a definite momentum k. Real detectors click at specific places, not 'everywhere with definite momentum.' This lesson connects the clean momentum-eigenstate picture to the everyday notion of a particle appearing at roughly one location — and is honest about where that correspondence gets more subtle.",
    intuition: {
      paragraphs: [
        "A state built with a definite momentum k has, by the same logic as ordinary quantum mechanics' position–momentum trade-off, a completely undetermined position: the excitation is spread over all of space equally, not sitting at a point.",
        "To describe something closer to 'a particle detected roughly here,' many different momentum modes are combined (superposed), each weighted by some function of momentum. This superposition is a wave packet. A wave packet can be built to be reasonably localized in position, at the cost of no longer having one exactly defined momentum.",
        "This is the same logic as ordinary single-particle quantum mechanics' wave packets, just built from field creation operators acting on the field-theoretic vacuum instead of from a Schrödinger wavefunction.",
        "One caveat worth flagging early: once interactions are switched on — which this course has not yet done — the very question 'how many particles are here' can itself become subtle, because interacting fields don't always have as clean a particle-counting operator as the free theory does. This lesson treats only the free (non-interacting) case, where the wave-packet picture is on solid ground.",
      ],
    },
    mathematicalBridge: {
      intro: "Build a localized state by superposing definite-momentum one-particle states with a weighting function.",
      steps: [
        { statement: "A definite-momentum one-particle state, from Lesson 8.", equation: "|k⟩ = a†_k |0⟩" },
        {
          statement: "Superpose momentum modes with a weighting function f(p) to build a localized wave packet.",
          equation: "|ψ⟩ = ∫ d³p f(p) a†_p |0⟩",
        },
        {
          statement:
            "Choosing f(p) sharply peaked around some p₀ with momentum-space width Δp gives a position-space profile with a spread Δx, related by the same trade-off as ordinary quantum mechanics.",
          equation: "Δx Δp ≳ ħ/2",
        },
        {
          statement:
            "As Δp → 0 (a sharp momentum), Δx → ∞ (fully delocalized) — recovering the single-mode state of Lesson 8 as the zero-momentum-spread limit of a wave packet.",
        },
      ],
      result: {
        expression: "|ψ⟩ = ∫ d³p f(p) a†_p |0⟩",
        note: "A localized one-particle wave packet built from a superposition of definite-momentum modes.",
      },
    },
    academicDepth: {
      assumptions: [
        "Free (non-interacting) field theory only.",
        "f(p) taken square-integrable (normalizable), so |ψ⟩ has a well-defined norm.",
        "Single-particle sector only — no multi-particle wave packets or particle-number/position entanglement discussed here.",
      ],
      notation: [
        "|k⟩ = a†_k|0⟩: momentum eigenstate.",
        "f(p): momentum-space wave-packet profile, playing the same role as a momentum-space wavefunction.",
        "|ψ⟩: the resulting localized one-particle state.",
      ],
      derivation: [
        {
          statement:
            "Momentum eigenstates satisfy ⟨k|k'⟩ ∝ δ(k − k') — they are not normalizable to 1, exactly analogous to plane waves in ordinary quantum mechanics. This is itself part of why a momentum eigenstate alone cannot represent a physically prepared, localizable particle.",
        },
        {
          statement:
            "The position-space profile of |ψ⟩ is obtained from a Fourier transform of f(p); its spatial extent is controlled by the momentum-space width of f(p), inherited directly from the ordinary position–momentum Fourier relationship of non-relativistic quantum mechanics.",
        },
        {
          statement:
            "A relativistic subtlety: because different momentum modes have different ωₚ = √(p² + m²) (Lessons 6–7's dispersion relation), a relativistic wave packet spreads, and attempting to localize it much more tightly than roughly the particle's own Compton wavelength ħ/(mc) runs into difficulties that mix with multi-particle and field-theoretic effects — noted here only as a named boundary of validity, not derived in detail.",
        },
      ],
      formalStatement: {
        label: "Localized one-particle state",
        expression:
          "|ψ⟩ = ∫ d³p f(p) a†_p|0⟩ satisfies a momentum–position trade-off inherited from the Fourier relationship between f(p) and its position-space profile, and reduces to the sharp momentum eigenstate a†_k|0⟩ as the momentum spread goes to zero.",
      },
      limitations: [
        "This construction is confined to the free theory's single-particle sector. Once interactions are included, particle number is generally not exactly conserved, and 'one particle located here' becomes correspondingly less sharp — a full treatment requires the interacting theory's machinery, outside this course's scope.",
        "Attempting to localize a relativistic particle much more tightly than its Compton wavelength runs into the same limitation, only sketched here.",
      ],
    },
    misconception: {
      claim: "Every state in an interacting relativistic quantum field theory can always be cleanly described as some definite number of localized particles.",
      correction:
        "This lesson's wave-packet construction applies cleanly to the free (non-interacting) theory. Once interactions are present, the particle-counting operator built from a†a generally does not commute with the full interacting Hamiltonian, so 'how many particles, located where' can stop being a sharp question in general interacting states — a genuine physical subtlety, not just a technical inconvenience.",
    },
    understandingCheck: {
      prompt: "Why isn't the state a†_k|0⟩ from Lesson 8 already a good description of 'one particle sitting at a specific location'?",
      options: [
        {
          id: "a",
          label:
            "Because it has an exactly defined momentum k, so by the position–momentum trade-off its position is completely undetermined — it is spread over all space.",
          correct: true,
          feedback: "Correct — this is the same position–momentum trade-off familiar from ordinary quantum mechanics, applied to the field's momentum eigenstates.",
        },
        {
          id: "b",
          label: "Because a†_k|0⟩ doesn't actually contain any particles.",
          correct: false,
          feedback: "a†_k|0⟩ is precisely the one-particle state of momentum k defined in Lesson 8 — it does contain one particle.",
        },
        {
          id: "c",
          label: "Because momentum eigenstates only exist in non-relativistic quantum mechanics.",
          correct: false,
          feedback: "Momentum eigenstates exist in this relativistic field-theory setting too — that's exactly what a†_k|0⟩ is.",
        },
        {
          id: "d",
          label: "Because the vacuum state |0⟩ is not well defined.",
          correct: false,
          feedback: "|0⟩ was defined precisely in Lesson 8 as the state annihilated by every mode's lowering operator; that isn't the issue here.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Two wave packets are built with momentum-space weighting functions f₁(p), sharply peaked (small Δp), and f₂(p), broadly spread (large Δp). Which one is more localized in position space, and why?",
      answer:
        "f₂, the broadly spread momentum profile, produces the more position-localized wave packet. The position–momentum trade-off means a wide spread in momentum is needed to build a narrow spatial profile — the same relationship as in ordinary quantum mechanics.",
    },
    nextQuestion: "What does it mean for a law to remain unchanged?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [8],
  },

  // -------------------------------------------------------------------------
  // Chapter D — Symmetry and global U(1) breaking (Lessons 10-16, Phase 2)
  // -------------------------------------------------------------------------
  {
    id: "lesson-10",
    number: 10,
    chapterId: "D",
    title: "What is a symmetry?",
    scope: "Global Symmetry",
    guidingQuestion: "What does it mean for a law to remain unchanged?",
    bigIdea:
      "A symmetry is a transformation of the dynamical variables that leaves the action invariant for every configuration — a statement about the theory, not automatically about any one particular solution.",
    whyWeNeedThis:
      "Chapters A–C built the machinery of fields and their quantization. Before discussing symmetry breaking — the subject of the rest of this chapter, and the reason the interactive laboratory exists — we need a precise definition of what a symmetry is, and specifically we need to separate several related but different ideas that are easy to conflate: transforming a field, the invariance of the action, the invariance of the equations of motion, and the invariance of a particular state.",
    intuition: {
      paragraphs: [
        "A symmetry, in this precise sense, is a transformation applied to the field everywhere at once that leaves the action unchanged. It's a statement about the theory — the rule — not about any one particular solution.",
        "Four distinct things are worth keeping separate: (1) a transformation of fields — a rule replacing φ by some new φ′; (2) invariance of the action — S[φ′] = S[φ] for every configuration φ; (3) symmetry of the equations of motion — if φ solves them, so does φ′, which follows from action invariance; (4) symmetry of a particular state or solution — whether one specific solution happens to be left unchanged, a separate and weaker question. Spontaneous symmetry breaking, later in this chapter, is entirely about the gap between (2) and (4).",
        "The specific symmetry this chapter is built around is a global U(1) symmetry: multiplying a complex field by a phase that is the same everywhere in spacetime.",
        "Picture φ as a point in a two-dimensional (Re φ, Im φ) plane; multiplying by e^{iα} rotates that point by angle α around the origin — the same rotation applied everywhere in space and time simultaneously. 'Global' specifically means α does not depend on position; Chapter E asks what changes once it's allowed to.",
      ],
    },
    mathematicalBridge: {
      intro:
        "Check directly that the transformation φ → e^{iα}φ, for constant α, leaves a U(1)-invariant Lagrangian density unchanged.",
      steps: [
        { statement: "Define the transformation, with α a real constant.", equation: "φ(x) → φ′(x) = e^{iα} φ(x)" },
        {
          statement: "Compute how |φ|² transforms — the phases from φ and φ* cancel exactly.",
          equation: "|φ′|² = φ′*φ′ = e^{−iα}φ* · e^{iα}φ = φ*φ = |φ|²",
        },
        {
          statement: "The same cancellation happens under a derivative, since α is constant and passes straight through it.",
          equation: "∂μφ′*∂^μφ′ = e^{−iα}∂μφ* · e^{iα}∂^μφ = ∂μφ*∂^μφ",
        },
        {
          statement:
            "Since every piece of a Lagrangian density built from |φ|² and ∂μφ*∂^μφ is unchanged, the action is invariant for every configuration φ — a genuine symmetry of the theory, not a property of any one solution.",
        },
      ],
      result: {
        expression: "S[e^{iα}φ] = S[φ] for constant α, whenever 𝓛 is built from |φ|² and ∂μφ*∂^μφ",
        note: "This is the global U(1) symmetry the rest of this chapter is built on.",
      },
    },
    academicDepth: {
      assumptions: [
        "φ is a single complex scalar field.",
        "𝓛 depends on φ only through the U(1)-invariant combinations |φ|² = φ*φ and ∂μφ*∂^μφ (and higher such invariant combinations, e.g. |φ|⁴).",
        "α is a real constant, independent of spacetime position.",
      ],
      notation: [
        "U(1): the group of phase rotations e^{iα}, α ∈ [0, 2π) — the group of unit-modulus complex numbers under multiplication.",
        "'Global' means the transformation parameter (α) is the same at every spacetime point, as opposed to a local/gauge transformation α(x) (Chapter E).",
      ],
      derivation: [
        {
          statement:
            "General definition: a transformation φ → φ′ is a symmetry of the action if S[φ′] = S[φ] for every configuration φ, not only for configurations that solve the equations of motion.",
        },
        {
          statement:
            "The Mathematical Bridge above shows this holds explicitly for 𝓛 = ∂μφ*∂^μφ − μ²|φ|² − λ|φ|⁴ under φ → e^{iα}φ.",
        },
        {
          statement:
            "Consequence for solutions: if φ solves the Euler–Lagrange equations derived from an invariant 𝓛, then φ′ = e^{iα}φ solves the same equations — because the functional form of the equations of motion is itself unchanged by the transformation. This is symmetry of the equations of motion, a consequence of action invariance rather than an independent assumption.",
        },
        {
          statement:
            "This is explicitly distinct from symmetry of a state: a particular solution φ₀(x) is itself invariant under the transformation only if e^{iα}φ₀(x) = φ₀(x) for the relevant α — a much stronger, additional condition than the action merely being invariant. Lessons 13–14 turn on exactly this distinction.",
        },
      ],
      formalStatement: {
        label: "Definition of a symmetry",
        expression:
          "φ → φ′ is a symmetry of S[φ] = ∫d⁴x 𝓛(φ, ∂μφ) if S[φ′] = S[φ] for every configuration φ. φ → e^{iα}φ (α constant) is a global U(1) symmetry of any 𝓛 built from |φ|² and ∂μφ*∂^μφ.",
      },
      limitations: [
        "This lesson establishes what a symmetry of the action means and distinguishes it from a symmetry of a state; it does not yet show that symmetries imply conserved quantities (Lesson 11), nor address whether any particular solution respects the symmetry (Lessons 13–14).",
        "'Global' here strictly means a spacetime-independent transformation parameter; local (gauge) symmetry is a distinct structure introduced in Chapter E.",
      ],
    },
    misconception: {
      claim: "If the action has a symmetry, every physical solution or vacuum state must also individually look the same under that symmetry.",
      correction:
        "Action invariance and state invariance are different statements. The action being invariant under φ → e^{iα}φ for every configuration φ does not force any particular solution — including the vacuum — to be invariant under that same transformation. Whether the selected state actually respects the symmetry is a separate question, and Lessons 13–14 present a case where it does not.",
    },
    understandingCheck: {
      prompt: "𝓛 = ∂μφ*∂^μφ − μ²|φ|² − λ|φ|⁴. Why is this Lagrangian density invariant under the global transformation φ → e^{iα}φ?",
      options: [
        {
          id: "a",
          label:
            "Because every term is built from |φ|² or ∂μφ*∂^μφ, and the phases e^{iα} and e^{−iα} from φ and φ* always cancel in those combinations.",
          correct: true,
          feedback: "Correct — every term pairs a φ with a φ*, so the phase factors always cancel exactly, for any α.",
        },
        {
          id: "b",
          label: "Because α is small.",
          correct: false,
          feedback: "No smallness assumption is used or needed; the cancellation is exact for any α, not just small ones.",
        },
        {
          id: "c",
          label: "Because φ is real.",
          correct: false,
          feedback: "The field here is complex — a real field could not carry a U(1) phase transformation like this at all.",
        },
        {
          id: "d",
          label: "Because the kinetic term is ignored.",
          correct: false,
          feedback: "The kinetic term ∂μφ*∂^μφ is invariant too, by the same phase-cancellation argument as the potential terms.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Consider 𝓛′ = ∂μφ*∂^μφ − μ²|φ|² − λ(φ⁴ + φ*⁴), replacing |φ|⁴ with φ⁴ + φ*⁴. Is 𝓛′ invariant under φ → e^{iα}φ for arbitrary α? Justify briefly.",
      answer:
        "No, in general. Under the transformation, φ⁴ + φ*⁴ → e^{4iα}φ⁴ + e^{−4iα}φ*⁴, which equals the original only for special values of α (like multiples of π/2), not for arbitrary α. Because |φ|⁴ = (φ*φ)² pairs each φ with a φ*, its phases always cancel; φ⁴ + φ*⁴ has no such pairing, so it breaks the continuous U(1) symmetry down to a smaller discrete set of transformations.",
    },
    nextQuestion: "How does a continuous symmetry create a conserved quantity?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [5],
  },
  {
    id: "lesson-11",
    number: 11,
    chapterId: "D",
    title: "Why does symmetry imply conservation?",
    scope: "Global Symmetry",
    guidingQuestion: "How does a continuous symmetry create a conserved quantity?",
    bigIdea: "Noether's theorem: every continuous symmetry of the action produces a locally conserved current, and hence a conserved charge.",
    whyWeNeedThis:
      "Lesson 10 defined what it means for the action to have a symmetry. This lesson shows why that fact is physically powerful: a continuous symmetry is not just a bookkeeping curiosity, it directly hands you a conserved quantity — and for our complex scalar field's U(1) symmetry, that conserved quantity underlies concepts (like the current used in the precise statement of Goldstone's theorem) used later in this chapter.",
    intuition: {
      paragraphs: [
        "A continuous symmetry is one built from a parameter — like α above — that can be dialed continuously, as opposed to a discrete flip. Noether's theorem says: for every such continuous symmetry of the action, there is a current that is locally conserved, and therefore a total charge that doesn't change with time.",
        "Intuitively, a continuous symmetry can be applied 'infinitesimally,' by a tiny amount instead of a full rotation. Pushing the action's invariance through that infinitesimal transformation is what produces the conserved current — invariance at every nearby value of the parameter is what pins down a current whose divergence must vanish.",
        "For our complex scalar field's global U(1) symmetry, the associated conserved quantity plays the role of a charge — structurally the same idea as electric charge conservation, though here it need not be electric charge specifically; that depends on what the field represents in a given model.",
      ],
    },
    mathematicalBridge: {
      intro: "Push the U(1) transformation through infinitesimally and track what invariance of the action forces on-shell.",
      steps: [
        {
          statement: "Take the infinitesimal version of the U(1) transformation, expanding e^{iα} ≈ 1 + iα for small α = ε.",
          equation: "φ → φ + iεφ,   φ* → φ* − iεφ*",
        },
        {
          statement:
            "Because the action is invariant for every configuration (Lesson 10), the first-order change in 𝓛 under this transformation must be expressible as a total divergence.",
          equation: "δ𝓛 = ε ∂μjᵘ",
        },
        {
          statement:
            "Working through the algebra for 𝓛 = ∂μφ*∂^μφ − V(|φ|²) (full steps in Academic Depth) identifies the current explicitly.",
          equation: "jᵘ = i(φ*∂^μφ − φ∂^μφ*)",
        },
        {
          statement: "Using the classical equations of motion for φ, φ*, this current is conserved.",
          equation: "∂μjᵘ = 0",
        },
        {
          statement: "The conserved charge follows by integrating the time component over space.",
          equation: "Q = ∫ d³x j⁰,  dQ/dt = 0",
        },
      ],
      result: {
        label: "Noether current for global U(1)",
        expression: "jᵘ = i(φ*∂^μφ − φ∂^μφ*),  ∂μjᵘ = 0,  Q = ∫ d³x j⁰",
      },
    },
    academicDepth: {
      assumptions: [
        "A continuous symmetry — a Lie-group parameter (here U(1)'s α) that can be varied infinitesimally.",
        "Fields fall off fast enough (or satisfy periodic boundary conditions) that boundary terms in the charge's time-derivative vanish.",
        "∂μjᵘ = 0 uses the classical equations of motion for φ, φ* — an on-shell statement.",
      ],
      notation: [
        "jᵘ: the Noether current.",
        "Q = ∫ d³x j⁰: the associated conserved charge.",
        "δφ = iεφ, δφ* = −iεφ*: the infinitesimal transformation used to derive jᵘ.",
      ],
      derivation: [
        {
          statement:
            "Under an infinitesimal transformation φ → φ + εΔφ (and its conjugate), the first-order change in 𝓛 is δ𝓛 = ε[(∂𝓛/∂φ)Δφ + (∂𝓛/∂(∂μφ))∂μ(Δφ)] plus the complex-conjugate terms.",
        },
        {
          statement:
            "Using the Euler–Lagrange equation ∂𝓛/∂φ = ∂μ[∂𝓛/∂(∂μφ)] (Lesson 5, on-shell) to rewrite the first term turns δ𝓛/ε into a total divergence: ∂μ[ (∂𝓛/∂(∂μφ))Δφ + (∂𝓛/∂(∂μφ*))Δφ* ].",
        },
        {
          statement:
            "Since the transformation is a symmetry, δ𝓛 = 0 identically for every configuration (off-shell), while the manipulation above used the equations of motion (on-shell); combining both, jᵘ ≡ −[(∂𝓛/∂(∂μφ))Δφ + (∂𝓛/∂(∂μφ*))Δφ*] satisfies ∂μjᵘ = 0 on-shell.",
        },
        {
          statement:
            "For 𝓛 = ∂νφ*∂^νφ − V(|φ|²), ∂𝓛/∂(∂μφ) = ∂^μφ*, and with Δφ = iφ, Δφ* = −iφ* (dropping the overall ε), substitution gives jᵘ = i(φ*∂^μφ − φ∂^μφ*), up to an overall sign/normalization convention.",
        },
        {
          statement:
            "Q = ∫d³x j⁰ is time-independent: dQ/dt = ∫d³x ∂₀j⁰ = −∫d³x ∂ᵢjⁱ = −(boundary flux) = 0, given suitable falloff or periodicity of the fields at the spatial boundary.",
        },
      ],
      formalStatement: {
        label: "Noether's theorem",
        expression:
          "For every continuous symmetry of the action there exists jᵘ with ∂μjᵘ = 0 on solutions of the equations of motion, and Q = ∫d³x j⁰ with dQ/dt = 0. For global U(1) on a complex scalar, jᵘ = i(φ*∂^μφ − φ∂^μφ*).",
      },
      limitations: [
        "This derivation is classical and holds on-shell — only for configurations that actually solve the equations of motion, not for arbitrary field configurations.",
        "Noether's theorem as stated here applies to continuous symmetries. Discrete symmetries (like the φ⁴ + φ*⁴ example from Lesson 10's transfer question) do not produce a Noether current by this construction.",
        "The physical identification of Q (electric charge, particle number, or something else) depends on what the field represents in a given model; this course does not assume Q is literally electric charge.",
      ],
    },
    misconception: {
      claim: "Every symmetry, discrete or continuous, gives a Noether conserved current.",
      correction:
        "Noether's theorem specifically concerns continuous symmetries — ones with a parameter that can be varied infinitesimally. Discrete symmetries (such as the reflection-like phase symmetry left over in Lesson 10's transfer question) do not produce a Noether current by this construction, even though they can still be genuine symmetries of the action.",
    },
    understandingCheck: {
      prompt: "Noether's theorem connects a continuous symmetry to which of the following?",
      options: [
        {
          id: "a",
          label: "A locally conserved current jᵘ (satisfying ∂μjᵘ = 0) and an associated conserved charge Q.",
          correct: true,
          feedback: "Correct — this is exactly the content of Noether's theorem derived above.",
        },
        {
          id: "b",
          label: "A discrete set of allowed field values.",
          correct: false,
          feedback: "Noether's theorem is about conserved currents and charges, not about restricting which field values are allowed.",
        },
        {
          id: "c",
          label: "The mass of the field's excitations.",
          correct: false,
          feedback: "Mass comes from the curvature of the potential (Lessons 6 and 15), not directly from Noether's theorem.",
        },
        {
          id: "d",
          label: "A guarantee that the vacuum state is unique.",
          correct: false,
          feedback: "Noether's theorem makes no such guarantee — Lessons 13–14 show a case with a whole circle of degenerate vacua despite the symmetry.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Suppose a different theory has two independent continuous global U(1) symmetries (two independent phase rotations acting on two different fields). Based on Noether's theorem, how many independent conserved charges would you expect, and why?",
      answer:
        "Two — Noether's theorem associates one conserved current, and hence one conserved charge, to each independent continuous symmetry of the action, so two independent U(1) symmetries yield two independent conserved charges.",
    },
    nextQuestion: "How do symmetry and stability constrain the field potential?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [10],
  },
  {
    id: "lesson-12",
    number: 12,
    chapterId: "D",
    title: "Which potentials are stable?",
    scope: "Global Symmetry",
    guidingQuestion: "How do symmetry and stability constrain the field potential?",
    bigIdea:
      "Requiring U(1) invariance and a stable, bounded-below energy narrows the potential down to V(φ) = μ²|φ|² + λ|φ|⁴ with λ > 0 — precisely the potential the interactive laboratory plots.",
    whyWeNeedThis:
      "Lesson 10 established what U(1) symmetry means, and Lesson 11 showed it implies a conserved charge. To actually study symmetry breaking we need a concrete potential to break the symmetry with. This lesson pins down, from simple physical requirements, exactly the potential the dashboard uses, and clarifies that the potential is only one ingredient in the full theory.",
    intuition: {
      paragraphs: [
        "Lesson 10 showed that any function of |φ|² alone is automatically U(1)-invariant. So the natural way to build a U(1)-invariant potential is as a function of the single invariant combination |φ|².",
        "The simplest non-trivial choice, keeping terms up to fourth power in the field (a standard truncation, discussed further in Academic Depth), is V(φ) = μ²|φ|² + λ|φ|⁴.",
        "For this to describe a stable system — one where the energy doesn't run away to −∞ for large field values — the coefficient of the highest power, λ, must be positive. If λ were negative, V would plunge to −∞ as |φ| grows, and there would be no true minimum-energy state at all: an unphysical, unstable theory.",
        "μ², by contrast, is allowed to be either sign. It controls the curvature of V right at the origin φ = 0: positive μ² curves upward there (the origin is a local minimum); negative μ² curves downward there (the origin becomes a local maximum instead, and the true minimum moves elsewhere — worked out exactly in Lesson 13).",
        "This is the same V(φ) = μ²|φ|² + λ|φ|⁴ plotted directly by the interactive laboratory's energy-landscape panel, and μ² and λ here are exactly the dashboard's 'Model parameter μ²' and 'Self-coupling λ' sliders.",
        "One more point worth being precise about: V(φ) is the potential-energy density, not the field's complete energy. The full Lagrangian density also has a kinetic/gradient term, ∂μφ*∂^μφ, which contributes its own energy whenever the field varies in space or time; V alone captures only the energy cost of the field's value, not of its motion or spatial variation.",
      ],
    },
    mathematicalBridge: {
      intro: "Derive the allowed form of V from U(1) invariance plus a quartic truncation, then check boundedness.",
      steps: [
        {
          statement: "U(1) invariance (Lesson 10) restricts V to depend on φ only through |φ|².",
          equation: "V = V(|φ|²)",
        },
        {
          statement: "Truncate to the lowest non-trivial powers and rename the coefficients.",
          equation: "V(φ) = μ²|φ|² + λ|φ|⁴",
        },
        {
          statement:
            "As |φ| → ∞, the |φ|⁴ term dominates any finite |φ|² term, so the sign of the large-field behavior is set entirely by λ.",
          equation: "V(φ) → +∞ as |φ| → ∞  ⟺  λ > 0",
        },
        {
          statement: "μ² is unconstrained by this large-field stability requirement; it only sets the curvature of V near the origin.",
        },
      ],
      result: {
        expression: "V(φ) = μ²|φ|² + λ|φ|⁴, bounded below iff λ > 0",
        note: "μ² is unconstrained in sign — exactly the potential and slider parameters used by the interactive laboratory.",
      },
    },
    academicDepth: {
      assumptions: [
        "V depends on φ only through the U(1) invariant |φ|² (a 'renormalizable' truncation in four spacetime dimensions keeps powers up to |φ|⁴; higher powers like |φ|⁶ are allowed by symmetry but are a distinct, higher-order modeling choice not used by the dashboard's model).",
        "λ, μ² are real constants.",
      ],
      notation: ["r = |φ|, so V(r) = μ²r² + λr⁴.", "'Bounded below' means V(r) does not → −∞ as r → ∞."],
      derivation: [
        {
          statement:
            "The most general U(1)-invariant polynomial in φ, φ* up to quartic order must have equal powers of φ and φ*, since only equal powers cancel the α-dependence of φ → e^{iα}φ for every α — so the allowed terms are 1, φ*φ = |φ|², and (φ*φ)² = |φ|⁴, reproducing the reasoning used explicitly in Lesson 10's transfer question.",
        },
        {
          statement:
            "As r → ∞, V(r) = μ²r² + λr⁴ ~ λr⁴: the quartic term dominates any finite quadratic term, so the sign of λ alone determines large-field behavior, independent of μ².",
        },
        {
          statement:
            "At λ = 0 exactly, the quartic term is absent and stability instead requires μ² ≥ 0, with no true large-r confinement if μ² = 0 as well — a degenerate boundary case not used by this model, mentioned only for completeness.",
        },
      ],
      formalStatement: {
        label: "Stable quartic potential",
        expression:
          "The most general U(1)-invariant, quartic-truncated potential is V(φ) = μ²|φ|² + λ|φ|⁴; it is bounded below as |φ| → ∞ if and only if λ > 0, independent of the sign of μ².",
      },
      limitations: [
        "This is a truncation to quartic order — a modeling choice consistent with renormalizability in four spacetime dimensions, not a claim that higher-order terms are forbidden by symmetry alone.",
        "V alone is the potential-energy density; the classical energy density also includes gradient and time-derivative (kinetic) contributions from ∂μφ*∂^μφ, which V does not capture.",
        "This lesson does not yet ask which value of r actually minimizes V — that is Lesson 13.",
      ],
    },
    misconception: {
      claim: "V(φ) is the complete energy of the field — the dashboard's potential plot shows everything there is to know about the field's energy.",
      correction:
        "V(φ) is only the potential-energy density. The full Lagrangian density also contains a kinetic/gradient term, ∂μφ*∂^μφ, contributing energy whenever the field changes in time or space. A field configuration's total energy density includes both pieces; V alone describes only the energy cost of sitting at a particular field value, held uniform and static.",
    },
    understandingCheck: {
      prompt: "Why must λ be positive for V(φ) = μ²|φ|² + λ|φ|⁴ to describe a stable theory, while μ² can have either sign?",
      options: [
        {
          id: "a",
          label:
            "Because λ multiplies the highest power of |φ|, so it alone controls whether V → +∞ or V → −∞ as |φ| grows without bound; μ² only affects curvature near the origin, which doesn't determine large-field behavior.",
          correct: true,
          feedback: "Correct — the highest power present always dominates at large field values, which is exactly why only λ's sign matters for stability.",
        },
        {
          id: "b",
          label: "Because μ² is always positive in nature.",
          correct: false,
          feedback: "μ² is a free parameter of this model and can be either sign — its sign is exactly what drives the phase transition explored in later lessons.",
        },
        {
          id: "c",
          label: "Because λ must be positive for the potential to be U(1)-invariant.",
          correct: false,
          feedback: "U(1) invariance only requires V to depend on |φ|²; it says nothing about the sign of λ.",
        },
        {
          id: "d",
          label: "Because a negative λ would make the field complex.",
          correct: false,
          feedback: "The field is already complex by assumption in this chapter; λ's sign has nothing to do with that.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "A student proposes adding a term −κ|φ|⁶ (κ > 0) to V(φ) = μ²|φ|² + λ|φ|⁴. Is the resulting potential still bounded below as |φ| → ∞? Justify using the same reasoning as above.",
      answer:
        "No — as |φ| → ∞, the highest power now present, −κ|φ|⁶ with κ > 0, dominates over the +λ|φ|⁴ term and drives V → −∞, regardless of λ's sign. Exactly as in the lesson, stability at large field values is controlled by the coefficient of the single highest power present, not by the lower-order terms.",
    },
    nextQuestion: "What field configurations minimize the classical energy?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [6, 10],
  },
  {
    id: "lesson-13",
    number: 13,
    chapterId: "D",
    title: "What is the vacuum manifold?",
    scope: "Global Symmetry",
    guidingQuestion: "What field configurations minimize the classical energy?",
    bigIdea:
      "For μ² < 0 and λ > 0, the minima of V no longer sit at φ = 0 but form a circle of degenerate minima in the complex φ plane — the classical vacuum manifold.",
    whyWeNeedThis:
      "Lesson 12 fixed the shape of V but left open which field value actually minimizes it, and hence which configuration a real physical system would settle into. This lesson works that out explicitly, and the result — a whole circle of equally good minima, rather than one — is the geometric fact everything in the rest of this chapter is built on.",
    intuition: {
      paragraphs: [
        "To minimize energy, a spatially uniform field configuration is favored over a non-uniform one: any spatial variation in φ costs extra gradient energy (Lesson 12's caveat about V not being the whole energy), so the true minimum-energy configuration is uniform in space, sitting at whichever φ minimizes V alone.",
        "Writing r = |φ| (the distance of φ from the origin in the complex plane, ignoring its angle for a moment, since V only depends on r), plot V(r) as in the dashboard's energy-landscape panel: for μ² > 0 it's a single bowl centered at r = 0; for μ² < 0 it develops a dip away from the origin.",
        "Working out exactly where that dip sits gives a specific radius r > 0 when μ² < 0. But V depends only on r, not on φ's phase angle — so every point at that same radius, at any angle around the origin, is an equally good minimum. The set of all these minimum-energy points forms a full circle in the complex φ plane, exactly the ring the dashboard's 'U(1) vacuum manifold' panel draws once the model is in its broken phase.",
        "This whole circle of equally good, uniform, minimum-energy field configurations is what's meant by the classical vacuum manifold — 'classical' to flag, per Lesson 8's distinction, that this is a statement about minimizing a classical potential energy, not about the quantum vacuum state |0⟩.",
      ],
    },
    mathematicalBridge: {
      intro: "Minimize V(r) = μ²r² + λr⁴ directly and identify the resulting set of minima.",
      steps: [
        {
          statement: "Write φ in polar form; since V depends only on r = |φ|, minimize V(r) directly.",
          equation: "φ = r e^{iθ}/√2,   V(r) = μ²r² + λr⁴",
        },
        { statement: "Differentiate with respect to r and set to zero.", equation: "dV/dr = 2μ²r + 4λr³ = 2r(μ² + 2λr²) = 0" },
        { statement: "Two solutions.", equation: "r = 0   or   r² = −μ²/(2λ)" },
        {
          statement:
            "The second solution is real and positive — a genuine minimum away from the origin — only when μ² < 0 (given λ > 0 from Lesson 12); a second-derivative check (Academic Depth) confirms r = 0 becomes a local maximum and r² = −μ²/(2λ) the true minimum in that regime.",
        },
        {
          statement: "Since V depends only on r, not θ, every angle at the minimizing radius gives an equally low V: the minima form a circle.",
          equation: "{ φ = r_min e^{iθ} : θ ∈ [0, 2π) }",
        },
      ],
      result: {
        label: "Classical vacuum manifold",
        expression: "r_min = √(−μ²/(2λ)), minima form the circle { r_min e^{iθ} }",
      },
    },
    academicDepth: {
      assumptions: [
        "Minimum-energy configurations are taken to be spatially uniform (φ independent of x), justified because any non-uniform φ(x) adds a strictly non-negative gradient-energy contribution, so uniform configurations are always favored once a spatially constant minimum of V exists.",
        "λ > 0 (Lesson 12), so a real, positive r²_min requires μ² < 0.",
      ],
      notation: [
        "r = |φ|.",
        "v: defined via v² = −μ²/λ, matching the exact normalization used in Lesson 15 to connect to the dashboard's 'vacuum expectation value' readout; with this definition, r_min = v/√2, matching the dashboard's 'vacuum radius' readout.",
      ],
      derivation: [
        {
          statement:
            "Second-derivative check: d²V/dr² = 2μ² + 12λr². At r = 0, d²V/dr² = 2μ², negative when μ² < 0 — confirming r = 0 is a local maximum (not a minimum) in the broken regime, consistent with Lesson 12's remark that μ²'s sign sets the curvature at the origin.",
        },
        {
          statement:
            "At r² = −μ²/(2λ): d²V/dr² = 2μ² + 12λ(−μ²/(2λ)) = 2μ² − 6μ² = −4μ², positive when μ² < 0 — confirming a genuine local (and, since V → +∞ at large r by Lesson 12, global) minimum.",
        },
        {
          statement:
            "Re-expressing in terms of v² = −μ²/λ: r²_min = −μ²/(2λ) = v²/2, so r_min = v/√2 — exactly the vacuum-radius formula computed by frontend/src/physics/model.ts (vacuumExpectationValue = √(−μ²/λ) = v, vacuumRadius = v/√2 = r_min).",
        },
        {
          statement:
            "The manifold of minima is a circle of radius r_min in the (Re φ, Im φ) plane, parameterized by θ — exactly the ring drawn by the laboratory's vacuum-manifold panel, and the dashboard's 'Vacuum angle θ' slider selects a point on this same circle.",
        },
      ],
      formalStatement: {
        label: "Classical vacuum manifold",
        expression:
          "For V(φ) = μ²|φ|² + λ|φ|⁴ with λ > 0 and μ² < 0, the classical vacuum manifold is { φ = r_min e^{iθ} : θ ∈ [0, 2π) }, r_min = √(−μ²/(2λ)) = v/√2, v² = −μ²/λ.",
      },
      limitations: [
        "This identifies the minima of V alone, using the (separately justified) assumption that uniform configurations minimize the total energy.",
        "This is a classical, tree-level statement about a static configuration. It does not yet address the dynamics of small fluctuations around a chosen point on this circle (Lesson 15), or which particular point on the circle is realized (Lesson 14).",
      ],
    },
    misconception: {
      claim: "The vacuum manifold circle means the field is smeared out over every point on the circle simultaneously, like a physical ring-shaped cloud of field.",
      correction:
        "The vacuum manifold is the set of field values that are each, individually, equally good minimum-energy configurations — not a single physical configuration shaped like a ring. A given physical system occupies one point on this circle (one specific θ) at a time; the circle describes the space of equally valid choices, not the shape of the field itself.",
    },
    understandingCheck: {
      prompt: "Why does dV/dr = 0 alone not fully answer 'what field configuration minimizes the energy'?",
      options: [
        {
          id: "a",
          label:
            "Because V depends only on r = |φ|, not on the phase angle θ, so solving dV/dr = 0 only fixes the minimizing radius — every angle θ at that radius is an equally good minimum, forming a whole circle rather than a single point.",
          correct: true,
          feedback: "Correct — this θ-independence of V is exactly what produces the vacuum manifold as a circle rather than a single point.",
        },
        {
          id: "b",
          label: "Because dV/dr = 0 has no solutions when μ² < 0.",
          correct: false,
          feedback: "It has the solution r² = −μ²/(2λ) precisely in that regime — that's the whole content of this lesson.",
        },
        {
          id: "c",
          label: "Because the field must also be quantized before this equation means anything.",
          correct: false,
          feedback: "This is a purely classical calculation, with no quantization involved.",
        },
        {
          id: "d",
          label: "Because r cannot be negative.",
          correct: false,
          feedback: "While r ≥ 0 is indeed required, that isn't the reason a whole circle of minima appears — that's specifically the θ-independence of V.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Using r²_min = −μ²/(2λ), by what factor does r_min change if μ² is made four times more negative (μ² → 4μ², with λ fixed)? Give the numeric factor.",
      answer:
        "r²_min is proportional to −μ², so multiplying μ² by 4 multiplies r²_min by 4, and therefore multiplies r_min itself by √4 = 2 — the vacuum radius doubles.",
    },
    nextQuestion: "How can symmetric equations have an asymmetric vacuum?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }, { id: "beekman-ssb" }],
    prerequisites: [12],
  },
  {
    id: "lesson-14",
    number: 14,
    chapterId: "D",
    title: "What exactly breaks?",
    scope: "Global Symmetry",
    guidingQuestion: "How can symmetric equations have an asymmetric vacuum?",
    bigIdea: "The action remains U(1)-invariant, while a selected ground state is not invariant — spontaneous symmetry breaking is a property of the chosen state, not of the underlying dynamics.",
    whyWeNeedThis:
      "Lesson 13 found a whole circle of equally valid minimum-energy configurations. Lesson 10 already flagged, in the abstract, that a symmetric action need not force a symmetric state — this lesson makes that distinction concrete using the circle from Lesson 13, and names the phenomenon: spontaneous symmetry breaking.",
    intuition: {
      paragraphs: [
        "The U(1) transformation φ → e^{iα}φ rotates points on the complex plane. Applied to the vacuum manifold circle from Lesson 13, it rotates the whole circle onto itself — every point on the circle maps to another point on the same circle. So the set of vacua, as a whole, is exactly as symmetric as the action that produced it.",
        "But any real physical system has to actually be in one specific configuration — it sits at one particular point on the circle, one specific θ, not smeared democratically across all of them. Once a specific θ is selected, applying the U(1) rotation to that one chosen point generally moves it to a different point on the circle, so that particular selected state is not left invariant by the symmetry, even though the full set of possible minima is.",
        "This is exactly the distinction Lesson 10 introduced: the action (and the set of vacua it permits) is U(1)-symmetric; the particular selected vacuum state is not. Nothing in the dynamics prefers one θ over another — that's what makes it 'spontaneous,' not forced by an explicit symmetry-breaking term added by hand — yet whichever θ actually gets realized breaks the symmetry of that one state.",
        "This is precisely what the interactive laboratory's 'Vacuum angle θ' slider represents: once μ² < 0, the model is in the broken phase, and θ selects which point on the otherwise-symmetric circle of minima the system occupies. Worth being explicit here: this is a GLOBAL symmetry being broken — the same phase e^{iα} applied everywhere in spacetime at once. Chapter E asks what changes once that phase is allowed to vary from point to point.",
      ],
    },
    mathematicalBridge: {
      intro: "Apply the U(1) transformation to the vacuum manifold as a whole, and then to one selected point on it.",
      steps: [
        {
          statement: "Apply the transformation to the whole manifold from Lesson 13.",
          equation: "φ_θ = r_min e^{iθ}  →  e^{iα}φ_θ = r_min e^{i(θ+α)} = φ_{θ+α}",
        },
        {
          statement: "This maps the manifold to itself — every φ_θ lands on another point of the same circle, confirming the full set of vacua respects the symmetry.",
        },
        {
          statement: "Now fix one specific vacuum, θ = 0.",
          equation: "φ_0 = r_min  →  e^{iα}φ_0 = r_min e^{iα} = φ_α",
        },
        {
          statement: "For α ≠ 0 (mod 2π), φ_α ≠ φ_0: the transformation moves this particular chosen state to a different point on the circle.",
        },
      ],
      result: {
        expression: "φ_θ → φ_{θ+α} (manifold invariant), but φ_θ ≠ φ_{θ+α} for α ≠ 0 (state not invariant)",
        note: "The state, not the action, is what fails to be invariant.",
      },
    },
    academicDepth: {
      assumptions: [
        "The discussion is at the level of the classical, static, spatially uniform ground state.",
        "Selecting a particular θ is treated as an input (an initial or boundary condition of the physical system), not something derived from the U(1)-symmetric action alone — the action genuinely does not prefer any θ.",
      ],
      notation: [
        "Same as Lesson 13 (r_min, θ).",
        "A 'spontaneously broken symmetry' means: the Lagrangian is invariant under the full symmetry group, but the selected ground state is invariant only under a subgroup of that group.",
      ],
      derivation: [
        {
          statement:
            "Formal statement: given a symmetry group G acting on field configurations, and an action invariant under G, spontaneous symmetry breaking occurs when the physically realized ground state φ_vac is invariant only under a proper subgroup H ⊊ G (possibly the trivial subgroup) rather than all of G.",
        },
        {
          statement:
            "For this model, G = U(1) parameterized by α ∈ [0, 2π), and for any chosen φ_θ, the stabilizer subgroup (the set of α with e^{iα}φ_θ = φ_θ) is just {α = 0} — the trivial subgroup. U(1) is broken completely, down to the trivial subgroup, by the choice of vacuum.",
        },
        {
          statement:
            "A caveat on rigor: 'spontaneous symmetry breaking' as a sharp phenomenon, where the system truly settles into one θ rather than exhibiting some symmetric superposition over all θ, becomes precise in the infinite-volume (thermodynamic) limit. In an exactly-solvable finite-volume quantum treatment, tunneling between different θ-vacua technically restores the symmetry at the level of exact energy eigenstates; only in the idealized infinite-volume limit do the different θ vacua become exactly degenerate, non-communicating sectors, and the sharp classical picture becomes exact. This course treats the sharp, infinite-volume/classical picture throughout, as is standard for an introductory treatment, but this technical caveat genuinely exists.",
        },
      ],
      formalStatement: {
        label: "Spontaneous symmetry breaking",
        expression:
          "The action is invariant under the full symmetry group G, while the physically selected ground state is invariant only under a subgroup H ⊊ G. Here G = U(1) and any selected vacuum φ_θ has stabilizer H = {identity} — U(1) is completely, spontaneously broken.",
      },
      limitations: [
        "This lesson addresses only the GLOBAL U(1) case, matching the interactive laboratory exactly.",
        "Sharp spontaneous symmetry breaking is precise in the infinite-volume/thermodynamic limit; finite-size or finite-time systems can show tunneling between θ-selected states that formally restores the symmetry, a subtlety not worked out quantitatively here.",
        "This lesson does not yet compute the physical consequence of the broken symmetry for the excitation spectrum — that is Lesson 15.",
      ],
    },
    misconception: {
      claim: "The theory itself loses its U(1) symmetry once μ² < 0 — the Lagrangian stops being symmetric.",
      correction:
        "The Lagrangian and action remain exactly U(1)-invariant for every value of μ², including μ² < 0 — nothing about the dynamics changes. What changes is that a specific, non-invariant field configuration becomes the selected ground state. The symmetry is broken by the vacuum, spontaneously, not by any change to the symmetric equations themselves.",
    },
    understandingCheck: {
      prompt: "In what precise sense is the U(1) symmetry 'spontaneously broken' in this model?",
      options: [
        {
          id: "a",
          label:
            "The action stays fully U(1)-invariant for every field configuration, but any one selected vacuum φ_θ is left invariant only by the trivial transformation (α = 0), not by the full U(1) group.",
          correct: true,
          feedback: "Correct — this is precisely the gap between action invariance and state invariance from Lesson 10, made concrete here.",
        },
        {
          id: "b",
          label: "The U(1) symmetry is removed from the Lagrangian by hand once μ² < 0.",
          correct: false,
          feedback: "Nothing is added to or removed from the Lagrangian; μ² simply changes sign as a parameter, and the Lagrangian's functional form is unchanged.",
        },
        {
          id: "c",
          label: "The symmetry is broken because the vacuum manifold is not a perfect circle.",
          correct: false,
          feedback: "The vacuum manifold IS a perfect circle, precisely because the potential (and hence the set of minima) is U(1)-symmetric.",
        },
        {
          id: "d",
          label: "The symmetry is broken only after the field is quantized.",
          correct: false,
          feedback: "This is a fully classical phenomenon, already present in the classical field theory discussed here.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "A ball sits balanced exactly at the top of a symmetric, rotationally invariant hill and then rolls down to rest at one specific point on the circular trough at the bottom. In the language of this lesson, what plays the role of (a) the symmetric action, and (b) the specific broken vacuum?",
      answer:
        "(a) The rotationally symmetric shape of the hill itself (unchanged by which direction you view it from) plays the role of the U(1)-symmetric action/potential. (b) The ball's final resting point — one specific point on the circular trough, not the whole trough at once — plays the role of the specific selected vacuum φ_θ, which is not itself rotationally symmetric even though the hill that produced it is.",
    },
    nextQuestion: "How does the shape of the potential determine the excitation spectrum?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }, { id: "beekman-ssb" }],
    prerequisites: [13],
  },
  {
    id: "lesson-15",
    number: 15,
    chapterId: "D",
    title: "Why are radial and angular modes different?",
    scope: "Global Symmetry",
    guidingQuestion: "How does the shape of the potential determine the excitation spectrum?",
    bigIdea:
      "Small fluctuations around the selected vacuum split into two different kinds of motion — radial and angular — with different masses set by the curvature of the potential in those two directions.",
    whyWeNeedThis:
      "Lesson 14 established that one specific point on the vacuum circle gets selected, spontaneously breaking the symmetry. To connect this to anything measurable — the particle content Chapter C attached to a quantized field — we look at small fluctuations around that selected point and work out their mass spectrum, using exactly the machinery from Lesson 6 (mass from the quadratic curvature of the potential). The result is precisely what the interactive laboratory's 'Higgs-like radial mode' and 'Goldstone angular mode' readouts display.",
    intuition: {
      paragraphs: [
        "Once one point on the vacuum circle is selected, small deviations from it come in two geometrically different flavors: moving radially — toward or away from the origin, in or out of the circle — and moving angularly — sideways, along the circle itself.",
        "These two directions feel very different potential-energy landscapes. Moving radially climbs out of the circular trough — this costs energy, and by the same logic as Lesson 6 (mass from potential curvature), this radial fluctuation behaves like a massive field. This course calls it the Higgs-like radial mode, following the naming convention established in the interactive laboratory.",
        "Moving angularly, by contrast, slides along the bottom of the circular trough — every point on the circle has exactly the same potential energy (Lesson 13), so there is no potential-energy cost to this motion at all. A fluctuation with zero potential-energy cost behaves like a massless field. This is the Goldstone angular mode.",
        "This split is exactly what the dashboard's 'Higgs-like radial mode' and 'Goldstone angular mode' readouts report once the model is in its broken phase.",
      ],
    },
    mathematicalBridge: {
      intro:
        "Expand around the selected vacuum using exactly the normalization implemented in frontend/src/physics/model.ts: φ = (v + h + iπ)/√2, v² = −μ²/λ.",
      steps: [
        {
          statement:
            "Parameterize small fluctuations around the selected vacuum (choosing θ = 0 without loss of generality, by the U(1) symmetry) with real fields h, π.",
          equation: "φ(x) = [v + h(x) + iπ(x)] / √2,   v² = −μ²/λ",
        },
        {
          statement: "Substitute into V(φ) = μ²|φ|² + λ|φ|⁴ and expand to quadratic order in h, π (full algebra in Academic Depth).",
          equation: "V ≈ const + (−μ²)h² + 0·π² + O(cubic and higher)",
        },
        {
          statement: "Compare the h² coefficient to the standard mass-term form ½m²(field)², as in Lesson 6.",
          equation: "½m_h² = −μ²  ⟹  m_h² = −2μ² = 2λv²",
        },
        {
          statement: "The π² coefficient is exactly zero.",
          equation: "m_π² = 0",
        },
      ],
      result: {
        label: "Radial and angular mode masses",
        expression: "m_h² = −2μ² = 2λv²,   m_π² = 0",
        note: "Exactly the 'Higgs-like radial mode' and 'Goldstone angular mode' formulas the laboratory computes.",
      },
    },
    academicDepth: {
      assumptions: [
        "Expansion around the specific vacuum θ = 0; any other θ gives the same spectrum by the U(1) symmetry, rotated — a genuine physical equivalence, not a separate calculation.",
        "Expansion truncated to quadratic order in the fluctuations h, π — the terms that determine masses.",
        "A tree-level, classical small-fluctuation analysis, prior to any quantum corrections.",
      ],
      notation: [
        "This lesson uses exactly the normalization implemented in frontend/src/physics/model.ts: φ = (v + h + iπ)/√2, v² = −μ²/λ.",
        "With this normalization, v is the model's 'vacuum expectation value' readout, and |φ| at the vacuum (h = π = 0) is v/√2 — the model's 'vacuum radius' readout, matching Lesson 13 exactly.",
      ],
      derivation: [
        { statement: "Expand |φ|².", equation: "|φ|² = [(v+h)² + π²]/2 = [v² + 2vh + h² + π²]/2" },
        {
          statement: "Write A ≡ 2|φ|² = v² + 2vh + h² + π², so |φ|² = A/2 and V = (μ²/2)A + (λ/4)A².",
        },
        {
          statement: "Expand A² to quadratic order in (h, π), dropping cubic-and-higher (interaction) terms.",
          equation: "A² ≈ v⁴ + 4v³h + 6v²h² + 2v²π²",
        },
        {
          statement: "Collect linear-in-h terms and simplify using v² = −μ²/λ (i.e. μ² + λv² = 0).",
          equation: "μ²vh + λv³h = vh(μ² + λv²) = 0",
        },
        {
          statement: "This confirms v is a genuine extremum, consistent with Lesson 13. Collect quadratic h² terms.",
          equation: "(μ²/2)h² + (3λv²/2)h² = (μ²/2 − 3μ²/2)h² = −μ²h²   [using λv² = −μ²]",
        },
        {
          statement: "Collect quadratic π² terms.",
          equation: "(μ²/2)π² + (λv²/2)π² = (μ²/2 − μ²/2)π² = 0",
        },
        {
          statement:
            "Kinetic-term check: with ∂μφ = (∂μh + i∂μπ)/√2, the kinetic term ∂μφ*∂^μφ becomes exactly ½∂μh∂^μh + ½∂μπ∂^μπ — h and π are canonically normalized real scalar fields, which is precisely why the 1/√2 factor was included, and why the mass terms above can be read off directly by comparison to Lesson 6's ½m²φ² convention.",
        },
      ],
      formalStatement: {
        label: "Tree-level mass spectrum (matches physics/model.ts exactly)",
        expression:
          "m_h² = −2μ² = 2λv² (radial/Higgs-like mode), m_π² = 0 (angular/Goldstone mode) — matching frontend/src/physics/model.ts's higgsMassSquared = -2*muSquared and goldstoneMassSquared = 0, with v = model.ts's vacuumExpectationValue and v/√2 = vacuumRadius.",
      },
      limitations: [
        "This is a tree-level (classical small-fluctuation) mass spectrum; quantum corrections, not treated in this course, can shift these values.",
        "Only the quadratic-order terms were kept — the dropped cubic and higher terms in h, π describe interactions between these modes, not their masses.",
        "m_π² = 0 here is a consequence of this specific model; Lesson 16 states the general theorem behind why a massless mode appears whenever a continuous global symmetry is spontaneously broken like this, and its precise conditions.",
      ],
    },
    misconception: {
      claim: "The Goldstone angular mode being massless means it has no effect at all — it's physically irrelevant.",
      correction:
        "Massless does not mean irrelevant. A massless mode still has energy and momentum, and — as Lesson 16 discusses — its existence is a direct, physically meaningful consequence of the broken continuous symmetry. Massless Goldstone modes are physically significant excitations in their own right, not a null result.",
    },
    understandingCheck: {
      prompt:
        "Two example parameter settings on the dashboard: (i) μ² = −1, λ = 0.5, and (ii) μ² = −0.5, λ = 2. Using m_h² = −2μ² and m_π² = 0, what are the Higgs-like radial masses in each case?",
      options: [
        {
          id: "a",
          label: "(i) m_h = √2 ≈ 1.414, (ii) m_h = 1; both cases m_π = 0.",
          correct: true,
          feedback:
            "Correct. m_h² = −2μ² gives m_h² = 2 in case (i) and m_h² = 1 in case (ii), so m_h = √2 and m_h = 1 respectively; m_π = 0 in both, since m_π² = 0 regardless of μ² or λ.",
        },
        {
          id: "b",
          label: "(i) m_h = 1, (ii) m_h = √2 ≈ 1.414; both cases m_π = 0.",
          correct: false,
          feedback: "This swaps the two computed values — recompute m_h² = −2μ² for each case separately.",
        },
        {
          id: "c",
          label: "(i) m_h² = −1, (ii) m_h² = −0.5, so both masses are undefined.",
          correct: false,
          feedback: "m_h² = −2μ² flips the sign of the already-negative μ², giving a positive, well-defined m_h² in the broken phase — not a negative one.",
        },
        {
          id: "d",
          label: "Both cases give the same mass because λ doesn't affect m_h.",
          correct: false,
          feedback:
            "It's true that m_h² = −2μ² has no explicit λ dependence, but the two cases still differ because μ² itself differs between them (−1 versus −0.5), giving different masses (√2 versus 1).",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Using v² = −μ²/λ and m_h² = −2μ², express m_h² purely in terms of v and λ (eliminating μ²), and check it matches the value given in the lesson.",
      answer:
        "From v² = −μ²/λ, μ² = −λv². Substituting into m_h² = −2μ² gives m_h² = −2(−λv²) = 2λv² — exactly the 'm_h² = 2λv²' form stated in the lesson, confirming both expressions for m_h² agree.",
    },
    nextQuestion: "Why does breaking a continuous global symmetry produce a massless mode?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }, { id: "beekman-ssb" }],
    prerequisites: [14],
    labConnection: {
      sentence:
        "You now have the conceptual and mathematical tools needed to interpret the classical global U(1) laboratory.",
      buttonLabel: "Classical global U(1) spontaneous-symmetry-breaking laboratory",
    },
  },
  {
    id: "lesson-16",
    number: 16,
    chapterId: "D",
    title: "What does Goldstone's theorem say?",
    scope: "Global Symmetry",
    guidingQuestion: "Why does breaking a continuous global symmetry produce a massless mode?",
    bigIdea:
      "Goldstone's theorem: spontaneously breaking a continuous global symmetry of a relativistic theory produces one massless mode for each broken symmetry direction — under specific conditions, and only in the absence of an explicit symmetry-breaking term.",
    whyWeNeedThis:
      "Lesson 15 found m_π² = 0 in this one specific model, by direct calculation. This lesson asks whether that was a coincidence of this particular potential or a general consequence of symmetry breaking — the answer, Goldstone's theorem, is one of the most-used general results built on everything this chapter has assembled: symmetry (Lesson 10), conserved currents (Lesson 11), and the vacuum manifold's flat directions (Lessons 13–14).",
    intuition: {
      paragraphs: [
        "Picture again the circular trough of minima from Lessons 13–14. Moving angularly along the bottom of that trough costs zero potential energy at every point, because every point on the circle is an equally good minimum — that's the literal definition of the vacuum manifold. A 'flat direction' — a direction you can move in without climbing any potential hill — is exactly the geometric signature of a massless mode, by the same curvature-gives-mass logic used throughout this course.",
        "Goldstone's theorem generalizes this geometric observation beyond this one specific model: whenever a continuous global symmetry is spontaneously broken (a selected vacuum is not invariant under the full symmetry group, Lesson 14), the vacuum manifold necessarily has a flat direction connecting the selected vacuum to the other, symmetry-related vacua nearby — and a massless mode appears along that direction.",
        "This is a genuinely general theorem, not a coincidence specific to the toy potential used here — but it comes with real conditions attached, spelled out precisely below, and it is not unconditionally true of every broken symmetry in every physical system.",
      ],
    },
    mathematicalBridge: {
      intro: "Connect the flatness of V along the vacuum manifold directly to the vanishing π² coefficient found in Lesson 15.",
      steps: [
        {
          statement: "V is exactly independent of θ along the vacuum manifold (Lesson 13).",
          equation: "V(φ_θ) = const,  so  ∂V/∂θ = 0 identically",
        },
        {
          statement:
            "This is a stronger statement than 'θ = 0 is a critical point' — the entire θ direction is flat, at every point on the circle, not just at the selected one.",
        },
        {
          statement:
            "The angular field π from Lesson 15 is, to leading order, exactly this θ-direction fluctuation: for small θ and h = 0, φ = v e^{iθ}/√2 ≈ (v + ivθ)/√2, matching φ = (v+h+iπ)/√2 with π ≈ vθ.",
          equation: "π ≈ v·θ  (small θ)",
        },
        {
          statement:
            "The flatness of V in θ therefore translates directly into the vanishing of the π² coefficient computed explicitly in Lesson 15 — the geometric statement ('flat direction') and the physical statement ('zero mass') are the same fact, viewed two ways.",
        },
      ],
      result: {
        expression: "∂V/∂θ = 0 identically  ⟺  m_π² = 0",
        note: "The geometric statement of Goldstone's theorem, verified explicitly for this model in Lesson 15.",
      },
    },
    academicDepth: {
      assumptions: [
        "A continuous (not discrete) global symmetry.",
        "The symmetry is spontaneously broken — the selected vacuum is not invariant under the full symmetry group (Lesson 14).",
        "A standard relativistic (Lorentz-invariant) quantum field theory with a positive-definite, stable quantum vacuum, of the kind assumed throughout this course.",
        "No explicit symmetry-breaking term is added to the Lagrangian by hand. (Explicit breaking can give the would-be Goldstone mode a nonzero mass; such a mode is then called a pseudo-Goldstone mode, mentioned here by name only.)",
      ],
      notation: [
        "For a symmetry group G spontaneously broken to a subgroup H ⊆ G (Lesson 14's language), the theorem gives one massless mode for each broken generator — each independent direction in G that is not also a symmetry of H.",
        "For U(1) broken completely (H = {identity}, Lesson 14), there is exactly one broken generator, and correspondingly exactly one massless mode (π), matching Lesson 15's direct calculation.",
      ],
      derivation: [
        {
          statement:
            "The standard argument for Goldstone's theorem relates the non-invariance of the quantum vacuum under the conserved charge Q from Lesson 11 (specifically, a nonzero value of ⟨0|[Q, φ]|0⟩ or an equivalent statement, signaling that Q does not annihilate the quantum vacuum |0⟩) to the existence of a state degenerate with the quantum vacuum in the zero-momentum limit — i.e. a massless excitation.",
        },
        {
          statement:
            "A complete operator-level proof requires machinery (the quantized theory's spectral properties) beyond this course's scope. This course instead verified the theorem's conclusion directly, by explicit calculation, in Lesson 15.",
        },
      ],
      formalStatement: {
        label: "Goldstone's theorem",
        expression:
          "In a relativistic quantum field theory with a stable quantum vacuum, spontaneously breaking a continuous global symmetry (with no explicit symmetry-breaking term) produces one massless scalar mode — a Goldstone mode — for each independently broken symmetry generator.",
      },
      limitations: [
        "This is a theorem with real preconditions, not a universal law of nature.",
        "It does not apply to discrete symmetries (Lesson 11's aside).",
        "It does not apply, in this simplest relativistic form, once gauge (local) symmetries are involved — Chapter E's central subject is exactly how gauging the symmetry changes this conclusion.",
        "It does not apply, in the massless form stated here, once an explicit symmetry-breaking term is added to the Lagrangian by hand (giving a pseudo-Goldstone mode with nonzero mass instead) — so not every broken symmetry in every physical system produces a strictly massless relativistic particle without further qualification.",
      ],
    },
    misconception: {
      claim: "Goldstone's theorem says every instance of broken symmetry in physics produces exactly one massless particle, full stop.",
      correction:
        "Goldstone's theorem has specific preconditions: a continuous (not discrete) symmetry, spontaneous (not explicit) breaking, and a standard relativistic quantum field theory setting, among others. Violate any of these — for instance by gauging the symmetry (Chapter E) or adding an explicit symmetry-breaking term — and the conclusion changes. It is a precise, conditional theorem, not an unconditional slogan.",
    },
    understandingCheck: {
      prompt: "In this model, what is the direct link between 'V doesn't depend on θ' (a geometric fact) and 'm_π² = 0' (a physical fact)?",
      options: [
        {
          id: "a",
          label:
            "Since V is exactly flat along the θ direction, the potential-energy cost of a small θ fluctuation is exactly zero to quadratic order, and zero potential-energy curvature is precisely what a zero mass means in this course's mass-from-curvature framework.",
          correct: true,
          feedback: "Correct — this is exactly the content of Goldstone's theorem, verified directly by the explicit calculation in Lesson 15.",
        },
        {
          id: "b",
          label: "There is no real link; m_π² = 0 is a numerical coincidence unrelated to the shape of V.",
          correct: false,
          feedback: "This is precisely the content of Goldstone's theorem, not a coincidence — that's the whole point of this lesson.",
        },
        {
          id: "c",
          label: "V doesn't depend on θ only because θ was assumed massless from the start.",
          correct: false,
          feedback: "The reasoning runs the other way: θ-independence of V is a directly checkable geometric fact (Lesson 13), and the masslessness of the corresponding mode is derived from it, not assumed.",
        },
        {
          id: "d",
          label: "The link only holds after the field is quantized.",
          correct: false,
          feedback: "This is a classical, tree-level statement, exactly as computed in Lesson 15.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Suppose an explicit symmetry-breaking term were added to V, e.g. V_explicit = V(φ) − c(φ + φ*) for some small constant c ≠ 0 (this term is not U(1)-invariant). Based on the conditions for Goldstone's theorem listed above, would you still expect an exactly massless angular mode? Why or why not?",
      answer:
        "No — Goldstone's theorem specifically requires the symmetry breaking to be spontaneous, not explicit. Adding a term like −c(φ+φ*) directly to the Lagrangian breaks the U(1) symmetry explicitly (the term itself is not invariant under φ → e^{iα}φ), which violates one of the theorem's stated preconditions; the angular mode would then generally acquire a small nonzero mass instead — a pseudo-Goldstone mode.",
    },
    nextQuestion: "What changes when the transformation angle depends on spacetime?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }, { id: "beekman-ssb" }],
    prerequisites: [11, 15],
  },

  // -------------------------------------------------------------------------
  // Chapter E — The Higgs mechanism (Lessons 17-21, Phase 3)
  // -------------------------------------------------------------------------
  {
    id: "lesson-17",
    number: 17,
    chapterId: "E",
    title: "What is a gauge symmetry?",
    scope: "Gauge Theory",
    guidingQuestion: "What changes when the transformation angle depends on spacetime?",
    bigIdea:
      "Promoting the transformation parameter to a spacetime-dependent function forces the introduction of a compensating gauge field and a covariant derivative; gauge symmetry is best understood as a redundancy of description, not a physical symmetry like the global one.",
    whyWeNeedThis:
      "Chapter D fully worked out global U(1) breaking, where the transformation parameter α is a single fixed number shared by all of spacetime. This lesson asks the natural next question: what if a different phase convention could be chosen independently at every point? Answering it requires new machinery — a covariant derivative and a compensating gauge field — that everything else in this chapter builds on.",
    intuition: {
      paragraphs: [
        "Recall the global U(1) transformation from Lesson 10: φ → e^{iα}φ, with the same α everywhere. Now ask what happens if α is allowed to vary from point to point — a local, or gauge, transformation: φ(x) → e^{iα(x)}φ(x).",
        "This breaks something. Differentiating e^{iα(x)}φ(x) with the product rule produces an extra term proportional to the local rate of change of the phase itself, so ∂μφ no longer transforms as simply as φ did in the global case — the derivative picks up contamination from the arbitrary local choice of phase convention, on top of the field's own genuine dynamics.",
        "The fix is to introduce a new field, the gauge field Aμ(x), that transforms in a compensating way exactly cancelling that extra term, and to replace ordinary derivatives with a covariant derivative Dμφ = (∂μ + igAμ)φ, built so that Dμφ transforms exactly as simply as φ itself did. The constant g is a coupling strength.",
        "Aμ has its own field-strength tensor, Fμν = ∂μAν − ∂νAμ, built to be completely insensitive to the choice of α(x) — gauge-invariant outright. (Readers familiar with electromagnetism will recognize Fμν as the tensor containing the electric and magnetic fields.)",
        "One distinction is worth being precise about from the start. The global U(1) symmetry of Lesson 10 is a genuine physical symmetry: it relates configurations that are, in an honest sense, different descriptions related by a real transformation of the dynamics. A local, gauge transformation is different in character — it is standardly understood as a redundancy in how the same physical configuration is described, not a transformation between physically distinct states. This distinction gets careful treatment in Academic Depth.",
      ],
    },
    mathematicalBridge: {
      intro: "Work out exactly what obstruction appears, and exactly what compensates it.",
      steps: [
        {
          statement: "Promote the transformation parameter to a function of spacetime.",
          equation: "φ(x) → e^{iα(x)} φ(x)",
        },
        {
          statement: "Differentiate using the product rule; an extra term appears that has no analogue when α is constant.",
          equation: "∂μ[e^{iα(x)}φ(x)] = e^{iα(x)} [ ∂μφ(x) + i(∂μα(x)) φ(x) ]",
        },
        {
          statement: "Introduce a gauge field with a compensating transformation rule.",
          equation: "Aμ(x) → Aμ(x) − (1/g) ∂μα(x)",
        },
        {
          statement: "Define the covariant derivative; it transforms exactly as simply as φ (full check in Academic Depth).",
          equation: "Dμφ ≡ (∂μ + igAμ)φ,   Dμφ → e^{iα(x)} Dμφ",
        },
        {
          statement: "Build a field-strength tensor from Aμ alone; the second-derivative terms from α cancel by symmetry, so it needs no compensation at all.",
          equation: "Fμν = ∂μAν − ∂νAμ  (gauge-invariant outright)",
        },
      ],
      result: {
        expression: "Dμφ → e^{iα(x)}Dμφ,   Fμν → Fμν",
        note: "The covariant derivative restores the simple transformation property ∂μφ lost; Fμν is invariant with no compensation needed.",
      },
    },
    academicDepth: {
      assumptions: [
        "U(1) gauge group (abelian) — the field-strength construction here is this simple because U(1) is abelian; non-abelian gauge groups (needed for Lesson 19's SU(2)_L×U(1)_Y) require an additional commutator term.",
        "Aμ is introduced as a new, independent dynamical field, not derived from φ.",
      ],
      notation: [
        "g: gauge coupling constant.",
        "Aμ: gauge field (a spacetime 4-vector).",
        "Dμ: covariant derivative.",
        "Fμν = −Fνμ: the (antisymmetric) field-strength tensor.",
      ],
      derivation: [
        {
          statement:
            "Full transformation check of Dμφ. Under φ → e^{iα}φ, Aμ → Aμ − (1/g)∂μα: Dμφ → ∂μ(e^{iα}φ) + ig(Aμ − (1/g)∂μα)e^{iα}φ = e^{iα}[∂μφ + i(∂μα)φ] + igAμe^{iα}φ − i(∂μα)e^{iα}φ = e^{iα}[∂μφ + igAμφ] = e^{iα}Dμφ.",
        },
        {
          statement:
            "The i(∂μα) terms cancel exactly between the two contributions, leaving only the overall phase e^{iα(x)} — precisely why Dμφ is called 'covariant': it covaries the same way φ itself does. Any Lagrangian built from |Dμφ|² (replacing the ordinary |∂μφ|² of Chapters B and D) is therefore gauge-invariant, exactly paralleling how |∂μφ|² was globally U(1)-invariant when α was constant (Lesson 10).",
        },
        {
          statement:
            "Gauge invariance of Fμν: Fμν → ∂μ(Aν − (1/g)∂να) − ∂ν(Aμ − (1/g)∂μα) = Fμν − (1/g)(∂μ∂να − ∂ν∂μα) = Fμν, since partial derivatives commute.",
        },
        {
          statement:
            "On redundancy versus symmetry: in the global case, two different constant values of α relate configurations via an honest transformation of the dynamics. In the local/gauge case, the standard physical interpretation is that field configurations (φ, Aμ) related by a gauge transformation represent the same physical state described two different ways, not two different physical states — which is why gauge 'symmetry' is usually described as a redundancy of description rather than a symmetry acting on physically distinct states the way Lesson 10's global U(1) did. Making this fully precise (constrained Hamiltonian analysis, BRST quantization) is substantially more advanced and outside this course's scope; this lesson states the conclusion and its motivation without the full formal apparatus.",
        },
      ],
      formalStatement: {
        label: "Gauge covariance and invariance",
        expression:
          "Under φ(x) → e^{iα(x)}φ(x), Aμ(x) → Aμ(x) − (1/g)∂μα(x): Dμφ = (∂μ+igAμ)φ transforms as Dμφ → e^{iα(x)}Dμφ, and Fμν = ∂μAν − ∂νAμ is exactly gauge-invariant.",
      },
      limitations: [
        "This lesson treats only the abelian U(1) case. Non-abelian gauge groups (needed for the electroweak SU(2)_L×U(1)_Y of Lesson 19) require an additional commutator term in both the covariant derivative and the field strength, not derived here.",
        "The redundancy-versus-symmetry distinction is stated at a motivational level; its fully rigorous formulation (constrained Hamiltonian systems, BRST) is outside this course's scope.",
      ],
    },
    misconception: {
      claim: "A gauge symmetry is just a fancier version of the global symmetry from Chapter D — the same kind of physical symmetry, just with a position-dependent parameter.",
      correction:
        "A gauge transformation is standardly understood as a redundancy in how the same physical configuration is described, not as a transformation relating distinct physical states the way the global U(1) symmetry of Chapter D did. Two field configurations (φ, Aμ) related by a gauge transformation are treated as physically identical, not merely 'equally valid but different' the way the points on the global vacuum manifold circle (Lesson 13) were.",
    },
    understandingCheck: {
      prompt: "Why does ∂μφ fail to transform as simply as φ itself once α depends on position?",
      options: [
        {
          id: "a",
          label:
            "Because differentiating e^{iα(x)}φ(x) via the product rule produces an extra term proportional to (∂μα)φ, which has no analogue when α is constant.",
          correct: true,
          feedback: "Correct — this extra term is exactly the obstruction the covariant derivative is built to cancel.",
        },
        {
          id: "b",
          label: "Because φ is complex.",
          correct: false,
          feedback: "The global case in Chapter D also used a complex φ, with no such problem — the issue is specific to α depending on position.",
        },
        {
          id: "c",
          label: "Because the Klein–Gordon equation is nonlinear.",
          correct: false,
          feedback: "Unrelated — the Klein–Gordon equation from Lesson 6 is linear, and this issue has nothing to do with that.",
        },
        {
          id: "d",
          label: "Because Aμ has not yet been introduced.",
          correct: false,
          feedback: "The transformation problem with ∂μφ exists independently of Aμ; it's precisely what motivates introducing Aμ, not a consequence of its absence.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Verify Fμν's gauge invariance directly by expanding ∂μ(Aν − (1/g)∂να) − ∂ν(Aμ − (1/g)∂μα).",
      answer:
        "∂μ(Aν − (1/g)∂να) − ∂ν(Aμ − (1/g)∂μα) = (∂μAν − ∂νAμ) − (1/g)(∂μ∂να − ∂ν∂μα) = Fμν − 0, since partial derivatives commute (∂μ∂να = ∂ν∂μα). The extra terms cancel exactly, confirming Fμν is unchanged by the gauge transformation.",
    },
    nextQuestion: "What happens when the broken-symmetry scalar is coupled to a gauge field?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }],
    prerequisites: [16, 10],
  },
  {
    id: "lesson-18",
    number: 18,
    chapterId: "E",
    title: "What is the Abelian Higgs mechanism?",
    scope: "Gauge Theory",
    guidingQuestion: "What happens when the broken-symmetry scalar is coupled to a gauge field?",
    bigIdea:
      "Coupling the spontaneously-broken complex scalar to a U(1) gauge field reorganizes the theory's degrees of freedom: the would-be massless Goldstone mode becomes the longitudinal polarization of a now-massive gauge field, while the radial mode remains an independent massive scalar.",
    whyWeNeedThis:
      "Lesson 17 built the machinery needed to gauge a symmetry. Lesson 15 showed that spontaneously breaking the GLOBAL U(1) symmetry produces a massless Goldstone mode. This lesson asks what happens to that mode once the same symmetry is gauged instead of global — the Abelian Higgs mechanism, the direct classical-field-theory ancestor of how the W and Z bosons get their mass in the Standard Model (Lesson 19).",
    intuition: {
      paragraphs: [
        "Take the same complex-scalar potential from Chapter D (V(φ) = μ²|φ|² + λ|φ|⁴, μ² < 0, λ > 0), but now couple φ to a gauge field via the covariant derivative from Lesson 17: replace the ordinary kinetic term with |Dμφ|², and add the gauge field's own kinetic term −¼FμνF^μν.",
        "Expand around the selected vacuum exactly as in Lesson 15, φ = (v+h+iπ)/√2. Something new happens to the angular field π this time: because the covariant derivative mixes φ with Aμ, expanding |Dμφ|² produces a cross term coupling π directly to Aμ. Physically, the angular direction along the vacuum circle is no longer a free-standing, independently-propagating field — its motion becomes locked together with the gauge field's own dynamics.",
        "The net effect, worked out precisely in the Mathematical Bridge, is that Aμ acquires a mass term — something a massless gauge field is not allowed to have on its own — and π can be eliminated entirely by an appropriate choice of gauge (a specific choice of 'which description,' among the redundant ones from Lesson 17), rather than remaining an independent, physical, massless particle.",
        "The clean way to see this is by counting degrees of freedom, rather than reaching for the shorthand 'the gauge boson eats the Goldstone boson.' Before coupling: the complex scalar carries 2 real propagating degrees of freedom (radial h, angular π, Lesson 15), and a massless gauge field in four spacetime dimensions carries 2 independent propagating polarizations (only the two transverse ones — a massless vector field's would-be third and fourth components are removed by gauge redundancy and a constraint, not independently propagating). Total: 2+2=4. After coupling and symmetry breaking: the radial mode h remains as 1 independent massive scalar, and the now-massive vector field Aμ carries 3 independent polarizations — two transverse plus, new to a massive vector field, one longitudinal. Total: 1+3=4. The count matches exactly: no degree of freedom is created or destroyed, one just changes what it's attached to.",
      ],
    },
    mathematicalBridge: {
      intro: "Expand the gauged Lagrangian around the vacuum and read off the mass terms.",
      steps: [
        {
          statement: "The gauged Lagrangian, combining Lesson 17's machinery with Chapter D's potential.",
          equation: "𝓛 = −¼FμνF^μν + |Dμφ|² − V(φ),   Dμφ = (∂μ+igAμ)φ",
        },
        {
          statement: "Expand around the vacuum exactly as in Lesson 15.",
          equation: "φ = (v + h + iπ)/√2,   Dμφ = [∂μh + i∂μπ + igAμ(v+h+iπ)]/√2",
        },
        {
          statement: "To quadratic order in the fluctuations (h, π, Aμ all small), |Dμφ|² produces a mass term for Aμ.",
          equation: "|Dμφ|² ⊃ ½g²v²AμA^μ  ⟹  m_A² = g²v²  ⟹  m_A = gv",
        },
        {
          statement: "It also produces a cross term mixing Aμ and π, signalling π is not independently propagating.",
          equation: "|Dμφ|² ⊃ gv Aμ∂^μπ",
        },
        {
          statement:
            "Choosing 'unitary gauge' (Lesson 17's redundancy, used to remove π entirely) leaves a manifestly massive vector field and a radial mode whose mass is unaffected by the gauge coupling at this order.",
          equation: "m_h² = 2λv²  (unchanged from Lesson 15)",
        },
      ],
      result: {
        label: "Abelian Higgs spectrum",
        expression: "m_A = gv,   m_h² = 2λv²",
        note: "π no longer appears as an independent field once the mixing is removed by gauge choice.",
      },
    },
    academicDepth: {
      assumptions: [
        "Same potential and vacuum as Chapter D (μ² < 0, λ > 0, v² = −μ²/λ).",
        "Abelian U(1) gauge theory (Lesson 17).",
        "Expansion to quadratic order in fluctuations (h, π, Aμ) around the classical vacuum.",
        "'Unitary gauge' — the gauge choice that removes π entirely — is used to display the physical spectrum cleanly.",
      ],
      notation: [
        "g: gauge coupling (Lesson 17). m_A = gv: gauge field mass.",
        "m_h² = 2λv²: radial mode mass, unchanged from Lesson 15's −2μ² = 2λv².",
        "Unitary gauge: the gauge choice in which the scalar's phase is set to remove π, so φ = (v+h)/√2 exactly, with Aμ carrying all 3 massive polarizations manifestly.",
      ],
      derivation: [
        {
          statement:
            "Full expansion of |Dμφ|² to quadratic order: |Dμφ|² = DμφᐧD^μφ* ⊃ ½∂μh∂^μh + ½∂μπ∂^μπ + ½g²v²AμA^μ + gvAμ∂^μπ, dropping higher-order terms in h, π, Aμ.",
        },
        {
          statement:
            "The ½g²v²AμA^μ term is a mass term for the vector field: comparing to ½m_A²AμA^μ gives m_A² = g²v², m_A = gv.",
        },
        {
          statement:
            "The cross term gvAμ∂^μπ mixes Aμ and π; it is removed by a gauge transformation that sets π = 0 identically (unitary gauge — a legitimate, physically equivalent choice among the redundant descriptions of Lesson 17, precisely because π was not gauge-invariant to begin with). After this choice, the Lagrangian contains only h and Aμ (now manifestly massive), with no trace of an independent π field.",
        },
        {
          statement:
            "Degree-of-freedom count, stated precisely: a massless vector field in 4D has 2 physical propagating polarizations (its timelike and longitudinal components are removed by gauge invariance and a constraint equation, not physical). A massive vector field has 3 — the mass term explicitly breaks the gauge invariance that removed the longitudinal mode, so it becomes physical. Before symmetry breaking: complex scalar (2: h, π) + massless Aμ (2) = 4. After: radial scalar (1: h) + massive Aμ (3) = 4.",
        },
      ],
      formalStatement: {
        label: "Abelian Higgs mechanism",
        expression:
          "For 𝓛 = −¼FμνF^μν + |Dμφ|² − V(φ) expanded around φ = (v+h+iπ)/√2: m_A = gv (in unitary gauge, absorbing π), m_h² = 2λv² (matching Lesson 15). Total propagating degrees of freedom are conserved: 2(scalar)+2(massless vector) = 4 → 1(scalar)+3(massive vector) = 4.",
      },
      limitations: [
        "This is the abelian (U(1)) case only; the Standard Model's electroweak sector (Lesson 19) uses a non-abelian gauge group (SU(2)_L×U(1)_Y) and a doublet of complex scalars — more involved, but built on exactly this same mechanism.",
        "This is a classical, tree-level analysis. Quantizing this gauge-fixed theory consistently (e.g. via Faddeev–Popov or BRST methods) is a substantially more advanced topic outside this course's scope, mentioned by name only.",
      ],
    },
    misconception: {
      claim: "The gauge boson eats the Goldstone boson — meaning the Goldstone particle is simply destroyed and disappears from the theory.",
      correction:
        "Nothing is destroyed. The precise statement is a conservation of degrees of freedom: before coupling, the theory has 2 (scalar) + 2 (massless vector) = 4 propagating degrees of freedom; after coupling and symmetry breaking, it has 1 (massive scalar) + 3 (massive vector) = 4. The angular mode's would-be independent propagation becomes the new longitudinal polarization of the now-massive vector field — the same total count, reorganized, not a disappearance.",
    },
    understandingCheck: {
      prompt:
        "Before gauging, a complex scalar (2 dof) is spontaneously broken, and a massless gauge field (2 dof) is present. After gauging and symmetry breaking, what is the resulting degree-of-freedom count, and how is it distributed?",
      options: [
        {
          id: "a",
          label: "4 total: 1 from the massive radial scalar, 3 from the now-massive vector field (2 transverse + 1 longitudinal).",
          correct: true,
          feedback: "Correct — exactly the count worked out in this lesson: 1 + 3 = 4, matching the pre-coupling 2 + 2 = 4.",
        },
        {
          id: "b",
          label: "3 total: the Goldstone mode is simply removed from the theory, leaving 1 scalar + 2 transverse vector polarizations.",
          correct: false,
          feedback: "This loses a degree of freedom. The correct count conserves the total at 4 — the angular mode becomes the vector's longitudinal polarization, not nothing.",
        },
        {
          id: "c",
          label: "5 total: the massive vector field gains a degree of freedom without losing anything elsewhere.",
          correct: false,
          feedback: "A massless vector has 2 polarizations, not 3, so gaining a third exactly balances the 1 lost from the scalar sector (2 → 1) rather than adding a net degree of freedom.",
        },
        {
          id: "d",
          label: "2 total: only the radial scalar and one transverse polarization survive.",
          correct: false,
          feedback: "This undercounts the massive vector field's polarizations — it has 3, not 1.",
        },
      ],
    },
    transferQuestion: {
      prompt: "Using m_A = gv and v² = −μ²/λ (Lesson 13), express m_A purely in terms of g, μ², and λ.",
      answer: "m_A = gv = g√(−μ²/λ), substituting v = √(−μ²/λ) from Lesson 13.",
    },
    nextQuestion: "Why is the real Higgs field not just one complex scalar?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }, { id: "beekman-ssb" }],
    prerequisites: [17, 15],
    interactive: { kind: "gauge-dof-comparison" },
    plannedLabConnection: {
      sentence:
        "A gauged U(1) laboratory — letting you tune the gauge coupling g and watch the massless Goldstone mode become the gauge field's longitudinal polarization in real time — is a natural extension of this platform, but has not been built yet.",
      buttonLabel: "Gauged U(1) Higgs-mechanism laboratory",
      explanation:
        "This interactive laboratory does not exist yet. This card is a placeholder for a future extension of the project; the button above is disabled and does not navigate anywhere.",
    },
  },
  {
    id: "lesson-19",
    number: 19,
    chapterId: "E",
    title: "How does the Standard Model Higgs differ?",
    scope: "Standard Model",
    guidingQuestion: "Why is the real Higgs field not just one complex scalar?",
    bigIdea:
      "The Standard Model's electroweak symmetry SU(2)_L×U(1)_Y is spontaneously broken to the electromagnetic U(1)_Q by a complex scalar doublet (4 real degrees of freedom), giving mass to three of the four electroweak gauge bosons while leaving the photon massless and one scalar degree of freedom as the physical Higgs boson.",
    whyWeNeedThis:
      "Lesson 18 worked out the abelian Higgs mechanism for a single U(1) gauge field and a single complex scalar. The actual Standard Model electroweak sector is more elaborate — a bigger gauge group and a doublet rather than a singlet scalar — but is built from exactly the same mechanism. This lesson gives the accessible-level map from the toy model to the real electroweak theory, and is explicit about exactly how the toy model (and this course's interactive laboratory) is not the full Standard Model Higgs sector.",
    intuition: {
      paragraphs: [
        "The electroweak part of the Standard Model has a bigger symmetry group than the single U(1) used so far: SU(2)_L×U(1)_Y (an SU(2) symmetry, structurally analogous to 3D rotations, combined with another U(1)). This larger symmetry is spontaneously broken — by essentially the same mechanism as Lesson 18, generalized — down to a smaller, unbroken symmetry: U(1)_Q, the ordinary electromagnetic symmetry familiar from electricity and magnetism.",
        "The scalar field responsible is not a single complex number (1 complex scalar, 2 real degrees of freedom, as in Chapters D–E so far) but a complex doublet: essentially two complex scalars packaged together, forming 4 real degrees of freedom total.",
        "Generalizing Lesson 18's degree-of-freedom bookkeeping: before symmetry breaking, the doublet contributes 4 real scalar degrees of freedom, and the gauge fields of SU(2)_L×U(1)_Y contribute their own massless polarizations. After breaking, three of the four scalar degrees of freedom become the longitudinal polarizations of three gauge bosons — conventionally named W⁺, W⁻ and Z — which consequently become massive, exactly as Aμ did in Lesson 18. The fourth combination of gauge fields remains exactly massless: this is the photon, and its masslessness is the direct signature that U(1)_Q survives as an unbroken symmetry. The one remaining scalar degree of freedom, out of the doublet's original four, is left over as an independently propagating massive particle: the physical Higgs boson — the first point in this course where that specific name is used, reserved for exactly this context.",
        "This is also the moment to be fully explicit about scope. The interactive laboratory (and Chapters A–D generally) works with a single global complex scalar and a toy potential — it does not include gauge fields at all until this chapter, and even Lesson 18's gauged model uses only a single abelian U(1), not the full SU(2)_L×U(1)_Y structure. The laboratory's Higgs-like radial mode is a genuine, correctly-computed analogue of the mechanism by which the physical Higgs boson gets its own mass — but it is not itself the physical Higgs boson, and the dashboard is explicitly not a model of the Standard Model Higgs sector.",
      ],
    },
    mathematicalBridge: {
      intro:
        "State the resulting mass formulas directly; the full SU(2)_L×U(1)_Y structure behind them is Academic Depth's job.",
      steps: [
        {
          statement:
            "The W and Z boson masses come from the same 'gauge-field-mass-from-vacuum-expectation-value' mechanism as Lesson 18's m_A = gv, generalized to the larger gauge group and its two independent couplings g (for SU(2)_L) and g′ (for U(1)_Y).",
        },
        {
          statement: "The resulting mass formulas.",
          equation: "m_W = gv/2,   m_Z = v√(g² + g′²) / 2",
        },
        {
          statement:
            "Each mass is (coupling constant) × (vacuum expectation value) × (an order-1 group-theory factor) — the same 'mass from coupling to a nonzero vacuum value' logic as m_A = gv, with numerical factors set by the SU(2)_L×U(1)_Y structure.",
        },
        {
          statement:
            "By the same kind of calculation, the photon's mass comes out to be exactly zero — a consequence of U(1)_Q remaining an unbroken symmetry of the vacuum, in the same sense Lesson 14 discussed for the global case.",
          equation: "m_photon = 0",
        },
      ],
      result: {
        label: "Electroweak gauge-boson masses",
        expression: "m_W = gv/2,   m_Z = v√(g²+g′²)/2,   m_photon = 0",
        note: "Three massive gauge bosons and one exactly massless one, from a single scalar doublet's spontaneous symmetry breaking.",
      },
    },
    academicDepth: {
      assumptions: [
        "Gauge group SU(2)_L×U(1)_Y, spontaneously broken to U(1)_Q by a complex scalar doublet Φ with a potential of the same μ²|Φ|²+λ|Φ|⁴ form used throughout Chapter D/E, now built from the doublet's four real components.",
        "v denotes the doublet's vacuum expectation value (v ≈ 246 GeV in the real Standard Model — a measured number, not derived within this course).",
      ],
      notation: [
        "SU(2)_L: the 'weak isospin' gauge group (non-abelian, 3 generators, 3 gauge bosons before mixing).",
        "U(1)_Y: 'weak hypercharge' gauge group (abelian, 1 generator, 1 gauge boson before mixing).",
        "g, g′: the SU(2)_L and U(1)_Y coupling constants respectively.",
        "W±, Z, photon: the physical gauge bosons after symmetry breaking, related to the original gauge fields by a mixing (the 'Weinberg angle') not derived here.",
        "U(1)_Q: the unbroken electromagnetic symmetry, with Q the electric charge.",
      ],
      derivation: [
        {
          statement:
            "The scalar doublet Φ has 4 real degrees of freedom. Its potential, built from the SU(2)_L×U(1)_Y-invariant combination Φ†Φ, has the same qualitative shape as V(φ)=μ²|φ|²+λ|φ|⁴ from Chapter D, and for μ²<0 develops a non-trivial minimum, directly generalizing Lesson 13's r_min.",
        },
        {
          statement:
            "Choosing a specific point in the vacuum manifold (analogous to Lesson 14's choice of θ) breaks SU(2)_L×U(1)_Y down to the subgroup that still leaves that chosen vacuum invariant. That surviving subgroup is, by construction of the Standard Model, U(1)_Q — the non-abelian generalization of Lesson 14's stabilizer-subgroup language.",
        },
        {
          statement:
            "Expanding the gauge-covariant kinetic term |DμΦ|² (built from both SU(2)_L and U(1)_Y gauge fields, with couplings g, g′) around this vacuum produces mass terms for three specific linear combinations of the four original gauge fields — named W±, Z — with masses m_W=gv/2, m_Z=v√(g²+g′²)/2, while the orthogonal fourth combination (the photon) has no such term and remains exactly massless.",
        },
        {
          statement:
            "Degree-of-freedom count, generalizing Lesson 18: 4 (scalar doublet) + 2×3 (three initially-massless SU(2)_L gauge bosons, 2 dof each) + 2 (one initially-massless U(1)_Y gauge boson) = 12 before breaking. After: 1 (physical Higgs boson) + 3×3 (three now-massive gauge bosons, 3 dof each: W+, W−, Z) + 2 (the still-massless photon, 2 dof) = 12 after — conserved, exactly as in Lesson 18.",
        },
      ],
      formalStatement: {
        label: "Electroweak symmetry breaking",
        expression:
          "SU(2)_L×U(1)_Y is spontaneously broken to U(1)_Q by a complex scalar doublet's nonzero vacuum expectation value v; the resulting gauge-boson masses are m_W=gv/2, m_Z=v√(g²+g′²)/2, m_photon=0, and one real scalar degree of freedom remains as the physical Higgs boson.",
      },
      limitations: [
        "The full derivation of the SU(2)_L×U(1)_Y covariant derivative, the W/Z/photon mixing (Weinberg angle), and the non-abelian field-strength tensor are standard material in a full quantum field theory course but are not reproduced here — this lesson gives the accessible-level map and key formulas, not the complete derivation.",
        "The numerical value v≈246 GeV and the measured boson masses are experimental inputs/results, not something this course derives from first principles; see the PDG review for current measured values.",
        "This course's interactive laboratory is a global U(1) toy model without any gauge fields at all (Chapters A–D), and Lesson 18's gauged extension uses only a single abelian U(1) — neither is the Standard Model electroweak sector, which requires the full non-abelian SU(2)_L×U(1)_Y structure and a scalar doublet described only qualitatively here.",
      ],
    },
    misconception: {
      claim: "The current global U(1) dashboard, or even Lesson 18's gauged single-U(1) extension, is the Standard Model Higgs sector.",
      correction:
        "Neither is. The dashboard models a single global U(1) symmetry with no gauge fields; Lesson 18 generalizes it to a single abelian gauge field. The actual Standard Model electroweak sector requires the larger, non-abelian gauge group SU(2)_L×U(1)_Y and a complex scalar doublet (4 real degrees of freedom, not 2). The mechanism is genuinely the same in spirit — mass from a nonzero vacuum expectation value — but the group theory and field content are more elaborate than anything modeled in this course's interactive laboratory.",
    },
    understandingCheck: {
      prompt: "Why does the Standard Model need a scalar doublet (4 real degrees of freedom) rather than the single complex scalar (2 real degrees of freedom) used in Lessons 10–18?",
      options: [
        {
          id: "a",
          label:
            "Because three gauge bosons (W+, W−, Z) need to acquire a longitudinal polarization to become massive, and a single complex scalar only supplies one angular (Goldstone-type) degree of freedom — not enough for three gauge bosons.",
          correct: true,
          feedback: "Correct — the doublet's 4 degrees of freedom supply exactly the 3 longitudinal modes needed, with 1 left over as the physical Higgs boson.",
        },
        {
          id: "b",
          label: "Because the photon needs to be given a mass too.",
          correct: false,
          feedback: "The photon specifically remains massless — that's the point of the unbroken U(1)_Q.",
        },
        {
          id: "c",
          label: "Because quarks require four separate Higgs fields.",
          correct: false,
          feedback: "This lesson doesn't address quark masses (that's Lesson 20's Yukawa coupling), and fermion mass generation doesn't require extra Higgs degrees of freedom beyond the one doublet.",
        },
        {
          id: "d",
          label: "Because a single complex scalar cannot be spontaneously broken.",
          correct: false,
          feedback: "Chapter D's entire toy model is exactly a single complex scalar being spontaneously broken — that's not the issue here.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "Using the degree-of-freedom counting from this lesson, how many gauge bosons could be given mass with only 2 scalar degrees of freedom (as in the single complex scalar of Lessons 10–18), by the same counting logic as Lesson 18?",
      answer:
        "At most 1 — exactly Lesson 18's single-U(1) case. Two scalar degrees of freedom split into 1 radial (staying physical) + 1 angular (absorbed), supplying only one longitudinal mode, not the three needed for W+, W−, and Z simultaneously. The doublet's 4 real degrees of freedom are exactly enough to supply 3 longitudinal modes while leaving 1 left over as the physical Higgs boson.",
    },
    nextQuestion: "How do electrons and quarks couple to the Higgs field?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }, { id: "pdg-higgs" }],
    prerequisites: [18],
  },
  {
    id: "lesson-20",
    number: 20,
    chapterId: "E",
    title: "How do fermions obtain mass?",
    scope: "Standard Model",
    guidingQuestion: "How do electrons and quarks couple to the Higgs field?",
    bigIdea:
      "Fermion masses arise from a separate ingredient — Yukawa couplings between the Higgs doublet and left/right-handed fermion fields — not from the same gauge-covariant-derivative mechanism that gives the W and Z their mass.",
    whyWeNeedThis:
      "Lessons 18–19 explained how gauge bosons (and the radial Higgs mode) get mass from the Higgs mechanism. Electrons, quarks, and other matter particles are not gauge bosons, though — they need a separate coupling to the same Higgs field to acquire mass, and it matters not to conflate the two distinct mechanisms.",
    intuition: {
      paragraphs: [
        "The gauge-boson mass mechanism (Lessons 18–19) came from expanding a gauge-covariant kinetic term |DμΦ|² around a nonzero vacuum value — the gauge field's own kinetic term picking up a mass contribution because the field it's coupled to has a nonzero constant background value.",
        "Fermion masses arise differently. An ordinary mass term for a fermion connects two objects called left-handed and right-handed components, which under the electroweak gauge group SU(2)_L×U(1)_Y transform differently from one another (left-handed fermions form SU(2)_L doublets; right-handed ones are SU(2)_L singlets in the Standard Model). A plain mass term is therefore not itself gauge-invariant and cannot simply be written down by hand.",
        "The fix is structurally similar in spirit to the gauge-boson case but a distinct calculation: introduce a direct coupling between the fermion fields and the Higgs doublet itself (a Yukawa coupling), built to be gauge-invariant using the Higgs doublet's own transformation properties to soak up the mismatch between the left- and right-handed pieces. Once the Higgs field settles into its nonzero vacuum value, this Yukawa coupling term automatically turns into an ordinary-looking fermion mass term.",
        "Each type of fermion — electron, up quark, down quark, and so on — has its own independent Yukawa coupling constant y_f, and, unlike the gauge-boson masses (set by only two coupling constants g, g′ shared by every particle charged under the electroweak force), these Yukawa couplings are independent, freely-adjustable numbers in the Standard Model, one per fermion species. Their wildly different measured values — across many orders of magnitude, from the electron to the top quark — is one of the open questions taken up in the next lesson.",
      ],
    },
    mathematicalBridge: {
      intro: "Write the Yukawa coupling schematically and read off the mass it generates once the Higgs field settles into its vacuum value.",
      steps: [
        {
          statement: "Yukawa coupling for one fermion species (h.c. = Hermitian conjugate, needed to keep the Lagrangian real).",
          equation: "𝓛_Y = −y_f ψ̄_L Φ ψ_R + h.c.",
        },
        {
          statement: "Replace Φ by its vacuum value, using the same normalization convention as Lessons 15/18.",
          equation: "Φ → v/√2,   𝓛_Y → −y_f (v/√2) ψ̄_Lψ_R + h.c.",
        },
        {
          statement: "Compare to a standard fermion mass term to read off the mass.",
          equation: "−m_f ψ̄ψ,   m_f = y_f v / √2",
        },
      ],
      result: {
        label: "Fermion mass from Yukawa coupling",
        expression: "m_f = y_f v / √2",
        note: "A fermion mass proportional to its own Yukawa coupling times the same vacuum expectation value v that sets the gauge-boson masses.",
      },
    },
    academicDepth: {
      assumptions: [
        "ψ_L, ψ_R denote the left- and right-handed chiral components of a Dirac fermion field, which transform differently under SU(2)_L×U(1)_Y (this chiral structure is a substantial topic in its own right, taken as given here rather than derived).",
        "Φ is the same SU(2)_L doublet from Lesson 19, with vacuum value ⟨Φ⟩=(0, v/√2) in a standard convention — only the neutral component acquires a vacuum value, consistent with the unbroken U(1)_Q of Lesson 19 (the surviving symmetry must leave the vacuum, and hence its electric charge, invariant).",
      ],
      notation: [
        "ψ_L, ψ_R: left/right-handed fermion field components.",
        "y_f: the Yukawa coupling constant for fermion species f (a free parameter of the Standard Model, one per species).",
        "h.c.: Hermitian conjugate.",
      ],
      derivation: [
        {
          statement:
            "Gauge-invariance requirement: ψ̄_LΦψ_R must be invariant under SU(2)_L×U(1)_Y. Because ψ_L is an SU(2)_L doublet and Φ is also an SU(2)_L doublet, an SU(2)_L-invariant combination can be built by contracting their doublet indices, and matching U(1)_Y hypercharges between ψ̄_LΦ and ψ_R fixes the hypercharge assignments (a bookkeeping exercise not reproduced in detail here).",
        },
        {
          statement:
            "Substituting the vacuum value Φ→(0,v/√2) converts the Yukawa term into an ordinary Dirac mass term, exactly as sketched in the Mathematical Bridge, giving m_f=y_fv/√2.",
        },
        {
          statement:
            "Explicit contrast with the gauge sector: m_W and m_Z (Lesson 19) are each built from the same two coupling constants g, g′, shared universally by every particle charged under the electroweak gauge group, so the ratio m_W/m_Z is a specific, predicted number (set by the Weinberg angle). By contrast, each y_f is an independent parameter with no relation to any other fermion's y_f imposed by the theory; the Standard Model does not explain or constrain the pattern of fermion masses the way it constrains the gauge-boson mass ratio.",
        },
      ],
      formalStatement: {
        label: "Yukawa coupling and fermion mass",
        expression:
          "𝓛_Y = −y_fψ̄_LΦψ_R + h.c.; after electroweak symmetry breaking (⟨Φ⟩=(0,v/√2)), this generates a fermion mass m_f=y_fv/√2.",
      },
      limitations: [
        "This is a schematic, single-generation treatment; the full Standard Model Yukawa sector involves a matrix of couplings across three generations of fermions (giving rise to quark mixing, the CKM matrix), not reproduced here.",
        "Neutrino masses are not included in this minimal treatment at all — the Standard Model as originally formulated has no right-handed neutrino and no neutrino Yukawa coupling, so neutrinos are strictly massless in this minimal picture; observed neutrino masses (Lesson 21) require an extension beyond what is described here.",
        "This lesson does not derive the SU(2)_L×U(1)_Y representation theory needed to fully justify the gauge-invariance argument sketched above.",
      ],
    },
    misconception: {
      claim: "The Higgs mechanism explained in Lessons 18–19 for the W and Z bosons is the same calculation, with the same inputs, that gives electrons and quarks their mass.",
      correction:
        "They are related — both ultimately rely on the Higgs field's nonzero vacuum value — but they are not the same calculation. Gauge-boson masses come from expanding the gauge-covariant kinetic term |DμΦ|²; fermion masses come from a separate, independently-chosen Yukawa coupling between the fermion fields and the Higgs field. Gauge-boson masses are fixed by only two shared coupling constants (g, g′); each fermion's mass depends on its own independent Yukawa coupling, unconstrained by the theory.",
    },
    understandingCheck: {
      prompt: "Why can't an ordinary mass term m ψ̄ψ simply be written down by hand for a Standard Model fermion, without invoking the Higgs field at all?",
      options: [
        {
          id: "a",
          label:
            "Because the left- and right-handed components ψ_L, ψ_R transform differently under SU(2)_L×U(1)_Y, so a term directly connecting them is not gauge-invariant on its own; only combining with the Higgs doublet (which supplies the compensating transformation) allows a gauge-invariant, mass-generating term.",
          correct: true,
          feedback: "Correct — this mismatch in transformation properties between ψ_L and ψ_R is exactly what the Yukawa coupling to Φ resolves.",
        },
        {
          id: "b",
          label: "Because fermions cannot have mass in any quantum field theory.",
          correct: false,
          feedback: "Massive fermions are perfectly consistent in quantum field theory generally; the issue here is specifically gauge invariance under the electroweak group.",
        },
        {
          id: "c",
          label: "Because y_f is always exactly zero for fermions.",
          correct: false,
          feedback: "y_f is generally nonzero — that's precisely what gives fermions their observed masses; it simply isn't predicted by the theory.",
        },
        {
          id: "d",
          label: "Because only bosons are allowed to have mass terms.",
          correct: false,
          feedback: "This isn't a general rule of quantum field theory, and isn't the actual obstruction described in this lesson.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "The top quark's Yukawa coupling is close to y_t≈1, while the electron's is roughly y_e≈3×10⁻⁶. Using m_f=y_fv/√2 with v≈246 GeV, explain in words why this alone accounts for the top quark being roughly a million times heavier than the electron.",
      answer:
        "Since v is the same shared number for every fermion, m_f=y_fv/√2 says the fermion mass is directly proportional to its own Yukawa coupling y_f alone; the enormous ratio y_t/y_e (roughly a factor of 10⁵–10⁶) directly produces a correspondingly enormous mass ratio between the top quark and the electron, with no other physics needed in this formula to explain the difference.",
    },
    nextQuestion: "What does the Standard Model take as input rather than explain?",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }, { id: "pdg-higgs" }],
    prerequisites: [19],
  },
  {
    id: "lesson-21",
    number: 21,
    chapterId: "E",
    title: "What remains unexplained?",
    scope: "Standard Model",
    guidingQuestion: "What does the Standard Model take as input rather than explain?",
    bigIdea:
      "The Higgs mechanism explains how particles acquire mass once the Higgs field's properties are assumed, but it does not explain why those properties — or several other deep features of the theory — take the values they do; being clear about this boundary is itself part of understanding the theory honestly.",
    whyWeNeedThis:
      "Lessons 17–20 built up the actual machinery of the Higgs mechanism and its role in the Standard Model, in each case flagging assumptions and limitations along the way. This final lesson collects the biggest of those open boundaries in one place, distinguishing clearly between what is a settled, established result; what is a genuinely open, actively-studied research question; and what is a more speculative idea beyond the Standard Model's own scope.",
    intuition: {
      paragraphs: [
        "The Standard Model, including everything built up in Lessons 17–20, is an extraordinarily successful theory: its predictions — including the existence and approximate mass (near 125 GeV) of the Higgs boson itself, discovered in 2012 — have been repeatedly confirmed to high precision. But 'successful' does not mean 'complete.' The theory takes a number of facts as fixed inputs rather than derived consequences, and there are observed phenomena it does not account for at all.",
        "The list below distinguishes three kinds of claim, labeled explicitly rather than left implicit: an established result is one confirmed by repeated, precise measurement; an open research question is one the physics community actively studies with no settled consensus answer yet; a speculative idea is a genuine possibility being explored, without either the evidence of an established result or the sharper, agreed-upon formulation of an open question.",
      ],
    },
    frontierClaims: [
      {
        status: "established",
        statement:
          "A scalar particle consistent with the Standard Model's Higgs boson was discovered at the LHC in 2012, with mass near 125 GeV and production and decay properties measured to be in close agreement with Standard Model predictions.",
      },
      {
        status: "established",
        statement:
          "The Higgs mechanism's predicted relations among the W, Z, and photon — including the existence of longitudinal gauge-boson polarizations — are consistent with precision electroweak measurements.",
      },
      {
        status: "open-question",
        statement:
          "Why a Higgs-type field exists at all, rather than particle masses arising by some entirely different mechanism, is not explained by the Standard Model — the theory takes its existence and properties as an input, not a derived consequence.",
      },
      {
        status: "open-question",
        statement:
          "Why the parameters μ² and λ — and every other free parameter of the Standard Model — take the specific numerical values measured in nature is not explained or derived by the theory.",
      },
      {
        status: "open-question",
        statement:
          "Why the Yukawa couplings span such an enormous range of values across different fermion species (the flavor hierarchy problem) has no accepted explanation within the Standard Model itself.",
      },
      {
        status: "open-question",
        statement:
          "The hierarchy, or naturalness, problem: quantum corrections to the Higgs mass parameter are generically expected to be enormous, and it is not fully settled why the observed Higgs mass is so much smaller than those naive expectations.",
      },
      {
        status: "open-question",
        statement:
          "Neutrino masses, experimentally well-established via neutrino oscillation experiments, are not accounted for by the minimal Standard Model as described in this course (Lesson 20); some extension is required, and which extension is correct is not yet settled.",
      },
      {
        status: "open-question",
        statement:
          "The nature of dark matter — well-established observationally through its gravitational effects, but not identified as any Standard Model particle — remains unresolved.",
      },
      {
        status: "speculative",
        statement:
          "Whether the fields used throughout this course are truly fundamental, or are effective descriptions emerging from some more fundamental underlying structure, is a speculative question actively explored by various research programs, without settled consensus.",
      },
    ],
    mathematicalBridge: {
      intro:
        "Rather than a new derivation, collect the mass formulas from Lessons 15–20 in one place and note what they share — and what they leave unexplained.",
      steps: [
        { statement: "Global-case radial mode (Lesson 15).", equation: "m_h² = 2λv²" },
        { statement: "Gauged vector field (Lesson 18).", equation: "m_A = gv" },
        { statement: "Electroweak gauge bosons (Lesson 19).", equation: "m_W = gv/2,   m_Z = v√(g²+g′²)/2" },
        { statement: "Fermion masses (Lesson 20).", equation: "m_f = y_f v/√2" },
      ],
      result: {
        label: "The common structure, and its unexplained inputs",
        expression: "every mass ∝ (a coupling constant) × v",
        note:
          "v, g, g′, λ, and every y_f are measured inputs to the Standard Model, not quantities the theory derives from anything more basic.",
      },
    },
    academicDepth: {
      assumptions: [
        "The Standard Model is treated, as throughout this course, as a mathematically consistent quantum field theory valid up to some higher energy scale, not claimed to be a final or complete theory of nature.",
      ],
      notation: [
        "v ≈ 246 GeV: the electroweak vacuum expectation value (a measured quantity).",
        "'Naturalness': the expectation, common in effective field theory, that a parameter should not be enormously smaller than what generic quantum corrections would suggest, absent a symmetry or mechanism protecting it.",
      ],
      derivation: [
        {
          statement:
            "The hierarchy/naturalness problem, stated slightly more precisely: unlike a fermion mass (protected from large quantum corrections by chiral symmetry) or a gauge-boson mass (protected by gauge symmetry), a fundamental scalar mass parameter such as μ² receives quantum corrections that are, in a generic effective field theory, sensitive to the highest energy scale the theory remains valid up to. Why the observed Higgs mass is so much smaller than such generic expectations, if the Standard Model remains valid up to a very high scale, is the technical content of the naturalness problem — stated here as an open question, not resolved.",
        },
        {
          statement:
            "Each of the open and speculative claims above is stated at the level appropriate to this course: naming the issue precisely enough to be useful, without asserting a specific resolution, since none is settled.",
        },
      ],
      formalStatement: {
        label: "Scope of the Standard Model",
        expression:
          "The Standard Model, including the Higgs mechanism detailed in Lessons 17–20, is a mathematically consistent and experimentally well-tested effective field theory; it does not, by construction, explain the numerical values of its own free parameters, nor does it account for several confirmed phenomena (neutrino mass, dark matter) outside its minimal field content.",
      },
      limitations: [
        "This lesson deliberately does not attempt to resolve any of the open questions it lists — proposed resolutions (supersymmetry, extra dimensions, various dark matter candidates, and others) are active, contested research programs, not settled physics, and are outside this course's scope.",
        "The established claims listed above are stated at the level of qualitative agreement with Standard Model predictions, not with specific numerical citations beyond the well-known approximate Higgs mass; see the PDG review for current precise measured values.",
      ],
    },
    misconception: {
      claim: "The Standard Model, having explained mass via the Higgs mechanism, is now a complete theory of particle physics with nothing left to explain.",
      correction:
        "The Higgs mechanism explains how particles get mass once the theory's parameters are fixed, not why those parameters take the values they do, and it says nothing at all about several confirmed phenomena — like neutrino mass or dark matter — that lie outside the Standard Model's minimal field content. 'Successful' and 'complete' are different claims; this course has flagged the gap between them at every stage.",
    },
    understandingCheck: {
      prompt: "Which of the following is something the Higgs mechanism, as developed in this course, actually explains?",
      options: [
        {
          id: "a",
          label: "How a nonzero vacuum expectation value of the Higgs field generates mass terms for the W, Z, and (via Yukawa couplings) the fermions.",
          correct: true,
          feedback: "Correct — this is exactly the mechanism worked out across Lessons 15 and 18–20.",
        },
        {
          id: "b",
          label: "Why the Higgs field's own potential parameters μ² and λ take the specific numerical values measured in nature.",
          correct: false,
          feedback: "This is explicitly flagged as an open question in this lesson (and back in Lesson 12) — the theory takes these values as input.",
        },
        {
          id: "c",
          label: "Why neutrinos have mass.",
          correct: false,
          feedback: "Explicitly flagged as beyond the minimal Standard Model treatment given in Lesson 20.",
        },
        {
          id: "d",
          label: "What dark matter is made of.",
          correct: false,
          feedback: "Unrelated to the Higgs mechanism, and explicitly flagged as unresolved.",
        },
      ],
    },
    transferQuestion: {
      prompt:
        "A friend who has completed this course says: 'So basically physics is done — the Higgs mechanism explains where all mass comes from.' Using the established/open/speculative distinction from this lesson, write a two-to-three sentence response.",
      answer:
        "The Higgs mechanism genuinely explains how gauge bosons and fermions acquire mass once the Higgs field's properties are given — that part is an established, precisely tested result. But it doesn't explain why those properties (μ², λ, each Yukawa coupling) take their measured values, doesn't address neutrino mass or dark matter at all, and leaves the naturalness problem and the question of whether fields are fundamental open. 'Explains how' and 'physics is done' are very different claims.",
    },
    nextQuestion:
      "There is no next lesson in this course. From here, the way forward is outward — into the primary sources cited throughout (Tong's lecture notes, the MIT 8.323 syllabus, the PDG Higgs review) for the parts this course only sketched — and back into this platform's interactive laboratory, to consolidate the global U(1) case everything here was built from.",
    references: [{ id: "tong-qft" }, { id: "mit-8323" }, { id: "pdg-higgs" }],
    prerequisites: [20],
    labConnection: {
      sentence:
        "Consolidate everything in this course by returning to the interactive laboratory and exploring the classical global U(1) case end to end.",
      buttonLabel: "Classical global U(1) spontaneous-symmetry-breaking laboratory",
    },
  },
];

// ---------------------------------------------------------------------------
// Full 21-lesson dependency graph, generated from CHAPTERS + LESSONS. Every
// node now carries its real title, status and prerequisites.
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
