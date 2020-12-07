/** @jsx jsx */
import { Box, Link, Flex, jsx } from "theme-ui";

const Footer = () => (
  <Box as="footer" variant="layout.footer">
    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    <br />
    <Flex
      sx={{
        justifyContent: `center`,
        alignItems: `center`,
        height: "30px",
        mt: 2,
        mb: 0,
        color: `text`,
        fontWeight: `semibold`,
        a: { color: `text` },
      }}
    >
      <div sx={{ position: "relative", top: "40%" }}>
        <img
          width="25"
          height="25"
          src="https://img.lekoarts.de/gatsby/logo_w30.png"
          alt="LekoArts Logo"
        />
      </div>
      {` `}
      <Link
        aria-label="Link to the theme's GitHub repository"
        sx={{ ml: 2 }}
        target="_blank"
        href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma"
      >
        Theme
      </Link>
      <div sx={{ mx: 1 }}>by</div>
      {` `}
      <Link
        aria-label="Link to the theme author's website"
        target="_blank"
        href="https://www.lekoarts.de/en"
      >
        LekoArts
      </Link>
    </Flex>
    <Flex
      sx={{
        justifyContent: `center`,
        alignItems: `center`,
        height: "30px",
        margin: 0,
        color: `text`,
        fontWeight: `semibold`,
        a: { color: `text` },
      }}
    >
      <div sx={{ mx: 1 }}>modified by</div>
      {` `}
      <Link
        sx={{ mr: 2 }}
        aria-label="Link to the modified theme author's GitHub"
        target="_blank"
        href="https://github.com/trolit"
      >
        trolit
      </Link>
      {` `}
      <div sx={{ position: "relative", top: "40%" }}>
        <img
          width="25"
          height="25"
          src="avatar.png"
          alt="trolit GitHub avatar"
        />
      </div>
    </Flex>
  </Box>
);

export default Footer;
