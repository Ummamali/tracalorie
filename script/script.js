class MainController {
  constructor() {
    // The major elements in this application
    this.elements = {};
    this.elements.setDailyLimit = document.getElementById("set-daily-limit");
    this.elements.resetDay = document.getElementById("reset-day");

    this.elements.dailyLimit = document.getElementById("daily-limit");
    this.elements.netGain = document.getElementById("net-gain");

    this.elements.caloriesConsumed =
      document.getElementById("calories-consumed");
    this.elements.caloriesBurned = document.getElementById("calories-burned");
    this.elements.caloriesRemaining =
      document.getElementById("calories-remaining");

    // model controller
    this.model = new ModelController();

    // properties, the state of the application
    this.state = { dailyLimit: 0 };
  }

  setDailyLimit(newLimit) {
    if (newLimit > 0) {
      this.state.dailyLimit = newLimit;
      this.elements.dailyLimit.innerText = newLimit;
    }
  }

  resetDay() {
    this.setDailyLimit(0);
  }

  initialize() {
    // adds the event listeners and other stuff
    this.elements.setDailyLimit.addEventListener("click", (e) => {
      this.model.open("hello", "Set Daily Limit");
    });

    this.elements.resetDay.addEventListener("click", (e) => {
      this.model.open("hello", "Reset Day");
    });
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  const ctrl = new MainController();
  ctrl.initialize();
});
