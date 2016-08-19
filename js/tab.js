;(function (window, $, undefined) {
    /*
     * tab切换插件
     * 用例：$('*').createTab();
     */
    $.fn.createTab = function (opt) {
        var def = {
            activeEvt: 'mouseover',
            activeCls: 'cur'
        }
        $.extend(def, opt);
        this.each(function () {
            var $this = $(this);
            var timer;
            $this.find('ul.title li').mouseover(def.activeEvt,function(){
                var index = $(this).index(),
                    that = $(this);
                timer = setTimeout(function(){
                    that.addClass('cur').siblings().removeClass('cur');
                    var ML = $('.tabCon').innerWidth();
                    $this.find('div.list').animate({marginLeft:-ML*index},'slow');
                },300);
            }).mouseout(function(){
                clearTimeout( timer );
            })
        });
    }

})(window, jQuery);
$(function(){
    $(".jyTable").createTab()
})
