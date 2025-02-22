<script>
    import {Nav, NavItem, NavLink} from "@sveltestrap/sveltestrap";
    import navigationPage from "../../util/navigationPage.js";
    
    export let currentView;
</script>

<div>
    <Nav underline class="navigation">
        <NavItem>
            <NavLink href="#" active={currentView === navigationPage.home} 
                     on:click={() => (currentView = navigationPage.home)}>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#" active={currentView === navigationPage.creditcard} 
                     on:click={() => (currentView = navigationPage.creditcard)}>Credit</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#" active={currentView === navigationPage.bank}
                     on:click={() => (currentView = navigationPage.bank)}>Bank</NavLink>
        </NavItem>
    </Nav>
</div>

<style>
    :global(.navigation){
        text-align: left;
        display: flex;
        justify-content: space-between;
        text-decoration: none;
    }
</style>