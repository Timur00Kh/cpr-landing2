import React from 'react';
import {
  DesignIcon,
  EducationIcon,
  FactoryIcon,
  HomeIcon,
  MarketingIcon,
  RetailIcon
} from '@/segments/03. ThirdSections/icons';

interface Item {
  id: number;
  icon: React.FC;
  title: string;
}

export const thirdSectionItems: Item[] = [
  { id: 1, icon: HomeIcon, title: 'Недвижимость' },
  { id: 2, icon: RetailIcon, title: 'Ритейл' },
  { id: 3, icon: EducationIcon, title: 'Образование' },
  { id: 4, icon: MarketingIcon, title: 'Маркетинг' },
  { id: 5, icon: FactoryIcon, title: 'Промышленность' },
  { id: 6, icon: DesignIcon, title: 'Дизайн' }
];
