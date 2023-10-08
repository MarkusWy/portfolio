
import React, {Fragment, useRef, useState, useEffect} from 'react';
import styled from '@emotion/styled';
  
const Text = styled.h1`
`;

function App() {
  const [isFocused, setIsFocused] = useState(false); 
  // Creating a ref object using useRef hook 
  const focusPoint = useRef(null); 
  const focusPoint2 = useRef(null);
  const focusPoint3 = useRef(null);
  const focusPoint4 = useRef(0);

  const onClickHandler = () => { 
    focusPoint.current.value = 
      "The quick brown fox jumps over the lazy dog"; 
      focusPoint.current.focus();
      if(focusPoint2.current) {
        focusPoint2.current.value = "testar";
      }
      focusPoint4.current = focusPoint4.current + 1;
      focusPoint.current.style.rotate ='90';
      console.log(focusPoint.current.style);
  };

  const sendForm = () => {
    console.log(focusPoint?.current?.value, focusPoint2?.current?.value, focusPoint3?.current?.value);
    setIsFocused(!isFocused);
  }

  // const onClickHandler2 = () => { 
  //     setIsFocused(!isFocused);
  // };

  console.log('component did render');
  console.log(focusPoint);
  focusPoint3.current = "tjohejsan";
  console.log(focusPoint3);


  useEffect(() => {
    console.log('rendering from useEffect');
  }, [focusPoint4.current]);

  return ( 
    <Fragment> 
      <div> 
        <button onClick={onClickHandler}> 
         ACTION 
        </button> 
      </div> 
      <label> 
       Click on the action button to  
       focus and populate the text. 
      </label><br/> 
      <textarea ref={focusPoint} />
      <textarea ref={focusPoint2} /> 
      <textarea ref={focusPoint} /> 
      { isFocused &&
        <textarea ref={focusPoint2} /> 
      }
      <Text color="black">{isFocused ? 'är fokuserad' : 'är inte det'}</Text>
      <button onClick={sendForm}/>



      {/* <div> 
        <button onClick={onClickHandler2}> 
         ACTION 
        </button> 
      </div> 
      <label> 
       Click on the action button to  
       focus and populate the text. 
      </label><br/> 
      <textarea value={isFocused ? "The quick brown fox jumps over the lazy dog" : null} focus={isFocused ? true : false}/>  */}
    </Fragment> 
  ); 
}; 
  
export default App;