$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
    $('#news-table').DataTable( {
        "paging":   true,
        "ordering": false,
        "info":     false,
        "searching": false,
        "bLengthChange": false,
        "pageLength": 5,
        "pagingType": "simple",
        "language": {
        "paginate": {
            "next": '<div class="news-button btn btn-primary btn-sm"><i class="fa fa-caret-right fa-2x"></i></div>',
            "previous": '<div class="news-button btn btn-primary btn-sm"><i class="fa fa-caret-left fa-2x"></i></div>'  
          }
        }
     } );
});
