
        $(document).ready(function() { 
            $('a').click(function() { 
                $('a.nav-link.active').removeClass("active"); 
                $(this).addClass("active"); 
            }); 
        }); 
    