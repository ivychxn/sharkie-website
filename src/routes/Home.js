import React from "react";
import "../styles/main.css"
import Folder from "../assets/Folder";

const Home = () => {
  const folders = [
    {
      linkName: '/home',
      text: 'home',
      color: '#87A8C7'
    },
    {
      linkName: '/Wishlist',
      text: 'wishlist',
      color: '#87A8C7'
    },
    {
      linkName: 'test',
      text: 'test',
      color: '#87A8C7'
    },
    {
      linkName: 'test1',
      text: 'test2',
      color: '#87A8C7'
    },
    {
      linkName: 'zzz',
      text: 'zzzzz',
      color: '#87A8C7'
    }
  ]

  const renderFolders = () => {
    return (folders.map((folder, idx) => {
      return (
        <div className={'folder-item'} key={idx}>
          <Folder
            linkName={folder.linkName}
            text={folder.text}
            color={folder.color ? folder.color : ''}
          />
        </div>
      )
    }))
  }

  return (
    <div>
      <div className='wave'/>
      <div className='container'>
        <div className='folders'>
          {renderFolders()}
        </div>
        <div className='title-only'>
          <h3>hi. i like sharks.</h3>
        </div>
      </div>
    </div>
  );
};

export default Home