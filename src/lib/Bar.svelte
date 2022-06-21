<script>
    export let title = Mandag;
    
    export let startTime = "2022-06-21T20:00:00";
    startTime = new Date(startTime);
    let startTimeMillis = startTime.getTime();
    
    export let endTime = "2022-06-21T20:30:00";
    endTime = new Date(endTime);
    let endTimeMillis = endTime.getTime();
    
    let currentTime = Date.now();

    endTimeMillis = endTimeMillis - startTimeMillis;
    currentTime = currentTime - startTimeMillis;

    console.log(`Start time: ${startTimeMillis}`);
    console.log(`End time: ${endTimeMillis}`);
    console.log(`Current time: ${currentTime}`);
    
    let barWidth = ( currentTime / endTimeMillis ) * 100;
    console.log(`Bar width: ${barWidth}`);
</script>

<style>
    .bar {
        width: var(--bar-width);
    }
</style>

<div class="bg-gray-800 m-2 p-6 pt-0">
    <h6 class="text-white">{title}</h6>
    <div class="bg-white h-4">
        <div class="bar bg-green-500 h-full" style="--bar-width: {barWidth}%"></div>
    </div>
</div>