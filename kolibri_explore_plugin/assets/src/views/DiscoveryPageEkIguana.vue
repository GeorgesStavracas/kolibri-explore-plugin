<template>

  <div class="channels-page d-flex flex-column min-vh-100">
    <DiscoveryNavBar />

    <b-container class="mb-2 mt-4">
      <h5 class="mt-2 text-muted">
        Content Suggestions
      </h5>
    </b-container>

    <template v-if="loading">
      <EkCarouselPlaceholder />
    </template>

    <template v-else>
      <b-container class="mb-2 mt-2">
        <EkButtonsBar
          class="mr-3 mt-1"
          title="More Topics"
          :buttons="Array.from(searchTerms.keys())"
          @click="goToTerm"
        />
      </b-container>
      <EkCarousel class="pt-3" :nodes="carouselNodes" :showChannelIcon="true" />
    </template>

    <div class="flex-fill main">

      <template v-if="loading">
        <EkCardGridPlaceholder />
      </template>
      <template v-else>
        <EkIguanaList />
      </template>

    </div>

  </div>

</template>


<script>

  import { mapState } from 'vuex';
  import commonCoreStrings from 'kolibri.coreVue.mixins.commonCoreStrings';
  import { PageNames, searchTerms } from '../constants';

  import EkIguanaList from '../components/EkIguanaList';
  import DiscoveryNavBar from '../components/DiscoveryNavBar';

  export default {
    name: 'DiscoveryPageEkIguana',
    components: { EkIguanaList, DiscoveryNavBar },
    mixins: [commonCoreStrings],
    props: {},
    computed: {
      ...mapState('topicsRoot', { carouselNodes: 'carouselNodes' }),
      ...mapState({
        loading: state => state.core.loading,
      }),
      searchTerms() {
        return searchTerms;
      },
    },
    methods: {
      goToTerm(term) {
        const query = searchTerms.get(term) || term;
        this.$router.push({
          name: PageNames.SEARCH,
          params: { query },
        });
      },
    },
  };

</script>


<style lang="scss" scoped>

  @import '../styles';

  .main {
    background-color: $white;
  }

  .discovery-navbar {
    background: $gray-300;
    border-bottom: 1px solid $gray-400;
  }

  .channels-page {
    padding-top: $navbar-height;
  }

</style>
