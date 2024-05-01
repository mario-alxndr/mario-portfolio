// Component
import Image from 'next/image';

// Assets
import LoyaltyPage from '../assets/images/loyalty.png';
import LoyaltyPageMweb from '../assets/images/loyalty-mweb.png';
import MyReviewPage from '../assets/images/my-review-form.png';
import MyReviewPageMweb from '../assets/images/my-review-form-mweb.png';
import MyReviewListPage from '../assets/images/my-review-list.png';
import MyReviewListPageMweb from '../assets/images/my-review-list-mweb.png';
import CalculatorPage from '../assets/images/calculator.webp';
import IpTrackerPage from '../assets/images/ip-tracker.webp';
import PDP from '../assets/images/pdp.png';

const Home = () => {
  return (
    <main className="bg-slate-100 w-full">
      <div className="bg-slate-50 block h-fit mx-auto p-6 max-w-[1180px]">
        <header>
          <h1 className="text-2xl">Portfolio</h1>
          <hr/>
        </header>
        <div className="my-8">
          <h1 className="text-xl">Hi,</h1>
          <p>
            I am a passionate front-end developer with 4 years of experience at <a className="text-sky-500" href="https://tiket.com">tiket.com</a> I possess strong expertise in React, Next.js, and TypeScript.
          </p>
          <br/>
          <p className='mb-2'>What have I done:</p>
          <div className='grid grid-cols-2 mweb:grid-cols-1 gap-4'>
            <div className='w-fit mx-auto'>
              <figure className='h-[380px]'> 
                <Image width={600} className={'shadow-md'} src={LoyaltyPage} alt={'loyalty-page'}/>
                <figcaption className='text-center mt-2'>Fig 1. Old tiket.com&#39;s Loyalty Page (dweb)</figcaption>
              </figure>
            </div>
            <div className='w-fit mx-auto'>
              <figure> 
                <Image width={300} height={600} className={'shadow-md'} src={LoyaltyPageMweb} alt={'loyalty-page-mweb'}/>
                <figcaption className='text-center mt-2'>Fig 2. Old tiket.com&#39;s Loyalty Page (mweb)</figcaption>
              </figure>
            </div>
            <div className='w-fit mx-auto'>
              <figure className='h-[380px]'> 
                <Image width={600} className={'shadow-md'} src={MyReviewListPage} alt={'myreview-list-page'}/>
                <figcaption className='text-center mt-2'>Fig 3. tiket.com&#39;s My Review List Page (dweb)</figcaption>
              </figure>
            </div>
            <div className='w-fit mx-auto'>
              <figure> 
                <Image width={300} height={600} className={'shadow-md'} src={MyReviewListPageMweb} alt={'myreview-list-page-mweb'}/>
                <figcaption className='text-center mt-2'>Fig 4. tiket.com&#39;s My Review List Page (mweb)</figcaption>
              </figure>
            </div>
            <div className='w-fit mx-auto'>
              <figure className='h-[380px]'> 
                <Image width={600} className={'shadow-md'} src={MyReviewPage} alt={'myreview-form-page'}/>
                <figcaption className='text-center mt-2'>Fig 5. tiket.com&#39;s My Review Form Page (dweb)</figcaption>
              </figure>
            </div>
            <div className='w-fit mx-auto'>
              <figure> 
                <Image width={300} height={600} className={'shadow-md'} src={MyReviewPageMweb} alt={'myreview-form-page-mweb'}/>
                <figcaption className='text-center mt-2'>Fig 6. tiket.com&#39;s My Review Form Page (mweb)</figcaption>
              </figure>
            </div>
          </div>
          <div className='block'>
            <p className='text-lg'>tiket.com internal unpublished projects:</p>
            <ul className='list-disc pl-6'>
              <li>Loyalty - content management dashboard.</li>
              <li>Loyalty - inject / delete point dashboard.</li>
              <li>Loyalty - customer care dashboard.</li>
              <li>My Review - management dashboard.</li>
              <li>
                Unified Membership - management dashboard. (used by&nbsp;
                  <a className="text-sky-500" href="https://tiket.com">tiket.com</a>,&nbsp;
                  <a className="text-sky-500" href="https://blibli.com">blibli.com</a>,&nbsp;
                  <a className="text-sky-500" href="https://www.ranchmarket.co.id/aplikasi-mytrust">ranchmarket</a>&nbsp;
                admins)
              </li>
              <li>Internal Tools - insurance report dashboard.</li>
              <li>Internal Tools - finance reconciliation dashboard.</li>
            </ul>
          </div>
          <br />
          <div>
            <p className='text-lg'>Others projects:</p>
            <div className='grid grid-cols-3 gap-2 mt-4 mweb:grid-cols-1'>
              <figure> 
                <Image className={'shadow-md'} src={CalculatorPage} alt={'calculator-page'}/>
                <figcaption className='text-center mt-2'>Fig 7. Frontend Mentor Calculator</figcaption>
              </figure>
              <figure> 
                <Image  className={'shadow-md'} src={IpTrackerPage} alt={'ip-tracker'}/>
                <figcaption className='text-center mt-2'>Fig 8. Frontend Mentor IP Tracker Address (leafletJS)</figcaption>
              </figure>
              <figure> 
                <Image  className={'shadow-md'} src={PDP} alt={'pdp'}/>
                <figcaption className='text-center mt-2'>Fig 9. Frontend Mentor PDP Responsive Design</figcaption>
              </figure>
          </div>
          </div>
        </div>
        <footer>
          <hr/>
          <p className='mt-2 text-lg'>Contact me:</p>
          <ul className='list-disc pl-6'>
            <li>Whatsapp: <a className="text-sky-500" href={'https://wa.me/62895348810240'}>+62895348810240</a></li>
            <li>Linkedin: <a className="text-sky-500" href={'https://www.linkedin.com/in/mario-alexander'}>mario-alexander</a></li>
            <li>Github: <a className="text-sky-500" href={'https://github.com/mario-alxndr'}>mario-alxndr</a></li>
          </ul>
        </footer>
      </div>
    </main>
  );
};

export default Home;