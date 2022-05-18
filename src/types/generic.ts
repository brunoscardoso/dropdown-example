export interface MenuItemProps {
  id: number;
  label: string;
  onClick: () => void;
}

export interface MenuProps {
  menuItems?: MenuItemProps[];
}