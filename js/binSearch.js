/**
 *  Hey, here's a binary search (BS) class!
 *
 *  ...that thought you just had?
 *  It's all in your head.
 *  Shame on you.
 *
 *  @class BS
 */
BS = function() {};

/**
 *  In case anyone wanted a list of silly princess names, here one
 *  is. Some are normal, I know, but you can't expect me to extort
 *  fun out of *every* letter in the alphabet.  I'm not a magician.
 *  @property sortedList
 *  @type {Array}
 *  @static
 */
BS.sortedList = [
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
];

BS.prototype.min = 0;
BS.prototype.max = BS.sortedList.length;
BS.prototype.mid = 0;

/**
 *  Finds the given needle in the BS.sortedList haystack.
 *  Will not try to find the needle if it isn't a string.
 *  @method find
 *  @param {String} needle
 *  @return {Number} index of needle in haystack, or -1 if not found
 */
BS.prototype.find = function(needle) {
    var list = BS.sortedList;

    if (typeof(needle) !== 'string') {
        return -1;
    }

    this.min = 0;
    this.max = list.length - 1;
    this.mid = Math.floor((this.min + this.max)/2);

    while (this.min < this.max) {
        if (needle === list[this.mid]) {
            return this.mid;
        } else if (needle < list[this.mid]) {
            this.max = this.mid - 1;
        } else {
            this.min = this.mid + 1;
        }
    }

    return -1;
};
