<script>
import {Table} from "@sveltestrap/sveltestrap";
import {onMount} from "svelte";

const creditLimit = 1000;
let currentAmountSpent = 800;
let percentageSpent = 0.0;

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