const Methods = {
  convert_url: function (path, link) {
    let link1 = link?.split(" ").join("_");
    return `/${path}/${this.convertString(link1)}`
  },

  convertString: function (phrase) {
    let maxLength = 50;

    let returnString = phrase.toLowerCase();
    //Convert Characters
    returnString = returnString.replace(/ö/g, 'o');
    returnString = returnString.replace(/ç/g, 'c');
    returnString = returnString.replace(/ş/g, 's');
    returnString = returnString.replace(/ı/g, 'i');
    returnString = returnString.replace(/ğ/g, 'g');
    returnString = returnString.replace(/ü/g, 'u');
    returnString = returnString.replace(/ə/g, 'e');
    returnString = returnString.replace(/_/g, '-');
    returnString = returnString.replace(/&/g, 'and');

    // if there are other invalid chars, convert them into blank spaces
    returnString = returnString.replace(/[^a-z0-9\s-]/g, "");
    // convert multiple spaces and hyphens into one space
    returnString = returnString.replace(/[\s-]+/g, " ");
    // trims current string
    returnString = returnString.replace(/^\s+|\s+$/g, "");
    // cuts string (if too long)
    if (returnString.length > maxLength)
      returnString = returnString.substring(0, maxLength);
    // add hyphens
    returnString = returnString.replace(/\s/g, "-");

    return returnString;
  }
}

module.exports = Methods;
