import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Chart } from 'react-google-charts'
import { useState, useEffect } from 'react';

export const pointConstructor = [
  { type: 'date', id: 'Date' },
  { type: 'number', id: 'Score' },
  {
    type: 'string',
    role: 'tooltip',
    p: { html: true },
  },
]

export const GCData = {
  ValleyHi: {
    logoURL:
      'https://static.clubessential.com/CEFED/_Axis-Website/Sites/ValleyHiCountryClub/images/LogoColor2x.png',
    name: 'Valley Hi',
  },
  EmeraldLakes: {
    logoURL:
      'data:image/png;base64,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',
    name: 'Emerald Lakes',
  },
  AncilHoffman: {
    logoURL:
      'data:image/png;base64,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',
    name: 'Ancil Hoffman',
  },
  Wildhawk: {
    logoURL: 'https://www.wildhawkgolf.com/images/default/logo.png',
    name: 'Wildhawk',
  },
  HagginOaks: {
    logoURL:
      'https://www.hagginoaks.com/wp-content/uploads/2015/08/HagginOaks_Logo.jpg',
    name: 'Haggin Oaks',
  },
  BartleyCavanaugh: {
    logoURL: 'https://www.bartleycavanaugh.com/files/2012/10/bartleyC_logo.jpg',
    name: 'Bartley Cavanaugh',
  },
  Hiddenbrooke: {
    logoURL: 'https://www.hiddenbrookegolf.com/wp-content/uploads/sites/8918/2023/06/logo.png',
    name: 'Hiddenbrooke',
  },
  TheRidge: {
    logoURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtQx-SRdFFbckCvcjuxA5wU8BNaFntWcFFA&usqp=CAU',
    name: 'The Ridge',
  },
  TimberCreek: {
    logoURL: 'https://www.timbercreekgc.com/images/default/logo.png',
    name: 'Timber Creek',
  },
}

export const chartData = [
  pointConstructor,
  [
    new Date('October 16, 2023'),
    75,
    createCustomHTMLTooltip(
      GCData.Wildhawk.logoURL,
      GCData.Wildhawk.name,
      new Date('October 16, 2023').toLocaleDateString(),
      75,
      'PR!'
    )
  ],
  [
    new Date('October 2, 2023'),
    79,
    createCustomHTMLTooltip(
      GCData.BartleyCavanaugh.logoURL,
      GCData.BartleyCavanaugh.name,
      new Date('October 2, 2023').toLocaleDateString(),
      79,
      ''
    )
  ],
  [
    new Date('August 21, 2023'),
    82,
    createCustomHTMLTooltip(
      GCData.Wildhawk.logoURL,
      GCData.Wildhawk.name,
      new Date('August 21, 2023').toLocaleDateString(),
      82,
      ''
    )
  ],
  [
    new Date('June 20, 2023'),
    90,
    createCustomHTMLTooltip(
      GCData.AncilHoffman.logoURL,
      GCData.AncilHoffman.name,
      new Date('June 20, 2023').toLocaleDateString(),
      90,
      'FirstTee tournament.'
    ),
  ],
  [
    new Date('July 18, 2022'),
    86,
    createCustomHTMLTooltip(
      GCData.Hiddenbrooke.logoURL,
      GCData.Hiddenbrooke.name,
      new Date('July 18, 2022').toLocaleDateString(),
      86,
      'Most interesting course I played at!'
    ),
  ],
  [
    new Date('October 31, 2022'),
    95,
    createCustomHTMLTooltip(
      GCData.TheRidge.logoURL,
      GCData.TheRidge.name,
      new Date('October 31, 2022').toLocaleDateString(),
      95,
      'Second round of playoffs!'
    ),
  ],
  [
    new Date('October 26, 2022'),
    88,
    createCustomHTMLTooltip(
      GCData.TimberCreek.logoURL,
      GCData.TimberCreek.name,
      new Date('October 26, 2022').toLocaleDateString(),
      88,
      'First round of NorCal playoffs!'
    ),
  ],
  [
    new Date('October 3, 2022'),
    88,
    createCustomHTMLTooltip(
      GCData.BartleyCavanaugh.logoURL,
      GCData.BartleyCavanaugh.name,
      new Date('October 3, 2022').toLocaleDateString(),
      88,
      'Center match.'
    ),
  ],
  [
    new Date('April 3, 2022'),
    94,
    createCustomHTMLTooltip(
      GCData.ValleyHi.logoURL,
      GCData.ValleyHi.name,
      new Date('April 3, 2022').toLocaleDateString(),
      94,
      ''
    ),
  ],
  [
    new Date('April 2, 2022'),
    94,
    createCustomHTMLTooltip(
      GCData.Wildhawk.logoURL,
      GCData.Wildhawk.name,
      new Date('April 2, 2022').toLocaleDateString(),
      94,
      ''
    ),
  ],
  [
    new Date('March 28, 2022'),
    91,
    createCustomHTMLTooltip(
      GCData.ValleyHi.logoURL,
      GCData.ValleyHi.name,
      new Date('March 28, 2022').toLocaleDateString(),
      91,
      ''
    ),
  ],
  [
    new Date('October 11, 2021'),
    109,
    createCustomHTMLTooltip(
      GCData.BartleyCavanaugh.logoURL,
      GCData.BartleyCavanaugh.name,
      new Date('October 11, 2021').toLocaleDateString(),
      109,
      'Center match.'
    ),
  ],
  [
    new Date('September 25, 2021'),
    95,
    createCustomHTMLTooltip(
      GCData.ValleyHi.logoURL,
      GCData.ValleyHi.name,
      new Date('September 25, 2021').toLocaleDateString(),
      95,
      'Casual round.'
    ),
  ],
  [
    new Date('September 13, 2021'),
    104,
    createCustomHTMLTooltip(
      GCData.Wildhawk.logoURL,
      GCData.Wildhawk.name,
      new Date('September 13, 2021').toLocaleDateString(),
      104,
      'Center match with all high school teams in the Delta League!'
    ),
  ],
  [
    new Date('September 2, 2021'),
    111,
    createCustomHTMLTooltip(
      GCData.Wildhawk.logoURL,
      GCData.Wildhawk.name,
      new Date('September 2, 2021').toLocaleDateString(),
      111,
      "My round ever! At least it's a palindrome 😭. Loren Roberts high school tournament."
    ),
  ],
]

