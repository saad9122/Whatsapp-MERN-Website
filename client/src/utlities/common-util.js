export const formateDate = (date) => {
    // console.log(date)
    const myDate = new Date(date)
    const hours = myDate.getHours()
    const minutes = myDate.getMinutes()

    const isDay = hours > 12;

    if(hours<12){
        return `${hours}:${minutes < 10 ? '0'+minutes : minutes} AM`
    } else {
        return `${hours - 12}:${minutes < 10 ? '0'+minutes : minutes} PM`
    }
    
 }