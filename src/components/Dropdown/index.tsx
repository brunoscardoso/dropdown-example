import React, { useState } from "react";

import MoreIcon from "../../assets/icons/MoreIcon";

import * as S from "./styles";

import { MenuProps, MenuItemProps } from "../../types/generic";

export default function Dropdown({ menuItems }: MenuProps) {
  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <S.Container>
      <S.Button onClick={handleMenu}>
        <MoreIcon color="white" size={32} />
      </S.Button>
      {showMenu && (
        <S.UL>
          {menuItems?.map((item: MenuItemProps) => (
            <S.LI>
              <S.MenuButton
                onClick={() => {
                  setShowMenu(!showMenu);
                  item.onClick();
                }}
              >
                <S.Label>{item.label}</S.Label>
              </S.MenuButton>
            </S.LI>
          ))}
        </S.UL>
      )}
    </S.Container>
  );
}
