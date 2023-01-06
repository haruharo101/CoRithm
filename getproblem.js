var problem_list = {
    print_cnt:function (cnt) {
        $('#problem-cnt').text(cnt);
    }
}

function getproblem_cnt() {
    problem_list.print_cnt(0);
}

getproblem_cnt();