import React from "react";
import "../styles/main.css"
import Folder from "../assets/Folder";

const Home = () => {
  return (
    <div>
      <div className='wave'/>
      <div className='container'>
        <div className='folders'>
        <div class="item">
          <Folder
            linkName={'wishlist'}
            text={'wishlist'}
            folderColor={'#87A8C7'}
          />
        </div>
        
        <div class="item">
          <Folder
            text={'test'}
            folderColor={'#87A8C7'}
          />
        </div>

        <div class="item">
          <Folder
            text={'test'}
            folderColor={'#87A8C7'}
          />
        </div>

        <div class="break"></div>
        
        <div class="item">
          <Folder
            text={'test'}
            folderColor={'#87A8C7'}
          />
        </div>
                
        <div class="item">
          <Folder
            text={'test'}
            folderColor={'#87A8C7'}
          />
        </div>
                
        <div class="item">
          <Folder
            text={'test'}
            folderColor={'#87A8C7'}
          />
        </div>

        </div>
        <div className='title-only'>
          <h3>hi. i like sharks.</h3>
        </div>
      </div>
    </div>
  );
};

export default Home