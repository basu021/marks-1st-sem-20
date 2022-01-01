const dataSource = {
    chart: {
        showvalues: "0",
        caption: "Mark of all Students",
        subcaption: "(1st sem 2020)",
        numberprefix: "M-",
        numbersuffix: "",
        plottooltext: "Mark of $seriesName in $label is <b>$dataValue</b>",
        showhovereffect: "1",
        yaxisname: "Marks chart",
        showsum: "1",
        theme: "fusion"
    },
    categories: [{
        category: [{
                label: "Demo"
            },
            {
                label: "Abhisek-01"
            },
            {
                label: "Abhisek-02"
            },
            {
                label: "Abinash-03"
            },
            {
                label: "Afrid-04"
            },
            {

            }
        ]
    }],
    dataset: [{
            seriesname: "Pass marks",
            data: [{
                    value: "300"
                },
                {
                    value: "300"
                },
                {
                    value: "300"
                },
                {
                    value: "300"
                },
                {
                    value: "300"
                }
            ]
        },
        {
            seriesname: "<=50 %",
            data: [{
                    value: "75"
                },
                {
                    value: "75"
                },
                {
                    value: "75"
                },
                {
                    value: "75"
                },
                {
                    value: "75"
                }
            ]
        },
        {
            seriesname: "<=80 %",
            data: [{
                    value: "225"
                },
                {
                    value: "176"
                },
                {
                    value: "225"
                },
                {
                    value: "225"
                },
                {
                    value: "225"
                }
            ]
        },
        {
            seriesname: "<=100 %",
            data: [{
                    value: "150"
                },
                {
                    value: "0"
                },
                {
                    value: "150"
                },
                {
                    value: "150"
                },
                {
                    value: "150"
                }
            ]
        },
        {
            seriesname: "Secured Marks",
            plottooltext: "Total Mark of $label <b>$dataValue</b>",
            renderas: "Line",
            data: [{
                    value: "750"
                },
                {
                    value: "551"
                },
                {
                    value: "571"
                },
                {
                    value: "595"
                },
                {
                    value: "451"
                }
            ]
        }
    ]
};

FusionCharts.ready(function() {
    var myChart = new FusionCharts({
        type: "stackedcolumn2dline",
        renderAt: "chart-container",
        width: "600",
        height: "400",
        dataFormat: "json",
        dataSource
    }).render();
});