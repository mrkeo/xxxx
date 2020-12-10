/** @jsx jsx */
import { jsx, Link as TLink, Flex } from "theme-ui";
import { Link } from "gatsby";

type NavigationProps = {
  nav: {
    title: string;
    slug: string;
    icon: string;
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
        <span className="iconify center-horizontally pageIcon" data-icon={n.icon ? n.icon : "bx:bx-error"} data-inline="false" style={{height: '32%', width: '32%'}}></span>
        <span className="iconify" data-icon="ls:braceleft" data-inline="true"></span> {n.title} <span className="iconify" data-icon="ls:braceright" data-inline="true"></span>
      </TLink>
    ))}
  </Flex>
);

export default Navigation;
