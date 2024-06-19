"use client";
import React from 'react'
import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className= "w-28 h-28" key={technology.name}>
          {console.log("technology: ",technology.icon.src)}
          <BallCanvas icon = {technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");