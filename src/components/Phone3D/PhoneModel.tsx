'use client';

import { useGLTF, Html, useTexture } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { geometry } from 'maath';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Group } from 'three';
import { SkeletonUtils } from 'three-stdlib';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ArrowLeft, Battery, Bell, Github, Home, Linkedin, Link as LinkIcon, MapPin, SignalHigh, Twitter, Wifi, X } from 'lucide-react';
import Link from 'next/link';
import { particles } from '@/lib/cardData2';
import AgentsChatScreen from './screens/AgentsChatScreen';
import SlackScreen from './screens/SlackScreen';
import AppsScreen from './screens/AppsScreen';
import DeviceScreen from './screens/DeviceScreen';
import BuildScreen from './screens/BuildScreen';
import type { PhoneScreen } from './PhoneScene';
import './styles.css';

extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry });
useGLTF.preload('/iphone.glb');

/* === Hand plane calibration ===
 * The plane's aspect ratio is auto-derived from the image so it never squashes.
 * HAND_HEIGHT controls overall size in world units; width follows aspect.
 * HAND_POSITION shifts the hand so the photo's phone area lines up with world origin (where the 3D iPhone sits).
 * Both the hand and iPhone live inside the same <group>, so future group-level animation moves them together. */
const HAND_TEXTURE = '/hand-phone.png';
const HAND_HEIGHT = 6.2;                                     // world units tall
const HAND_POSITION: [number, number, number] = [0, -0.4, -0.3];   // x, y, z (behind phone) — slight downward shift to keep wrist visible
const HAND_ROTATION: [number, number, number] = [0, 0, 0];    // wrist tilt
const HAND_SCALE = 1;

type Props = {
  isintro: boolean;
  setisintro: (isIntro: boolean) => void;
  activeScreen?: PhoneScreen;
};

