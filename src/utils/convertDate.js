export function convertTimeStampToDateWithMonthDateYear(timestamp) {
    let tsDate = new Date(timestamp)

    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

    let date = tsDate.getDate()
    let month = tsDate.getMonth()
    let year = tsDate.getFullYear()

    return `${monthNames[month]} ${date}, ${year}`
}

