import "./Subscription.css";

function Subscription() {
  return (
    <div id="subscription">
      <section class="pricing-plans">
        <div class="pricing-card basic">
          <div class="heading">
            <h4>Basic Fitness Plan</h4>
          </div>
          <p class="price">
            $29
            <sub>/month</sub>
          </p>
          <ul class="features">
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Access to gym (6 AM - 10 PM)</strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Cardio and strength equipment</strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Access to locker rooms and showers</strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>2 guest passes per month</strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>1 complimentary fitness assessment with a trainer</strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Access to the gym's mobile app for workout tracking</strong>
            </li>
          </ul>
          <button class="cta-btn">SELECT</button>
        </div>
        <div class="pricing-card standard">
          <div class="heading">
            <h4>Premium Plus Plan</h4>
          </div>
          <p class="price">
            $59
            <sub>/month</sub>
          </p>
          <ul class="features">
          <li>
              <span class="material-symbols-outlined">check</span>
              <strong>24/7 access to all gym locations
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Use of cardio and strength equipment, plus functional training zones
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Unlimited group fitness classes (yoga, spinning, HIIT, etc.)
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>4 guest passes per month
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>1 personal training session per month
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Access to sauna, steam rooms, and hydro massage beds
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Nutrition consultation and personalized meal planning
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Discounts on supplements and merchandise
              </strong>
            </li>
          </ul>
          <button class="cta-btn">SELECT</button>
        </div>
        <div class="pricing-card premium">
          <div class="heading">
            <h4>Elite VIP Plan</h4>
          </div>
          <p class="price">
           $99
            <sub>/month</sub>
          </p>
          <ul class="features">
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>24/7 access to all gym locations, including exclusive VIP areas
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Priority booking for group classes and personal training
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Unlimited access to group fitness classes and workshops
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>8 guest passes per month
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>4 personal training session per month
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Complimentary towel service, laundry service, and premium locker access
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Access to a private lounge with free Wi-Fi and refreshments
              </strong>
            </li>
            <li>
              <span class="material-symbols-outlined">check</span>
              <strong>Free monthly fitness assessments and body composition analysis
              </strong>
            </li>
          </ul>
          <button class="cta-btn">SELECT</button>
        </div>
      </section>
    </div>
  );
}

export default Subscription;
