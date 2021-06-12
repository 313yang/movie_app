import SignInForm from "../styles/SignInForm";

function About() {
  return (
    <SignInForm>
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Sign In" />
      </form>
    </SignInForm>
  );
}
export default About;
