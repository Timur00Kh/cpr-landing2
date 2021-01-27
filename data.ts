export const data = {
  phone: '8 800 100-32-87',
  address:
    'г. Казань ул. Петербургская д. 52 IT PARK (технопарк в сфере высоких технологий)',
  phone_plain: '+78001003287',
  title: 'Разработка виртуальной и дополненной реальности',
  instagram: 'https://www.instagram.com/cpr.tech.team',
  youtube:
    'https://www.youtube.com/channel/UCF4M4piGNpKO-qEbqDgINrw/videos?view=0&sort=dd&shelf_id=1',
  telegram: 'https://telegram.me/joinlogic',
  description:
    'Заказать создание проектов VR и AR проектов под ключ. Виртуальные экскурсии, туры и презентации по низкой цене',
  keywords: 'VR, AR, Разработка, виртуальная, дополненная, реальность',
  yamap_iframe:
    'https://yandex.ru/map-widget/v1/?um=constructor%3A90b292415221bbca8f3c6e31a9520fb97611f4a791d51333ea77a2505bfcf8c1&amp;source=constructor',
  yamap_link: 'https://yandex.ru/maps/-/CCUMI6A2tC'
};

const re = /\S+@\S+\.\S+/;
export function isValidEmail(email: string): boolean {
  return re.test(email);
}
