import Typography from "typography";

const typography = new Typography({
  baseFontSize: "13px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Raleway", "serif"],
  bodyFontFamily: ["Hind"],
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;

// source: https://www.digitalocean.com/community/tutorials/gatsbyjs-custom-fonts-in-gatsby
