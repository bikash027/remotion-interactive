import { Audio, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
// import music from "./iPhone.opus";
import { beatMap } from "./beatMap";
 
export const CrackTheShutters: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
//   const audioData = useAudioData(music);
 
//   if (!audioData) {
//     return null;
//   }
  const paths = [];
  if(beatMap[frame]?.torchCount >= 1){
    paths.push(
      <>
        <path d="M 858 1080 L 862 1080 L 1270 0 L 1250 0 Z" fill="url(#Gradient1)" filter="url(#blurred)"/>{/*1*/}
        <path d="M 1058 1080 L 1062 1080 L 670 0 L 650 0 Z" fill="url(#Gradient1)" filter="url(#blurred)"/>{/*1*/}
      </>
    )
  }
  if(beatMap[frame]?.torchCount >= 2){
    paths.push(
      <>
        <path d="M 758 1080 L 762 1080 L 1170 0 L 1150 0 Z" fill="url(#Gradient1)" filter="url(#blurred)"/>{/*2*/}
        <path d="M 1158 1080 L 1162 1080 L 770 0 L 750 0 Z" fill="url(#Gradient1)" filter="url(#blurred)"/>{/*2*/}
      </>
    )
  }
  if(beatMap[frame]?.torchCount == 3){
    paths.push(
      <>
        <path d="M 658 1080 L 662 1080 L 1070 0 L 1050 0 Z" fill="url(#Gradient1)" filter="url(#blurred)"/>{/*3*/}
        <path d="M 1258 1080 L 1262 1080 L 870 0 L 850 0 Z" fill="url(#Gradient1)" filter="url(#blurred)"/>{/*3*/}
      </>
    )
  }
  let visual = (
  <svg width={width} height={height} style={{background: "linear-gradient(#60321a, #3a291f)"}}>
    <defs>
        <filter id="blurred">
            <feGaussianBlur result="coloredBlur" stdDeviation="5"></feGaussianBlur>
            <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
        <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ea7718" />
            <stop offset="100%" stopColor="#fcc856" />
        </linearGradient>
    </defs>
    {paths}
  </svg>)
  return (
    <div>
      <Audio src={staticFile('audio-data/crack the shutters.m4a')} />
      {visual}
    </div>
  );
};