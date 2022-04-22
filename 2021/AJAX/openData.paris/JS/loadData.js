async function loadData(resquestG){
    const response  = await fetch(resquestG);
    const rawData   = await response.json();

    return rawData;
}