function findLongestSubstring(str) {
  if (str.length === 0) {
    return 0;
  }
  let temp = "";
  let count = 0;
  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    idx = temp.indexOf(str[i]);
    if (idx === -1) {
      temp = temp.concat(str[i]);
    } else {
      if (temp.length > count) {
        count = temp.length;
      }

      temp = temp.slice(idx + 1);
      temp = temp.concat(str[i]);
    }
  }
  return temp.length > count ? temp.length : count;
}

function betterFindLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
