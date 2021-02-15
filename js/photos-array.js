const COMMENTS_ARRAY = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Крутая фотка',
    'Четко выглядишь',
    'Это ты в Антарктиде?',
    'Так себе фотография',
    ];
    const RANDOM_MESSAGES = [
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    ];
    const AVATAR_NAMES = [
    'Максим',
    'Валентин',
    'Сергей',
    'Маргарита',
    ];
    let photosArray = (new Array(25)).fill(undefined).map (
    (_, index) => ({
    url: 'photos/' + index + '.jpg',
    id: index,
    likes: Math.floor(Math.random() * 185 + 15),
    description: randomElement(COMMENTS_ARRAY),
    comments:{
    id: index,
    avatar: 'img/avatar:' + Math.floor(1 + Math.random() * (6 + 1 - 1)) + '.svg',
    message: randomElement(RANDOM_MESSAGES),
    name: randomElement(AVATAR_NAMES),
    },
    }),
    )
    photosArray()
    import{randomElement, randomNumber} from '/util.js';
    export {COMMENTS_ARRAY, RANDOM_MESSAGES, AVATAR_NAMES, photosArray};