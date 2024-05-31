<template>
  <main>
    <div class="page-container">
      <SideBar></SideBar>
      <div class="content-wrapper">
        <div class="content-hero">
          <div class="hero-title">
            <div class="hero-title-contentblock">
              <p class="mini-title">Components</p>
            </div>
            <div class="hero-title-contentblock">
              <h1>Cards</h1>
            </div>
            <div class="hero-title-contentblock">
              <p class="description">Card UI design pattern is that it allows you to create a responsive and modular layout that adapts to different screen sizes and devices.</p>
            </div>
          </div>
          <div class="hero-content-block">
          </div>

          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>Usage</h2>
            </div>
            <div class="article-paragraph">
              <p>
                Cards are like mini-containers in a UI, presenting focused bits of information in a clear and organized way. They're great for everything from product listings to news articles, helping users scan information quickly and take action if needed.
              </p>
              <br>
              <p>
                Their design flexibility makes them adaptable to different layouts and devices, creating a positive user experience across platforms.
              </p>
            </div>
          </article>

          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>Types</h2>
            </div>
            <div class="article-subheader">
              <h3>
                Profile card
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                The purpose of a profile card is to provide a concise and easily accessible summary of a person's key information, often in a professional or organizational context. Here are some specific purposes of a profile card.
              </p>
            </div>
            <div class="article-image">
              <a href="https://www.figma.com/design/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?node-id=1106-2032&t=l00MTz1vGS7FsvNM-11">
                <img src="/src/assets/profile-card.svg" alt="profile-card-image">
              </a>
            </div>
          </article>


          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>
                Accesibility
              </h2>
            </div>
            <div class="article-paragraph">
              <p>
                An accessible profile card provides a clear and concise summary of essential information about a person, such as their name, job title, and contact details, using readable fonts and high-contrast colors. It employs proper HTML structure with headings, paragraphs, and descriptive labels to ensure screen readers can interpret the content accurately.
                <br><br>
                All interactive elements are keyboard-navigable with clear focus indicators. Images include descriptive alt text, and the design avoids relying solely on color to convey information, ensuring usability for individuals with color blindness. The card is also responsive, adapting to various screen sizes and orientations. This approach ensures that all users, regardless of their abilities, can easily access and understand the information presented.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>

  </main>
  <footer>
    <Footer></Footer>
  </footer>


</template>

<script>
import Footer from "@/components/Footer.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "CardsView",
  components: {SideBar, Footer}
}
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}

.content-hero {
  padding: 10vh 80px 0 80px;
  margin-left: 20vw;
}

.hero-title p {
  font-family: Lato, "sans-serif";
  color: #0092E1;
}

.hero-title-contentblock {
  margin-bottom: 15px;
}

.separator {
  margin: 75px 0;
}

.separator hr {
  border: 0;
  border-bottom: 1px solid #edebe9;
}

.hero-title-contentblock h1 {
  color: #000;
  font-family: "Tiempos Fine-bold", sans-serif;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 92px;
}

.separator hr {
  max-width: 75%;
}

.hero-title-contentblock .mini-title {
  color: rgba(0, 146, 225, 0.50);
  font-family: Lato, sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.35rem */
  letter-spacing: -0.09375rem;
}

.hero-title-contentblock .description {
  color: black;
  font-family: Lato, sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  max-width: 75%;
}

.article-content .article-header h2 {
  color: #000;
  font-family: "Tiempos Fine-bold", sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 2.4rem */
  margin-bottom: 10px;
}

.article-paragraph p {
  color: black;
  font-family: Lato, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  max-width: 75%;
}

.article-subheader h3 {
  color: #000;
  font-family: "Tiempos Fine-medium", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.8rem */
  margin-bottom: 10px;
}

.article-content .article-image {
  margin-top: 30px;
  margin-bottom: 120px;
}

@font-face {
  font-family: 'Tiempos Fine-regular';
  src: url('/src/assets/WOFF2/tiempos-fine-regular.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

@font-face {
  font-family: 'Tiempos Fine-bold';
  src: url('/src/assets/WOFF2/tiempos-fine-bold.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

@font-face {
  font-family: 'Tiempos Fine-light';
  src: url('/src/assets/WOFF2/tiempos-fine-light.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

@font-face {
  font-family: 'Tiempos Fine-medium';
  src: url('/src/assets/WOFF2/tiempos-fine-medium.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

@font-face {
  font-family: 'Tiempos Fine-semibold';
  src: url('/src/assets/WOFF2/tiempos-fine-semibold.woff2') format('woff2'),
  url('/src/assets/WOFF2/') format('woff');
}

.instruction {
  display: flex;
  margin-bottom: 25px;
}

#anatomy {
  margin-bottom: 50px;
}

.pointer-container {
  margin-right: 25px;
}

.instruction-content h4 {
  font-family: Lato, sans-serif;
  font-weight: 700;
  padding-bottom: 5px;
}

.instruction-content p {
  font-family: Lato, sans-serif;
  color: #808080;
}

#special-paragraph {
  margin-bottom: 50px;
}

@media only screen and (max-width: 430px) {
  .hero-title-contentblock .description {
    max-width: 100%;
  }

  .separator hr {
    max-width: 100%;
  }

  .article-image img {
    width: 100%;
  }

  .content-hero {
    margin-left: 0;
    padding: 10vh 20px 0 20px;


  }

  .article-paragraph p {
    max-width: 100%
  }

}

</style>