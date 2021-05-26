import html from "html-literal";

export default () => html`
  <h3>Got questions? We've got answers. Fire away.</h3>

  <div class="flex helpBox">
    <!--First text box-->
    <h4 class="boxTitles">
      What actually... IS this?
    </h4>
    <p>
      AnyGym is a free app to help connect gym owners with gym goers without the
      constraints of the normal (and let's face it, sometimes intimidating)
      commitments and sales process. Sign up and list your gym or sign up and
      find a gym. Easy as pie. But like... a low calorie pie. That tastes good.
      Healthy, yummy pie. Mmmm.
    </p>
  </div>

  <div class="flex helpBox">
    <!--Second text box-->
    <h4 class="boxTitles">
      How do I use this thing, anyway?
    </h4>
    <p>
      For now? List your gym and get more exposure to clients, or input your
      info and find a gym near you. Later? Big, big, things. Yuge.
    </p>
  </div>

  <div class="flex helpBox">
    <!--Third text box-->
    <h4 class="boxTitles">
      Why is this a thing?
    </h4>
    <p>
      So glad you asked. This is the first iteration of what will soon become a
      full featured platform to allow gym owners - both public and private - to
      rent out unused gym space and for gym users or aspiring gym users to get
      access to fitness amenities anywhere, anytime, without all the commitments
      and hassle and limitations of a traditional gym membership. Being a member
      of AnyGym will make AnyGym YOUR gym.
    </p>
  </div>

  <div class="flex helpBox">
    <!--Fourth text box-->
    <h4 class="boxTitles">
      I lost my account info. Super embarrassed. What now?
    </h4>
    <p>
      Pssshhhh. No sweat. Happens to all of us.
      <a href="contact.html"
        >Just hit up this link here to get it sorted out.</a
      >
      Easy peasy, lemon-squeezy!
    </p>
  </div>
  <a href="contact.html"
    >Still have more questions? Need to get something off your chest? We'd love
    to hear it. Click here to give us a shout all direct-like!</a
  >
`;
