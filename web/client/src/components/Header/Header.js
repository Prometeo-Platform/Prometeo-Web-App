import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from "carbon-components-react/lib/components/UIShell";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
import Search20 from "@carbon/icons-react/lib/search/20";

const TutorialHeader = () => (
  <Header aria-label="Prometeo">
    <SkipToContent />
    <HeaderName href="/" prefix="Prometeo">
      Platform
    </HeaderName>
    <HeaderNavigation aria-label="Prometeo Dashboard">
      <HeaderMenuItem isCurrentPage href="#">
        Dashboard
      </HeaderMenuItem>
      <HeaderMenu aria-label="Administration" menuLinkName="Administration">
        <HeaderMenuItem href="#">
          Events / Eventos
        </HeaderMenuItem>
        <HeaderMenuItem href="#">
          Devices / Dispositivos
        </HeaderMenuItem>
        <HeaderMenuItem href="#">
          Firefighters / Bomberos
        </HeaderMenuItem>
        <HeaderMenuItem href="#">
          Reports
        </HeaderMenuItem>
      </HeaderMenu>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Search">
        <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default TutorialHeader;
