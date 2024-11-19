const calculateBeatMap = () => {
    const allBeats = [
        3.563673,
        6.828163,
        10.236213,
        13.699682,
        17.115714,
        20.477437,
        23.983242,
        27.347687,
        30.801859,
        34.20663225,
        37.6114055,
        41.016178749999995,
        44.42095199999999,
        47.82572524999999,
        51.23049849999999,
        54.63527174999999,
        58.040044999999985,
        61.44481824999998,
        64.84959149999999,
        68.537444,
        71.994542,
        75.450868,
        78.855789,
        82.30252,
        85.72594813043479,
        89.14937626086957,
        92.57280439130436,
        95.99623252173915,
        99.41966065217393,
        102.84308878260872,
        106.2665169130435,
        109.68994504347829,
        113.11337317391308,
        116.53680130434786,
        119.96022943478265,
        123.38365756521743,
        126.80708569565222,
        130.230513826087,
        133.65394195652178,
        137.07737008695656,
        140.50079821739135,
        143.92422634782613,
        147.34765447826092,
        150.7710826086957,
        154.1945107391305,
        157.61793886956528,
        161.04136700000006,
        164.46479513043485,
        167.88822326086964,
        171.31165139130442,
        174.7350795217392,
        178.158507652174,
        181.58193578260878,
        185.00536391304357,
        188.42879204347835,
        191.85222017391314,
        195.27564830434792,
        198.6990764347827,
        202.1225045652175,
        205.54593269565228,
        208.96936082608707,
        212.39278895652185
    ]
    const cChordsRoughPos = [
        3.475951,
        6.808491,
        10.221257,
        13.673321,
        17.078831,
        20.513978,
        30.772958,
        34.188056,
        44.499166,
        58.059801,
        71.928939,
        75.357028,
        78.845211,
        82.301469,
        85.708794,
        89.213102,
        99.386141,
        102.841265,
        113.112649,
        126.824553,
        140.492835,
        143.921362,
        147.282178,
        150.637144,
        154.27787,
        157.6366,
        161.043675,
        164.401294,
        174.63288,
        188.447052,
        202.126962,
        205.54593269565228,
        208.96936082608707,
        212.39278895652185
    ]
    const gChordsRoughPos = [
        23.984032,
        41.052211,
        54.729852,
        68.501666,
        92.534864,
        109.677403,
        123.398764,
        137.075294,
        171.369104,
        185.073254,
        198.718551
    ]
    const cChordColors = {
        irisPrimary: '#008080',
        irisSecondary: '#DDDBCB',
        pupil: '#050505',
        background: '#ddddd7',
    }
    const gChordColors = {
        irisPrimary: '#CA2C92',
        irisSecondary: '#E5F4E3',
        pupil: '#272727',
        background: '#d7ddd7',
    }
    const fChordColors = {
        irisPrimary: '#800020',
        irisSecondary: '#E8E8E8',
        pupil: '#0C0F0A',
        background: '#ddd7d7',
    }
    const superImpose = (chords: number[]) => {
        return chords.map(roughPos => {
            for(const pos of allBeats){
                if(Math.abs(pos - roughPos) < 1){
                    return pos;
                }
            }
            return roughPos;
        })
    }
    const cChordsPos = superImpose(cChordsRoughPos);
    const gChordsPos = superImpose(gChordsRoughPos);
    // const fChordsPos = allBeats.filter(pos => !cChordsPos.includes(pos) && !gChordsPos.includes(pos));
    const allBeatChords = allBeats.map(pos => {
        if(cChordsPos.includes(pos))
            return {
                chord: 'C',
                pos
            }
        else if(gChordsPos.includes(pos))
            return {
                chord: 'G',
                pos
            }
        else return {
                chord: 'F',
                pos
            }
    })
    const maxDurationSeconds = 213;
    const fps = 30;
    const beatInFrameNo = allBeatChords.map(el => {
        const {pos, chord} = el;
        return {
            frame: 30*pos,
            chord
        }
    });
    const allFrameMap = [];
    const currentFrameData: {colors: any, randomSeed: number} = {
        colors: null,
        randomSeed: 0
    }
    for(let frame=0; frame < fps*maxDurationSeconds; frame++){
        for(const el of beatInFrameNo){
            if(Math.ceil(el.frame) == frame){
                currentFrameData.randomSeed = frame;
                if(el.chord === 'C')
                    currentFrameData.colors = cChordColors;
                if(el.chord === 'G')
                    currentFrameData.colors = gChordColors;
                if(el.chord === 'F')
                    currentFrameData.colors = fChordColors;
            }
        }
        allFrameMap.push({...currentFrameData})
    }
    return allFrameMap;
}

export const beatMap = calculateBeatMap();