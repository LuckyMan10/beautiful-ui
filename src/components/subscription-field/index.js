import { Subscription } from "./subscription";

document.querySelectorAll(".js-subscription-field").forEach((element) => {
  const rootId = $(element).attr("id");
  const subscription = new Subscription({ rootId });
  subscription.init();
});
