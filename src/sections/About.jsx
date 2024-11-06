import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/king-removebg-preview.png" alt="grid-1" className="w-full sm:h-[280px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Cutting-Edge Technology</p>
              <p className="grid-subtext">
              
"Experience unparalleled accuracy in image segmentation with advanced AI models like U-NET, DeepLabV3, and PSPNet, delivering precise and reliable results for cutting-edge applications." 
              </p>
            </div>
          </div>
        </div> 

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Application Ecosystem</p>
              <p className="grid-subtext">
                Our application ecosystem leverages Node.js for backend services, React.js for the frontend framework, Three.js with React Three Fiber and React Three Drei for 3D graphics rendering, EmailJS for email automation, Vite as the build tool, and Tailwind CSS for responsive, modern styling.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[480px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Ongoing Challenge</p>
              <p className="grid-subtext">In 2023, e-commerce faced a staggering 17.6% return rate, largely due to incorrect sizing—a challenge we’re here to solve.</p>
              <Button name="Contact Us" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">User Personal Initialization</p>
              <p className="grid-subtext">
                Height:
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/clothes.png"
              alt="grid-4"
              className="w-full md:h-[70px] sm:h-[300px] h-fit object-cover sm:object-top mt-10"
            />

            <div className="space-y-2">
              <p className="grid-headtext">Virtual Try-On</p>
              <p className="grid-subtext">
              Experience the perfect fit from home with our virtual try-on, letting you see how apparel looks on you before you buy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
