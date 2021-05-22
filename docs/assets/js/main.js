document.addEventListener('DOMContentLoaded', function(){
    var ele = document.querySelector('.now');
    setInterval(function () {
        //現在時刻のDateオブジェクトを生成
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var dayOfWeek = now.getDay() ;	// 曜日(数値)
        var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] ;	// 曜日(日本語表記)
        var strNow = year + "年" + month + "月" + date + "日" + "(" + dayOfWeekStr + ")" + hour + ":" + min + ":" + sec;
        ele.innerHTML=strNow;
    }, 100);


    const h2s = document.querySelectorAll('h2');
    h2s.forEach(h2 => {
        h2.addEventListener('click', function(e) {
            let article = this.closest("article");
            let row = article.querySelector('.target');
            row.classList.toggle('is-hidden')
        })
    });
});

