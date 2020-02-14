// Дэлгэцтэй ажиллах контроллер
var uiController = (function(){

})();


// Санхүүгийн контроллер
var financeController =(function(){

})();

// Программ холбогч контроллер
var appController = (function () {

    var ctrlAddItem = function () {

        // 1. Oruulah ogogdoliig delgetsees olj awna

        // 2. Olj awsan ogogdoluudee finController t damjuulj tend hadgalna

        // 3. Olj awsan ogogdoluudee delgets deer gargana

        // Budget iig tootsoolno

        //Etssiin uldegdel tootsoog delgetsend gargana

    }


    document.querySelector('.add__btn').addEventListener('click', function (){
        ctrlAddItem();
    });

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        };
    })
})(uiController,financeController);
