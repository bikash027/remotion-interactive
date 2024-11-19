import { Audio, random, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
// import music from "./iPhone.opus";
import { beatMap } from "./beatMap";
import { toCartesian } from "./utils";

const RADIUS = 200;
 
export const LostMyself: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
//   const audioData = useAudioData(music);
 
//   if (!audioData) {
//     return null;
//   }
  const paths = [];
  for(let thita = 0; thita < 360; thita+=1){
    const drawSpike = Math.floor(random(`${thita}-1`) + 0.7) == 0? false: true;
    if(!drawSpike)
        continue;
    const spikeDepth = RADIUS/3 + random(`${beatMap[frame].randomSeed}-${thita}-2`) * (1 * RADIUS / 3);
    const baseAngle = (thita + frame/20) % 360;
    const peakPosition = toCartesian({
        radius: spikeDepth,
        degree:  baseAngle
    })
    const base = toCartesian({
        radius: RADIUS,
        degree: baseAngle
    })
    const baseWidthDegree = 12;
    const baseEnd1 = toCartesian({
        radius: RADIUS,
        degree: baseAngle + baseWidthDegree/2
    });
    const baseEnd2 = toCartesian({
        radius: RADIUS,
        degree: baseAngle - baseWidthDegree/2
    })
    const controlPoint1 = toCartesian({
        radius: RADIUS,
        degree: baseAngle + baseWidthDegree/4
    });
    const controlPoint2 = toCartesian({
        radius: RADIUS,
        degree: baseAngle - baseWidthDegree/4
    })
    let d=`M ${peakPosition.x} ${peakPosition.y} `;
    d += `C ${base.x} ${base.y}, ${controlPoint2.x} ${controlPoint2.y}, ${baseEnd2.x} ${baseEnd2.y} `;
    d += `A ${RADIUS} ${RADIUS} 0 0 1 ${baseEnd1.x} ${baseEnd1.y}`;
    d += `C ${controlPoint1.x} ${controlPoint1.y}, ${base.x} ${base.y}, ${peakPosition.x} ${peakPosition.y}`;
    paths.push(
      <path d={d} fill={beatMap[frame].colors?.irisPrimary?? '#FFFFFF'} key={thita}/>
    )
  }
  let visual = (
  <svg width={height} height={height} viewBox="-250 -250 500 500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r={RADIUS} fill={beatMap[frame].colors?.irisSecondary?? '#a0a0a0'} />
    <circle cx="0" cy="0" r={RADIUS/3} fill={beatMap[frame].colors?.pupil?? '#000000'} />
    {paths}
  </svg>)
  const backgroundStyle = {
    backgroundColor: beatMap[frame].colors?.background?? '#000000',
    width: `${width}px`,
    height: `${height}px`,
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
  }
  return (
    <div style={backgroundStyle}>
      <Audio src={staticFile('audio-data/lost myself - syml.m4a')} />
      <div>
        {visual}
      </div>
    </div>
  );
};