import React from "react";

import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

export default function Navbar() {
  return (
    <Menu
      // onClick={this.handleClick}
      // selectedKeys={[this.state.current]}
      mode="horizontal"
      style={{
        backgroundColor: "#222831",
        borderBottom: "0"
      }}
    >
      <Menu.Item key="mail" />
    </Menu>
  );
}
