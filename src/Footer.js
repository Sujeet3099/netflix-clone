import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import logo from './assests/download.svg';

function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <a
        href='https://github.com/Sujeet3099'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiOutlineGithub style={{ color: '#fff', fontSize: '2.2vw' }} />
      </a>
      <img src={logo} alt='' style={{ width: '25vw', marginBottom: '10px' }} />
      <a
        href='https://www.linkedin.com/in/sujeet-kumar-b75b971a0/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <ImLinkedin style={{ color: '#fff', fontSize: '2vw' }} />
      </a>
    </div>
  );
}

export default Footer;
