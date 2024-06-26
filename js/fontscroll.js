/**
 +-------------------------------------------------------------------
 * jQuery FontScroll - ���������Ϲ������ - http://java2.sinaapp.com
 +-------------------------------------------------------------------
 * @version    1.0.0 beta
 * @since      2014.06.12
 * @author     kongzhim <kongzhim@163.com> <http://java2.sinaapp.com>
 * @github     http://git.oschina.net/kzm/FontScroll
 +-------------------------------------------------------------------
 */

(function($){
    $.fn.FontScroll = function(options){
        var d = {time: 30,s: 'fontColor',num: 1}
        var o = $.extend(d,options);


        this.children('ul').addClass('line');
        var _con = $('.line').eq(0);
        var _conH = _con.height(); //�����ܸ߶�
        var _conChildH = _con.children().eq(0).height();//һ�ι����߶�
        var _temp = _conChildH;  //��ʱ����
        var _time = d.time;  //�������
        var _s = d.s;  //�������


        _con.clone().insertAfter(_con);//��ʼ����¡

        //��ʽ����
        var num = d.num;
        var _p = this.find('li');
        var allNum = _p.length;

        _p.eq(num).addClass(_s);


        var timeID = setInterval(Up,_time);
		this.hover(function(){clearInterval(timeID)},function(){timeID = setInterval(Up,_time);});

        function Up(){
            _con.animate({marginTop: '-'+_conChildH});
            //��ʽ����
            _p.removeClass(_s);
            num += 1;
            _p.eq(num).addClass(_s);

            if(_conH == _conChildH){
                _con.animate({marginTop: '-'+_conChildH},"normal",over);
            } else {
                _conChildH += _temp;
            }
        }
        function over(){
            _con.attr("style",'margin-top:0');
            _conChildH = _temp;
            num = 1;
            _p.removeClass(_s);
            _p.eq(num).addClass(_s);
        }
    }
})(jQuery);
