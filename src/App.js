import React, { Suspense } from 'react'

const spinner = <div className='spinner'/>

const BlockOne = React.lazy(() => import('./components/BlockOne'))
const BlockTwo = React.lazy(() => import('./components/BlockTwo'))
const BlockThree = React.lazy(() => import('./components/BlockThree'))
const BlockFour = React.lazy(() => import('./components/BlockFour'))
const BlockFive = React.lazy(() => import('./components/BlockFive'))
const BlockSixe = React.lazy(() => import('./components/BlockSixe'))
const BlockSeven = React.lazy(() => import('./components/BlockSeven'))
const BlockEight = React.lazy(() => import('./components/BlockEight'))
const BlockNine = React.lazy(() => import('./components/BlockNine'))
const BlockTen = React.lazy(() => import('./components/BlockTen'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  
  return (
    <Suspense fallback={spinner}>
      <div className="App">
        <BlockOne/>
        <BlockTwo/>
        <BlockThree/>
        <BlockFour/>
        <BlockFive/>
        <BlockSixe/>
        <BlockSeven/>
        <BlockEight/>
        <BlockNine/>
        <BlockTen/>
        <Footer/>
      </div>
    </Suspense>
  );
}

export default App;
