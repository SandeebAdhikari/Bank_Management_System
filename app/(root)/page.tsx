import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = {firstName : 'Sandeeb'};
  return (
    <section className='home'>
        <div className='home-content'> 
            <header className='home-header'>
                <HeaderBox 
                    type ="greeting"
                    title = "Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext= "For your service!!"
                />
                <TotalBalanceBox
                    account={[]}
                    totalBanks={1}
                    totalCurrentBalance= {120,100.23}
                
                />
            </header>  

        </div> 

    </section>
  )
}

export default Home
