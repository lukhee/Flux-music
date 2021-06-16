import React, { useState } from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from 'reactstrap';
import profileImage from '../../assets/images/avatar-2.jpg';

const UserProfile = ({ name = 'FullName', imageUrl }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav className="py-0 ms-1">
          <img
            style={{
              height: '36px',
              width: '36px',
              backgroundColor: '#f1f5f7',
              padding: '3px',
            }}
            src={profileImage}
            className="rounded-circle"
            alt="..."
          ></img>
          <span className="fs-6 fw-bold text-white"> Daniel J. </span>
        </DropdownToggle>
        <DropdownMenu
          right
          style={{
            left: '35px',
            borderRadius: '5px',
            minWidth: '7rem',
          }}
        >
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
