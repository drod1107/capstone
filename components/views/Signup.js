import html from "html-literal";

export default () => html`
  <div class="signUpForm who">
    <!-- Add action for location to post data; replace with FormSpree form??? -->
    <h3>Who are you?</h3>
    <label>Email address</label
    ><input type="text" placeholder="name@domain.com" /><br />
    <label>Password</label
    ><input type="password" placeholder="Create Password" /><br />
    <label>First Name</label><input type="text" /><br /><label>Last Name</label
    ><input type="text" /><br />
    <label>City</label><input type="text" /><br />
    <label for="state">State</label>
    <select name="state" id="state">
      <option value="" selected="selected">Select a State</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="id">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option> </select
    ><br />
    <label>If you're an owner, enter your gym's name</label
    ><input type="text" /><br />
    <label>Phone</label><input type="text" /><br />
    <label for="contact">Best way to reach you?</label>
    <div class="contact">
      <input type="radio" id="contact1" name="contact" value="phone" />
      <label for="contact1">Phone</label><br />
      <input type="radio" id="contact2" name="contact" value="email" />
      <label for="contact2">Email</label><br />
      <input type="radio" id="contact3" name="contact" value="dnc" />
      <label for="contact3"
        >Carrier Pigeon. Seriously? Just leave me alone. Ugh.</label
      >
    </div>
    <div class="signUpForm preferences">
      <h3>What are you into?</h3>
      <div id="modality">
        <h5>This is the way:</h5>
      </div>
      <div>
        <input
          type="checkbox"
          id="resistanceTraining"
          name="resistanceTraining"
        />
        <label for="resistanceTraining">Resistance Training</label>
      </div>
      <div>
        <input type="checkbox" id="cardio" name="cardio" />
        <label for="cardio">Cardio</label>
      </div>
      <div>
        <input type="checkbox" id="yoga" name="yoga" />
        <label for="yoga">Yoga</label>
      </div>
      <div>
        <input type="checkbox" id="other" name="other" />
        <label for="other">Other</label><input type="text" name="other" />
      </div>
      <div id="equipment"></div>
      <h5>How do you throw down?</h5>
      <div>
        <input type="checkbox" id="weights" name="weights" />
        <label for="weights">Free weights</label>
      </div>
      <div>
        <input type="checkbox" id="machines" name="machines" />
        <label for="machines">Weight machines</label>
      </div>
      <div>
        <input type="checkbox" id="bands" name="bands" />
        <label for="bands">Resistance bands</label>
      </div>
      <div>
        <input type="checkbox" id="mats" name="mats" />
        <label for="mats">Calisthenics mats</label>
      </div>
      <div>
        <input type="checkbox" id="functional" name="functional" />
        <label for="functional">Functional training</label>
      </div>
      <div>
        <input type="checkbox" id="other" name="other" />
        <label for="other">Other</label><input type="text" name="other" />
      </div>
      <div id="timeOfDay"></div>
      <h5>When are you getting down with it?</h5>
      <div>
        <input type="checkbox" id="morning" name="morning" />
        <label for="morning">6am-10am</label>
      </div>
      <div>
        <input type="checkbox" id="afternoon" name="afternoon" />
        <label for="afternoon">10am-2pm</label>
      </div>
      <div>
        <input type="checkbox" id="evening" name="evening" />
        <label for="evening">2pm-6pm</label>
      </div>
      <div>
        <input type="checkbox" id="night" name="night" />
        <label for="night">6pm-6am</label>
      </div>
      <br />
    </div>
    <div id="duration">
      <h5>How long are you sticking around?</h5>
      <div>
        <input type="checkbox" id="short" name="short" />
        <label for="short">20 mins or less - I get it DONE</label>
      </div>
      <div>
        <input type="checkbox" id="medium" name="medium" />
        <label for="medium">20mins to an hour - I get serious</label>
      </div>
      <div>
        <input type="checkbox" id="long" name="long" />
        <label for="long">An hour or two #warriormode</label>
      </div>
    </div>
    <div id="frequency">
      <h5>How often are you gettin' shwetty?</h5>
      <div>
        <input type="checkbox" id="occasional" name="occasional" />
        <label for="occasional">Every once in a while. I dabble.</label>
      </div>
      <div>
        <input type="checkbox" id="weekly" name="weekly" />
        <label for="weekly">Once a week for sure. It's swole-day.</label>
      </div>
      <div>
        <input type="checkbox" id="semiweekly" name="semiweekly" />
        <label for="semiweekly">Couple times a week. I'm in the groove.</label>
      </div>
      <div>
        <input type="checkbox" id="often" name="often" />
        <label for="often">About every other day. I'm a regular.</label>
      </div>
      <div>
        <input type="checkbox" id="daily" name="daily" />
        <label for="daily"
          >Every darned day, baby. My mail gets delivered to my gym.</label
        >
      </div>
    </div>
    <div id="experience">
      <h5>Are you... experienced?</h5>
      <div>
        <input type="checkbox" id="nope" name="nope" />
        <label for="nope">Mmmmm.... nyupe.</label>
      </div>
      <div>
        <input type="checkbox" id="returning" name="returning" />
        <label for="returning"
          >Fell off the wagon but I'm climbing back up.</label
        >
      </div>
      <div>
        <input type="checkbox" id="beenAround" name="beenAround" />
        <label for="beenAround">TBH, I do kinda feel like I've got this.</label>
      </div>
      <div>
        <input type="checkbox" id="semiPro" name="semiPro" />
        <label for="semiPro">Got it well under control, for sheezy.</label>
      </div>
      <div>
        <input type="checkbox" id="professional" name="professional" />
        <label for="professional"
          >This is literally - not figuratively - my job. I'm basically a Jedi,
          thanks.</label
        >
      </div>
    </div>
  </div>
  <h3>Noice! Done and done. Let's kick this pig!</h3>
  <a href=""><button>Create Account</button></a>
`;
