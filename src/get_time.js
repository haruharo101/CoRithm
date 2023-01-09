let time_info = {
    print_time_head:function () {
        let time = new Date();
        let month = time.getMonth();
        let date = time.getDate();
        let day = time.getDay();
        let week = ['일', '월', '화', '수', '목', '금', '토'];
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        $('#now-time').text(`${month+1}월 ${date}일 ${week[day]}요일 ${hours}:${minutes}:${seconds}` + `  KST`);
    }
}

function get_time() {
    time_info.print_time_head();
}

get_time();
setInterval(get_time, 1000);