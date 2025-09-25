import React from 'react';
import Container from './Container';

const ToggleBtns = ({ toggleBtnClick, setToggleBtnClick, btns }) => {
  return (
    <Container>
      <div className="text-right ">
        {btns.map((btn, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                setToggleBtnClick(btn);
                console.log('Clicked:', btn);
              }}
              className={`${btn == btns[0] && 'rounded-l-lg'} toggle-btn ${
                btn == btns[btns.length - 1] && 'rounded-r-lg'
              } ${toggleBtnClick === btn && '!bg-slate-800 !text-purple-600'}`}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </Container>
  );
};

export default ToggleBtns;