export default function Model({ isintro, setisintro, activeScreen = 'lock' }: Props) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('/iphone.glb');
  // Clone the scene to avoid the React Strict Mode "scene already attached to parent" issue.
  // Without this clone, the phone renders once then disappears on the StrictMode remount cycle.
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const handTexture = useTexture(HAND_TEXTURE);
  // Auto-derive plane aspect ratio from the image so it never squashes
  const handPlaneSize = useMemo<[number, number]>(() => {
    const img = handTexture.image as HTMLImageElement | undefined;
    const aspect = img && img.width && img.height ? img.width / img.height : 1;
    return [HAND_HEIGHT * aspect, HAND_HEIGHT];
  }, [handTexture]);

  const [time, setTime] = useState(new Date());
  const [isnoti, setisnoti] = useState(0);
  const [isAbout, setisAbout] = useState(false);
  const [currentImageno, setCurrentImageno] = useState(0);
  const controls = useAnimation();

  // Notch animation variants
  const dIVariants = {
    initialDi: { width: 70, height: 20, borderRadius: 20 },
    Notification: { width: 300, height: 70, borderRadius: 20 },
  };
  const notiLeft = {
    initialDi: { width: 56, scale: 1, opacity: 1 },
    Notification: { width: 0, scale: 0, opacity: 0 },
  };
  const notiRight = {
    initialDi: { width: 56, scale: 1, opacity: 1 },
    Notification: { width: 0, scale: 0, opacity: 0 },
  };
  const notiContent = {
    initialDi: { scale: 0, opacity: 0 },
    Notification: { scale: 1, opacity: 1 },
  };

  useEffect(() => {
    if (isnoti !== 0) {
      controls.start('Notification');
    } else {
      controls.start('initialDi');
    }
  }, [isnoti, controls]);

  // Toggle helper: opens the notification, or closes it if already open
  const toggleNoti = (target: number) => {
    if (isnoti !== 0 && isnoti !== target) {
      setisnoti(0);
      setTimeout(() => setisnoti(target), 200);
    } else if (isnoti === target) {
      setisnoti(0);
    } else {
      setisnoti(target);
    }
  };

  useEffect(() => {
    console.log('[PhoneModel] mounted');
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      console.log('[PhoneModel] UNMOUNTED');
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setCurrentImageno((prev) => prev + 1), 15000);
    return () => clearTimeout(t);
  }, [currentImageno]);

  const wp = ['/Wallpaper2.jpeg', '/Wallpaper3.jpeg', '/Wallpaper4.jpeg', '/Wallpaper5.jpeg', '/Wallpaper6.jpeg'];
  const wallpaper = wp[currentImageno % wp.length];

  return (
    <group ref={group} position={[0, 0.05, 0]} scale={1} rotation={[0, -0.18, 0]}>
      {/* Hand plane — sibling of the iPhone in the same group, sits behind it.
          Renders the photo as a textured quad so it shares the camera/coordinate
          system with the iPhone and animates as one unit. */}
      <mesh position={HAND_POSITION} rotation={HAND_ROTATION} scale={HAND_SCALE}>
        <planeGeometry args={handPlaneSize} />
        <meshBasicMaterial map={handTexture} transparent toneMapped={false} />
      </mesh>

      <primitive object={clonedScene} position={[0, 0, 0]}>
        <Html
          transform
          occlude="blending"
          className="overflow-hidden select-none"
          // @ts-expect-error - drei extension for rounded plane
          geometry={<roundedPlaneGeometry args={[2.29, 4.84, 0.297]} />}
          scale={0.4}
          position={[-0.06, 0.34, 0.142]}
        >
          {activeScreen === 'agents' ? (
            <AgentsChatScreen />
          ) : activeScreen === 'slack' ? (
            <SlackScreen />
          ) : activeScreen === 'apps' ? (
            <AppsScreen />
          ) : activeScreen === 'device' ? (
            <DeviceScreen />
          ) : activeScreen === 'build' ? (
            <BuildScreen />
          ) : (
          <div className="text-white h-[485px] w-[230px] flex items-center justify-center rounded-[30px] border-[1px] border-black relative overflow-hidden">
            {isAbout && (
              <AnimatePresence>
                <motion.div
                  initial={{ scale: 0, y: -2 }}
                  exit={{ scale: 0 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  className="fixed h-[485px] w-[230px] top-0 left-0 bg-[#202124] z-10 rounded-[30px] flex flex-col justify-start items-center pt-8 gap-2 overflow-hidden"
                >
                  <div className="w-full flex justify-between items-center px-2">
                    <ArrowLeft className="w-5 h-5 cursor-pointer" onClick={() => setisAbout(false)} />
                    <div className="text-[12px] font-bold">Abouts</div>
                    <div className="text-[10px]">2024</div>
                  </div>
                  <div className="bg-[#202124] w-full h-full flex flex-col gap-2 items-center justify-start overflow-y-scroll scrollbar text-white px-2 mb-4">
                    <div className="flex flex-col justify-between items-start">
                      <h1 className="text-xl font-extrabold mb-2">WHO AM I </h1>
                      <p className="w-full text-[12px] mb-2">Hi I am Aleen Dhar. I am looking for an opportunity to be a part of a team where I can contribute effectively while continuously learning and growing within the organization.</p>
                      <p className="w-full mb-4 text-[12px] flex items-start gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="h-5 flex items-end"> Delhi, India</span>
                      </p>
                      <p className="font-bold text-[12px] mb-1">Social links:</p>
                      <div className="flex gap-4 mb-2">
                        <Github className="cursor-pointer" onClick={() => toggleNoti(3)} />
                        <Linkedin className="cursor-pointer" onClick={() => toggleNoti(1)} />
                        <Twitter className="cursor-pointer" onClick={() => toggleNoti(2)} />
                      </div>
                    </div>
                    {particles.map((part, idx) => (
                      <div key={`${part.id}-${idx}`} className="w-full rounded-xl p-2 bg-black gap-2 flex flex-col justify-between items-start">
                        <div className="font-bold text-[12px] flex justify-between w-full">
                          {part.title}
                          <div className="flex gap-2">
                            <Link href={part.link} target="_blank"><LinkIcon className="w-4 h-4" /></Link>
                            <Link href={part.github} target="_blank"><Github className="w-4 h-4" /></Link>
                          </div>
                        </div>
                        <div className="text-[10px] font-light">{part.headsup}</div>
                        <div>
                          <div className="text-[11px] font-bold">Description:</div>
                          <div className="text-[10px]">{part.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Animated status bar with notch notifications */}
            <div className="absolute top-2 w-full flex items-start justify-between z-50 px-2">
              <motion.div
                variants={notiLeft}
                initial="initialDi"
                animate={controls}
                transition={{ duration: 0.3, type: 'tween', ease: [0.14, 0.13, 0.25, 1] }}
                className="flex w-14 text-xs items-center justify-center"
              >
                {time.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false })}
              </motion.div>

              <motion.div
                initial={{ width: 70, height: 20, borderRadius: 20 }}
                variants={dIVariants}
                animate={controls}
                transition={{ duration: 0.3, type: 'tween', ease: [0.14, 0.13, 0.25, 1] }}
                className="bg-black flex items-center justify-center px-2 overflow-hidden"
              >
                <AnimatePresence>
                  <motion.div
                    variants={notiContent}
                    initial="initialDi"
                    animate={controls}
                    transition={{ duration: 0.25, type: 'tween', ease: [0.14, 0.13, 0.25, 1] }}
                    className="flex gap-5"
                  >
                    {isnoti === 1 && (
                      <div className="flex justify-between items-center gap-4">
                        <Link href="https://www.linkedin.com/in/aleendhar/" target="_blank" className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-[#0A66C2] rounded-xl flex items-center justify-center shrink-0">
                            <Linkedin className="h-6 w-6 text-white" fill="white" strokeWidth={0} />
                          </div>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[11px] font-extrabold">Hire me</span>
                            <span className="text-[10px] opacity-80">Visit LinkedIn</span>
                          </div>
                        </Link>
                        <X className="h-4 w-4 cursor-pointer shrink-0" onClick={() => setisnoti(0)} />
                      </div>
                    )}
                    {isnoti === 2 && (
                      <div className="flex justify-between items-center gap-4">
                        <Link href="https://x.com/aleendhar23" target="_blank" className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-black rounded-xl flex items-center justify-center shrink-0 border border-white/15">
                            <Twitter className="h-5 w-5 text-white" fill="white" strokeWidth={0} />
                          </div>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[11px] font-extrabold">Follow me</span>
                            <span className="text-[10px] opacity-80">Visit Twitter</span>
                          </div>
                        </Link>
                        <X className="h-4 w-4 cursor-pointer shrink-0" onClick={() => setisnoti(0)} />
                      </div>
                    )}
                    {isnoti === 3 && (
                      <div className="flex justify-between items-center gap-4">
                        <Link href="https://github.com/AleenDhar" target="_blank" className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                            <Github className="h-6 w-6 text-black" />
                          </div>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[11px] font-extrabold">My Projects</span>
                            <span className="text-[10px] opacity-80">Visit Github</span>
                          </div>
                        </Link>
                        <X className="h-4 w-4 cursor-pointer shrink-0" onClick={() => setisnoti(0)} />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <motion.div
                variants={notiRight}
                initial="initialDi"
                animate={controls}
                transition={{ duration: 0.3, type: 'tween', ease: [0.14, 0.13, 0.25, 1] }}
                className="w-14 flex items-center justify-end gap-1 text-[10px] font-semibold pr-1"
              >
                <span>5G</span>
                <span>100%</span>
              </motion.div>
            </div>

            {/* Wallpaper */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <img
                src={wallpaper}
                alt=""
                className="object-cover h-[485px] w-[236px] rounded-3xl touch-none opacity-90"
                draggable={false}
              />
            </div>

            {/* Home content */}
            <div className="w-full h-[430px] flex flex-col items-center justify-between rounded-3xl">
              <div className="h-full w-full flex flex-col items-center justify-between gap-1 px-2">
                <div className="h-32 w-full flex flex-col justify-center items-center mt-6">
                  <div className="text-xs">{time.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</div>
                  <div className="text-6xl font-bold">{time.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
                </div>
                <div className="flex flex-col gap-1 w-[95%] mb-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setisAbout(true)}
                    className="w-full min-h-10 bg-white/90 backdrop-blur-3xl border-[.75px] border-solid border-opacity-10 border-white cursor-pointer shadow-md p-1 justify-start items-center rounded-xl text-black"
                  >
                    <div className="text-xs flex">
                      <img src="/aleen.png" alt="" className="h-8 w-8 bg-black rounded-xl" />
                      <div className="w-full h-full flex items-center justify-between px-2">
                        <div className="flex flex-col justify-center items-start">
                          <div className="font-bold">Abouts</div>
                          <div className="text-[10px]">Checkout My Projects</div>
                        </div>
                      </div>
                      <div className="text-[8px]">Aug,24</div>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} className="w-full min-h-10 bg-white/90 backdrop-blur-3xl border-[.75px] border-solid border-opacity-10 border-white cursor-pointer shadow-md p-1 justify-start items-center rounded-xl text-black">
                    <Link href="mailto:dharaleen@gmail.com" className="text-xs flex">
                      <img src="/gmail.jpeg" alt="" className="h-8 w-8 bg-black rounded-xl" />
                      <div className="w-full h-full flex items-center justify-between px-2">
                        <div className="flex flex-col justify-center items-start">
                          <div className="font-bold">Email</div>
                          <div className="text-[10px]">Mail me here</div>
                        </div>
                      </div>
                      <div className="text-[8px]">Aug,24</div>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} className="w-full min-h-10 bg-white/90 backdrop-blur-3xl border-[.75px] border-solid border-opacity-10 border-white cursor-pointer shadow-md p-1 justify-start items-center rounded-xl text-black">
                    <Link href="/resume" target="_blank" className="text-xs flex">
                      <img src="/resume.png" alt="" className="h-8 w-8 bg-black rounded-xl" />
                      <div className="w-full h-full flex items-center justify-between px-2">
                        <div className="flex flex-col justify-center items-start">
                          <div className="font-bold">Resume</div>
                          <div className="text-[10px]">Checkout My Resume</div>
                        </div>
                      </div>
                      <div className="text-[8px]">Aug,24</div>
                    </Link>
                  </motion.div>
                </div>
                <div className="h-5 w-full flex justify-between items-center gap-1 px-2 mb-2">
                  <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={() => toggleNoti(1)}>
                    <Bell className="h-5 w-5" />
                  </div>
                  <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={() => setisintro(!isintro)}>
                    <Home className="h-5 w-5" />
                  </div>
                  <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={() => toggleNoti(2)}>
                    <Twitter className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dock indicator */}
            <div className="absolute bottom-2 bg-white rounded-full h-1 w-24 z-50" />
          </div>
          )}
        </Html>
      </primitive>
    </group>
  );
}
