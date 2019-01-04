const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

// helper function
function formatStr(string) {
  return string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = isAnagram;
