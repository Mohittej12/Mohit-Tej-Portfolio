import { useState, useEffect } from 'react';

export function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 2000) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(handleTyping, typingSpeed);
      } else {
        timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return text;
}
