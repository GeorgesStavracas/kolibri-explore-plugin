<template>
  <div class="d-flex flex-column flex-grow-1 w-100">
    <div class="flex-grow-1 welcome-background-top"></div>
    <div class="content p-3 pb-5 position-relative">
      <h1>
        Welcome to Endless Key!
      </h1>
      <div class="mb-4 mt-4">
        <b-button
          pill
          variant="primary"
          to="select-pack"
        >
          Get Started
        </b-button>
      </div>
      <p>
        <UsbIcon />
        <SdIcon />
        If you have an Endless Key USB device or SD card,
        <b-link to="endless-key">
          press here to get your pack!
        </b-link>
      </p>
      <p>
        <b-link v-b-modal.privacy-policy-modal>
          Privacy Policy
        </b-link>
      </p>
    </div>
    <div class="flex-grow-1 welcome-background-bottom"></div>
    <b-modal
      id="privacy-policy-modal"
      headerCloseVariant="light"
      size="xl"
      centered
    >
      <div class="bg-white modal-wrapper text-dark">
        <h3 class="pt-3 text-primary">
          Privacy Policy
        </h3>
        <EkPrivacyPolicyText class="pb-3" />
      </div>
    </b-modal>
  </div>
</template>


<script>
import UsbIcon from 'vue-material-design-icons/Usb.vue';
import SdIcon from 'vue-material-design-icons/Sd.vue';
import EkPrivacyPolicyText from 'ek-components/src/components/EkPrivacyPolicyText.vue';


  export default {
    name: "Welcome",
    components: { UsbIcon, SdIcon, EkPrivacyPolicyText }
};

</script>


<style lang="scss" scoped>

  @import '../styles';

  .welcome-background-bottom,
  .welcome-background-top {
    background-size: contain;
    background-repeat: no-repeat;
  }

  .welcome-background-top {
    background-image: url('../assets/welcome-bg-top-right.jpg');
    background-position: top right;
  }

  .welcome-background-bottom {
    background-image: url('../assets/welcome-bg-bottom-left.jpg');
    background-position: bottom left;
  }

  .modal-wrapper {
    padding-right: $spacer;
    padding-left: $spacer;
    @include media-breakpoint-up(md) {
      padding-right: $grid-gutter-width + $circled-button-size;
      padding-left: $grid-gutter-width + $circled-button-size;
    }
  }

  ::v-deep .modal-body {
    padding-top: 0;
  }

  ::v-deep .modal-footer {
    display: none;
  }

</style>
