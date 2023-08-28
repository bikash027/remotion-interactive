import { Audio, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
// import music from "./iPhone.opus";
import { beatMap } from "./beatMap";
 
export const IPhone: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
//   const audioData = useAudioData(music);
 
//   if (!audioData) {
//     return null;
//   }
  let visual = null;
  if(beatMap[frame]?.skipFrame == false){
    const {radius, opacity} = beatMap[frame];
    visual = (
      <svg width={width} height={height}>
        <circle cx={width/2} cy={height/2} r={radius} fill="blue" fillOpacity={opacity}/>
      </svg>
    )
  }
  return (
    <div>
      <Audio src={staticFile('audio-data/iPhone.m4a')} />
      {visual}
    </div>
  );
};