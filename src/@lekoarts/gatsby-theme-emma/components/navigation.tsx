/** @jsx jsx */
import { jsx, Link as TLink, Flex } from "theme-ui";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button/Button";

type NavigationProps = {
  nav: {
    title: string;
    slug: string;
  }[];
};

const Navigation = ({ nav }: NavigationProps) => (
  <Flex
    as="nav"
    sx={{
      border: '1px solid transparent',
      flex: 1,
      justifyContent: `flex-start`,
      order: [2, 1],
      "a:not(:last-of-type)": {
        mr: 3,
      },
    }}
    aria-label="Primary Navigation"
  >
    {nav.map((n) => (
      <TLink
        as={Link}
        sx={{
          color: `text`,
          ":hover": { color: `primary`, textDecoration: `none` },
          fontSize: '110%',
        }}
        key={n.slug}
        to={n.slug}
      >
        <span className="iconify" data-icon="ls:braceleft" data-inline="true"></span> {n.title} <span className="iconify" data-icon="ls:braceright" data-inline="true"></span>
      </TLink>
    ))}
  </Flex>
);

export default Navigation;
