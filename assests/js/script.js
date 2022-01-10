$('#add').click(function(){
    if($('#task').val() == '' || $('#category').val() == null || $('#date').val()== ''){
        alert('Enter everything');
    }
    else{
        $('form').attr('action', '/create');
        $('form').submit();
    }
    
});

$("#delete").click(function(){
    let box = $("input[type='checkbox']"), bool = false;
    for(let i=0; i<box.length; i++){
        if($(box[i]).is(':checked')){
            bool = true;
            break;
        }
    }
    if(!bool){
        alert('Choose at least one to delete');
    }
    else{
        $('form').attr('action', '/delete');
        $('form').submit();
    }
});

$("input[type='checkbox']").on('click', function(event){
    let id = event.currentTarget.id;
    if($('#'+id).is(':checked')){
        $(`label[for=${id}] p`).css('text-decoration', 'line-through');
    }
    else{
        $(`label[for=${id}] p`).css('text-decoration', 'none');
    }
})