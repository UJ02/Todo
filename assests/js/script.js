
$('#add').click(function(){
    if($('#task').val() == '' || $('#category').val() == null || $('#date').val()== ''){
        alert('Enter everything');
    }
    else{
        $('form').attr('action', '/create');
        $('form').submit();
    }
    
})