<script>
import TimeSlot from "$lib/TimeSlot.svelte";
</script>

<div class="p-6">
    <h1 class="text-xl font-bold">Work Time Vis</h1>
    <h2 class="font-semibold">Uge 1</h2>
    <TimeSlot title="Mandag Nat"     startTime="2022-06-20T21:45:00" endTime="2022-06-21T07:00:00" />
    <TimeSlot title="Tirsdag Nat"    startTime="2022-06-21T21:45:00" endTime="2022-06-22T07:00:00" />
    <TimeSlot title="Onsdag Nat"     startTime="2022-06-22T21:45:00" endTime="2022-06-23T07:00:00" />
    <TimeSlot title="Torsdag Nat"    startTime="2022-06-23T21:45:00" endTime="2022-06-24T07:00:00" />
    
    <h2 class="font-semibold">Uge 2</h2>
    <TimeSlot title="Mandag Nat"     startTime="2022-06-27T21:45:00" endTime="2022-06-28T07:00:00" />
    <TimeSlot title="Tirsdag Nat"    startTime="2022-06-28T21:45:00" endTime="2022-06-29T07:00:00" />
    <TimeSlot title="Onsdag Nat"     startTime="2022-06-29T21:45:00" endTime="2022-06-30T07:00:00" />
    <TimeSlot title="Torsdag Nat"    startTime="2022-06-30T21:45:00" endTime="2022-07-01T07:00:00" />
</div>