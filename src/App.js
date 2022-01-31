import logo from './logo.svg';
import './App.css';

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <div className='container'>
               <h1>Applicant Tracking System Crusher</h1>
               <p>(ATS Crusher)</p>

               <h2>Installation</h2>
               <code>pip install atscrusher</code>

               <section className='flex-col'>
                  <h2>Usage</h2>
                  <code>from wc import genCover</code>
                  <code>
                     TARGET_COMPANYS_MISSION = 'At Schwab, what unites our
                     employees is a shared belief that the work we do can make a
                     direct impact on the client. We know it takes a broad set
                     of skills to ensure that our clients feel the full impact
                     and power of investing. That\'s why we work hard to develop
                     a workforce full of unique perspectives, work experiences,
                     and backgrounds.'
                  </code>
                  <br />
                  <code>
                     USERS_CORE_BELIFES = 'My name is Pablo Deaz and high
                     quality APIs are what I live for. There is just something
                     so magical about creating APIs that the entire world can
                     benefit from. When I create an API, I take into account
                     multiple key questions. These questions being, how useful
                     is the API, can it scale to suit the needs of devs, and can
                     I make it. Again this is what I live for and I love
                     answering these questions'
                  </code>
                  <br />
                  <code>
                     print(genCover.generate(TARGET_COMPANYS_MISSION,
                     USERS_CORE_BELIFES, INSERT_OPENAI_API_KEY_KERE))
                  </code>
                  <br />
                  <code>#Output</code>
                  <br />
                  <code>
                     #Hello ServiceMax team. I see you're in the industry of
                     assisting others in managing client data so that they can
                     be more profitable. This is exactly the kind of thing I
                     believe in because management software is a lot like
                     organization software. The goal is to external align
                     reality with your internal perceptions in order to improve
                     the future state of your project. Believe me, I am
                     interested in this kind of worldly improvement.
                  </code>
               </section>
            </div>
         </header>
      </div>
   );
}

export default App;
