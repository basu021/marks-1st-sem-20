const dataSource = {
  chart: {
    showvalues: "0",
    caption: "Apple's Revenue & Profit",
    subcaption: "(2013-2016)",
    numberprefix: "$",
    numbersuffix: "B",
    plottooltext: "Sales of $seriesName in $label was <b>$dataValue</b>",
    showhovereffect: "1",
    yaxisname: "$ (In billions)",
    showsum: "1",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "iPhone",
      data: [
        {
          value: "21"
        },
        {
          value: "24"
        },
        {
          value: "27"
        },
        {
          value: "30"
        }
      ]
    },
    {
      seriesname: "iPad",
      data: [
        {
          value: "8"
        },
        {
          value: "10"
        },
        {
          value: "11"
        },
        {
          value: "12"
        }
      ]
    },
    {
      seriesname: "Macbooks",
      data: [
        {
          value: "2"
        },
        {
          value: "4"
        },
        {
          value: "5"
        },
        {
          value: "5.5"
        }
      ]
    },
    {
      seriesname: "Others",
      data: [
        {
          value: "2"
        },
        {
          value: "4"
        },
        {
          value: "9"
        },
        {
          value: "11"
        }
      ]
    },
    {
      seriesname: "Profit",
      plottooltext: "Total profit in $label was <b>$dataValue</b>",
      renderas: "Line",
      data: [
        {
          value: "17"
        },
        {
          value: "19"
        },
        {
          value: "13"
        },
        {
          value: "18"
        }
      ]
    }
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "stackedcolumn2dline",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});
