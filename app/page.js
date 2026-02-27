"use client"


import { useState, useEffect } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  HeartHandshake
} from "lucide-react";
import { Heart } from "lucide-react";



export default function Home() {

  const [open, setOpen] = useState(false);
  const [roses, setRoses] = useState([]);
  const [goldDust, setGoldDust] = useState([]);
  
  const [petals, setPetals] = useState([]);
  const [stars, setStars] = useState([]);
  useEffect(() => {
  const dust = Array.from({ length: 40 }).map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
  }));
  setGoldDust(dust);
}, []);
  useEffect(() => {
  const generatedRoses = Array.from({ length: 40 }).map(() => ({
    left: Math.random() * 100,
    duration: 12 + Math.random() * 10,
    delay: Math.random() * 8,
    scale: 0.6 + Math.random() * 0.8,
  }));
  setRoses(generatedRoses);
}, []);

  useEffect(() => {
  const generatedStars = Array.from({ length: 10 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3,
  }));
  setStars(generatedStars);
}, []);

  // Generate petals only on client (fix hydration error)
  useEffect(() => {
    const generated = Array.from({ length: 6 }).map(() => ({
      left: Math.random() * 100,
      duration: 8 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="crescent-moon"></div>

      {/* Animated background blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
 {stars.map((star, i) => (
  <div
    key={i}
    className="twinkle"
    style={{
      top: `${star.top}%`,
      left: `${star.left}%`,
      animationDelay: `${star.delay}s`
    }}
  >
    ✦
  </div>
))}

      {/* Falling petals */}
      {petals.map((petal, i) => (
        <img
          key={i}
          src="/images/petals.jpg"
          className="petal"
          style={{
            left: `${petal.left}vw`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}

      {/* Envelope */}
      {/* {!open && (
        <div className="envelope-wrapper">
          <div className="envelope" onClick={() => setOpen(true)}>
            <div className="flap"></div>
          </div>
        </div>
      )} */}
      {!open && (
  <div className="lux-envelope-wrapper">
    {/* <div className="lux-envelope" onClick={() => setOpen(true)}> */}
{roses.map((rose, i) => (
  <div
    key={i}
    className="rose"
    style={{
      left: `${rose.left}%`,
      animationDuration: `${rose.duration}s`,
      animationDelay: `${rose.delay}s`,
      transform: `scale(${rose.scale}) rotate(45deg)`
    }}
  />
))}
{goldDust.map((d, i) => (
  <div
    key={`dust-${i}`}
    className="gold-dust"
    style={{
      left: `${d.left}%`,
      animationDelay: `${d.delay}s`,
    }}
  />
))}
      {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="glow-orb" />
    ))}
<div className="lux-envelope" onClick={() => setOpen(true)}>

  {/* Arabic Calligraphy Top */}


  <div className="lux-body">
<div className="monogram-bg">SN</div>
    <div className="envelope-content">
     
      <p className="invite-type">Nikah</p>
      {/* <div className="couple-icon">💍</div> */}
      {/* <Heart size={28} className="seal-heart" /> */}
      

      <h2 className="bride">Fathima Nasrine</h2>

      <div className="and-symbol">&</div>

      <h2 className="groom">Muhammed Sajjad</h2>

      <p className="nikah-date">12 April 2026</p>
      {/* <p className="nikah-date">(1447 shawwal 24)</p> */}
    </div>

  </div>

  {/* Triangular Flap */}
  <div className="lux-flap"></div>


  <p className="tap-text">Tap to Open</p>

</div>
  </div>
)}

      {/* Invitation Card */}
      {open && (
        <div className="invite-card">
          {/* Second Page Rose Shower */}
{roses.map((rose, i) => (
  <div
    key={`main-${i}`}
    className="rose main-rose"
    style={{
      left: `${rose.left}%`,
      animationDuration: `${rose.duration + 5}s`,
      animationDelay: `${rose.delay}s`,
      transform: `scale(${rose.scale}) rotate(45deg)`
    }}
  />
))}
{goldDust.map((d, i) => (
  <div
    key={`dust-${i}`}
    className="gold-dust"
    style={{
      left: `${d.left}%`,
      animationDelay: `${d.delay}s`,
    }}
  />
))}

          {/* <img src="/images/pink-flower.jpg" className="flower-top-left" /> */}
          {/* <img src="/images/pink-flower.jpg" className="flower-bottom-right" /> */}

          <p className="arabic-top">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
     <h1 className="title">Nikah Ceremony</h1>

      

          <div className="caricature">
            <img src="/images/caricature.jpg" />
          </div>
             

          <h2 className="names">Fathima Nasrine</h2>
          <div className="divider"></div>
               <div className="details">
            {/* <p>Daughter of Mr. Noushad M. & Mrs. Rahina Noushad</p> */}
            <div className="detail-row">
  <Users size={20} className="royal-icon" />
  <p>Daughter of Mr. Noushad M. & Mrs. Rahina Noushad</p>
</div>
              <p className="parent-details">

    Thekkenattufil (H), Thuravoor P.O, Cherthala
  </p>
          <p className="amp">&</p>
          <h2 className="names">Muhammed Sajjad</h2>

          <div className="divider"></div>

   
            
            <div className="detail-row">
  <Users size={20} className="royal-icon" />
<p>Son of Mr. T.H. Sherif & Mrs. Jameela Sherif</p>
</div>
          </div>
           <p className="parent-details">
   
    Thuruthippallil (H), Kulasekharamangalam, Vaikom
  </p>

          

          <div className="divider"></div>

          <div className="details royal-details">

  <div className="detail-row">
    <CalendarDays size={20} className="royal-icon" />
    <p><strong>Date:</strong> Sunday, 12 April 2026</p>
     <p>(1447 shawwal 24)</p>
  </div>
   <div className="divider"></div>

  <div className="detail-row">
    <Clock size={20} className="royal-icon" />
    
  </div>
  <p><strong>Time:</strong> 11:30 AM</p>
   <div className="divider"></div>

  <div className="detail-row">
    <MapPin size={20} className="royal-icon" />
    <p><strong>Venue:</strong> M.K Convention Centre, Eramalloor</p>
  </div>
  

</div>
          

          <a
            href="https://www.google.com/maps/search/M.K+Convention+Centre+Eramalloor"
            target="_blank"
            className="location-btn"
          >
            📍 View Location
          </a>
           <div className="divider"></div>
            

          {/* <p className="footer-text">
  Sharing the happiness: Yaseen & Arshida
</p> */}
<div className="footer-row">
  <HeartHandshake size={20} className="royal-icon" />
  <p className="footer-text">
    Sharing the happiness: Yaseen & Arshida
  </p>
</div>

        </div>
      )}

    </div>
  )
}