import React from "react";
import "../styles/main.css"
import Folder from "../components/Folder";

const Home = () => {
  const folders = [
    {
      linkName: '/home',
      text: 'home',
      color: '#b9d2b5'
    },
    {
      linkName: '/wishlist',
      text: 'wishlist',
      color: '#f4cb8d'
    },
    {
      linkName: 'test',
      text: 'speak now',
      color: '#d1b2d2'
    },
    {
      linkName: 'test1',
      text: 'red',
      color: '#8e495b'
    },
    {
      linkName: 'zzz',
      text: '1989',
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
            folderColor={folder.color ? folder.color : ''}
          />
        </div>
      )
    }))
  }

  return (
    <>
        <div className='folders'>
          {renderFolders()}
        </div>
        <div className='title-only'>
          <h3>hi. i like sharks.</h3>
        </div>
    </>
  );
};

export default Home