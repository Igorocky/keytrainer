function charData(r, e, ec) {
    return {'r': r, 'e': e, 'ec': ec};
}

function generateQuestions() {
    return _.shuffle([
        charData('А', 'f', 102),
        charData('Б', ',', 44),
        charData('В', 'd', 100),
        charData('Г', 'u', 117),
        charData('Д', 'l', 108),
        charData('Е', 't', 116),
        charData('Ж', ';', 59),
        charData('З', 'p', 112),
        charData('И', 'b', 98),
        charData('Й', 'q', 113),
        charData('К', 'r', 114),
        charData('Л', 'k', 107),
        charData('М', 'v', 118),
        charData('Н', 'y', 121),
        charData('О', 'j', 106),
        charData('П', 'g', 103),
        charData('Р', 'h', 104),
        charData('С', 'c', 99),
        charData('Т', 'n', 110),
        charData('У', 'e', 101),
        charData('Ф', 'a', 97),
        charData('Х', '[', 91),
        charData('Ц', 'w', 119),
        charData('Ч', 'x', 120),
        charData('Ш', 'i', 105),
        charData('Щ', 'o', 111),
        charData('Ъ', ']', 93),
        charData('Ы', 's', 115),
        charData('Ь', 'm', 109),
        charData('Э', '\'', 39),
        charData('Ю', '.', 46),
        charData('Я', 'z', 122)
    ]);
}

var questions = [];

function isValid(e) {
    return _.first(questions).ec == e.which;
}

function crearUserResponse() {
    $('#userResponse').val("");
}

function showError() {
    crearUserResponse();
    $('#question').addClass('error');
}
function next() {
    crearUserResponse();
    if (_.size(questions) <= 1) {
        questions = generateQuestions();
        let round = $('#round');
        round.html(parseInt(round.text()) + 1)
    } else {
        questions = _.rest(questions);
    }
    let question = $('#question');
    question.removeClass();
    question.html(_.first(questions).r);
}