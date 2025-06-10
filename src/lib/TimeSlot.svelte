<script>
    import { onMount } from "svelte";

    let { barWidth = $bindable(0), ...rest } = $props();

    export const {
        title = 'Mandag',
        hourRate = 73 + 5 + 40,
        startTime = '2022-06-21T20:00:00',
        endTime = '2022-06-21T20:30:00'
    } = rest;
    
    //
    // Calculate Bar Width
    //

    let currentTime = $state(Date.now());

    onMount(() => {
        const interval = setInterval(() => {
            currentTime = Date.now();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    const startTimeMillis = $derived(() => new Date(startTime).getTime());
    const endTimeMillis = $derived(
        () => new Date(endTime).getTime() - startTimeMillis
    );

    const currentTimeDifference = $derived(() => currentTime - startTimeMillis);

    // console.log(`Start time: ${startTimeMillis}`);
    // console.log(`End time: ${endTimeMillis}`);
    // console.log(`Current time: ${currentTime}`);
    
    const minWidth = 0;
    const maxWidth = 100;

    $effect(() => {
        barWidth = Math.min(
            Math.max((currentTimeDifference / endTimeMillis) * 100, minWidth),
            maxWidth
        );
    });

    // console.log(`Bar width: ${barWidth}`);

    //
    // Calculate Earned Money
    // 

    const elapsedTime = $derived(() =>
        limit(currentTimeDifference, 0, endTimeMillis)
    );
    // $: elapsedHours = Math.floor( elapsedTime / 1000 / 60 / 60 );
    // $: elapsedMinutes = Math.floor( elapsedTime / 1000 / 60 );
    // $: elapsedSeconds = Math.floor( elapsedTime / 1000 );

    const secondInMillis = 1000;
    const minutesInMillis = secondInMillis * 60;
    const hoursInMillis = minutesInMillis * 60;

    const elapsedHours = $derived(() =>
        leadingZero(elapsedTime / hoursInMillis)
    );
    const elapsedMinutes = $derived(() =>
        leadingZero((elapsedTime % hoursInMillis) / minutesInMillis)
    );
    const elapsedSeconds = $derived(() =>
        leadingZero((elapsedTime % minutesInMillis) / secondInMillis)
    );

    const endingHours = $derived(() =>
        leadingZero(endTimeMillis / hoursInMillis)
    );
    const endingMinutes = $derived(() =>
        leadingZero((endTimeMillis % hoursInMillis) / minutesInMillis)
    );
    const endingSeconds = $derived(() =>
        leadingZero((endTimeMillis % minutesInMillis) / secondInMillis)
    );

    const hoursOfBreak = 0.5; // Number of hours of break pr night
    const earnedMoney = $derived(() =>
        formatNumberToMoney(
            ((elapsedTime / hoursInMillis) - hoursOfBreak) * hourRate
        )
    );

    function limit(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function formatNumberToMoney(number) {
        number = number - 16.6;         // Remove ATP+-Bidrag
        number = number * 0.92;         // Remove AM-Bidrag
        
        number = number * 100;          //
        number = Math.floor(number);    // Reduce to 2 decimal
        number = number / 100;          //
        
        return Intl.NumberFormat('da-DK').format(number);
    }

    function leadingZero(number, length) {
        number = Math.floor(number);
        return number.toString().padStart(2, '0');
    }

    // 
    // Format Elapsed Percentage
    // 

    const elapsedPercentage = $derived(() =>
        barWidth.toLocaleString('da-DK', {
            style: 'currency',
            currency: 'DKK',
            minimumFractionDigits: 2
        })
    );

</script>

<style>
    .bar {
        width: var(--bar-width);
    }
</style>

<div class="bg-gray-800 my-4 h-16 flex flex-col relative">
    
    <!-- Padding div -->
    <div class="absolute h-full w-full px-4 py-6">
        <!-- Process bar -->
        <div class="bg-white h-4">
            <div class="bar bg-green-500 h-full" style="--bar-width: {barWidth}%"></div>
        </div>
    </div>

    <!-- Text -->
    <div class="absolute h-full w-full text-white font-bold">
        <p class="absolute left-4 top-0">{title}</p>
        <p class="absolute left-4 bottom-1 text-sm">Money earned so far: <span class="text-blue-200">{earnedMoney}</span> kr.</p>

        <p class="absolute right-4 top-1 text-sm">{elapsedHours}:{elapsedMinutes}:{elapsedSeconds} / {endingHours}:{endingMinutes}:{endingSeconds} ({Math.floor(barWidth)}%)</p>
    </div>
</div>