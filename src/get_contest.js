let ct_list = []

let contest_list = {
    print_contest_list:function () {
        for(let i=0; i<ct_list.length; i++) {
            let list_info = ct_list[i];
            let tmp = "<tr class=\"contest_tr\">";
            for(let j=0; j<5; j++) {
                tmp += "<td>" + String(list_info[j]) + "</td>";
            }
            tmp += "</tr>";
            $('#contest-list').append(tmp);
        }
    },
}

function getcontest_list() {
    ct_list.push(["100", "Alpha Contest", "2023-13-32 09:00", "2023-13-32 16:00", 21474]);
    ct_list.push(["101", "제-1회 미적확통컵", "2023-13-33 09:00", "2023-13-33 16:00", "0/0"]);

    contest_list.print_contest_list();
}

getcontest_list();