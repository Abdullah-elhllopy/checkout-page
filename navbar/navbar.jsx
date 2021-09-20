/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React from 'react';
 import {styles} from './styles'
 import {  css } from 'aphrodite/no-important';
 
 export default function Navber(props) {
   return (
     <div className={`navber ${css(styles.group, styles.group_layout)}`}>
       <div className={css(styles.cover_group, styles.cover_group_layout)}>
         <div className={css(styles.flex, styles.flex_layout1)}>
           <div className={css(styles.flex1, styles.flex1_layout)}>
             <div
               style={{
                 '--src': `url(${require('../../../assets/d4098d342b1d88a2b83f6434771fca5c.png').default})`
               }}
               className={css(styles.img, styles.img_layout)}
             />
             <div className={css(styles.flex1_spacer)} />
             <h4
               className={css(
                 styles.highlights_box,
                 styles.highlights_box_layout
               )}>
               <div className={css(styles.highlights)}>
                 <span className={css(styles.highlights_span0)}>{'E-'}</span>
                 <span className={css(styles.highlights_span1)}>{'Shop'}</span>
               </div>
             </h4>
             <div className={css(styles.flex1_spacer1)} />
             <div className={css(styles.men, styles.men_layout)}>{'Men'}</div>
             <div className={css(styles.flex1_spacer2)} />
             <div className={css(styles.women, styles.women_layout)}>
               {'Women'}
             </div>
             <div className={css(styles.flex1_spacer3)} />
             <div className={css(styles.kids, styles.kids_layout)}>{'Kids'}</div>
             <div className={css(styles.flex1_spacer4)} />
             <div
               style={{
                 '--src': `url(${require('../../../assets/29d92cbb7215bfd382de20f1f0fb4040.png').default})`
               }}
               className={css(styles.icon, styles.icon_layout)}
             />
             <div className={css(styles.flex1_spacer5)} />
             <div className={css(styles.flex1_col)}>
               <div className={css(styles.flex, styles.flex_layout)}>
                 <div
                   style={{
                     '--src': `url(${require('../../../assets/7eccf80c935c3f8f25947379c49a3f77.png').default})`
                   }}
                   className={css(styles.img, styles.img_layout1)}
                 />
 
               </div>
             </div>
             <div className={css(styles.flex1_spacer6)} />
             <div
               style={{
                 '--src': `url(${require('../../../assets/5fd275efc15aa559064bea5cf939d103.png').default})`
               }}
               className={css(styles.icon, styles.icon_layout1)}
             />
           </div>
 
           <hr className={css(styles.line, styles.line_layout)} />
         </div>
       </div>
     </div>
   );
 }
 
 Navber.inStorybook = true;

 