import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';

interface Item {
  id: number;
  title: string;
  img: string;
}

export const secondSectionItems: Item[] = [
  { id: 1, title: 'Виртуальные игры', img: img1 },
  { id: 2, title: 'AR приложения', img: img2 },
  { id: 3, title: 'VR приложения', img: img3 },
  { id: 4, title: 'Виртуальные тренажеры', img: img4 },
  { id: 5, title: 'Виртуальные симуляторы', img: img5 },
  { id: 6, title: 'Виртуальные экскурсии', img: img6 },
  { id: 7, title: 'Виртуальные презентации', img: img7 },
  { id: 8, title: 'Виртуальные каталоги', img: img8 },
  { id: 9, title: 'Программы для очков', img: img9 }
];