function createCustomHTMLTooltip(GCLogoURL, GCName, date, score, desc) {
  return (
    `<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;align-content:space-between;text-align:center;max-width:100px;padding:5px">` +
    `<div><img width=75 height=75 src='` +
    GCLogoURL +
    `'/></div>` +
    `<h1>` +
    GCName +
    `</h1>` +
    `<h1><b>` +
    score +
    `</b></h1>` +
    `<p style="word-wrap:break-word;margin-top:2px">` +
    desc +
    `</p>` +
    `<h1 style="margin-top:2px;"><i>` +
    date +
    `</i></h1>` +
    `</div>`
  )
}





export default function Golf() {
  const [chartBgColor, setChartBgColor] = useState();
  const [chartTextColor, setChartTextColor] = useState('green');
  
  const chartOptions = {
    title: 'Nuri\'s Golf Scores',
    titleTextStyle: {
      color: chartTextColor,
      fontSize: 28
    },
    hAxis: { textStyle: {color: chartTextColor}},
    vAxis: { textStyle: {color: chartTextColor} },
    legend: 'none',
    tooltip: {
      isHtml: true,
    },
    backgroundColor: chartBgColor,
    // trendlines: {
    //   0: {
    //     type: 'polynomial',
    //     color: 'green',
    //     lineWidth: 75,
    //     opacity: 0.2,
    //     degree: 3,
    //     visibleInLegend: true,
    //     labelInLegend: 'trend',
    //   },
    // },
  }

  useEffect(() => {
    setChartBgColor('')
    setChartTextColor('green')
  }, [])

  return (
    <>
      <Head>
        <title>Golf - Nuri Kim</title>
        <meta
          name="description"
          content="In creating my portfolio I thought I'd share some insight into my other hobbies. I'm using React Google Charts to visualize all the scores I could salvage from past scorecards and spreadsheets."
        />
      </Head>
      <SimpleLayout
        title="Some of my golf scores."
        intro="In creating my portfolio I thought I'd share some insight into my other hobbies. I'm using React Google Charts to visualize all the scores I could salvage from past scorecards and spreadsheets."
      >
        <div className="space-y-0">
          <Chart
            chartType="ScatterChart"
            width="100%"
            height="500px"
            data={chartData}
            options={chartOptions}
          />
        </div>
      </SimpleLayout>
    </>
  )
}
