import React from 'react'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import { feedback } from '../constants'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative` }>
      
      {/* gradient */}

      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />


      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 bm-6 relative z-[1]'>
        <h1 className={styles.heading2}>What are <br className="sm:block hidden" /> people saying about us</h1>

        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payements and grow your business anywhere on the planet.</p>
        </div>

      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]' >
          {feedback.map((card)=>(
            <FeedbackCard key={card.id} {...card}/>
          ))}
      </div>

    </section>
  )
}

export default Testimonials
