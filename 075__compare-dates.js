// 2/29/2020
// another method of the day!

// having to make these up myself at this point

// comparing dates
let compareDatesSelect = document.getElementById('compareDatesSelect');
let compareDatesP = document.getElementById('compareDatesP');
const oldDate = new Date(2014, 11, 16, 18);
const newDate = new Date();
compareDatesInfoP.innerHTML = 'old date ' + oldDate + ', <br> new date ' + newDate;

function compareDates() {
    // console.log(compareDatesSelect.value);
    switch(compareDatesSelect.value){
        case 'full':
            if (oldDate > newDate) {
                compareDatesP.innerHTML = 'old > new';
            } else if (oldDate < newDate) {
                compareDatesP.innerHTML = 'old < new';
            } else {
                console.log('something broke');
            }
        break;

        case 'year':
            // let num = oldDate.getFullYear;
            // console.log(num)
            console.log(oldDate.getFullYear())
            if (oldDate.getFullYear() > newDate.getFullYear()) {
                compareDatesP.innerHTML = 'old.getFullYear > new.getFullYear';
            } else if (oldDate.getFullYear() < newDate.getFullYear()) {
                compareDatesP.innerHTML = 'old.getFullYear < new.getFullYear';
            } else if (oldDate.getFullYear() === newDate.getFullYear()) {
                compareDatesP.innerHTML = 'old.getFullYear === new.getFullYear';               
            } else{
                console.log('something broke');
            }
        break;

        case 'month':
        if (oldDate.getMonth() > newDate.getMonth()) {
            compareDatesP.innerHTML = 'old.getMonth > new.getMonth';
        } else if (oldDate.getMonth() < newDate.getMonth()) {
            compareDatesP.innerHTML = 'old.getMonth < new.getMonth';
        } else if (oldDate.getMonth() === newDate.getMonth()) {
            compareDatesP.innerHTML = 'old.getMonth === new.getMonth';
        } else {
            console.log('something broke');
        }
        break;

        case 'day':
        if (oldDate.getDate() > newDate.getDate()) {
            compareDatesP.innerHTML = 'old.getDate > new.getDate';
        } else if (oldDate.getDate() < newDate.getDate()) {
            compareDatesP.innerHTML = 'old.getDate < new.getDate';
        } else if (oldDate.getDate() === newDate.getDate()) {
            compareDatesP.innerHTML = 'old.getDate === new.getDate';
        } else {
            console.log('something broke');
        }
        break;

        case 'hour':
        if (oldDate.getHours() > newDate.getHours()) {
            compareDatesP.innerHTML = 'old.getHours > new.getHours';
        } else if (oldDate.getHours() < newDate.getHours()) {
            compareDatesP.innerHTML = 'old.getHours < new.getHours';
        } else if (oldDate.getHours() === newDate.getHours()) {
            compareDatesP.innerHTML = 'old.getHours === new.getHours';
        } else {console.log('something broke');}
        break;


    }


    // if(oldDate > newDate){
    //     compareDatesP.innerHTML = 'old > new';
    // }else if(oldDate < newDate){
    //     compareDatesP.innerHTML = 'old < new';
    // }
}

