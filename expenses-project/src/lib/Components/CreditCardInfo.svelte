<script>
import {Table} from "@sveltestrap/sveltestrap";
</script>

<div>
    <h1>Credit Card Information</h1>
    <br>
    <h2>*In the instance where a receipt number is not present the receipt number will default to the transaction number
        and vice versa</h2>
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
    </Table>
</div>

<style>
    :global(.ccTable){
        width: -webkit-fill-available;
    }
</style>