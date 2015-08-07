

 $('.plus-btn').click(function(){
                   $(this).text(function(i,old){
                                return old=='-' ?  '+' : '-';
                                
                                });
                   });