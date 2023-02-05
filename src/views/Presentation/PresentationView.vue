<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";
import MaterialButton from "@/components/MaterialButton.vue";

//Vue Material Kit 2 Pro components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";
import MaterialBadge from "@/components/MaterialBadge.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";



//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url('https://res.cloudinary.com/dzagcqrbp/image/upload/v1675591737/onlineimmigrant/mgesyezawi343caikyzp.jpg')`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-dark pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block '}"
              :action="{ route: 'https://onlineimmigrant.com', label: 'here'}"
            >
              Full Guide on how to immigrate to the United Kingdom
            </h1>

            <a href="https://onlineimmigrant.com/">
            <MaterialButton variant="gradient" color="secondary">Immigration Advice</MaterialButton>
          </a>

     

            
            <p 
              class="lead text-dark px-5 mt-3" 
              style="font-weight: 400"
              :action="{
                route:'https://onlineimmigrant.com/',
                label: 'here'
              }">
              
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />


  
   
   

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-primary' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="Getting Started"
            description="Check the possible ways of working with our product and the necessary files for building your own project."
            :action="{
              route:
              'https://onlineimmigrant.com/',
              label: { text: 'Let\'s start', 
              alt: 'Start to find immigration information', 
              color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            height="h-100"
            :icon="{ component: 'precision_manufacturing', color: 'primary' }"
            title="Plugins"
            description="Get inspiration and have an overview about the plugins that we
                used to create the Material Kit."
            :action="{
              route:
                'https://onlineimmigrant.com/',
                label: { 
                text: 'Read more', 
                alt: 'Find immigration information', 
                color: 'primary' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            :icon="{ component: 'receipt_long', color: 'primary' }"
            title="Utility Classes"
            description="Material Kit is giving you a lot of pre-made elements. For those
                who want flexibility, we included many utility classes."
            :action="{
              route:
              'https://onlineimmigrant.com/',
              label: { 
                text: 'Read more', 
                alt: 'Find immigration information', 
                color: 'primary' }
            }"
          />
        </div>
      </div>
    </div>

  

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Thank you for your support!</h4>
            <p class="lead mb-0">We deliver the best web links for immigrants</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-design-system-pro"
              component="twitter"
              color="twitter"
              label="Tweet"
            />
            <MaterialSocialButton
              route="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-design-system-pro"
              component="facebook-square"
              color="facebook"
              label="Share"
            />

          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
