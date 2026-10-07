const content = {
  product: "Observify",
  company: "omercakirr",
  domain: "omercakirr.com",
  email: "omer.cakir@omercakirr.com",
  github: "https://github.com/omercakir2/network_practices",
  githubLabel: "github.com/omercakir2/network_practices",

  nav: {
    aria: "Primary",
    features: "Features",
    solution: "Solution",
    about: "About",
    contact: "Contact",
    cta: "Request Early Access",
    menuToggle: "Toggle navigation menu",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
  },

  hero: {
    pill: "On-premises Network Intelligence",
    headline: "See the live LAN, forecast the load, keep the data on-premises.",
    subheadline:
      "Observify discovers devices on your local IPv4 network, stores scan history on your own host, and uses Anthropic Claude to explain forecasts and assist operators — without sending raw telemetry to a third-party cloud.",
    primaryCta: "Request Early Access",
    secondaryCta: "View Documentation",
    shotAlt:
      "Observify operations map showing discovered LAN devices, interface links, and a live inspector panel.",
    meta: [
      { label: "Deploy", value: "Docker Compose on a Linux host" },
      { label: "Store", value: "TimescaleDB on your subnet" },
      { label: "Reasoning", value: "Anthropic Claude API" },
    ],
  },

  features: {
    id: "features",
    label: "Capabilities",
    title: "Discovery, history, forecast, and the map — one local pipeline.",
    lead: "Small and mid-size networks are still run with periodic scans and static diagrams. Observify treats inventory, traffic samples, prediction, and visualization as a single on-premises console.",
    items: [
      {
        kicker: "01",
        title: "Local subnet discovery",
        body: "A Go scanner finds hosts with ICMP, then ARP, and can collect inventory over SSH. It records IP, MAC, vendor, hostname, device type, and interface samples — limited to the customer subnet.",
      },
      {
        kicker: "02",
        title: "On-prem time-series store",
        body: "TimescaleDB keeps scan history, device samples, and interface rates on the customer host. Topology and traffic stay in the local database, not in a vendor cloud.",
      },
      {
        kicker: "03",
        title: "Claude-assisted forecast",
        body: "The LSTM next-step model is the baseline. Claude replaces that narrow number with a forecast that uses recent samples, device role, and operator context — and can say what moved.",
      },
      {
        kicker: "04",
        title: "Interactive operations map",
        body: "A React console polls the local Go API and draws the LAN as a drag-and-zoom graph. Operators inspect devices, links, and traffic without leaving the host.",
      },
    ],
  },

  solution: {
    id: "solution",
    label: "Architecture",
    title: "The scanner and store stay. The prediction layer is designed to change.",
    lead: "Today the loop is proven: discover the LAN, write samples, forecast load, refresh the map. The product path is to swap brittle classical ML for Claude without rebuilding discovery or storage.",
    steps: [
      { name: "Scanner", detail: "Go · ICMP / ARP / SSH" },
      { name: "TimescaleDB", detail: "History, samples, rates" },
      { name: "Claude layer", detail: "Forecast, explain, assist" },
      { name: "Go read API", detail: "Inventory and predictions" },
      { name: "React map", detail: "Live operations console" },
    ],
    notes: [
      {
        title: "Swappable prediction",
        body: "LSTM remains a fallback while the AI layer is proven. It can be narrowed to specific signals or retired. Forecasting is isolated so the method can change without a rewrite of the scanner or the database.",
      },
      {
        title: "On-prem by design",
        body: "Scanning is limited to the local subnet. Credentials stay in the local environment. Configuration help is drafted for review. Nothing is applied silently.",
      },
    ],
    shotAlt:
      "Observify path inspector showing hops, interface names, and device identity on a local network map.",
  },

  claude: {
    id: "architecture",
    label: "Powered by Anthropic Claude",
    title: "Claude reads what Observify already collected. It does not replace the scanner or the database.",
    lead: "Anthropic Claude is both a development partner and the product reasoning layer. The model is invoked on operator-scoped context drawn from the local store — not as a continuous telemetry pipeline.",
    uses: [
      {
        title: "Forecasting layer",
        body: "Claude receives recent interface samples, device role, and inventory deltas, then returns a next-step load forecast with a written rationale: which signal moved, which device is driving it, and how confident the read is.",
      },
      {
        title: "Live analysis",
        body: "Chat-style assistants sit on current inventory, interface rates, and forecasts. Operators ask which host is driving load, or what changed since the last scan, and get an answer grounded in local history.",
      },
      {
        title: "Troubleshooting",
        body: "Guided diagnosis from a symptom to a likely cause uses the platform’s own scan history rather than a generic runbook. The model proposes an inspection path; the operator decides.",
      },
      {
        title: "Configuration drafts",
        body: "Proposed changes are written from observed state, with explicit human review before anything is applied. Secrets and device access never leave the premises.",
      },
    ],
    handling: [
      {
        title: "Model utilization",
        body: "Claude API models handle long context over compact summaries of samples and inventory. Prompt workflows keep discovery facts, time-series windows, and the operator question in one request so the answer can cite local evidence.",
      },
      {
        title: "Data handling",
        body: "Inventory, samples, and credentials remain on the customer host. Claude is called on operator-initiated questions and scoped summaries. Raw packet captures and secrets are not sent as a monitoring backend.",
      },
      {
        title: "Why Claude over LSTM alone",
        body: "The LSTM path needs clean samples, retraining loops, and features that break when the network changes. It cannot explain a forecast or relate it to config drift. Claude can revise the method, name the cause, and suggest a reviewable fix.",
      },
    ],
    footnote:
      "During development, Claude also accelerates schema and API design, scanner–forecast integration, test coverage, and safe refactors as the prediction method changes.",
  },

  about: {
    id: "about",
    label: "About",
    title: "A local network copilot that gets more useful as the methods improve.",
    paragraphs: [
      "omercakirr builds Observify for teams that need continuous visibility into what is on the network, how it is behaving, and what is likely to happen next — without giving up control of the data.",
      "Existing tools either take heavy setup or push sensitive topology and traffic off-site. Inventory goes stale. Interface load is noticed after a complaint. Configuration still depends on whoever happens to know the device.",
      "The current Docker Compose stack proves the loop on a Linux host and a private subnet. The startup path is to replace brittle ML forecasting with Claude that can predict, explain, and assist, then extend that into live analysis and safer configuration.",
    ],
    facts: [
      { label: "Company", value: "omercakirr" },
      { label: "Product", value: "Observify" },
      { label: "Domain", value: "omercakirr.com" },
      { label: "Repository", value: "omercakir2/network_practices", href: "https://github.com/omercakir2/network_practices" },
    ],
  },

  contact: {
    id: "contact",
    label: "Contact",
    title: "Request early access or a technical walkthrough.",
    lead: "For early access, partner review, or architecture questions, write to the company mailbox. It matches the omercakirr.com domain used on this site.",
    emailLabel: "Company email",
    githubLabel: "Source and documentation",
    cta: "Email omercakirr",
  },

  legal: {
    privacy: {
      id: "privacy",
      title: "Privacy",
      body: [
        "Observify is designed so network inventory, traffic samples, and device credentials stay on the customer’s own infrastructure.",
        "This marketing site does not run the product scanner and does not collect LAN telemetry. The contact address is omer.cakir@omercakirr.com. Email you send there is used to answer access, partnership, and product questions.",
        "When Claude is used inside the product, it is invoked on operator-initiated questions and compact, scoped context from the local store. It is not used as a sink for raw telemetry.",
      ],
    },
    terms: {
      id: "terms",
      title: "Terms",
      body: [
        "Observify is an on-premises network intelligence product from omercakirr. Early access is offered at the company’s discretion.",
        "The software is intended for use on networks you are authorized to operate. Scanning is limited to the local subnet configured by the customer. Configuration suggestions are advisory and require explicit review before they are applied.",
        "Documentation and source for the current stack are published at the public GitHub repository linked on this site.",
      ],
    },
  },

  footer: {
    blurb: "On-premises LAN intelligence from omercakirr.",
    privacy: "Privacy",
    terms: "Terms",
  },
};

export default content;
