/** @jsx jsx */
import { Flex, jsx, useColorMode, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import Navigation from "./navigation";
import SocialLinks from "./social-links";
import { Tooltip } from "@material-ui/core";

type HeaderProps = {
  meta: {
    [key: string]: string;
  };
  nav: {
    title: string;
    slug: string;
    icon: string;
  }[];
};

function tryToLoadColorModeFromSessionStorage() {
  const mode = localStorage.getItem("theme-ui-color-mode");
  if (mode !== null) {
    document.body.setAttribute("data-theme", `${mode}`);
  }
}

const Header = ({ meta, nav }: HeaderProps) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  tryToLoadColorModeFromSessionStorage();
  const navEmpty = nav.length === 0;
  
  return (
    <Flex as="header" variant="layout.header">
      {!navEmpty && <Navigation nav={nav} />}
      <Flex
        sx={{
          fontWeight: `bold`,
          fontSize: 4,
          flex: navEmpty ? 1 : [`1 0 100%`, 1],
          justifyContent: navEmpty ? `flex-start` : `center`,
          order: [1, 2],
        }}
      >
        <img height="80" src="avatar.png" />
        <div className="text-left ml-2 mt-1">
          <Tooltip
            title={
              <div className="text-center fs-160 font-josefinSans">
                <span
                  className="iconify home-icon mb-5"
                  data-icon="ant-design:home-twotone"
                  data-inline="false"
                ></span>{" "}
                <br /> &lt; to home page /&gt;
              </div>
            }
            arrow
          >
            <TLink
              aria-label={`${meta.siteTitle}, Back to homepage`}
              as={Link}
              sx={{
                color: `text`,
                ":hover": { color: `primary`, textDecoration: `none` },
              }}
              to="/"
            >
              <p>
                <span className="display-block">
                  {meta.siteTitle.toLowerCase()}
                </span>
                <span className="font-montserrat ls-1 fs-60 display-block">
                  software developer
                </span>
              </p>
            </TLink>
          </Tooltip>
        </div>
      </Flex>
      <div
        sx={{
          a: {
            fontSize: 4,
            color: `text`,
            display: `flex`,
            alignItems: `center`,
            "&:hover": {
              color: `primary`,
            },
            "&:not(:first-of-type)": {
              ml: 2,
            },
          },
          justifyContent: `flex-end`,
          flex: 1,
          flexFlow: 'row wrap',
          display: `flex`,
          order: 3,
        }}
      >
        <SocialLinks />
        <button
          sx={{ variant: `buttons.toggle`, fontWeight: `semibold` }}
          onClick={toggleColorMode}
          type="button"
          aria-label="Toggle dark mode"
        >
          {isDark ? `Light` : `Dark`}
        </button>
      </div>
    </Flex>
  );
};

export default Header;
