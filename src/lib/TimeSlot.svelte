<script>
    import { onMount } from "svelte";

    export let title = Mandag;
    export let hourRate = 118 * 0.92;
    
    //
    // Calculate Bar Width
    //

    export let startTime = "2022-06-21T20:00:00";
    startTime = new Date(startTime);
    let startTimeMillis = startTime.getTime();
    
    export let endTime = "2022-06-21T20:30:00";
    endTime = new Date(endTime);
    let endTimeMillis = endTime.getTime();
    
    let currentTime = Date.now();

    onMount(() => {
        const interval = setInterval(() => {
            currentTime = Date.now();
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    });

    endTimeMillis = endTimeMillis - startTimeMillis;
    $: currentTimeDifference = currentTime - startTimeMillis;

    // console.log(`Start time: ${startTimeMillis}`);
    // console.log(`End time: ${endTimeMillis}`);
    // console.log(`Current time: ${currentTime}`);
    
    const minWidth = 0;
    const maxWidth = 100;

    export let barWidth = 0;
    $: barWidth = Math.min(Math.max(( currentTimeDifference / endTimeMillis ) * 100, minWidth), maxWidth);

    // console.log(`Bar width: ${barWidth}`);

    //
    // Calculate Earned Money
    // 

    $: elapsedTime = limit(currentTimeDifference, 0, endTimeMillis);
    // $: elapsedHours = Math.floor( elapsedTime / 1000 / 60 / 60 );
    // $: elapsedMinutes = Math.floor( elapsedTime / 1000 / 60 );
    // $: elapsedSeconds = Math.floor( elapsedTime / 1000 );

    const secondInMillis = 1000;
    const minutesInMillis = secondInMillis * 60;
    const hoursInMillis = minutesInMillis * 60;

    $: elapsedHours = leadingZero( elapsedTime / hoursInMillis );
    $: elapsedMinutes = leadingZero( elapsedTime % hoursInMillis / minutesInMillis );
    $: elapsedSeconds = leadingZero( elapsedTime % minutesInMillis / secondInMillis );

    let endingHours = leadingZero( endTimeMillis / hoursInMillis );
    let endingMinutes = leadingZero( endTimeMillis % hoursInMillis / minutesInMillis );
    let endingSeconds = leadingZero( endTimeMillis % minutesInMillis / secondInMillis );

    $: earnedMoney = formatNumberToMoney(elapsedTime / hoursInMillis * hourRate);

    function limit(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function formatNumberToMoney(number) {
        number = number * 100;
        number = Math.floor(number);
        number = number / 100;
        return Intl.NumberFormat('da-DK').format(number);
    }

    function leadingZero(number, length) {
        number = Math.floor(number);
        return number.toString().padStart(2, '0');
    }

    // 
    // Format Elapsed Percentage
    // 

    $: elapsedPercentage = barWidth.toLocaleString('da-DK', {
        style: 'currency',
        currency: 'DKK',
        minimumFractionDigits: 2
    });

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