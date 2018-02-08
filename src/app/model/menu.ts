export class MenuItem {
  id: number;
  parentId: number;
  url: string;
  text: string;
  icon: string;
  isActive: boolean;
  isOpened: boolean;
  hasChild: boolean;
  items: MenuItem[];
}
