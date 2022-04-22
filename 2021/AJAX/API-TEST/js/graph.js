function BarGraph(canvasID, label, data1, title1, data2, title2){

const ctx = document.getElementById('TopTenTitleChart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: label,
        datasets: [{
            label: title2,
            backgroundColor: 'rgb(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            data: data2
        },
        {
                //facet_groups[0,facets[1]],
                label: title1,
                
                backgroundColor: 'rgb(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                data: data1
            },
        ]
    },

    // Configuration options go here
    options:{}
});




}

function polarAreaGraph(canvasID, labels, title, values,data1){

const ctx2 = document.getElementById('TopTenTitleChart2').getContext('2d');
const chart2 = new Chart(ctx2, {

    type: 'polarArea',

    // 2e graph, polarArea
    data: {
        labels: labels,
        datasets: [{
            label: title,
            backgroundColor: 'rgb(255, 99, 132, 0.3)',
            borderColor: 'rgb(255, 99, 132)',
            data: values
        },
        {
            //facet_groups[0,facets[1]],
            label: title,
            
            backgroundColor: 'rgb(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            data: values
        },
     ]

    },




    options: {}
});

}


