$(document).ready(function(){
    
    $.ajax({
        url: 'http://rarolabs.com.br:88/alunos.json',
        type: 'GET',
        crossDomain : true,
        dataType: 'jsonp',
        success: function(data) {
            $.each(data, function(i, aluno) {
                $('#curriculos_relacionados tbody').append(
                    '<tr id="'+aluno.id+'">' +
                        '<td class="col-md-3 estilo-font-1">' +
                            '<a href="'+aluno.link_html+'" target="_blank">'+aluno.nome+'</a>' +
                        '</td>' +
                        '<td class="col-md-9 estilo-font-1">'+aluno.mini_curriculo+'</td>' +
                    '<tr>');
            });
        },
        error: function() {
            console.log('Failed!'); 
        }
    });
    
});
