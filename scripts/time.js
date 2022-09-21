const timeUpd = () => {
    const date = new Date();
    let h = date.getHours().toString();
    let m = date.getMinutes().toString();
    if(h.length < 2) {
        h = '0' + h;
    }
    if(m.length < 2) {
        m = '0' + m;
    }
    $('#hours').text(h);
    $('#minutes').text(m);
    $('div').fadeIn(400);
}

setInterval(() => {
    timeUpd();
}, 30000);
timeUpd();