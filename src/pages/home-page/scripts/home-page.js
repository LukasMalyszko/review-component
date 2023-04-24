import "../styles/home-page.scss";

/// wyświetla modal
///
///
document
  .querySelector(".js-dynamic-modal-toggle")
  .addEventListener("click", function () {
    // Here we create our dynamic modal
    if (!rating) {
      window.alert("error");
    } else {
      if (reviewValue > 3) {
        new Modal({
          title: "Hooray!",
          content: `Thank you for rating the product ${reviewValue}`,
        }).show();
      } else {
        new Modal({
          title: "We can do better!",
          content: `Thank you for rating the product ${reviewValue}`,
        }).show();
      }
    }
  });

let rating = false;
let reviewValue = 5;
/// wybieranie oceny
///
///
function selectReview() {
  const numbers = document.querySelectorAll(".review-component__number");
  const button = document.querySelector(".review-component__button");

  /// iteruje przez numbers, ustawia i pobiera atrybuty
  /// usuwa disabled, rating wysyła error, jeśli usunięto disabled
  ///
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      rating = true;
      reviewValue = this.dataset.review;
      if (this.dataset.active === "1") {
        rating = false;
        this.dataset.active = "0";
        button.disabled = true;
      } else {
        this.dataset.active = "1";
        for (let j = 0; j < numbers.length; j++) {
          if (j === i) {
            numbers[j].dataset.active = "1";
            button.disabled = false;
          } else {
            numbers[j].dataset.active = "0";
          }
        }
      }
    });
  }
}

selectReview();

/// opóźnia pojawienie się komponentu
///
const reviewComponent = document.querySelector(".review-component");
reviewComponent.remove();

const homePage = document.getElementById("home-page");
setTimeout(() => {
  homePage.appendChild(reviewComponent);
}, 3000);