
$(document).ready(function() {
    /* Controle de tamanho de fonte do portal */
    $('#a').click(function(e) {
        e.preventDefault();
        $('#content').css("font-size", "80%");
    });
    $('#aa').click(function(e) {
        e.preventDefault();
        $('#content').css("font-size", "100%");
    });
    $('#aaa').click(function(e) {
        e.preventDefault();
        $('#content').css("font-size", "150%");
    });

    /* Navegacao por tab na navegacao global */
    jQuery(document).ready(function() {
        var valor = 4;
        jQuery("#searchGadget").attr("tabindex", valor);
        $("#navigation li a").each(function(n) {
            $(this).attr("tabindex", valor + n + 1);
            var len = $('#navigation > li a').length;
        });
    });


    /* Navegacao por tab pra busca ter foco */
    jQuery(document).ready(function() {
        $('#link-buscar').click(function(e) {
            e.preventDefault();
            window.location.hash = '#portal-searchbox';
            $('.searchField').focus();
        });
    });

    /* expansao de segundo nivel da navegacao por tab */
    jQuery(document).ready(function() {
        /* cria estilos de navegacao via teclado */
            var menu = $("#btnavdesktop ul");
            var lis = menu[0].getElementsByTagName('li');
            for (var i = 0, li; li = lis[i]; i++) {
                var link = li.getElementsByTagName('a')[0];
                /* segundo nivel */
                if (link) {
                    link.onfocus = function() {
                        var ul = this.parentNode.getElementsByTagName('ul')[0];
                        if (ul) {
                            var classe = ul.className;
                             ul.style.display = 'block';
                        }
                    };
                    var ul = link.parentNode.getElementsByTagName('ul')[0];
                    if (ul) {
                        var ullinks = ul.getElementsByTagName('a');
                        var ullinksqty = ullinks.length;
                        var lastItem = ullinks[ullinksqty - 1];
                        if (lastItem) {
                            lastItem.onblur = function() {
                                this.parentNode.parentNode.style.display = '';
                                this.parentNode.parentNode.parentNode.style.display = '';
                                this.parentNode.parentNode.parentNode.parentNode.style.display = '';
                            };
                        }
                    }
                }

            }
    });

        /* funcao de contraste do portal */
    jQuery(function($) {
        $('#siteaction-contraste a').click(
            function(e) {
                if ($.cookie('contraste') === null) {
                    $.cookie('contraste', 'on');
                    $('body').addClass('contraste');
                    e.preventDefault();
                    return false;
                } else {
                    if ($.cookie('contraste') == 'on') {
                        $.cookie('contraste', 'off');
                        $('body').removeClass('contraste');
                        e.preventDefault();
                        return false;
                    } else {
                        $.cookie('contraste', 'on');
                        $('body').addClass('contraste');
                        e.preventDefault();
                        return false;
                    }
                }
            });
        if ($.cookie('contraste') == 'on') {
            $('body').addClass('contraste');
            return false;
        }
    });
    
    $(window).ready(function() {
        if ($('#column-two').width() > 300) {
            $('#column-two ul.navTree.navTreeLevel0 li a').removeClass().prependTo('#navigationmobile').wrap("<li class='scdmenu'></li>"); 
            $('#column-two ul.navTree.navTreeLevel0').remove();

        }
    });
    
    
    
});