<template>
<footer>
  <div class="footer">
    <div class="footer-sepator">
      <hr>
    </div>
    <div class="footer-content">
      <h3>© Cubigo 2023</h3>
      <ul class="external-links">
        <li><a href="https://support-community.cubigo.com/hc/en-us/articles/360029068131-Terms-and-Conditions">Terms of Use</a></li>
        <li><a href="https://github.com/verve-nouf/design-system">GitHub</a></li>
      </ul>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

footer {
  bottom: 0;
}

.footer {
  margin-left: 20vw;
  margin-top: 5vh;
  background-color: #F4F4F4;
  font-family: Lato, sans-serif;
}

.footer hr {
  display: flex;
  margin: 0 45px;
  border: 0;
  border-bottom: 1px solid #edebe9;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 45px;
}


ul li a {
  text-decoration: none;
}

ul li a:visited {
  color: black;
}


.logo-container img {
  margin: 0 45px;
  color: black;
}

.external-links {
  display: flex;
  list-style: none;
  column-gap: 1em;
}


.footer-sepator {
  padding-top: 65px;
}

@media only screen and (max-width: 430px) {
  .footer {
    margin-left: 0 !important;
  }

  .external-links {
    flex-direction: column;
    row-gap: 0.5em;
  }


}

@media only screen and (max-width: 768px) {
  .footer {
    margin-left: 30vw;
  }
}

@media only screen and (min-width: 2000px) {


  .external-links li a {
    font-size: 2rem;
  }

  .footer-content h3 {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 820px) {
  .footer {
    margin-left: 35vw;
  }
}


</style>