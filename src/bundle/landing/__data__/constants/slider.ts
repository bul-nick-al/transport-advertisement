// TODO Remove unused dictionary
const dictionary = Object.freeze({
    district: 'район',
    districts: 'Районы',
    formats: 'форматы:',
    auditory: 'аудитория',
    cost: 'цена',
    reset: 'сбросить все фильтры',
    audText: 'аудитория чел',
    costTextPrefix: 'Стоимость: ',
    costTextPostfix: ' руб/месяц.',
    formatPrefix: 'Формат: ',
    liftsPrefix: 'Лифты: ',
    liftsPostfix: ' шт.',
    companyPrefix: 'Компания: ',
    districtTextPrefix: 'Район: ',
    more: 'more',
});
const Colors = Object.freeze({
    mainColor: '#2ea2f8',
    notActiveColor: '#ced0da',
    notActiveTextColor: '#565f6d',
    notActiveBorderColor: '#e7e9ed',
    grayColor: '#848c98',
    gray2: '#7383a1',
    white: 'white',
    orangeColor: '#ff7800',
    graishListBg: '#f1f4f8',
    alternativeGraish: '#eff3f6',
    bluish: '#354052',
    green: '#249533',
    gradients: {
        green: {
            color1: '#39b54a',
            color2: '#34aa44',
        },
        white: {
            color1: '#fff',
            color2: '#f2f4f7',
        },
    },
    lightBlue: '#57c5f7',
    grayText: '#555',
    lightGray: '#ccc',
});
const FONTS_STACK = Object.freeze({
    PROXIMA_NOVA: 'Proxima Nova, Georgia, sans-serif',
});
export { Colors, dictionary, FONTS_STACK };
