//	样例:
//		Example 1: s = "abc", t = "ahbgdc"
//		Return true.
//		
//		Example 2: s = "axc", t = "ahbgdc" 
//		Return false.
//	解题思路:
//		这道题目需要判断第一个是否为第二个字符串的子序列。这里我们可以用到双指针移动的方法。以 i 作为第一个字符串 s 的指针，j 为第二个字符串 t 的指针。一开始 i 和 j 都指向字符串的开头，然后每一次我们都将j往后移动一个单位，然后判断 s[i] 是否和 t[j] 相等，如果相等我们就将 i 往后移动一个单位。这样如果最后 i 能移动到 s 的最后一位，那么说明 s 是 t 的子序列，否则不是，因为我们每一步都在检查是否有重复都子序列，指针 j 会检查 t 里面所有可能出现在 s 里面的子序列。总共复杂度为 O(s.length + t.length)。

var str1 = "abc";
var str2 = "abcdef";
var str3 = "abddef";
function isSubsequence(str1,str2){
	var len1 = str1.length;
	var len2 = str2.length;
	for (var i = 0,j = 0; j < len2; j++) {
		if(str1[i]==str2[j]){
			i++;
		}else{
			i = 0;
		}
		if(i==len1){
			return "true";
		}
	}
	return "false";
}
console.log(isSubsequence(str1,str2));
console.log(isSubsequence(str1,str3));
