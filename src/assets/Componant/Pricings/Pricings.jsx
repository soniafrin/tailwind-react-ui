import React, { use } from 'react';
import PricingCards from '../pricingCards/PricingCards';

const Pricings = ({pricingsPromise}) => {
    const pricingsData = use(pricingsPromise)
    // console.log(pricingsData);
    return (
        <div >
            <h2 className='text-3xl font-bold text-center mt-5'>Membership Pricings</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4'>
                {
                    pricingsData.map(pricing => <PricingCards key={pricing.id} pricing={pricing}></PricingCards>)
                }
            </div>
            
        </div>
    );
};

export default Pricings;