<script>
    
import {Table} from "@sveltestrap/sveltestrap";
</script>

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
