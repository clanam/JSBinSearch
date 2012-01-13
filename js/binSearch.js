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
BS.prototype.needle = '';

/**
 *  Finds the given needle in the BS.sortedList haystack.
 *  Will not try to find the needle if it isn't a string.
 *  @method find
 *  @param {String} needle
 *  @return {Number} index of needle in haystack, or -1 if not found
 */
BS.prototype.find = function(needle) {
    if (typeof(needle) !== 'string') {
        return -1;
    }

    this.initialize(needle);

    while (!this.isSearchOver()) {
        this.step();
    }

    return -1;
};

/**
 *  Reset the search status.
 *  @method initialize
 *  @param {String} needle item being searched for
 */
BS.prototype.initialize = function(needle) {
    this.min = 0;
    this.max = BS.sortedList.length - 1;
    this.needle = needle;
};

/**
 *  Perform one step in the search.
 *  @method step
 *  @return {Boolean} if this.mid is the index of needle
 */
BS.prototype.step = function() {
    var list = BS.sortedList;

    this.mid = Math.floor((this.min + this.max)/2);

    if (this.needle === list[this.mid]) {
        this.min = this.max = this.mid;
        return true;
    } else if (this.needle < list[this.mid]) {
        this.max = this.mid - 1;
    } else {
        this.min = this.mid + 1;
    }

    return false;
};

/**
 *  Returns true if needle cannot be in haystack.
 *  @method isSearchOver
 *  @return {Boolean}
 */
BS.prototype.isSearchOver = function() {
    return this.min > this.max;
};
