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
import ColoredBackgroundCard from "@/examples/cards/backgroundCards/ColoredBackgroundCard.vue";
import InfoBackgroundCard from "@/examples/cards/backgroundCards/InfoBackgroundCard.vue";

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
            <MaterialButton variant="gradient" color="light">UK Immigration</MaterialButton>
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


    <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="p-3 text-center mb-5">
            <div
              class="icon icon-shape icon-lg bg-gradient-primary shadow mx-auto"
            >
              <i class="material-icons opacity-10">person</i>
            </div>
            <h2 class="mt-3">Check out what&#39;s new</h2>
            <p>
              Let Us Navigate the Complexities of UK Immigration for You
            </p>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-3 col-md-6 mb-5">
          <ColoredBackgroundCard
            color="primary"
            image="https://res.cloudinary.com/dzagcqrbp/image/upload/v1675588580/onlineimmigrant/bxgqeehlckx9pgkrol1v.svg"
            label="United Kingdom"
            title="Immigration"
            description="Breaking Down the Latest Immigration Policies: What You Need to Know"
          />
        </div>
        <div class="col-lg-3 col-md-6 d-flex flex-column">
          <InfoBackgroundCard
            color="dark"
            image=""
            icon="list"
            title="British Citizenship"
            label="UK Citizenship: Eligibility, Benefits, and the Application Process"
          />
          <InfoBackgroundCard
            class="mt-4 mb-5"
            image=""
            icon="volunteer_activism"
            title="Indefinite Leave to Remain"
            label="The Path to UK Citizenship: Understanding Indefinite Leave to Remain and Beyond"
          />
        </div>
        <div class="col-lg-3 col-md-6 d-flex flex-column">
          <InfoBackgroundCard
            image=""
            icon="people"
      
            title="Spouse Visa"
            label="Happily Ever After: How to Secure a UK Spouse Visa for Your Partner"
          />
          <InfoBackgroundCard
            class="mt-4 mb-5"
            image=""
            icon="cake"
            title="Visitor Visa"
            label="Experience the Best of the UK: Secure Your Visitor Visa Today"
          />
        </div>

        <div class="col-lg-3 col-md-6 d-flex flex-column">
          <InfoBackgroundCard
            image=""
            icon="work"
      
            title="Skilled Worker Visa"
            label="UK Work Visa Requirements: Everything You Need to Know"
          />
          <InfoBackgroundCard
            class="mt-4"
            image=""
            icon="star"
            title="Global Talent Visa"
            label="Discover the Exciting New UK Global Talent Visa for Professionals!"
          />
        </div>

      </div>
    </div>
  </section>
   
   

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-primary' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="Getting Started"
            description="How to Navigate the UK Immigration Process: A Step-by-Step Guide"
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
            :icon="{ component: 'article', color: 'primary' }"
            title="Articles"
            description="Discover Your Opportunities in the UK: Articles about Different Types of Immigration Visas"
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
            title="Official Immigration Forms"
            description="Navigate the UK Immigration Process with Ease: Official Forms and Links at Your Fingertips"
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
