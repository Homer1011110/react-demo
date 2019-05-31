import React, { Component } from 'react'
import { withRouter } from 'react-router'
import ThemeContext from '../../context/theme'
import Modal from './Modal'
import { PhotoSwipe } from 'react-photoswipe';

let items = [
  {
    src: 'http://12.url.cn/k12_tiku/2433797715/a56b7dd3-8cd0-4d0a-bc40-4e3fc2e2e29a/',
    w: 411,
    h: 730,
    title: 'Image 1'
  },
  // {
  //   src: 'http://12.url.cn/k12_tiku/2433797715/a56b7dd3-8cd0-4d0a-bc40-4e3fc2e2e29a/',
  //   w: 411,
  //   h: 730,
  //   title: 'Image 2'
  // }
];

let options = {
  //http://photoswipe.com/documentation/options.html
};



const Page = ({ backgroundColor, textColor, history, match, location }) => {
  
  
  return (
    <ThemeContext.Consumer>
    {({ theme: { backgroundColor, textColor } }) => (
        <div
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <span>Home Page</span>
            <button onClick={ () => history.push('/search') }>go to search page</button>
            <PhotoSwipe isOpen={true} items={items} options={options} />
            {/* <Modal>
              <div className="image-viewer">
                <div className="image-viewer-content">
                  <img src="http://12.url.cn/k12_tiku/2433797715/a56b7dd3-8cd0-4d0a-bc40-4e3fc2e2e29a/"></img>
                </div>
              </div>
            </Modal> */}
        </div>
    )}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Page)