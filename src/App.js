import React from 'react'
import logo from './mydoctor.png'
import doctor1  from './doctor1.jpg';
import doctor2  from './doctor2.jpg';
import doctor3  from './doctor3.jpg';

function App() {
  return (
    <div class="application">
    <header className="navbar-header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo"/>
        <h1 className="title">My Doctor Blog</h1>
      </div>

    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><a href="home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="ContactUs" className="nav-link">Contact Us</a></li>
        <li className="nav-item"><a href="OurService" className="nav-link">Our Services</a></li>
      </ul>
    </nav>
    </header>
  
    <main className='main'>
        <div className='post'>
          <h2 className='post-header'>Latest Blog Posts</h2>
          <div className='post-container'>
          <div className='post-card'>

                <div className='post-image-container'>
                  <img src={doctor1} alt='doctor1' />
                </div>
                <div className='post-text'>
                  <h6>Dr Umar Samson</h6>
                  <p>Check your Health regularly. <a href='#more'> Read more</a></p>
                  <p>Call me: 437-227-8894</p>
                </div>
              </div>

          <div className='post-card' >
                <div className='post-image-container'>
                  <img src={doctor2} alt='doctor2' />
                </div>
                <div className='post-text'>
                  <h6>Dr. Susan Sandra</h6>
                  <p>Beauty of living a healthy lifestyle. <a href='#more'> Read more</a></p>
                  <p>Call me: 437-336-4394</p>
                </div>
              </div>

          <div className='post-card' >
                <div className='post-image-container'>
                  <img src={doctor3} alt='doctor 3' />
                </div>
                <div className='post-text'>
                  <h6>Dr Martin Vincent</h6>
                  <p>Health is Wealth. <a href='#more'> Read more</a></p>
                  <p>Call me: 637-227-5598</p>
                </div>
              </div>
            
          </div>
        </div>
      </main>
    </div>

  );
}

export default App;

