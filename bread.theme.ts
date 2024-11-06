const colors = {
  breadgray: {
    "ultra-white": "#F8F8F8",
    white: "#E5E5E5",
    "light-grey": "#D4D4D4",
    grey: "#A3A3A3",
    rye: "#525252",
    toast: "#464646",
    burnt: "#343434",
    "og-dark": "#2E2E2E",
    charcoal: "#242424",
    darkest: "#272727",
    "cta-bg": "#2c2c2c",
    grey300: "#222222",
    grey200: "#1c1c1c",
    grey100: "#181818",
  },
  breadpink: {
    pink: "#f7102a",
    shaded: "#ff5a6c",
    100: "#f7102a",
    200: "#f7102a",
    300: "#f7102a",
    400: "#f7102a",
    500: "#f7102a",
  },
  status: {
    danger: "#D8745C",
    "danger-light": "#CF2800",
    warning: "#F2D54E",
    success: "#9EC958",
  },
  breadviolet: {
    shaded: "#f7102a",
    violet: "#f7102a",
  },
  "button-border": "#f7102a",
};

export const breadTheme = {
  colors,
  fontFamily: {
    pressstart: ["var(--font-pressstart)"],
    redhat: ["var(--font-redhat)"],
    poppins: ["Poppins", "sans-serif"],
  },
  screens: {
    "hero-image": "432px",
    "footer-sm": "580px",
    "footer-md": "600px",
    "footer-lg": "1075px",
  },
  borderRadius: {
    cta: "0.3125rem",
  },
  dropShadow: {
    swap: "0px 0px 50px 0px rgba(0, 0, 0, 0.50)",
  },
  gridTemplateColumns: {
    // Simple 16 column grid
    "faq-trigger": "1fr 24px",

    // Complex site-specific column configuration
    footer: "200px minmax(900px, 1fr) 100px",
  },
  /* @ts-ignore  */
  typography: ({ theme }) => ({
    pink: {
      css: {
        "--tw-prose-body": colors.breadgray.grey100,
        "--tw-prose-headings": theme("colors.neutral[300]"),
        "--tw-prose-lead": theme("colors.neutral[700]"),
        "--tw-prose-links": colors.breadgray.grey100,
        "--tw-prose-bold": theme("colors.neutral[200]"),
        "--tw-prose-counters": theme("colors.neutral[600]"),
        "--tw-prose-bullets": theme("colors.neutral[400]"),
        "--tw-prose-hr": theme("colors.neutral[300]"),
        "--tw-prose-quotes": theme("colors.neutral[900]"),
        "--tw-prose-quote-borders": theme("colors.neutral[300]"),
        "--tw-prose-captions": theme("colors.neutral[700]"),
        "--tw-prose-code": theme("colors.neutral[900]"),
        "--tw-prose-pre-code": theme("colors.neutral[100]"),
        "--tw-prose-pre-bg": theme("colors.neutral[900]"),
        "--tw-prose-th-borders": theme("colors.neutral[300]"),
        "--tw-prose-td-borders": theme("colors.neutral[200]"),
        "--tw-prose-invert-body": theme("colors.neutral[200]"),
        "--tw-prose-invert-headings": theme("colors.neutral[300]"),
        "--tw-prose-invert-lead": theme("colors.neutral[300]"),
        "--tw-prose-invert-links": theme("colors.white"),
        "--tw-prose-invert-bold": theme("colors.white"),
        "--tw-prose-invert-counters": theme("colors.neutral[400]"),
        "--tw-prose-invert-bullets": theme("colors.neutral[600]"),
        "--tw-prose-invert-hr": theme("colors.neutral[700]"),
        "--tw-prose-invert-quotes": theme("colors.neutral[100]"),
        "--tw-prose-invert-quote-borders": theme("colors.neutral[700]"),
        "--tw-prose-invert-captions": theme("colors.neutral[400]"),
        "--tw-prose-invert-code": theme("colors.white"),
        "--tw-prose-invert-pre-code": theme("colors.neutral[300]"),
        "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
        "--tw-prose-invert-th-borders": theme("colors.neutral[600]"),
        "--tw-prose-invert-td-borders": theme("colors.neutral[700]"),
      },
    },
  }),
};
