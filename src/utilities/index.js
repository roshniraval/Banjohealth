const priorityOptions = [{
    label: "High",
    value: "High"
}, {
    label: "Medium",
    value: "Medium"
}, {
    label: "Low",
    value: "Low"
}];

const teamOptions = [{
    label: "Blue",
    value: "Blue"
}, {
    label: "Green",
    value: "Green"
}, {
    label: "Red",
    value: "Red"
}, {
    label: "Yellow",
    value: "Yellow"
}];

const getFormattedDate = (dt) => {
    const date = new Date(dt);
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { priorityOptions, teamOptions, getFormattedDate, getRandomNum };