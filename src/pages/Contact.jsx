import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  
  //대화를 담는 배열
  const talk = [
    { type: 'left', text: '안녕하세요!'},
    { type: 'left', text: '문의사항은 하단에 이메일과 내용을 적어 보내주세요.'},
    { type: 'left', text: ': )'},
  ];

  const [newList, setNewList] = useState([]); //대화 리스트
  const [email, setEmail] = useState(""); //이메일
  const [textarea, setTextarea] = useState(""); //textarea
  
  let emailText;
  let emailTextLength;
  let textAreaTextLength;
  let totalText; //이메일 + 텍스트

  //Email
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
  emailText = 'Email : '+ email;
  emailTextLength = email.length;
  
  //TextArea
  const onTextAreaChange = (e) => {
    setTextarea(e.target.value)
  }
  textAreaTextLength = textarea.length;
  totalText = emailText +` \n `+ textarea;
  
  let newLocal = JSON.parse(localStorage.getItem('contact'));

  //Submit
  const Submit = () => {
    
    setNewList((item) => [...item, { type: 'right', text: totalText}])
    
    setTimeout(() => {
      setNewList((item) => [...item, { type: 'left', text: '빠른 시일 내에 연락 드리겠습니다! \n감사합니다 : )'}])
    }, 1500);
    
    setEmail(['']);
    setTextarea(['']);
    
    localStorage.setItem('contact', JSON.stringify(newList));
    
    let newLocal = JSON.parse(localStorage.getItem('contact'));
    newLocal.push({ type: "right", text: totalText},{ type: 'left', text: '빠른 시일 내에 연락 드리겠습니다! \n감사합니다 : )'})
    localStorage.setItem('contact', JSON.stringify(newLocal));
  }
  
  
  useEffect(()=>{
    
      if( localStorage.getItem('contact')) {
     
        for (let i = 0; i < newLocal.length; i++) {
          setNewList((item) => [...item, newLocal[i]]);
        }
        
      } else {
        
        let delay = 0;
        
        for (let i = 0; i < talk.length; i++) {
          
          delay += 1500;
          setTimeout( () => {
            setNewList((item)=>[...item,talk[i]])
          }, delay);
          
        }
        
      }
   
        
  },[])
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  
    emailjs
      .sendForm('seoha_emali', 'template_c6khksc', form.current, {
        publicKey: 'iyLgKlhbyWshF0DM3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      Submit();
  };
  
  return (
    <div className='tabContent contact'>
      
      <div className="talk">
    
        <ul id='talkList'>
          { 
            newList.map((item, id)=> <li key={id} className={item.type} ><span>{item.text}</span></li>)
          }
        </ul>
      </div>
      
      <div className="textBox">
        <form ref={form} onSubmit={sendEmail}>
          
          <div className="inputBox">
            <label htmlFor="emailValue"><span>Email : </span><input type="email" name="user_email" id="emailValue" value={email} onChange={onEmailChange} placeholder='이메일을 적어주세요.' required="required"/></label>
            <textarea name="user_message" id="content" placeholder='내용을 적어주세요.' value={textarea} onChange={onTextAreaChange} required="required"></textarea>
          </div>
          
          <div className="submit">
            <input type='submit' value={'전송'} className={emailTextLength > 1 && textAreaTextLength > 1 ? 'on' : ''}/>
          </div>
        </form>
        
      </div>
      
    </div>
  )
}

export default Contact