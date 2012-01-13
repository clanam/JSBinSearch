/**
 *  Hey, here's a binary search (BS) object!
 *
 *  ...that thought you just had?
 *  It's all in your head.
 *  Shame on you.
 */
if (typeof(BS) === 'undefined') {
    BS = {};
}

BS.sortedList = {
    'Amethyst',
    'Begonia',
    'Cinderella',
    'Daisy',
    'Esmeralda',
    'Forest',
    'Georgiana',
    'Henrietta',
    'Ivy',
    'Jasmine',
    'Krystal',
    'Lily',
    'Misty',
    'Natalia',
    'Opal',
    'Pearl',
    'Queenie',
    'Ruby Rose',
    'Sapphire',
    'Thalia',
    'Urania',
    'Venus',
    'WTFia',
    'Xenia',
    'Yolanda',
    'Zulaya'
};

BS.find = function(needle) {
    if (typeof(needle) !== 'string') {
        return -1;
    }

    var list = BS.sortedList,
        min = 0,
        max = list.length - 1,
        mid = floor((min + max)/2);

    while (min < max) {
        if (needle === list[mid]) {
            return mid;
        } else if (needle < list[mid]) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return -1;
};
