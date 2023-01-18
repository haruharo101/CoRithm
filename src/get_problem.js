let pr_list = []

var problem_list = {
    print_problem_list:function () {
        for(let i=0; i<pr_list.length; i++) {
            let list_info = pr_list[i];
            let tmp = "<tr class=\"problem_tr\">";
            for(let j=0; j<2; j++) {
                tmp += "<td>" + String(list_info[j]) + "</td>";
            }
            tmp += "<td class=\"diff_td\"><progress class=\"diff_pg\" value=\""+String(list_info[2])+"\" max=\"20\"></progress> <span class=\"diff\" id=\"problem-dif\">"+String(list_info[2])+"</span></td>";
            tmp += "</tr>";
            $('#problem-list').append(tmp);
            
        }
    },

    print_cnt:function (cnt) {
        $('#problem-cnt').text(cnt);
    }
}

function getproblem_list() {
    pr_list.push(["100A", "정수 덧셈", 1]);
    pr_list.push(["100B", "정수 뺄셈", 2]);
    pr_list.push(["100C", "정수 곱셈", 3]);
    pr_list.push(["100D", "정수 나눗셈", 4]);
    pr_list.push(["100A", "정수 덧셈", 1]);
    pr_list.push(["100B", "정수 뺄셈", 2]);
    pr_list.push(["100C", "정수 곱셈", 3]);
    pr_list.push(["100D", "정수 나눗셈", 4]);
    pr_list.push(["100A", "정수 덧셈", 1]);
    pr_list.push(["100B", "정수 뺄셈", 2]);
    pr_list.push(["100C", "정수 곱셈", 3]);
    pr_list.push(["100D", "정수 나눗셈", 4]);
    pr_list.push(["100A", "정수 덧셈", 1]);
    pr_list.push(["100B", "정수 뺄셈", 2]);
    pr_list.push(["100C", "정수 곱셈", 3]);
    pr_list.push(["100D", "정수 나눗셈", 4]);
    pr_list.push(["100A", "정수 덧셈", 1]);
    pr_list.push(["100B", "정수 뺄셈", 2]);
    pr_list.push(["100C", "정수 곱셈", 3]);
    pr_list.push(["100D", "정수 나눗셈", 4]);

    problem_list.print_problem_list();
}

function getproblem_cnt() {
    problem_list.print_cnt(pr_list.length);
}

getproblem_list();
getproblem_cnt();