var Links = {
    setColor:function (color) {
        $('a').css('color', color);
    }
}
var Body = {
    setColor:function (color) {
        $('body').css('color', color);
    },
    setBackgroundColor:function (color) {
        $('body').css('backgroundColor', color);
    }
}

function night_day_handler(self){
    let target = document.querySelector('body').style;
    if(self.value === '다크모드로 전환') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = '라이트모드로 전환';
        Links.setColor('white');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = '다크모드로 전환';
        Links.setColor('blue');
    }
}

// window, ajax, cookie, offline web application, webRTC, speech, webGL, webVR

