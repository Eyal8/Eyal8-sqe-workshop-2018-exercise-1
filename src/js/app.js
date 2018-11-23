import $ from 'jquery';
import {parseCode, getData, initialize_data} from './code-analyzer';

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        $('.view tr').remove();
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
        $('.view').append('<tr><th>Line</th><th>Type</th><th>Name</th><th>Condition</th><th>Value</th></tr>');
        initialize_data(parsedCode);
        let all_rows = getData();
        print_table(all_rows);
    });
});

const map_to_type = {
    'function declaration': add_function,
    'param': add_param,
    'var_dec': add_var_dec,
    'assignment expression': add_assignment,
    'return statement': add_return_statement,
    'Statement': add_other_statement
};

function print_table(all_rows){
    for (let i = 0; i < all_rows.length; i++){
        let element_type = all_rows[i].element_type;
        map_to_type[element_type](all_rows[i]);
    }
}

function add_param(element){
    $('.view').append('<tr><td>'+element.line+'</td>' +
    '<td>'+element.kind+'</td><td>'+element.name +'</td><td></td><td></td></tr>');
}
function add_var_dec(element){
    $('.view').append('<tr><td>'+element.line+'</td>' +
    '<td>'+element.kind+'</td><td>'+element.name +'</td><td></td><td>'+element.value+'</td></tr>');
}
function add_function(element){
    $('.view').append('<tr><td>'+element.line+'</td>' +
    '<td>'+element.kind+'</td><td>'+element.name +'</td><td></td><td></td></tr>');
}
function add_assignment(element){
    $('.view').append('<tr><td>'+element.line+'</td>' +
    '<td>'+element.kind+'</td><td>'+element.name +'</td><td></td><td>'+element.value+'</td></tr>');
}
function add_return_statement(element){
    $('.view').append('<tr><td>'+element.line+'</td>' +
    '<td>'+element.element_type+'</td><td></td><td></td><td>'+element.value+'</td></tr>');
}
function add_other_statement(element){
    $('.view').append('<tr><td>'+element.line+'</td>' +
    '<td>'+element.type+'</td><td></td><td>'+element.condition+'</td><td></td></tr>');
}



