import React, { useState } from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from 'reactstrap';

const UserProfile = ({ name = 'FullName', imageUrl }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav className="py-0 ms-1">
          <img src="..." class="img-thumbnail rounded-circle me-1" alt="..."></img>
          Full-Name
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Accout</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default UserProfile;
