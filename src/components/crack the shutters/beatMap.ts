const calculateBeatMap = () => {
    const input = [
        102.136084,
        102.662683,
        103.234837,
        103.759145,
        104.334973,
        104.86071,
        105.433,
        106.004247,
        106.578102,
        107.102615,
        107.679485,
        108.299055,
        108.870211,
        109.442705,
        109.968692,
        110.539327,
        111.162615,
        111.689123,
        112.216129,
        112.743,
        117.897807,
        118.518193,
        119.094134,
        119.618329,
        120.188601,
        120.716016,
        121.243386,
        121.863635,
        122.436492,
        122.910143,
        123.530438,
        124.15105,
        124.723114,
        125.200143,
        125.774814,
        126.394996,
        126.920801,
        127.443023,
        128.064769,
        128.636538,
        129.20969,
        129.785495,
        130.358306,
        130.929123,
        131.503182,
        132.031163,
        132.60334,
        133.225064,
        133.753272,
        134.322139,
        134.848646,
        135.419916,
        135.991073,
        136.563454,
        137.133839,
        137.70681,
        138.280302,
        138.807331,
        139.381095,
        139.953386,
        140.478216,
        141.099916,
        141.670211,
        142.239735,
        142.809894,
        143.337422,
        143.955744,
        144.479123,
        145.053227,
        145.578102,
        146.194656,
        146.816288,
        147.293635,
        147.816515,
        148.437195,
        149.008601,
        149.629055,
        150.154882,
        150.728488,
        151.303136,
        151.876084,
        152.403703,
        153.022547,
        153.591186,
        154.166311,
        154.739372,
        155.26681,
        155.839191,
        156.365971,
        156.938352,
        157.509349,
        158.080098,
        158.648601,
        159.223703,
        159.796311,
        160.36842,
        160.932864,
        161.511232,
        162.034089,
        162.603998,
        163.177014,
        163.698964,
        164.31783,
        164.891163,
        165.509508,
        165.986311,
        166.557105,
        167.127603,
        167.696356,
        168.266402,
        168.836311,
        169.408601,
        169.978737,
        170.552229,
        171.072411,
        171.643839,
        172.263499,
        172.83232,
        173.35876,
        173.932728,
        174.502728,
        175.073817,
        175.598578,
        176.215971,
        176.788896,
        177.311549,
        177.877558,
        178.450166,
        179.019894,
        179.592524,
        180.163114,
        180.735767,
        181.30529,
        181.873567,
        182.442116,
        183.015177,
        183.582569,
        184.107309,
        184.705789,
        185.274497,
        185.842547,
        186.364089,
        186.937807,
        187.507309,
        188.078352,
        188.650665,
        189.220324,
        189.838442
      ]
    const maxDurationSeconds = 200;
    const fps = 30;
    const inputInFrameNo = input.map(el => 30 * el);
    const allFrameMap = [];
    let torchCount = 0;
    for(let frame=0; frame < fps*maxDurationSeconds; frame++){
        for(const el of inputInFrameNo){
            if(Math.round(el) == frame){
                torchCount++;
                torchCount = torchCount % 4;
            }
        }
        allFrameMap.push({
            torchCount
        })
    }
    return allFrameMap;
}

export const beatMap = calculateBeatMap();