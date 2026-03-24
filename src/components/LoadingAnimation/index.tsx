"use client";

import { motion } from "framer-motion";
import * as React from "react";

export const LoadingAnimation = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="130 88 138 120"
      width="138"
      height="120"
    >
      <path
        d="M 0,0 L 37,0 
           C 35,0 33,2 31,7 
           L -27,65 
           C -29,69 -26,70 -23,68 
           L 24,21 
           C 30,17 38,16 48,16 
           C 65,16 71,28 71,45 
           C 71,58 65,65 58,70 
           L 16,112 L -21,112 
           C -19,112 -17,110 -15,105 
           L 43,47 
           C 45,43 42,42 39,44 
           L -8,91 
           C -14,95 -22,96 -33,96 
           C -50,96 -55,84 -55,67 
           C -55,54 -49,47 -42,42 Z"
        fill="#FDFDFD"
        transform="translate(192,94)"
      />
      <path
        d="M 0,0 L 2,1 L -13,16 L -11,20 L -57,66 L -61,65 L -60,60 Z"
        fill="#0C0C0C"
        transform="translate(225,98)"
      />
    </svg>
  </motion.div>
);
