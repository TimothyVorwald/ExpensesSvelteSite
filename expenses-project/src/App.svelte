<script lang="ts">
  import NavBar from "./lib/Components/NavBar.svelte";
  import SearchBar from "./lib/Components/SearchBar.svelte";
  import navigationPage from "./util/navigationPage";
  import CreditCardInfo from "./lib/Components/CreditCardInfo.svelte";
  import BankInfo from "./lib/Components/BankInfo.svelte";
  import Home from "./lib/Components/Home.svelte";
  
  let currentView = navigationPage.home;
</script>

  <NavBar bind:currentView on:click="{() => currentView}"/>
  <SearchBar/>

{#if currentView === navigationPage.creditcard}
  <CreditCardInfo/>
{:else if currentView === navigationPage.bank}
  <BankInfo/>
{:else}
  <Home/>
{/if}

<style>
</style>
