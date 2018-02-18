//https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna){
  var decoder = { A : 'T', T : 'A', G : 'C', C : 'G' };
  return dna.split('').reduce((x, y) => x += decoder[y],'');
}