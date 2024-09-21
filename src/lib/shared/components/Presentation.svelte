<script>
  import GithubIcon from "./icons/GithubIcon.svelte";
  import LinkedinIcon from "./icons/LinkedinIcon.svelte";
</script>

<div class="presentation__container">
  <div class="presentation__image">
    <img src="/photo_portfolio.jpg" alt="me" />
  </div>
  <div class="presentation__greeting">
    <h1>Hi, I'm Cristian Barajas</h1>
    <p>
      My name is Cristian Barajas and I am a software developer, I currently
      work in a software development company called kunaisoft, passionate about
      video games and breaking my head with programming problems
    </p>
    <div class="presentation__social">
      <a
        class="presentation__social--github presentation__social-icon "
        href="https://github.com/Cristian-Barajas09"
        target="_blank"
        title="Github"
      >
        <GithubIcon styles="width:20px;color:var(--bg-primary);" />
      </a>
      <a
        class="presentation__social--linkedin presentation__social-icon "
        href="https://www.linkedin.com/in/cristian-alejandro-barajas-bol%C3%ADvar/"
        title="LinkedIn"
        >
      <LinkedinIcon styles="width:20px;color: white;" />
    </a>
    </div>
  </div>
</div>

<style>
  .presentation__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }

  .presentation__greeting {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .presentation__image {
    width: 100%;
    height: 420px;
  }

  .presentation__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    padding: 10px;
  }

  .presentation__social {
    display: flex;
    gap: 10px;
  }

  .presentation__social-icon {
    display: flex;
    padding: 5px;
    border-radius: 5px;
  }

  .presentation__social--github {
    background: var(--color-primary);
  }

  .presentation__social--linkedin {
    background: rgb(10, 102, 194);
  }

  @media (1000px <= width) {
    .presentation__container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      padding: 10px;
      margin: 10px;
    }
    .presentation__greeting {
      width: 60%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }
    .presentation__image {
      width: 60%;
      height: 420px;
    }
  }
</style>
