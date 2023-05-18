import React from 'react';
import './index.scss';

const Modal = ({open, setOpen, children}) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          {children}
        </div>
    </div>
);

function App() {

  const [open, setOpen] = React.useState(false);
  
  

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      {/* рендер модального окна по клику */}
      {/* {
        open && (
          <div className="overlay">
            <div className="modal">
              <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
              <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
            </div>
          </div>
        )
      } */}
      {/* анимированная демонстрация dom элемента модального окна по клику */}
      {/* <div className={`overlay animated ${open ? 'show' : ''}`}>
          <div className="modal">
            <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
          </div>
      </div> */}
      {/* рендер модального окна по условию */}
      {/* {open && <Modal open={open} setOpen={setOpen}/>} */}
      <Modal open={open} setOpen={setOpen}>
        <h3>Модальное окно</h3>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
      </Modal>
    </div>
  );
}

export default App;
