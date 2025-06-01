<script>
    import {Button, Input, Table} from "@sveltestrap/sveltestrap";
import {onMount} from "svelte";
    import Modal from "./Modal.svelte";

const creditLimit = 1000;
let currentAmountSpent = 800;
let percentageSpent = 0.0;
let isOpen = false;

function PercentageOfCreditLimitSpent()
{
    percentageSpent = (currentAmountSpent/creditLimit) * 100;
}

onMount(async () => {
    PercentageOfCreditLimitSpent();
});

</script>



<div>
    <h1>Credit Card Information</h1>
    <br>
    <h2>*In the instance where a receipt number is not present the receipt number will default to the transaction number
        and vice versa</h2>

    <div class="button">
        <Button class="btn-primary" on:click={() => isOpen = true}>Add New Credit Card Purchase Entry</Button>
    </div>
    
    <Modal isVisible="{isOpen}">
        <h2>Update Bank Account Balance</h2>
        <p>This is where you can update the purchases made with your credit card!</p>
        <p>Enter in the location of your purchase: <Input class="form-text"/> </p>
        <p>Enter in the purchase number: <Input class="form-text"/> </p>
        <p>Enter in the receipt number: <Input class="form-text"/></p>
        <p>Enter in a summary of the purchase: <Input class="form-text"/></p>
        <p>Enter in the balance: $<Input class="form-text"/></p>
        <p>Enter in the date of purchase: <input type="date"/></p>
        <Button on:click={() => isOpen = false}>Close</Button>
        <Button>Submit Info</Button>
    </Modal>
    
    <br>
    {#if percentageSpent >= 75.0}
        <h1 class="text-warning">WARNING: You are nearing your credit limit for this month!</h1>
    {/if}
    <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: {percentageSpent}%" aria-valuenow="{percentageSpent}%" aria-valuemin="0" aria-valuemax="100">{percentageSpent}%</div>
    </div>
    <Table class="ccTable">
        <thead>
        <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Location of Purchase</th>
            <th>Purchase Amount</th>
            <th>Transaction Number</th>
            <th>Receipt Number</th>
        </tr>
        <tr>
            <td>Timothy Vorwald</td>
            <td>05/25/2025</td>
            <td>Fareway</td>
            <td>100.00</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </Table>
</div>


<style>
    :global(.ccTable){
        width: -webkit-fill-available;
    }
    .progress-bar{
        color: red;
        background-color: blue;
        color-scheme: dark;
    }
    .text-warning{
        color: red;
    }
</style>