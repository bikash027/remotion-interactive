const calculateBeatMap = () => {
    const input = [
        2.803479,
        3.600895,
        4.491687,
        5.332145,
        6.223625,
        7.06302,
        7.906583,
        8.794833,
        9.635479,
        10.477875,
        11.368104,
        12.212,
        13.10477,
        13.899833,
        14.835375,
        15.679791,
        16.569854,
        17.368583,
        18.257354,
        19.148666,
        19.989791,
        20.831875,
        21.673708,
        22.514354,
        23.356604
    ]
    const maxDurationSeconds = 30;
    const fps = 30;
    const inputInFrameNo = input.map(el => 30 * el);
    const allFrameMap = [];
    for(let frame=0; frame < fps*maxDurationSeconds; frame++){
        let lowerboundBeatPosition = -1;
        for(const el of inputInFrameNo){
            if(el < frame)
                lowerboundBeatPosition = Math.round(el);
        }
        if(lowerboundBeatPosition == -1 || frame - lowerboundBeatPosition > 60){
            allFrameMap.push({
                skipFrame: true,
            })
        } else {
            allFrameMap.push({
                skipFrame: false,
                radius: 50 + 10 * Math.log(frame - lowerboundBeatPosition),
                opacity: 1 / (frame - lowerboundBeatPosition)
            })
        }
    }
    return allFrameMap;
}

export const beatMap = calculateBeatMap();