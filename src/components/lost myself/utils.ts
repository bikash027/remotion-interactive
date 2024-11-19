export const toCartesian = ({radius, degree}: {radius: number, degree: number}) => {
    return {
        x: radius * Math.cos(degree * Math.PI / 180),
        y: radius * Math.sin(degree * Math.PI / 180)
    }
}