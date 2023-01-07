let pr_list = []

var problem_list = {
    print_problem_list:function () {
        for(let i=0; i<pr_list.length; i++) {
            let list_info = pr_list[i];
            let tmp = "<tr>";
            for(let j=0; j<3; j++) {
                tmp += "<td>" + String(list_info[j]) + "</td>";
            }
            tmp += "</tr>";
            $('#problem-list').append(tmp);
        }
    },

    print_cnt:function (cnt) {
        $('#problem-cnt').text(cnt);
    }
}

function getproblem_list() {
    pr_list.push(["100A", "정수 덧셈", "0"]);
    pr_list.push(["100B", "정수 뺄셈", "0"]);
    pr_list.push(["100C", "정수 곱셈", "0"]);
    pr_list.push(["100D", "정수 나눗셈", "0"]);

    problem_list.print_problem_list();
}

function getproblem_cnt() {
    problem_list.print_cnt(pr_list.length);
}

getproblem_list();
getproblem_cnt();