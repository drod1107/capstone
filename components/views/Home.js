import html from "html-literal";

export default () => html`
  <div class="homepage wrapper">
    <div class="container whatIsBlock two">
      <h2>What is AnyGym?</h2>
      <h4>AnyGym is a free app that connects gym owners to gym users.</h4>
    </div>
    <!-- <div class ="login">
  <label>Email </label><input type="text"><br>
  <label>Password </label><input type="password"><br>
  <a href=""><button>Sign in</button></a><br> -->
    <!-- </div> -->
    <div class="signupButton five">
      <a href="./Signup">
        <button>Whoa. Wait! I'm new here. Sign me up!</button> </a
      ><br />
    </div>
  </div>
`;
