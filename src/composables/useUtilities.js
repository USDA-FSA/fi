import { ref } from 'vue';

export function useUtilities() {

  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
      };
    }

    // Get the closest matching element
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
      if ( elem.matches( selector ) ) return elem;
    }

    return null;
  }

  const getAnimationString = (el) => {
    let str = "";
    let t;
    let animations = {
      'animation':'animationend',
      'OAnimation':'oAnimationEnd',
      'MozAnimation':'animationend',
      'WebkitAnimation':'webkitAnimationEnd'
    };
    for (t in animations) {
      if ( typeof el.style[t] !== 'undefined' ) str = animations[t];
    }
    return str;
  }

  const hasClass = (elem, classname) => {
    return (' ' + elem.className + ' ').indexOf(' ' + classname + ' ') > -1;
  }

  const removeDuplicates = (_arr, _key) => {
    return [...new Map(_arr.map(v => [v[_key], v])).values()]
  };

  const getPropertyFromId = (_id, _key, _arr) => {
    let tab = _arr.find(item => item.id == _id);
    return tab[ _key ];
  }

  const setPropertyFromId = (_id, _key, _val, _arr) => {
    let tab = _arr.find(item => item.id == _id);
    if(tab[ _key ]) tab[ _key ] = _val;
  }

  const setPropertyFromProperty = (_val, _prop, _prop2, _val2, _arr) => {
    let derp = _arr.find(item => item[_prop] == _val );
    derp[ _prop2 ] = _val2;
  }


  return {
    getClosest,
    getAnimationString,
    hasClass,
    removeDuplicates,
    getPropertyFromId,
    setPropertyFromId,
    setPropertyFromProperty
  }
}