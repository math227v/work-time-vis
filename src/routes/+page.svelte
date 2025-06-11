<script>
    import TimeSlot from "$lib/TimeSlot.svelte";

    const barWidths = $state(Array(9).fill(0));

    const totalPercentage = $derived(() =>
        barWidths.reduce((accumulator, current) => accumulator + current)
    );

    const averagePercentage = $derived(
        () => totalPercentage / barWidths.length
    );

    const formattedAverage = $derived(() =>
        averagePercentage.toLocaleString('da-DK', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    );
</script>

<div class="p-6">
    <h1 class="text-xl font-bold">Sommerferie 2022</h1>
    <h2 class="text-xl">Stats:</h2>
    <p>Percentage: {formattedAverage}%</p>
    <h2 class="font-semibold">Uge 1</h2>
    <TimeSlot title="Mandag Nat"     startTime="2022-06-20T21:45:00" endTime="2022-06-21T07:00:00" bind:barWidth={barWidths[0]} />
    <TimeSlot title="Tirsdag Nat"    startTime="2022-06-21T21:45:00" endTime="2022-06-22T07:00:00" bind:barWidth={barWidths[1]} />
    <TimeSlot title="Onsdag Nat"     startTime="2022-06-22T21:45:00" endTime="2022-06-23T07:00:00" bind:barWidth={barWidths[2]} />
    <TimeSlot title="Torsdag Nat"    startTime="2022-06-23T18:45:00" endTime="2022-06-24T04:00:00" bind:barWidth={barWidths[3]} />
    
    <h2 class="font-semibold">Uge 2</h2>
    <TimeSlot title="Søndag Nat"     startTime="2022-06-26T21:45:00" endTime="2022-06-27T07:00:00" bind:barWidth={barWidths[4]} hourRate={(73 * 1.75) + 5 + 40} />
    <TimeSlot title="Mandag Nat"     startTime="2022-06-27T21:45:00" endTime="2022-06-28T07:00:00" bind:barWidth={barWidths[5]} />
    <TimeSlot title="Tirsdag Nat"    startTime="2022-06-28T21:45:00" endTime="2022-06-29T07:00:00" bind:barWidth={barWidths[6]} />
    <TimeSlot title="Onsdag Nat"     startTime="2022-06-29T21:45:00" endTime="2022-06-30T07:00:00" bind:barWidth={barWidths[7]} />
    <TimeSlot title="Torsdag Nat"    startTime="2022-06-30T18:45:00" endTime="2022-07-01T04:00:00" bind:barWidth={barWidths[8]} />
</div>