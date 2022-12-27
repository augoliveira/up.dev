import { useState, useEffect } from 'react';
type EffectState = 'Typing' | 'Erasing';
function useTyping(wordsArray: Array<string>) {
  const [words, setWords] = useState(wordsArray);
  const [typedWord, setTypedWord] = useState('');
  const [effectState, setEffectState] = useState<EffectState>('Typing');
  function moveTheFirstWordElementToTheEndOfArray() {
    const firstWord = words[0];
    words.shift();
    words.push(firstWord);
  }
  function eraseTheWordLetterByLetter() {
    if (effectState == 'Erasing') {
      setTimeout(() => {
        setTypedWord((value) => value.slice(0, value.length - 1));
        console.log(typedWord);
      }, 1000);
    }
  }
  function TypeTheWordLetterByLetter(text: string) {
    if (effectState == 'Typing') {
      setTimeout(() => {
        setTypedWord(text.slice(0, typedWord.length + 1));
      }, 1000);
    }
  }
  useEffect(() => {
    switch (effectState) {
      case 'Typing':
        // checa se terminou de digitar a palavra
        if (typedWord == words[0]) {
          setEffectState('Erasing');
          eraseTheWordLetterByLetter();
        } else {
          TypeTheWordLetterByLetter(words[0]);
        }
        break;
      case 'Erasing':
        // checa se terminou de apagar a palavra
        if (typedWord && effectState == 'Erasing') {
          eraseTheWordLetterByLetter();
        } else {
          moveTheFirstWordElementToTheEndOfArray();
          setEffectState('Typing');
        }
        break;
    }
  }, [effectState, typedWord]);
  return typedWord;
}
export default useTyping;
