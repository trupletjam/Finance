// Дэлгэцтэй ажиллах контроллер
var uiController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// Санхүүгийн контроллер
var financeController = (function() {
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  //buh orlogo zarlagiin datag neg dor hadgalah object
  var data = {
    allItems: {
      inc: [],
      exp: []
    },

    totals: {
      inc: 0,
      exp: 0
    }
  };
})();

// Программ холбогч контроллер
var appController = (function(uiController, financeController) {
  var ctrlAddItem = function() {
    // 1. Oruulah ogogdoliig delgetsees olj awna
    // 2. Olj awsan ogogdoluudee finController t damjuulj tend hadgalna
    // 3. Olj awsan ogogdoluudee delgets deer gargana
    // Budget iig tootsoolno
    //Etssiin uldegdel tootsoog delgetsend gargana
  };

  var setupEventListener = function() {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function() {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function() {
      setupEventListener();
      console.log("hi");
    }
  };
})(uiController, financeController);

appController.init();
