export class MenuItem {
  url: string;
  text: string;
  icon: string;
  isActive: boolean;
  isOpened: boolean;
  hasChild: boolean;
  items: MenuItem[];
}
