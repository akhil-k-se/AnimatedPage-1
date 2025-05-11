import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiBatteryCharging } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import { AiFillThunderbolt } from "react-icons/ai";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false)
  const [allLoadingComplete, setAllLoadingComplete] = useState(false)
  const loadingBarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      loadingBarRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 3,
        ease: "power2.inOut",
        onComplete: () => {
          setLoadingComplete(true);
        },
      }
    );
  }, []);

  useEffect( () => {
    if (loadingComplete) {
      gsap.to(".loader",{
        y:"100vh",
        ease:"power2.inOut",
        duration:2,
        delay:0.1,
      });
      gsap.to(".text-img",{
        scale:3,
        ease:"power2.inOut",
        duration:2,
        delay:0.1,
      })
      setLoaderGone(true);
    }
    if(loaderGone)
    {
      gsap.to('.outfit',{
        bottom:"25vh",
        duration:2,
        delay:0.3,
        ease:"power4.inOut",
        onComplete: ()=> setAllLoadingComplete(true)
      })
    }
    if(allLoadingComplete)
    {
      gsap.to('.navbar',{
        top:"0",
        duration:1,
        ease:"power4.inOut"
      })
      gsap.to('.lft-btm-div',{
        bottom:"5%",
        left:"3%",
        duration:1,
        ease:"power2.inOut"
      })
      gsap.to('.rgt-btm-div',{
        bottom:"5%",
        right:"3%",
        duration:1,
        ease:"power2.inOut"
      })
    }
  });

  console.log(loadingComplete);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black relative overflow-hidden">
    <nav className="navbar absolute -top-[100vw] left-0 flex items-center justify-between z-100 w-full h-[10%] gap-[50%]">
      <div className="flex items-center justify-around text-white w-full">
        <h1>First</h1>
        <h2>Second</h2>
        <h3>Third</h3>
      </div>
      <div className="flex items-center justify-around text-white w-full">
      <h1>Exit</h1>
      <AiFillThunderbolt className="text-[30px]"/>
        <CiInstagram className="text-[30px]" />
        <FiBatteryCharging className="text-[30px]" />
      </div>
    </nav>
      <img src="./text.png" className="text-img  w-[12%] h-[30%]" />
      <div className="loader  w-[20%] h-2 bg-gray-950 rounded-full overflow-hidden">
        <div ref={loadingBarRef} className="h-full bg-green-500"></div>
      </div>
      <img src="./outfit.png" className="outfit absolute -bottom-[130vh] h-[50%] w-[20%] scale-150"/>
      <div className="lft-btm-div absolute -left-[100vh] -bottom-[100vh] text-white text-4xl font-extrabold font-mono">Lorem ipsum<br/>dolor sit<br/> amet.</div>
      <div className="rgt-btm-div absolute -right-[100vh] -bottom-[100vh] text-white text-4xl font-extrabold font-mono">Starting at<br/>Rs 4,00,000</div>
    </div>
  );
};

export default App;
