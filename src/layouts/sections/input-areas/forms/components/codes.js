export const formSimpleCode = `<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";

//  material-input
import setMaterialInput from "@/assets/js/material-input";

onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section>
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
          <h3 class="text-center">Contact us</h3>
          <form role="form" id="contact-form" method="post" autocomplete="off">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <MaterialInput
                    class="input-group-dynamic mb-4"
                    :label="{ text: 'First Name', class: 'form-label' }"
                    type="text"
                  />
                </div>
                <div class="col-md-6 ps-2">
                  <MaterialInput
                    class="input-group-dynamic"
                    :label="{ text: 'Last Name', class: 'form-label' }"
                    type="text"
                  />
                </div>
              </div>
              <div class="mb-4">
                <MaterialInput
                  class="input-group-dynamic"
                  :label="{ text: 'Email Address', class: 'form-label' }"
                  type="email"
                />
              </div>
              <MaterialTextArea
                class="input-group-static mb-4"
                id="message"
                :rows="4"
                >Your message</MaterialTextArea
              >
            </div>
            <div class="row">
              <div class="col-md-12">
                <MaterialSwitch
                  class="mb-4 d-flex align-items-center"
                  id="flexSwitchCheckDefault"
                  checked
                  labelClass="ms-3 mb-0"
                >
                  I agree to the
                  <a href="javascript:;" class="text-dark"
                    ><u>Terms and Conditions</u></a
                  >.
                </MaterialSwitch>

                <div class="col-md-12">
                  <MaterialButton
                    type="submit"
                    variant="gradient"
                    color="dark"
                    fullWidth
                    >Send Message</MaterialButton
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const formContextCode = `<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";

// image
import image from "@/assets/img/examples/blog3.jpg";

//  material-input
import setMaterialInput from "@/assets/js/material-input";

onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <div class="page-header">
    <div
      class="position-absolute fixed-top ms-auto w-50 h-100 rounded-3 z-index-0 d-none d-sm-none d-md-block me-n4"
      :style="{ backgroundImage: 'url(\${image})', backgroundSize: 'cover' }"
    ></div>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-7 d-flex justify-content-center flex-column">
          <div
            class="card card-body d-flex justify-content-center shadow-lg p-5 blur align-items-center"
          >
            <h3 class="text-center">Contact us</h3>
            <form
              role="form"
              id="contact-form"
              method="post"
              autocomplete="off"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <MaterialInput
                      class="input-group-static mb-4"
                      label="First Name"
                      placeholder="eg. Jack"
                      type="text"
                    />
                  </div>
                  <div class="col-md-6 ps-2">
                    <MaterialInput
                      class="input-group-static"
                      label="Last Name"
                      placeholder="eg. Samuel"
                      type="text"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <MaterialInput
                    class="input-group-static"
                    label="Email Address"
                    placeholder="hello@creative-tim.com"
                    type="email"
                  />
                </div>
                <MaterialTextArea
                  class="input-group-static mb-4"
                  id="message"
                  :rows="4"
                  >Your message</MaterialTextArea
                >
                <div class="row">
                  <div class="col-md-12">
                    <MaterialSwitch
                      class="mb-4 d-flex align-items-center"
                      id="flexSwitchCheckDefault"
                      checked
                      labelClass="ms-3 mb-0"
                    >
                      I agree to the
                      <a href="javascript:;" class="text-dark"
                        ><u>Terms and Conditions</u></a
                      >.
                    </MaterialSwitch>
                  </div>
                  <div class="col-md-12">
                    <MaterialButton
                      type="submit"
                      variant="gradient"
                      color="dark"
                      fullWidth
                      >Send Message</MaterialButton
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;
