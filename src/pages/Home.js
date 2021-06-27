import React from 'react'
// Importando componente ProgressBar
import N7 from 'components/N7'
/* propriedades do componente:
  CorA, CompA
  CorB, CompB, FanB
  CorC, CompC, FanC
  CorD, CompD, FanD
*/
const Home = () => (
  <>
    <N7
      CorA={'red'}
      CompA={'50%'}
      CorB={'blue'}
      CompB={'50%'}
      FanB={'block'}
    ></N7>
    <N7
      CorA={'#1968df'}
      CompA={'25%'}
      CorB={'#17d28f'}
      CompB={'25%'}
      FanB={'block'}
      CorC={'#fc3467'}
      CompC={'25%'}
      FanC={'block'}
      CorD={'#e9eff2'}
      CompD={'25%'}
      FanD={'block'}
    ></N7>
    <N7></N7>
  </>
)
export default Home
