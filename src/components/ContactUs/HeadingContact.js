import React from 'react';
import styles from './HeadContact.module.css'
import Typewriter from 'typewriter-effect'

function HeadingContact(props) {
    return (
        <div className={styles.container_headContact}>
            
            <div className={styles.banner_item1}>
                    <h2 className={styles.banner_it1}>CONTACT US</h2>
                    <p className={styles.banner_it3}>
                    <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: [" FPT SERVICES. TALK TO REAL PEOPLE WHO ARE READY TO HELP."]

                            }} />
                    </p>
                </div>
        </div>
    );
}

export default HeadingContact;