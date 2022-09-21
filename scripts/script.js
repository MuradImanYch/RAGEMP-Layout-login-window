$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$('button[name="logBtn"]').click((e) => {
    e.preventDefault();
    const logLoginVal = $('#logLogin').val();
    const logPasswordVal = $('#logPassword').val();

    if(logLoginVal.length <= 0) {
        return $('#error').text('Input login');
    }
    else if(logPasswordVal.length <= 0) {
        return $('#error').text('Input password');
    }
    else {
        $('#error').text('');
    }

    mp.trigger('loginAttempt', JSON.stringify({logLoginVal, logPasswordVal}));
}); 
$('button[name="regBtn"]').click((e) => {
    e.preventDefault();
    const regLoginVal = $('#regLogin').val();
    const regPasswordVal = $('#regPassword').val();

    if(regLoginVal.length <= 0) {
        return $('#error').text('Input login');
    }
    else if(regLoginVal.length <= 3) {
        return $('#error').text('Login length must be at least 3 characters');
    }
    else if(regPasswordVal.length <= 0) {
        return $('#error').text('Input password');
    }
    else if(regPasswordVal.length <= 3) {
        return $('#error').text('Password length must be at least 3 characters');
    }
    else if($('#regRePassword').val().length <= 0) {
        return $('#error').text('Input repeat password');
    }
    if($('#regPassword').val() != $('#regRePassword').val()) {
        return $('#error').text('Password mismatch');
    }
    else {
        $('#error').text('');
    }

    mp.trigger('registerAttempt', JSON.stringify({regLoginVal, regPasswordVal}));
}); 

const showError = (message) => {
    $('#error').text(message);
}