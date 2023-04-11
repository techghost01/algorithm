let vowel =['a', 'e', 'i', 'o', 'u']

function algo(str) {
  let volcount = 0;
  let lettercount = 0;
  let wordcount = 0;

  for (let count of str.toLowerCase()) {
    if (vowel.includes(count)){
      volcount++
    }

    if(count.length){
      lettercount++

    }
  }
  let split = str.split("")
    for (let i = 0; i < split.length; i++) {
      if (split[i] != "") {
        wordcount++
      }
    }

    console.log('The number of vowels in the sentence: ${volcount}')
    console.log('The length of the sentence: ${lettercount}')
    console.log('The number of words in the sentence: ${wordcount}')

    // return volcount
    // return lettercount

}

algo ('My name is yunus')