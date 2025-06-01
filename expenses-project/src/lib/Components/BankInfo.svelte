<script>
    import {onMount} from "svelte";
    import {getStuff, getBankInfo} from "../stores/store.js";
    import {Button, Input, Label, Table} from "@sveltestrap/sveltestrap";
    import Modal from "./Modal.svelte";
    
    let isOpen = false;

onMount(() =>{
    getStuff();
    getBankInfo();
});

</script>

<div class="button">
    <Button class="btn-primary" on:click={() => isOpen = true}>Add New Bank Entry</Button>
</div>

<Modal isVisible="{isOpen}">
    <h2>Update Bank Account Balance</h2>
    <p>This is where you can update the balance on your bank account!</p>
    <p>Enter in the name on the account: <Input class="form-text"/> </p>
    <p>Enter in the date on the statement: <input type="date"/> </p>
    <p>Enter in the name of the bank: <Input class="form-text"/></p>
    <p>Enter in the account type: <Input class="form-text"/></p>
    <p>Enter in the balance: $<input type="number" step="0.01"/></p>
    <Button on:click={() => isOpen = false}>Close</Button>
    <Button>Submit Info</Button>
</Modal>

<div>
    <h1>Bank Information</h1>
    <br>
    <h2>The purpose of this page is to show the details of a bank account for example a Checking Account.</h2>
    <br>
    <h2>The information included will be the name on the account, the bank name, the type of account, the amount on the account.</h2>
    <Table class="bankTable">
        <thead>
        <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Bank Name</th>
            <th>Account Type</th>
            <th>Balance on Account</th>
        </tr>
    </Table>
</div>

<style>
    :global(.bankTable){
        width: -webkit-fill-available;
    }
</style>
