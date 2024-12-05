export const FontSizes = {
  h1: {
    mobile: 24,
    web: 32,
  },
  h2: {
    mobile: 20,
    web: 28,
  },
  h3: {
    mobile: 18,
    web: 24,
  },
  h4: {
    mobile: 16,
    web: 20,
  },
  h5: {
    mobile: 14,
    web: 18,
  },
  h6: {
    mobile: 12,
    web: 16,
  },
  body: {
    mobile: 14,
    web: 16,
  },
  small: {
    mobile: 12,
    web: 14,
  },
};

export type FontSizes = (typeof FontSizes)[keyof typeof FontSizes];
