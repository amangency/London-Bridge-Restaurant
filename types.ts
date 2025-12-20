
export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  isNonVeg?: boolean;
  image?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}
