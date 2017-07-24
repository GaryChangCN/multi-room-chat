export function convertTimeStamp(stamp){
    const date = new Date(stamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hours} : ${minutes} : ${seconds}`;
}