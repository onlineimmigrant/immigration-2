<script setup>
import logoDark from "@/assets/img/logo-ct-dark.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "UK VISAS",
      logo: logoDark,
      route: "/",
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
        link: "https://www.facebook.com/onlineimmigrantUK/",
      },
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
        link: "https://twitter.com/youImmigrateUK/",
      },


      {
        icon: '<i class="fab fa-instagram text-lg opacity-8"></i>',
        link: "https://instagram.com/online_immigrant_services/",
      },
    ],
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String,
    },
    default: () => [
      {
        name: "company",
        items: [
          {
            name: "about us",
            href: "https://onlineimmigrant.com/about/",
          },
          {
            name: "contact",
            href: "https://onlineimmigrant.com/contact/",
          },
          {
            name: "meeting",
            href: "https://onlineimmigrant.com/meeting/",
          },
          { name: "useful links", 
            href: "https://onlineimmigrant.com/useful-links/" },
        ],
      },
      {
        name: "immigration",
        items: [
          { name: "life in the UK test", href: "https://onlineimmigrant.com/life-in-the-uk-test/" },
          {
            name: "indefinite leave to remain",
            href: "https://onlineimmigrant.com/indefinite-leave-to-remain/",
          },
          {
            name: "british citizenship",
            href: "https://onlineimmigrant.com/british-citizenship/",
          },
        ],
      },
      {
        name: "visas",
        items: [
          {
            name: "spouse visa",
            href: "https://onlineimmigrant.com/spouse-visa/",
          },
          {
            name: "skilled worker visa",
            href: "https://onlineimmigrant.com/skilled-worker-visa/",
          },
          {
            name: "eu settlement",
            href: "https://onlineimmigrant.com/settlement-scheme-status-eu-citizens-families/",
          },
          {
            name: "student visa",
            href: "https://onlineimmigrant.com/student-visa/",
          },
          {
            name: "global talent visa",
            href: "https://onlineimmigrant.com/global-talent-visa/",
          },
          {
            name: "visitor visa",
            href: "https://onlineimmigrant.com/visitor-visa/",
          },
          {
            name: "ukraine visa schemes",
            href: "https://onlineimmigrant.com/ukraine-visa-schemes/",
          },
          {
            name: "family members",
            href: "https://onlineimmigrant.com/family-visa/",
          },
        ],
      },

    ],
  },
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-2 col-sm-6 col-6 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a class="nav-link" :href="item.href" target="_blank">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              
              <a href="https://onlineimmigrant.com" target="_blank"
                ></a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
